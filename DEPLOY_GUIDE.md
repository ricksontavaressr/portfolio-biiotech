# 🚀 Guia de Deploy - Biiotech

## 📋 Pré-requisitos

Antes de fazer o deploy, você precisa:

1. ✅ Conta em uma plataforma de hospedagem
2. ✅ Domínio próprio (opcional, mas recomendado)
3. ✅ Credenciais de email configuradas
4. ✅ MongoDB hospedado (MongoDB Atlas - gratuito)

---

## 🌍 Opções de Deploy

### **Opção 1: Vercel (Frontend) + Railway (Backend)** ⭐ RECOMENDADO

#### **A) Deploy do Backend no Railway**

1. **Criar conta no Railway**: https://railway.app

2. **Criar novo projeto**:
   - Click em "New Project"
   - Selecione "Deploy from GitHub repo"
   - Conecte seu repositório
   - Selecione a pasta `/backend`

3. **Configurar variáveis de ambiente**:
   ```
   MONGO_URL=sua_url_mongodb_atlas
   DATABASE_NAME=biiotech
   MAIL_USERNAME=contato@biiotech.com.br
   MAIL_PASSWORD=sua_senha_email
   MAIL_FROM=contato@biiotech.com.br
   MAIL_PORT=587
   MAIL_SERVER=smtp.gmail.com
   MAIL_STARTTLS=True
   MAIL_SSL_TLS=False
   ```

4. **Deploy automático** será feito!

5. **Anote a URL** do backend (ex: `https://biiotech-backend.railway.app`)

---

#### **B) Deploy do Frontend no Vercel**

1. **Criar conta no Vercel**: https://vercel.com

2. **Instalar Vercel CLI** (opcional):
   ```bash
   npm install -g vercel
   ```

3. **Deploy via Dashboard**:
   - Click em "New Project"
   - Import seu repositório GitHub
   - Configure:
     - **Framework Preset**: Create React App
     - **Root Directory**: `frontend`
     - **Build Command**: `yarn build`
     - **Output Directory**: `build`

4. **Configurar variável de ambiente**:
   ```
   REACT_APP_BACKEND_URL=https://biiotech-backend.railway.app
   ```

5. **Deploy!** Seu site estará no ar em segundos!

6. **Configurar domínio personalizado**:
   - No Vercel Dashboard → Settings → Domains
   - Adicione seu domínio (ex: www.biiotech.com.br)
   - Configure DNS conforme instruções

---

### **Opção 2: Netlify (Frontend) + Render (Backend)**

#### **A) Backend no Render**

1. **Criar conta**: https://render.com

