#!/bin/bash

set -e  # Para o script imediatamente se qualquer comando falhar

print_box() {
    local message="$1"
    local length=${#message}
    local padding=3
    local border_length=$((length + padding * 2))
    
    printf '┌%*s┐\n' "$border_length" | tr ' ' '-'
    printf '│ %*s │\n' "$((length + padding))" "$message"
    printf '└%*s┘\n' "$border_length" | tr ' ' '-'
}

print_box "🔄 Removendo diretórios e arquivos..."
rm -rf .next node_modules/@prisma/client node_modules/.cache node_modules/.prisma/client prisma/migrations package-lock.json || true

print_box "🗑️ Limpando cache do npm..."
npm cache clean --force

print_box "📦 Instalando dependências..."
npm install

print_box "📌 Executando migrações do Prisma..."
npx prisma migrate dev --name init || { echo "❌ Erro ao rodar as migrações"; exit 1; }

print_box "⚙️ Gerando cliente do Prisma..."
npx prisma generate

print_box "🚀 Criando build da Aplicação..."
npm run build || { echo "❌ Erro ao gerar o build"; exit 1; }

print_box "🔪 Matando processos na porta 3000..."
fuser -k 3000/tcp || true

print_box "🔐 Definindo Permissões para www..."
sudo chown -R www-data:www-data /var/www/decifrandocoracoes.com

print_box "🗑️ Limpando cache do Nginx..."
sudo rm -rf /var/cache/nginx/* || true

print_box "♻️ Reiniciando PM2 apenas para o app..."
pm2 restart decifrandocoracoes || pm2 start npm --name "decifrandocoracoes" -- start

print_box "🔄 Reiniciando Nginx..."
sudo systemctl restart nginx || { echo "❌ Erro ao reiniciar o Nginx"; exit 1; }

print_box "✅ Processo concluído com sucesso!"
