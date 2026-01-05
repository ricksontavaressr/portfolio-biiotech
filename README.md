# Biiotech - Arquitetura de Decisão Orientada a Dados

Site moderno e profissional para a Biiotech, construído com React, Tailwind CSS e FastAPI.

## 🚀 Tecnologias

### Frontend
- **React 18** - Framework JavaScript
- **Tailwind CSS** - Estilização moderna
- **Framer Motion** - Animações suaves
- **React Router** - Navegação entre páginas
- **Axios** - Requisições HTTP

### Backend
- **FastAPI** - Framework Python moderno
- **MongoDB** - Banco de dados NoSQL
- **Motor** - Driver assíncrono para MongoDB
- **Pydantic** - Validação de dados

## 📁 Estrutura do Projeto

```
/app/
├── backend/
│   ├── server.py          # API FastAPI
│   ├── requirements.txt   # Dependências Python
│   └── .env              # Variáveis de ambiente
├── frontend/
│   ├── src/
│   │   ├── components/   # Componentes React
│   │   ├── pages/        # Páginas do site
│   │   ├── App.js        # Componente principal
│   │   └── index.js      # Entry point
│   ├── public/
│   │   └── imagens/      # Imagens do site
│   ├── package.json      # Dependências Node
│   └── .env             # Variáveis de ambiente
```

## 🎨 Funcionalidades Implementadas

### ✅ Páginas
- **Home** - Hero animado com slider de imagens
- **Como Atuamos** - Descrição da metodologia
- **Sobre** - História e valores da empresa
- **Casos** - Casos de sucesso
- **Modelo** - Modelo de atuação
- **Contato** - Formulário funcional
- **Blog** - Sistema de blog completo

### ✅ Componentes Interativos
- **Header** - Menu responsivo com animações
- **Footer** - Com newsletter integrada
- **Chat Widget** - Chat flutuante com WhatsApp
- **Formulário de Contato** - Totalmente funcional
- **Newsletter** - Captura de emails

### ✅ Animações & Efeitos
- Scroll reveal animations
- Hero com slider automático de imagens
- Hover effects profissionais
- Transições suaves
- Loading states
- Micro-interações

### ✅ APIs Backend
- `POST /api/contact` - Envio de formulário de contato
- `POST /api/newsletter/subscribe` - Inscrição newsletter
- `POST /api/chat/message` - Mensagens do chat
- `GET /api/blog/posts` - Listagem de posts
- `GET /api/blog/posts/:slug` - Post individual
- `POST /api/blog/posts` - Criar novo post

## 🔧 Configuração

### Variáveis de Ambiente

**Backend (.env)**
```
MONGO_URL=mongodb://localhost:27017
DATABASE_NAME=biiotech
MAIL_USERNAME=contato@biiotech.com.br
MAIL_PASSWORD=your_password_here
MAIL_FROM=contato@biiotech.com.br
```

**Frontend (.env)**
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

## 🏃 Executando o Projeto

Os serviços estão configurados para rodar automaticamente via Supervisor:

```bash
# Verificar status
sudo supervisorctl status

# Reiniciar serviços
sudo supervisorctl restart all

# Ver logs
tail -f /var/log/supervisor/backend.out.log
tail -f /var/log/supervisor/frontend.out.log
```

## 🌐 URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8001
- **API Docs**: http://localhost:8001/docs

## 📱 Responsividade

O site é 100% responsivo e funciona perfeitamente em:
- Desktop (1920px+)
- Laptop (1280px - 1920px)
- Tablet (768px - 1280px)
- Mobile (320px - 768px)

## 🎨 Design System

### Cores
- **Primary**: `#0a1d37` (Azul Profundo)
- **Accent**: `#c5a059` (Dourado)
- **Background**: `#ffffff` (Branco)
- **Background Soft**: `#f8f9fa` (Cinza Claro)

### Tipografia
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

## 📊 Banco de Dados

### Coleções MongoDB

1. **contacts** - Formulários de contato
2. **newsletter_subscribers** - Inscritos na newsletter
3. **chat_messages** - Mensagens do chat
4. **blog_posts** - Posts do blog

## 🔐 Segurança

- CORS configurado
- Validação de dados com Pydantic
- Sanitização de inputs
- Environment variables para dados sensíveis

## 📈 Performance

- Lazy loading de imagens
- Code splitting automático
- Assets otimizados
- Hot reload no desenvolvimento

## 🚀 Próximos Passos (Opcional)

- [ ] Implementar sistema de autenticação para admin
- [ ] Adicionar editor WYSIWYG para blog
- [ ] Integrar com serviço de email (SendGrid/Mailgun)
- [ ] Adicionar analytics (Google Analytics)
- [ ] Implementar SEO avançado
- [ ] Cache de API com Redis

## 📝 Notas

- Todas as imagens estão em `/app/frontend/public/imagens/`
- O site mantém a identidade visual original (azul + dourado)
- Design inspirado em sites de consultoria premium
- Foco em clareza, profissionalismo e movimento

## 🤝 Contato

Biiotech - Arquitetura de Decisão Orientada a Dados
- Email: contato@biiotech.com.br
- WhatsApp: (81) 99733-3025
- Website: www.biiotech.com.br

<!-- trigger deploy -->

---

**© 2025 Biiotech - Todos os direitos reservados**
