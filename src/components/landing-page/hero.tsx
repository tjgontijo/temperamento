'use client';

type HeroProps = {
  nome_autor: string;
  nome_parceiro: string;
};

export function Hero({ nome_autor, nome_parceiro }: HeroProps) {
  if (!nome_parceiro) {
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
          🔍 Sua Análise Está Pronta!
        </div>

        <div className="space-y-4 text-white/90 leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight uppercase pb-6">
          {nome_autor}, aqui está o que realmente influencia sua conexão com {nome_parceiro}.
          </h1>

          <p className="text-base md:text-xl pb-6">
          Esta análise exclusiva revela o que aproxima ou afasta vocês dois e como você pode usar esse conhecimento para criar um vínculo mais forte e natural.
          </p>

          <p className="text-md md:text-xl text-white/80 italic">
          O que você verá a seguir pode mudar completamente a forma como você entende o comportamento de {nome_parceiro}. Leia com atenção, porque essas respostas vão te mostrar exatamente o que está acontecendo e como agir com confiança.
          </p>
        </div>
      </div>
    </div>
  );
}
