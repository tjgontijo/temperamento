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
    <div className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transforme Conhecimento em Conquista
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
            <div key={index} className="bg-purple-50 rounded-2xl p-6 hover:bg-purple-100 transition-colors">
              <div className="text-4xl mb-4">{beneficio.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{beneficio.title}</h3>
              <p className="text-gray-600">{beneficio.description}</p>
            </div>
          ))}
        </div>

        {/* Bônus Especial */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
            <div className="absolute inset-0 bg-pink-500 opacity-10 rotate-45" />
          </div>
          
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex-shrink-0" />
              <h3 className="text-xl font-bold text-gray-900">Bônus Exclusivo</h3>
            </div>
            
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Guia de Mensagens Irresistíveis:</span> Uma coletânea 
              de mensagens prontas e personalizáveis que tocam exatamente nos pontos certos para 
              criar uma conexão imediata com ele.
            </p>
            
            <div className="flex items-center gap-2 text-pink-600">
              <span className="font-medium">Valor: R$97</span>
              <span className="text-gray-400">|</span>
              <span className="font-bold">Grátis</span> 
              <span className="text-sm text-gray-500">para você</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
