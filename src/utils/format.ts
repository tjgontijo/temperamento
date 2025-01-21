export function formatarTextoComNome(texto: string, nome: string | undefined): string {
  return texto.replace(
    '{nome}',
    `<span class="font-semibold text-purple-600">${nome || 'nome'}</span>`
  );
}
