#!/bin/bash

# Script para fazer push do código para o GitHub
# Uso: bash push-to-github.sh

echo "🚀 Preparando para enviar código para o GitHub..."
echo ""

cd /app

# Verificar se está no diretório correto
if [ ! -d ".git" ]; then
    echo "❌ Erro: Diretório .git não encontrado!"
    exit 1
fi

# Mostrar status
echo "📊 Status atual do repositório:"
git status
echo ""

# Verificar remote
echo "🔗 Repositório remoto configurado:"
git remote -v
echo ""

# Pedir confirmação
echo "⚠️  ATENÇÃO: Você vai fazer push para:"
echo "   https://github.com/ricksontavaressr/portfolio-biiotech"
echo ""
read -p "Deseja continuar? (s/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    echo "❌ Operação cancelada pelo usuário."
    exit 0
fi

echo ""
echo "🔐 Para fazer o push, você precisa:"
echo "   Username: ricksontavaressr"
echo "   Password: SEU_TOKEN_DO_GITHUB (não a senha!)"
echo ""
echo "💡 Como gerar token:"
echo "   1. Acesse: https://github.com/settings/tokens"
echo "   2. Generate new token (classic)"
echo "   3. Marque 'repo'"
echo "   4. Copie o token gerado"
echo ""

# Fazer push
echo "📤 Fazendo push..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCESSO! Código enviado para o GitHub!"
    echo ""
    echo "🌐 Visualize em: https://github.com/ricksontavaressr/portfolio-biiotech"
    echo ""
    echo "📋 Próximos passos:"
    echo "   1. Acesse o repositório no GitHub"
    echo "   2. Verifique se todos os arquivos estão lá"
    echo "   3. Leia o GUIA_SIMPLES_PUBLICACAO.md"
    echo "   4. Faça deploy no Vercel e Railway"
else
    echo ""
    echo "❌ Erro ao fazer push!"
    echo ""
    echo "🆘 Soluções:"
    echo "   1. Verifique suas credenciais"
    echo "   2. Use TOKEN (não senha) do GitHub"
    echo "   3. Ou use 'Save to Github' da Emergent (mais fácil)"
fi
