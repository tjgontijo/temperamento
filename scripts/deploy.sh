#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

APP_NAME="decifrandocoracoes"
PROJECT_DIR="/var/www/decifrandocoracoes"

echo "==> Entrando no diretório do projeto: $PROJECT_DIR"
cd "$PROJECT_DIR" || { echo "Erro: diretório do projeto não encontrado!"; exit 1; }

echo "==> Removendo build anterior (.next)..."
rm -rf .next

echo "==> Limpando cache do npm..."
npm cache clean --force

echo "==> Atualizando o repositório (git pull)..."
git pull

echo "==> Otimizando imagens no diretório public..."
find public -type f -iname "*.jpg" -exec jpegoptim --strip-all --max=80 --all-progressive {} \;
find public -type f -iname "*.jpeg" -exec jpegoptim --strip-all --max=80 --all-progressive {} \;
find public -type f -iname "*.png" -exec pngquant --force --ext .png --quality=80-90 --skip-if-larger {} \;

echo "==> Executando build do Next.js..."
npm run build

# Verifica se o serviço existe no PM2
if pm2 list | grep -q "$APP_NAME"; then
    echo "==> Serviço encontrado no PM2. Parando e reiniciando..."
    pm2 restart "$APP_NAME"
else
    echo "==> Serviço não encontrado no PM2. Criando nova instância..."
    pm2 start npm --name "$APP_NAME" -- run start
fi

echo "==> Reiniciando o Nginx..."
sudo systemctl restart nginx

echo "==> Deploy concluído com sucesso!"

