# 🚀 GUIA RÁPIDO: PUBLICAR SEU SITE EM 30 MINUTOS

## ⚡ JEITO MAIS RÁPIDO (GRATUITO)

### 📋 **CHECKLIST DO QUE VOCÊ PRECISA:**

- [ ] Conta no GitHub (grátis) - https://github.com
- [ ] Conta no Vercel (grátis) - https://vercel.com  
- [ ] Conta no Railway (grátis) - https://railway.app
- [ ] Conta no MongoDB Atlas (grátis) - https://mongodb.com/cloud/atlas

**TEMPO TOTAL: ~30 minutos**

---

## 🎯 PASSO A PASSO COMPLETO

### **ETAPA 1: SALVAR SEU CÓDIGO NO GITHUB** (5 minutos)

1. **Acesse**: https://github.com e crie uma conta (se não tiver)

2. **Clique em "New repository"** (botão verde)
   - Nome: `biiotech-website`
   - Deixe como "Public" ou "Private"
   - NÃO marque "Initialize with README"
   - Clique "Create repository"

3. **Na Emergent, use o botão "Save to Github"** localizado no chat
   - Isso salvará automaticamente todo o código no seu GitHub

4. ✅ **PRONTO!** Seu código está salvo na nuvem!

---

### **ETAPA 2: CONFIGURAR BANCO DE DADOS** (10 minutos)

1. **Acesse**: https://www.mongodb.com/cloud/atlas/register

2. **Crie conta gratuita**

3. **Crie um Cluster**:
   - Selecione "M0 Free" (grátis para sempre)
   - Região: "São Paulo" ou "US East"
   - Clique "Create"

4. **Configurar Segurança**:
   - Vá em "Database Access" → "Add New Database User"
     - Username: `biiotech`
     - Password: (crie uma senha forte, anote!)
     - Role: "Atlas Admin"
     - Clique "Add User"
   
   - Vá em "Network Access" → "Add IP Address"
     - Clique "Allow Access from Anywhere"
     - Clique "Confirm"

5. **Copiar Connection String**:
   - Clique em "Connect" no seu cluster
   - Escolha "Connect your application"
   - Copie a string (algo como):
     ```
     mongodb+srv://biiotech:<password>@cluster0.xxxxx.mongodb.net/
     ```
   - Substitua `<password>` pela senha que você criou
   - Adicione o nome do banco no final: `biiotech`
   - Resultado final:
     ```
     mongodb+srv://biiotech:SuaSenha123@cluster0.xxxxx.mongodb.net/biiotech
     ```

6. ✅ **ANOTE ESSA URL!** Você vai usar no próximo passo

---

### **ETAPA 3: PUBLICAR BACKEND** (7 minutos)

1. **Acesse**: https://railway.app

2. **Crie conta** (use "Sign in with GitHub")

3. **Criar novo projeto**:
   - Clique "New Project"
   - Selecione "Deploy from GitHub repo"
   - Escolha seu repositório `biiotech-website`
   - Clique no repositório

4. **Configurar o Backend**:
   - Railway detectará automaticamente Python
   - Vá em "Settings"
   - Em "Root Directory", digite: `backend`
   - Clique "Deploy"

5. **Adicionar Variáveis de Ambiente**:
   - Vá em "Variables"
   - Adicione cada uma dessas (clique "+ New Variable"):
   
   ```
   MONGO_URL=mongodb+srv://biiotech:SuaSenha@cluster0.xxxxx.mongodb.net/biiotech
   DATABASE_NAME=biiotech
   MAIL_USERNAME=contato@biiotech.com.br
   MAIL_PASSWORD=sua-senha-email-aqui
   MAIL_FROM=contato@biiotech.com.br
   MAIL_PORT=587
   MAIL_SERVER=smtp.gmail.com
   MAIL_STARTTLS=True
   MAIL_SSL_TLS=False
   ```

6. **Copiar URL do Backend**:
   - Vá em "Settings" → "Domains"
   - Copie a URL (algo como): `https://biiotech-backend.up.railway.app`
   - ✅ **ANOTE ESSA URL!**

---

### **ETAPA 4: PUBLICAR FRONTEND** (8 minutos)

1. **Acesse**: https://vercel.com

2. **Crie conta** (use "Sign in with GitHub")

3. **Importar projeto**:
   - Clique "Add New..." → "Project"
   - Selecione seu repositório `biiotech-website`
   - Clique "Import"

