#!/bin/bash

echo "Removendo diretórios e arquivos desnecessários..."
rm -rf .next node_modules/@prisma/client node_modules/.prisma prisma/migrations

echo "Limpando cache do npm..."
npm cache clean --force

echo "Removendo cache do node_modules."
rm -rf node_modules/.cache

echo "Instalando dependências..."
npm install

echo "Executando migrações do Prisma..."
npx prisma migrate dev --name init

echo "Gerando cliente do Prisma..."
npx prisma generate

echo "Processo concluído!"