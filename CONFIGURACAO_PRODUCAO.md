# 🎯 CONFIGURAÇÃO DE PRODUÇÃO - COMANDOS PRONTOS

## 📝 DADOS QUE VOCÊ VAI PRECISAR

Preencha antes de começar:

```
GITHUB_USERNAME: _________________
MONGODB_URL: _________________
MONGODB_PASSWORD: _________________
RAILWAY_BACKEND_URL: _________________
GMAIL_APP_PASSWORD: _________________
```

---

## 🔧 CONFIGURAÇÕES NECESSÁRIAS

### 1️⃣ VARIÁVEIS RAILWAY (Backend)

Copie e cole no Railway → Variables:

```env
MONGO_URL=mongodb+srv://biiotech:SUA_SENHA@cluster0.xxxxx.mongodb.net/biiotech
DATABASE_NAME=biiotech
MAIL_USERNAME=contato@biiotech.com.br
MAIL_PASSWORD=sua-senha-app-gmail-aqui
MAIL_FROM=contato@biiotech.com.br
MAIL_PORT=587
MAIL_SERVER=smtp.gmail.com
MAIL_STARTTLS=True
MAIL_SSL_TLS=False
```

### 2️⃣ VARIÁVEIS VERCEL (Frontend)

Copie e cole no Vercel → Environment Variables:

```env
REACT_APP_BACKEND_URL=https://seu-backend.railway.app
```

---

## 🌐 CONFIGURAÇÃO DNS (Registro.br)

### Para www.biiotech.com.br

1. **Acesse**: https://registro.br
2. **Login** → Seu domínio → "Editar zona"
3. **Adicione**:

```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
TTL: 3600

Tipo: A
Nome: @
Valor: 76.76.21.21
TTL: 3600
```

4. **Salvar** e aguardar 5-30 minutos

---

## ✅ CHECKLIST FINAL

Antes de considerar completo:

### **Backend (Railway)**
- [ ] Deploy com sucesso (verde)
- [ ] Logs sem erros
- [ ] Teste a API: `https://seu-backend.railway.app/api/health`
- [ ] Todas variáveis de ambiente configuradas
- [ ] MongoDB conectado

### **Frontend (Vercel)**
- [ ] Deploy com sucesso
- [ ] Site abrindo
- [ ] REACT_APP_BACKEND_URL configurado
- [ ] Todas páginas carregando
- [ ] Responsivo funcionando

### **Funcionalidades**
- [ ] Formulário de contato envia
- [ ] Newsletter cadastra emails
- [ ] Chat widget funciona
- [ ] WhatsApp abre
- [ ] Menu mobile abre/fecha
- [ ] Todas animações funcionando

### **Domínio**
- [ ] DNS configurado
- [ ] www.biiotech.com.br abrindo
- [ ] SSL/HTTPS ativo (cadeado verde)

---

## 🧪 COMO TESTAR

### **1. Teste o Backend**

```bash
# Health check
curl https://seu-backend.railway.app/api/health

# Teste formulário de contato
curl -X POST https://seu-backend.railway.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "teste@example.com",
    "message": "Testando"
  }'

# Teste newsletter
curl -X POST https://seu-backend.railway.app/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "teste@example.com"}'
```

### **2. Teste o Frontend**

1. Abra: https://biiotech-website.vercel.app (ou seu domínio)
2. Navegue por todas as páginas
3. Teste no mobile (F12 → Toggle device toolbar)
4. Preencha e envie o formulário
5. Inscreva na newsletter
6. Clique no chat widget

---

## 🔍 VERIFICAR LOGS

### **Backend (Railway)**
1. Acesse Railway Dashboard
2. Clique no seu projeto
3. Vá em "Deployments"
4. Clique no deploy atual
5. Veja "View Logs"

### **Frontend (Vercel)**
1. Acesse Vercel Dashboard
2. Clique no projeto
3. Vá em "Deployments"
4. Clique no deploy
5. Veja "Function Logs"

---

## 🆘 SOLUÇÃO DE PROBLEMAS COMUNS

### ❌ "Site não carrega"

**Solução:**
```
1. Aguarde 5 minutos após deploy
2. Ctrl+Shift+R (limpar cache)
3. Tente em aba anônima
4. Verifique logs do Vercel
```

### ❌ "Formulário não funciona"

**Solução:**
```
1. Abra F12 (Console do navegador)
2. Veja erros em vermelho
3. Verifique REACT_APP_BACKEND_URL no Vercel
4. Teste backend diretamente com curl
5. Verifique variáveis de email no Railway
```

### ❌ "CORS Error"

**Solução:**
```
1. No backend/server.py, CORS já está configurado para aceitar todas origens
2. Se mesmo assim der erro, adicione seu domínio específico:
   
   allow_origins=["https://www.biiotech.com.br", "https://biiotech.com.br"]
```

### ❌ "MongoDB Connection Failed"

**Solução:**
```
1. Verifique MONGO_URL no Railway
2. Certifique-se que IP 0.0.0.0/0 está liberado no MongoDB Atlas
3. Teste a connection string localmente
4. Verifique usuário e senha
```

### ❌ "Email não envia"

**Solução:**
```
1. Gmail: Verifique se gerou "Senha de app" corretamente
2. Verifique MAIL_PASSWORD no Railway
3. Veja logs do Railway para erros SMTP
4. Tente com outro email de teste
```

---

## 📊 MONITORAMENTO

### **Uptime (Site está no ar?)**

Use um desses serviços gratuitos:
- UptimeRobot: https://uptimerobot.com
- Pingdom: https://pingdom.com

Configure para monitorar:
- Frontend: https://www.biiotech.com.br
- Backend: https://seu-backend.railway.app/api/health

### **Analytics (Quantas visitas?)**

1. **Google Analytics 4**:
   - Criar conta: https://analytics.google.com
   - Adicionar propriedade
   - Copiar "Measurement ID" (G-XXXXXXXXXX)
   - Adicionar no frontend/public/index.html:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🎯 OTIMIZAÇÕES FUTURAS

Depois que tudo estiver funcionando:

1. **Performance**:
   - [ ] Adicionar CDN (Cloudflare)
   - [ ] Comprimir imagens
   - [ ] Lazy loading

2. **SEO**:
   - [ ] Adicionar sitemap.xml
   - [ ] Google Search Console
   - [ ] Meta tags otimizadas

3. **Segurança**:
   - [ ] Rate limiting nas APIs
   - [ ] Captcha no formulário
   - [ ] Backup automático MongoDB

4. **Features**:
   - [ ] Blog com CMS
   - [ ] Dashboard admin
   - [ ] Integração com CRM

---

## 📞 COMANDOS ÚTEIS

### **Build local (testar antes de deploy)**

```bash
# Frontend
cd frontend
yarn build
yarn start

# Backend
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```

### **Ver status dos serviços**

```bash
# Railway
railway status

# Vercel
vercel --prod
```

---

## ✅ QUANDO ESTIVER TUDO PRONTO

Seu site estará:
- ✅ No ar 24/7
- ✅ Com HTTPS (seguro)
- ✅ No seu domínio
- ✅ Recebendo contatos
- ✅ Capturando leads
- ✅ Totalmente funcional

**PARABÉNS! 🎉**

Seu site profissional está publicado e pronto para receber clientes!
