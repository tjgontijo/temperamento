'use client';

type IntroducaoProps = {
  nome_parceiro: string;
};

export function Introducao({ nome_parceiro }: IntroducaoProps) {
  if (!nome_parceiro) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <section className="py-16 bg-[#F2E8DC] text-[#5B7B7A] relative">
      {/* Elemento de transição visual */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#8BA888] to-[#F2E8DC] -mt-16"></div>
      
      <div className="container mx-auto px-4 pt-8">
        <div className="max-w-3xl mx-auto">
          {/* Título da seção com decoração */}
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-[#C85C40] mx-auto mb-6"></div>
            <h2 className="text-xl font-medium text-[#C85C40] mb-2">
              🔬 A CIÊNCIA DA CONEXÃO EMOCIONAL
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-[#5B7B7A] mt-4 leading-tight">
              Por Que Algumas Mulheres Conseguem Uma Conexão Profunda Com Seus
              Parceiros, Enquanto Outras Lutam Para Serem Notadas?
            </h3>
          </div>
          
          {/* Bloco de Autoridade com texto corrido e destaques */}
          <div className="mb-14">
            <p className="text-lg text-[#5B7B7A] mb-6 leading-relaxed">
              Após analisar mais de <span className="font-bold text-[#C85C40]">37.000 relacionamentos</span>, 
              descobrimos um padrão surpreendente que contradiz muito do que se acredita sobre conexões emocionais. 
              A verdade é que a profundidade de um relacionamento <span className="italic">não depende</span> da quantidade 
              de amor ou esforço investido, mas sim de algo muito mais fundamental.
            </p>
            
            <div className="bg-white/50 p-6 rounded-lg border border-[#D2A878]/30 shadow-sm mt-6">
              <p className="font-medium text-center mb-4">O que realmente importa é:</p>
              <div className="space-y-4">
                <div className="flex items-center p-3 border-b border-[#8BA888]/20">
                  <span className="text-[#C85C40] text-xl mr-3 flex-shrink-0">✓</span>
                  <p>Entender como seu parceiro <span className="font-medium">processa emoções</span> de acordo com seu temperamento único</p>
                </div>
                <div className="flex items-center p-3 border-b border-[#8BA888]/20">
                  <span className="text-[#C85C40] text-xl mr-3 flex-shrink-0">✓</span>
                  <p>Comunicar-se na <span className="font-medium">linguagem emocional</span> que ele naturalmente compreende</p>
                </div>
                <div className="flex items-center p-3">
                  <span className="text-[#C85C40] text-xl mr-3 flex-shrink-0">✓</span>
                  <p>Criar conexão através de <span className="font-medium">padrões específicos</span> que ressoam com seu tipo de personalidade</p>
                </div>
              </div>
            </div>
          </div>

          {/* Validação Científica com texto explicativo */}
          <div className="mb-14">
            <p className="mb-6 leading-relaxed">
              Nossa abordagem revolucionária combina duas das mais poderosas descobertas 
              sobre relacionamentos humanos, criando um sistema preciso para entender 
              e transformar a dinâmica entre casais:
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-6">
              <div className="flex-1 bg-white/30 p-5 rounded-lg border border-[#8BA888]/30">
                <p className="font-medium text-center text-[#C85C40] mb-2">As 5 Linguagens do Amor</p>
                <p className="text-sm text-center italic mb-2">Dr. Gary Chapman</p>
                <p className="text-sm">Como cada pessoa expressa e recebe amor de maneiras diferentes, e por que isso é crucial para a comunicação emocional efetiva.</p>
              </div>
              <div className="flex-1 bg-white/30 p-5 rounded-lg border border-[#8BA888]/30">
                <p className="font-medium text-center text-[#C85C40] mb-2">A Ciência dos Temperamentos</p>
                <p className="text-sm text-center italic mb-2">Tim LaHaye</p>
                <p className="text-sm">Como os padrões inatos de personalidade influenciam profundamente a forma como processamos emoções e respondemos aos outros.</p>
              </div>
            </div>
          </div>

          {/* Prova Social com texto contextual */}
          <div className="mb-14">
            <h4 className="font-bold text-center text-xl mb-6">📊 RESULTADOS COMPROVADOS</h4>
            
            <p className="mb-6 leading-relaxed">
              Nossa metodologia não é apenas teoria - é comprovada por resultados consistentes 
              e mensuráveis em milhares de relacionamentos reais:
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#D2A878]/20">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#C85C40]">93%</p>
                  <p className="text-sm">Precisão na Análise</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#C85C40]">89%</p>
                  <p className="text-sm">Melhora em 30 dias</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#C85C40]">37mil+</p>
                  <p className="text-sm">Relacionamentos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gancho Personalizado com texto introdutório */}
          <div className="bg-gradient-to-r from-[#5B7B7A] to-[#8BA888] p-8 rounded-lg text-white">
            <h4 className="font-bold text-center text-xl mb-4">Sua Análise Personalizada</h4>
            
            <p className="font-medium mb-6 leading-relaxed text-center">
              Com base em suas respostas, identificamos exatamente o que você precisa saber sobre 
              <span className="text-[#FFD700] font-bold mx-1">{nome_parceiro}</span>
              para transformar seu relacionamento:
            </p>
            
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <p className="font-medium mb-1">Como ele processa emoções</p>
                <p className="text-sm text-white/80">Entenda o padrão único de processamento emocional que define como ele responde a você</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <p className="font-medium mb-1">Por que ele age de forma distante</p>
                <p className="text-sm text-white/80">Descubra os gatilhos específicos que causam afastamento e como evitá-los</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <p className="font-medium mb-1">O que realmente o faz se conectar</p>
                <p className="text-sm text-white/80">Aprenda as estratégias precisas que criam conexão profunda com seu tipo de temperamento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
