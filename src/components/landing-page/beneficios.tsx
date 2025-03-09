'use client';

type BeneficiosProps = {
  temperamentoPrincipal: string;
  linguagemPrincipal: string;
};

export function Beneficios({ 
  temperamentoPrincipal, 
  linguagemPrincipal 
}: BeneficiosProps) {
  return (
    <div className="relative bg-gradient-to-br from-[#F2E8DC] via-white to-[#D2A878]/20 py-16 md:py-20 px-4 overflow-hidden">
      {/* Elementos decorativos inspirados em mapas */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grade de coordenadas */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(#5B7B7A 1px, transparent 1px), linear-gradient(90deg, #5B7B7A 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Elementos de mapa decorativos */}
        <div className="absolute top-20 left-12 w-32 h-32 border border-[#D2A878]/30 rounded-lg rotate-12" />
        <div className="absolute bottom-16 right-16 w-40 h-40 border border-dashed border-[#5B7B7A]/30 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-[#8BA888]/30 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border-b-2 border-r-2 border-[#C85C40]/20 rotate-45" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5B7B7A] mb-4">
            Transforme Conhecimento em Conquista
          </h2>
          <p className="text-lg text-[#5B7B7A]/80 max-w-2xl mx-auto">
            O Match Perfeito vai muito além da teoria. É um guia prático que transforma 
            sua compreensão em ações concretas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: "🎯",
              title: "Estratégias Personalizadas",
              description: `Aprenda exatamente como lidar com o temperamento ${temperamentoPrincipal} dele de forma natural e efetiva.`
            },
            {
              icon: "💝",
              title: "Conexão Profunda",
              description: `Descubra como usar o ${linguagemPrincipal} para criar momentos inesquecíveis e fortalecer o vínculo entre vocês.`
            },
            {
              icon: "🗝️",
              title: "Passos Práticos",
              description: "Receba um roteiro dia a dia com ações específicas para conquistá-lo."
            },
            {
              icon: "⭐",
              title: "Resultados Rápidos",
              description: "Veja mudanças positivas no comportamento dele em questão de dias."
            }
          ].map((beneficio, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-colors border border-[#D2A878]/20 group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{beneficio.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-[#5B7B7A] mb-2">{beneficio.title}</h3>
              <p className="text-[#5B7B7A]/80">{beneficio.description}</p>
            </div>
          ))}
        </div>

        {/* Bônus Especial */}
        <div className="bg-gradient-to-r from-[#5B7B7A] to-[#8BA888] rounded-2xl p-8 relative overflow-hidden border border-[#D2A878]/20">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
            <div className="absolute inset-0 bg-[#D2A878] opacity-10 rotate-45" />
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24 transform -translate-x-12 translate-y-12">
            <div className="absolute inset-0 bg-[#C85C40] opacity-10 -rotate-45" />
          </div>
          
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F2E8DC] to-[#D2A878] rounded-full flex-shrink-0 shadow-lg" />
              <h3 className="text-xl font-serif font-bold text-white">Bônus Exclusivo</h3>
            </div>
            
            <p className="text-lg text-white/90 mb-4">
              <span className="font-semibold">Guia de Mensagens Irresistíveis:</span> Uma coletânea 
              de mensagens prontas e personalizáveis que tocam exatamente nos pontos certos para 
              criar uma conexão imediata com ele.
            </p>
            
            <div className="flex items-center gap-2 text-white">
              <span className="font-medium">Valor: R$97</span>
              <span className="text-white/40">|</span>
              <span className="font-bold text-[#F2E8DC]">Grátis</span> 
              <span className="text-sm text-white/80">para você</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