4. **Configurar**:
   - Framework Preset: `Create React App`
   - Root Directory: clique "Edit" e selecione `frontend`
   - Build Command: `yarn build`
   - Output Directory: `build`

5. **Adicionar Variável de Ambiente**:
   - Em "Environment Variables", adicione:
   
   ```
   Nome: REACT_APP_BACKEND_URL
   Valor: https://biiotech-backend.up.railway.app
   ```
   
   (Use a URL do Railway que você anotou!)

6. **Clique "Deploy"**

7. **Aguarde ~3 minutos** (vai compilar tudo)

8. ✅ **SEU SITE ESTÁ NO AR!**
   - Vercel mostrará uma URL (algo como): `https://biiotech-website.vercel.app`

---

### **ETAPA 5: CONECTAR SEU DOMÍNIO** (5 minutos)

1. **No Vercel**, vá em "Settings" → "Domains"

2. **Adicione seu domínio**:
   - Digite: `biiotech.com.br`
   - Clique "Add"
   - Vercel mostrará instruções de DNS

3. **Configure o DNS** (no Registro.br):
   
   a. **Acesse**: https://registro.br
   b. **Faça login** com sua conta
   c. **Vá em seu domínio** → "Editar zona"
   d. **Adicione esses registros**:
   
   ```
   Tipo: CNAME
   Nome: www
   Valor: cname.vercel-dns.com
   
   Tipo: A
   Nome: @
   Valor: 76.76.21.21
   ```

4. **Aguarde propagação** (5-30 minutos)

5. ✅ **PRONTO!** Seu site estará em www.biiotech.com.br

---

## 🎉 RESULTADO FINAL

Depois de concluir todos os passos:

- ✅ **Frontend**: www.biiotech.com.br (seu domínio!)
- ✅ **Backend**: Funcionando no Railway
- ✅ **Banco**: MongoDB Atlas
- ✅ **Formulários**: Enviando emails
- ✅ **Newsletter**: Salvando inscritos
- ✅ **Chat**: Funcionando

---

## 📧 CONFIGURAR EMAIL (Gmail)

Para o formulário enviar emails de verdade:

1. **Acesse sua conta Gmail**

2. **Ative "Verificação em 2 etapas"**:
   - https://myaccount.google.com/security
   - Role até "Verificação em duas etapas"
   - Siga as instruções

3. **Gere uma "Senha de app"**:
   - https://myaccount.google.com/apppasswords
   - Selecione "Email" e "Outro (nome personalizado)"
   - Digite "Biiotech Website"
   - Google gerará uma senha de 16 caracteres
   - **COPIE ESSA SENHA!**

4. **Use no Railway**:
   - Volte no Railway → Variables
   - Edite `MAIL_PASSWORD`
   - Cole a senha de app gerada
   - Salvar

5. ✅ **Pronto!** Formulários enviarão emails reais

---

## 🆘 SE DER ERRO

### **Site não carrega:**
- Aguarde 5-10 minutos após deploy
- Limpe cache do navegador (Ctrl+Shift+Del)
- Tente em aba anônima

### **Formulário não envia:**
- Verifique configuração de email
- Veja logs no Railway: "Deployments" → "View Logs"

### **Domínio não funciona:**
- DNS demora 5-30 minutos para propagar
- Verifique configuração no Registro.br

---

## 💰 RESUMO DE CUSTOS

Com essa configuração:

| Item | Custo |
|------|-------|
| Vercel (Frontend) | **R$ 0/mês** ✅ |
| Railway (Backend) | **R$ 0/mês** (até 500h) ✅ |
| MongoDB Atlas | **R$ 0/mês** (512MB) ✅ |
| Domínio | **Já tem!** ✅ |
| **TOTAL** | **R$ 0/mês** 🎉 |

**Grátis para começar! Só paga se tiver muito tráfego.**

---

## 🚀 PRÓXIMOS PASSOS (Opcional)

Depois que o site estiver no ar:

- [ ] Configurar Google Analytics
- [ ] Configurar Google Search Console
- [ ] Testar em todos dispositivos
- [ ] Compartilhar nas redes sociais
- [ ] Adicionar posts no blog

---

## 📞 PRECISA DE AJUDA?

Se tiver dúvidas em qualquer etapa:
1. Releia este guia com calma
2. Verifique os logs de erro nas plataformas
3. Pergunte no chat da Emergent

**BOA SORTE! SEU SITE VAI FICAR INCRÍVEL NO AR! 🎊**
