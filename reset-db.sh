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

print_box "Removendo diretórios e arquivos desnecessários..."
rm -rf .next node_modules/@prisma/client node_modules/.prisma prisma/migrations

print_box "Limpando cache do npm..."
npm cache clean --force

print_box "Removendo cache do node_modules."
rm -rf node_modules/.cache

print_box "Gerando cliente do Prisma..."
npx prisma generate

print_box "Limpando registros do banco de dados..."
npx ts-node prisma/clear-db.ts

print_box "Instalando dependências..."
npm install

print_box "Executando migrações do Prisma..."
npx prisma migrate dev --name init --force-reset

print_box "Processo concluído!"