2. **New Web Service**:
   - Connect repository
   - Root Directory: `backend`
   - Environment: Python 3
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`

3. **Configurar variáveis de ambiente** (mesmas do Railway)

#### **B) Frontend no Netlify**

1. **Criar conta**: https://netlify.com

2. **New site from Git**:
   - Connect repository
   - Base directory: `frontend`
   - Build command: `yarn build`
   - Publish directory: `frontend/build`

3. **Environment variables**:
   ```
   REACT_APP_BACKEND_URL=https://biiotech-backend.onrender.com
   ```

---

### **Opção 3: DigitalOcean / AWS / Google Cloud**

#### **Usando VPS (Servidor próprio)**

1. **Criar Droplet/VM**:
   - Ubuntu 22.04 LTS
   - Mínimo: 2GB RAM, 1 CPU

2. **Conectar via SSH**:
   ```bash
   ssh root@seu-servidor-ip
   ```

3. **Instalar dependências**:
   ```bash
   # Atualizar sistema
   sudo apt update && sudo apt upgrade -y
   
   # Node.js e Yarn
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   npm install -g yarn
   
   # Python
   sudo apt install -y python3 python3-pip
   
   # MongoDB
   wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
   sudo apt update
   sudo apt install -y mongodb-org
   sudo systemctl start mongod
   sudo systemctl enable mongod
   
   # Nginx
   sudo apt install -y nginx
   
   # Supervisor
   sudo apt install -y supervisor
   ```

4. **Clonar repositório**:
   ```bash
   cd /var/www
   git clone seu-repositorio.git biiotech
   cd biiotech
   ```

5. **Configurar Backend**:
   ```bash
   cd backend
   pip3 install -r requirements.txt
   # Editar .env com suas credenciais
   nano .env
   ```

6. **Configurar Frontend**:
   ```bash
   cd ../frontend
   yarn install
   # Editar .env
   nano .env
   # Build
   yarn build
   ```

7. **Configurar Nginx**:
   ```bash
   sudo nano /etc/nginx/sites-available/biiotech
   ```
   
   Adicione:
   ```nginx
   server {
       listen 80;
       server_name biiotech.com.br www.biiotech.com.br;
       
       # Frontend
       location / {
           root /var/www/biiotech/frontend/build;
           try_files $uri $uri/ /index.html;
       }
       
       # Backend API
       location /api {
           proxy_pass http://localhost:8001;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   
   ```bash
   sudo ln -s /etc/nginx/sites-available/biiotech /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

8. **Configurar SSL (HTTPS)**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d biiotech.com.br -d www.biiotech.com.br
   ```

9. **Configurar Supervisor**:
   ```bash
   sudo nano /etc/supervisor/conf.d/biiotech.conf
   ```
   
   Adicione:
   ```ini
   [program:biiotech-backend]
   command=/usr/local/bin/uvicorn server:app --host 0.0.0.0 --port 8001
   directory=/var/www/biiotech/backend
   user=www-data
   autostart=true
   autorestart=true
   stderr_logfile=/var/log/biiotech-backend.err.log
   stdout_logfile=/var/log/biiotech-backend.out.log
   ```
   
   ```bash
   sudo supervisorctl reread
   sudo supervisorctl update
   sudo supervisorctl start biiotech-backend
   ```

---

## 🗄️ MongoDB Atlas (Banco de Dados)

### **Configurar MongoDB na Nuvem (GRATUITO)**

1. **Criar conta**: https://www.mongodb.com/cloud/atlas/register

2. **Criar Cluster**:
   - Selecione "Free Tier" (M0)
   - Escolha região mais próxima (São Paulo/US East)
   - Click "Create Cluster"

3. **Configurar acesso**:
   - **Database Access**: Criar usuário e senha
   - **Network Access**: Add "0.0.0.0/0" (permite de qualquer lugar)

4. **Obter Connection String**:
   - Click em "Connect"
   - "Connect your application"
   - Copie a URL: `mongodb+srv://usuario:senha@cluster.xxxxx.mongodb.net/biiotech`

5. **Usar no .env**:
   ```
   MONGO_URL=mongodb+srv://usuario:senha@cluster.xxxxx.mongodb.net/biiotech
   ```

---

## 📧 Configurar Email

### **Opção 1: Gmail**

1. Ative "Verificação em 2 etapas" na sua conta Google
2. Gere uma "Senha de app": https://myaccount.google.com/apppasswords
3. Use no .env:
   ```
   MAIL_USERNAME=seu-email@gmail.com
   MAIL_PASSWORD=senha-de-app-gerada
   MAIL_SERVER=smtp.gmail.com
   MAIL_PORT=587
   ```

### **Opção 2: SendGrid (Profissional)**

1. Criar conta: https://sendgrid.com
2. Gere API Key
3. Configure no backend

---

## 🔐 Checklist de Segurança

- [ ] Variáveis de ambiente configuradas (nunca commitar .env)
- [ ] HTTPS configurado (SSL)
- [ ] MongoDB com autenticação
- [ ] CORS configurado corretamente
- [ ] Firewall configurado
- [ ] Backups automáticos do MongoDB
- [ ] Rate limiting nas APIs

---

## 🎯 Após Deploy

1. **Testar todas funcionalidades**:
   - [ ] Navegação entre páginas
   - [ ] Formulário de contato
   - [ ] Newsletter
   - [ ] Chat widget
   - [ ] Responsividade mobile

2. **SEO & Analytics**:
   - [ ] Google Search Console
   - [ ] Google Analytics
   - [ ] Meta tags configuradas
   - [ ] Sitemap.xml

3. **Performance**:
   - [ ] Lighthouse score > 90
   - [ ] Compressão Gzip/Brotli
   - [ ] CDN para assets (opcional)

---

## 🆘 Troubleshooting

### **Frontend não carrega**
- Verifique REACT_APP_BACKEND_URL no .env
- Veja console do navegador (F12)
- Verifique build: `yarn build`

### **Backend não responde**
- Verifique logs: `tail -f /var/log/supervisor/backend.err.log`
- Teste localmente: `uvicorn server:app --reload`
- Verifique MongoDB connection string

### **Formulário não envia**
- Verifique configurações de email
- Teste API: `curl -X POST http://seu-backend/api/contact`
- Veja logs do backend

---

## 📞 Suporte

Se precisar de ajuda:
1. Revise este guia
2. Verifique logs de erro
3. Consulte documentação das plataformas

---

**Boa sorte com o deploy! 🚀**