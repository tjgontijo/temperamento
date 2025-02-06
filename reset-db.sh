#!/bin/bash

print_box() {
    local message="$1"
    local length=${#message}
    local padding=2
    local border_length=$((length + padding * 2))
    
    printf '┌%*s┐\n' "$border_length" | tr ' ' '-'
    printf '│ %*s │\n' "$((length + padding))" "$message"
    printf '└%*s┘\n' "$border_length" | tr ' ' '-'
}

print_box "Removendo diretórios e arquivos..."
rm -rf .next node_modules prisma/migrations package-lock.json

print_box "Limpando cache do npm..."
npm cache clean --force

print_box "Instalando dependências..."
npm install

print_box "Executando migrações do Prisma..."
npx prisma migrate dev --name init

print_box "Gerando cliente do Prisma..."
npx prisma generate

print_box "Fazendo o build da Aplicação..."
npm run build

print_box "Matando processos na porta 3000..."
fuser -k 3000/tcp

print_box "Processo concluído!"