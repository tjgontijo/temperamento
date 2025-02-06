#!/bin/bash

# Define o caminho do arquivo de saída
OUTPUT_FILE="/tmp/verificacao_static.txt"

# Inicia a captura da saída
{
  echo "📌 Arquivos referenciados no HTML:"
  curl -s https://decifrandocoracoes.com | grep -o '/_next/static[^"]*' | sort | uniq

  echo -e "\n📌 Arquivos reais em _next/static/chunks/:"
  ls -l /www/wwwroot/decifrandocoracoes.com/.next/static/chunks/

  echo -e "\n📌 Arquivos reais em _next/static/css/:"
  ls -l /www/wwwroot/decifrandocoracoes.com/.next/static/css/

  echo -e "\n📌 Arquivos reais em _next/static/media/:"
  ls -l /www/wwwroot/decifrandocoracoes.com/.next/static/media/
} > "$OUTPUT_FILE"

# Exibe a saída no terminal
cat "$OUTPUT_FILE"

# Mensagem de finalização
echo "✅ Relatório salvo em: $OUTPUT_FILE"
