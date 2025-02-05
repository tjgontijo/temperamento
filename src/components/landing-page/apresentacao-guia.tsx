'use client';

import Image from 'next/image';

type ApresentacaoGuiaProps = {
  nome_pretendente: string;
};

export function ApresentacaoGuia({ nome_pretendente }: ApresentacaoGuiaProps) {
  if (!nome_pretendente) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 to-pink-900 py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(219,39,119,0.1),_transparent_50%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-block bg-pink-500/20 backdrop-blur-sm px-4 py-1 rounded-full text-pink-100 text-sm mb-6">
              Apresentando
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Match Perfeito: Seu Guia Personalizado para Conquistar {nome_pretendente}
            </h2>
            
            <p className="text-lg text-pink-100 mb-8 leading-relaxed">
              Um guia estratégico e personalizado que transforma sua compreensão sobre {nome_pretendente} 
              em ações práticas e efetivas para criar uma conexão profunda e duradoura.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "100% Personalizado para vocês dois",
                "Estratégias práticas e testadas",
                "Resultados em até 30 dias",
                "Suporte exclusivo"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-pink-100">
                  <svg className="w-5 h-5 text-pink-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Efeito de brilho */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 opacity-30 blur-xl rounded-xl" />
              
              {/* Imagem do guia */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/guia-capa.png"
                  alt="Guia Match Perfeito"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
