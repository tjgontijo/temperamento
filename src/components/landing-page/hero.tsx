'use client';

type HeroProps = {
  nome_autor: string;
  nome_pretendente: string;
};

export function Hero({ nome_autor, nome_pretendente }: HeroProps) {
  if (!nome_pretendente) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white min-h-[80vh] flex items-center py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-8 -left-8 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-2xl mx-auto text-center relative space-y-6">
        {/* Tag de exclusividade */}
        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm md:text-base">
          🔍 Sua Análise Foi Concluída!
        </div>

        <div className="space-y-4 text-white/90 leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {nome_autor}, este é o caminho mais rápido para conquistar {nome_pretendente} e criar a conexão irresistível.
          </h1>

          <p className="text-base md:text-lg mb-4">
            Esta análise exclusiva revela exatamente como {nome_pretendente} se conecta emocionalmente 
            e o que ele realmente precisa para abrir o coração. Se você deseja fazer esse relacionamento 
            acontecer – seja um primeiro encontro, fortalecer o interesse dele ou construir algo para a vida toda – 
            agora você tem a resposta clara.
          </p>

          <p className="text-lg md:text-xl font-bold text-pink-100">
            O que vou revelar agora vai transformar completamente a dinâmica entre vocês dois. Então preste bastante atenção 🧐
          </p>
        </div>
      </div>
    </div>
  );
}
