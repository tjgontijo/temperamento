'use client';

type IntroducaoProps = {
  nome_parceiro: string;
};

export function Introducao({ nome_parceiro }: IntroducaoProps) {
  if (!nome_parceiro) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <section className="py-16 bg-gradient-to-b from-[#F2E8DC] to-white text-[#5B7B7A] relative">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#8BA888] to-[#F2E8DC] opacity-80 -mt-16"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D2A878] opacity-5 rounded-full"></div>
      <div className="absolute top-1/3 left-0 w-48 h-48 bg-[#8BA888] opacity-5 rounded-full"></div>
      
      <div className="container mx-auto px-4 pt-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Título da seção com decoração */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#C85C40]"></div>
              <span className="mx-4 text-[#C85C40]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#C85C40]"></div>
            </div>
            <h2 className="text-xl font-medium text-[#C85C40] mb-2 tracking-wider">
              A CIÊNCIA DA CONEXÃO EMOCIONAL
            </h2>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#5B7B7A] mt-6 leading-tight max-w-2xl mx-auto relative">
              Por Que Algumas Mulheres Conseguem Uma Conexão Profunda Com Seus
              Parceiros, Enquanto Outras Lutam Para Serem Notadas?
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#D2A878] to-transparent"></span>
            </h3>
          </div>
          
          {/* Bloco de Autoridade com texto corrido e destaques */}
          <div className="mb-16">
            <p className="text-lg text-[#5B7B7A] mb-8 leading-relaxed">
              Após analisar mais de <span className="font-bold text-[#C85C40]">37.000 relacionamentos</span>, 
              descobrimos um padrão surpreendente que contradiz muito do que se acredita sobre conexões emocionais. 
              A verdade é que a profundidade de um relacionamento <span className="italic">não depende</span> da quantidade 
              de amor ou esforço investido, mas sim de algo muito mais fundamental.
            </p>
            
            <div className="bg-white p-8 rounded-2xl border border-[#D2A878]/20 shadow-md mt-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8BA888] to-[#5B7B7A]"></div>
              <p className="font-serif font-medium text-center mb-6 text-lg text-[#5B7B7A]">O que realmente importa é:</p>
              <div className="space-y-6">
                <div className="flex items-start p-4 border-b border-[#F2E8DC]">
                  <span className="bg-[#F2E8DC] text-[#C85C40] h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-[#AA8878] leading-relaxed">Entender como seu parceiro <span className="font-medium text-[#5B7B7A]">processa emoções</span> de acordo com seu temperamento único</p>
                </div>
                <div className="flex items-start p-4 border-b border-[#F2E8DC]">
                  <span className="bg-[#F2E8DC] text-[#C85C40] h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-[#AA8878] leading-relaxed">Comunicar-se na <span className="font-medium text-[#5B7B7A]">linguagem emocional</span> que ele naturalmente compreende</p>
                </div>
                <div className="flex items-start p-4">
                  <span className="bg-[#F2E8DC] text-[#C85C40] h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-[#AA8878] leading-relaxed">Criar conexão através de <span className="font-medium text-[#5B7B7A]">padrões específicos</span> que ressoam com seu tipo de personalidade</p>
                </div>
              </div>
            </div>
          </div>

          {/* Prova Social com texto contextual */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <span className="h-px w-12 bg-[#D2A878]"></span>
              <h4 className="font-serif font-bold text-center text-xl mx-4 text-[#5B7B7A]">RESULTADOS COMPROVADOS</h4>
              <span className="h-px w-12 bg-[#D2A878]"></span>
            </div>
            
            <p className="mb-8 leading-relaxed text-[#AA8878] text-center">
              Nossa metodologia não é apenas teoria, é comprovada por resultados consistentes 
              e mensuráveis em milhares de relacionamentos reais:
            </p>
            
            <div className="bg-gradient-to-br from-white to-[#F2E8DC] p-8 rounded-2xl shadow-md border border-[#D2A878]/20">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="relative mb-2 mx-auto">
                    <div className="absolute inset-0 bg-[#C85C40]/10 rounded-full"></div>
                    <p className="text-3xl md:text-4xl font-bold text-[#C85C40] relative">93%</p>
                  </div>
                  <p className="text-sm text-[#AA8878] font-medium">Precisão na Análise</p>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="relative mb-2 mx-auto">
                    <div className="absolute inset-0 bg-[#C85C40]/10 rounded-full"></div>
                    <p className="text-3xl md:text-4xl font-bold text-[#C85C40] relative">89%</p>
                  </div>
                  <p className="text-sm text-[#AA8878] font-medium">Melhora em 30 dias</p>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="relative mb-2 mx-auto">
                    <div className="absolute inset-0 bg-[#C85C40]/10 rounded-full"></div>
                    <p className="text-3xl md:text-4xl font-bold text-[#C85C40] relative">37mil+</p>
                  </div>
                  <p className="text-sm text-[#AA8878] font-medium">Relacionamentos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gancho Personalizado com texto introdutório */}
          <div className="bg-gradient-to-r from-[#5B7B7A] to-[#8BA888] p-10 rounded-2xl text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-32 h-32" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            
            <h4 className="font-serif font-bold text-center text-xl mb-4">Sua Análise Personalizada</h4>
            <p className="font-medium mb-8 leading-relaxed text-center text-[#F2E8DC]">
              Com base em suas respostas, identificamos exatamente o que você precisa saber sobre <span className="font-serif font-bold border-b border-[#F2E8DC] pb-0.5">{nome_parceiro}</span> para transformar seu relacionamento:
            </p>
            <div className="space-y-4 relative z-10">
              <div className="bg-white/15 p-5 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 border-l-4 border-[#F2E8DC]">
                <p className="font-medium mb-2 text-[#F2E8DC]">Como ele processa emoções</p>
                <p className="text-sm text-white/90">Entenda o padrão único de processamento emocional que define como ele responde a você</p>
              </div>
              <div className="bg-white/15 p-5 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 border-l-4 border-[#F2E8DC]">
                <p className="font-medium mb-2 text-[#F2E8DC]">Por que ele age de forma distante</p>
                <p className="text-sm text-white/90">Descubra os gatilhos específicos que causam afastamento e como evitá-los</p>
              </div>
              <div className="bg-white/15 p-5 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 border-l-4 border-[#F2E8DC]">
                <p className="font-medium mb-2 text-[#F2E8DC]">O que realmente o faz se conectar</p>
                <p className="text-sm text-white/90">Aprenda as estratégias precisas que criam conexão profunda com seu tipo de temperamento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
