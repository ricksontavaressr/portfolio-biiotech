from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Biiotech API")

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB Connection
MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
DATABASE_NAME = os.getenv("DATABASE_NAME", "biiotech")

client = AsyncIOMotorClient(MONGO_URL)
db = client[DATABASE_NAME]

# Collections
contacts_collection = db["contacts"]
newsletter_collection = db["newsletter_subscribers"]
blog_collection = db["blog_posts"]
chat_collection = db["chat_messages"]

# Pydantic Models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    message: str

class NewsletterSubscriber(BaseModel):
    email: EmailStr

class ChatMessage(BaseModel):
    name: str
    email: EmailStr
    message: str

class BlogPost(BaseModel):
    title: str
    slug: str
    content: str
    excerpt: str
    author: str
    category: str
    tags: List[str]
    image_url: Optional[str] = None
    published: bool = True

# Routes
@app.get("/api")
async def root():
    return {"message": "Biiotech API - Arquitetura de Decisão Orientada a Dados"}

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

# Contact Form Endpoint
@app.post("/api/contact")
async def submit_contact(contact: ContactForm):
    try:
        contact_data = contact.dict()
        contact_data["created_at"] = datetime.now()
        contact_data["status"] = "new"
        
        result = await contacts_collection.insert_one(contact_data)
        
        # Here you would send email notification
        # For now, we just save to database
        
        return {
            "success": True,
            "message": "Mensagem enviada com sucesso! Entraremos em contato em breve.",
            "id": str(result.inserted_id)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Newsletter Subscription
@app.post("/api/newsletter/subscribe")
async def subscribe_newsletter(subscriber: NewsletterSubscriber):
    try:
        # Check if already subscribed
        existing = await newsletter_collection.find_one({"email": subscriber.email})
        if existing:
            return {
                "success": False,
                "message": "Este email já está cadastrado em nossa newsletter."
            }
        
        subscriber_data = subscriber.dict()
        subscriber_data["subscribed_at"] = datetime.now()
        subscriber_data["active"] = True
        
        await newsletter_collection.insert_one(subscriber_data)
        
        return {
            "success": True,
            "message": "Inscrição realizada com sucesso! Você receberá nossos conteúdos."
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Chat Messages
@app.post("/api/chat/message")
async def send_chat_message(message: ChatMessage):
    try:
        message_data = message.dict()
        message_data["created_at"] = datetime.now()
        message_data["read"] = False
        
        await chat_collection.insert_one(message_data)
        
        return {
            "success": True,
            "message": "Mensagem enviada! Responderemos em breve."
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Blog Posts - Get All
@app.get("/api/blog/posts")
async def get_blog_posts(skip: int = 0, limit: int = 10):
    try:
        posts = await blog_collection.find(
            {"published": True}
        ).sort("created_at", -1).skip(skip).limit(limit).to_list(length=limit)
        
        # Convert ObjectId to string
        for post in posts:
            post["_id"] = str(post["_id"])
            if "created_at" in post:
                post["created_at"] = post["created_at"].isoformat()
        
        return {"posts": posts, "count": len(posts)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Blog Posts - Get Single
@app.get("/api/blog/posts/{slug}")
async def get_blog_post(slug: str):
    try:
        post = await blog_collection.find_one({"slug": slug, "published": True})
        
        if not post:
            raise HTTPException(status_code=404, detail="Post não encontrado")
        
        post["_id"] = str(post["_id"])
        if "created_at" in post:
            post["created_at"] = post["created_at"].isoformat()
        
        return post
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Blog Posts - Create (Admin)
@app.post("/api/blog/posts")
async def create_blog_post(post: BlogPost):
    try:
        post_data = post.dict()
        post_data["created_at"] = datetime.now()
        post_data["updated_at"] = datetime.now()
        
        result = await blog_collection.insert_one(post_data)
        
        return {
            "success": True,
            "message": "Post criado com sucesso!",
            "id": str(result.inserted_id)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
