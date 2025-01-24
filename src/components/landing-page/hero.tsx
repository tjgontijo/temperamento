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
    <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white py-40 md:py-40 px-4 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-8 -left-8 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Tag de exclusividade */}
        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6 text-sm md:text-base">
          ✨ Análise Exclusiva e Personalizada
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 drop-shadow-lg leading-tight">
          <span className="block mb-2">Parabéns, {nome_autor}!</span>
          <span className="block text-pink-200">
            Descobrimos o Caminho Direto para o Coração de {nome_pretendente}
          </span>
        </h1>

        <p className="text-lg md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto text-pink-50">
          Em poucos minutos, você terá acesso ao guia mais poderoso e personalizado 
          para criar uma conexão irresistível com {nome_pretendente}.
        </p>
      </div>
    </div>
  );
}
