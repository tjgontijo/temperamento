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

# Verifica se o diretório 'public' existe antes de entrar nele
if [ ! -d "public" ]; then
  echo "Erro: O diretório 'public' não existe."
  exit 1
fi

cd public

# Otimiza imagens JPG/JPEG
find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -exec jpegoptim --strip-all --max=80 --all-progressive {} +

# Otimiza imagens PNG
find . -type f -iname "*.png" -exec pngquant --force --quality=80-90 --skip-if-larger --ext .png {} +

echo "==> Otimização concluída!"

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


# Garante que diretórios importantes tenham permissões corretas
sudo chmod 755 public
sudo chmod 755 src
sudo chmod 755 scripts

echo "==> Otimizando imagens no diretório public..."
cd public
find . -type f -iname "*.jpg" -exec jpegoptim --strip-all --max=80 --all-progressive {} \;
find . -type f -iname "*.jpeg" -exec jpegoptim --strip-all --max=80 --all-progressive {} \;
find . -type f -iname "*.png" -exec pngquant --force --ext .png --quality=80-90 --skip-if-larger {} \;
cd ..

echo "==> Executando build do Next.js..."
npm run build

echo "==> Reiniciando aplicação no PM2..."
if pm2 list | grep -q "$APP_NAME"; then
    echo "==> Serviço encontrado no PM2. Reiniciando..."
    pm2 restart "$APP_NAME"
else
    echo "==> Serviço não encontrado no PM2. Criando nova instância..."
    pm2 start npm --name "$APP_NAME" -- start
fi

echo "==> Deploy concluído com sucesso!"

echo "==> Deploy concluído com sucesso!"



echo "==> Deploy concluído com sucesso!"
