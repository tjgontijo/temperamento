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
    <div className="bg-gradient-to-r from-[#C85C40] to-[#5B7B7A] text-white min-h-[80vh] flex items-center py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Elementos decorativos inspirados em mapas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#D4B483]/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#5B7B7A]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-[url('/img/texture-paper.png')] opacity-5" />
        <div className="absolute top-12 right-12 w-16 h-16 border-2 border-white/40 rounded-full flex items-center justify-center">
          <div className="w-12 h-12 border border-white/30 rounded-full"></div>
          <div className="absolute h-16 w-0.5 bg-white/40 rotate-45"></div>
          <div className="absolute h-16 w-0.5 bg-white/40 -rotate-45"></div>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto text-center relative space-y-6">
        {/* Tag de exclusividade com estilo de mapa */}
        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm md:text-base border border-white/30">
          🧭 Sua Análise Está Pronta!
        </div>

        <div className="space-y-4 text-white leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight pb-6">
            <span className="block mb-2 text-white">Mapa Exclusivo:</span>
            {nome_autor}, aqui está o que realmente influencia sua conexão com {nome_parceiro}.
          </h1>

          <p className="text-base md:text-xl pb-6 text-white">
            Esta análise exclusiva revela o que aproxima ou afasta vocês dois e como você pode usar esse conhecimento para criar um vínculo mais forte e natural.
          </p>

          <p className="text-md md:text-xl text-white/90 italic">
            O que você verá a seguir pode mudar completamente a forma como você entende o comportamento de {nome_parceiro}. Leia com atenção, porque essas respostas vão te mostrar exatamente o que está acontecendo e como agir com confiança.
          </p>
        </div>
      </div>
    </div>
  );
}
