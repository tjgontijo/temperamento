#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

# Configurações
APP_NAME="decifrandocoracoes"
PROJECT_DIR="../$APP_NAME"

echo "==> Iniciando deploy..."

echo "==> Entrando no diretório do projeto: $PROJECT_DIR"
cd "$PROJECT_DIR" || { echo "Erro: diretório do projeto não encontrado!"; exit 1; }

echo "==> Atualizando branch main..."
git checkout main
git pull

echo "==> Removendo build anterior..."
rm -rf .next

echo "==> Limpando cache do npm..."
npm cache clean --force

echo "==> Ajustando permissões para www-data..."
# Ajusta o proprietário para www-data (excluindo node_modules)
sudo find . -not -path "./node_modules/*" -not -name "node_modules" -exec chown www-data:www-data {} \;

# Define permissões para diretórios (755 = rwxr-xr-x)
sudo find . -type d -not -path "./node_modules/*" -not -name "node_modules" -exec chmod 755 {} \;

# Define permissões para arquivos (644 = rw-r--r--)
sudo find . -type f -not -path "./node_modules/*" -exec chmod 644 {} \;

# Garante que arquivos específicos tenham permissões corretas
sudo chmod 644 .env
sudo chmod 644 package.json

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

echo "==> Commitando alterações de otimização..."
git add public/*.jpg public/*.jpeg public/*.png scripts/*.sh prisma/migrations/
git commit -m "chore: otimização de imagens e ajustes de scripts [deploy]" || true

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
