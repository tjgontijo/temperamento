'use client';

type IntroducaoProps = {
  nome_parceiro: string;
};

export function Introducao({ nome_parceiro }: IntroducaoProps) {
  if (!nome_parceiro) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-gradient-to-r from-[#F2E8DC] to-[#8BA888]/20 py-16 md:py-24 px-4 relative">
      {/* Elementos decorativos inspirados em mapas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-1/4 top-12 w-32 h-32 border border-[#D2A878]/30 rounded-lg rotate-12" />
        <div className="absolute left-1/4 bottom-12 w-40 h-40 border border-dashed border-[#5B7B7A]/30 rounded-full" />
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#D2A878]/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-2xl mx-auto space-y-8 relative z-10">
        {/* 1️⃣ Headline Curta e Impactante */}
        <div className="text-center">
          <div className="inline-block bg-[#5B7B7A]/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4 border border-[#5B7B7A]/20">
            🔬 Ciência Por Trás da Conexão Emocional
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5B7B7A] mb-4 leading-tight">
            Como Sabemos o Que Realmente Aproxima ou Afasta Você de {nome_parceiro}?
          </h2>
        </div>

        {/* 2️⃣ Texto Curto Validando a Metodologia */}
        <div className="text-left">
          <p className="text-base md:text-lg text-[#5B7B7A] leading-relaxed mb-4">
            O que realmente faz um relacionamento dar certo? Algumas pessoas acreditam que o amor sozinho é suficiente, mas a verdade é que <strong className="text-[#C85C40]">a chave para uma conexão profunda está em entender como cada pessoa sente e expressa emoções</strong>.
          </p>
          <p className="text-base md:text-lg text-[#5B7B7A] leading-relaxed mb-4">
            Estudos do <strong className="text-[#5B7B7A]">Dr. Gary Chapman</strong> mostram que <span className="font-semibold text-[#C85C40]">as Linguagens do Amor</span> definem a forma como alguém recebe e demonstra carinho. Muitas vezes, <strong className="text-[#5B7B7A]">não é a falta de sentimentos que afasta um casal, mas sim a maneira como esses sentimentos são comunicados</strong>.
          </p>
          <p className="text-base md:text-lg text-[#5B7B7A] leading-relaxed mb-4">
            Além disso, pesquisas de <strong className="text-[#5B7B7A]">Tim LaHaye</strong> e <strong className="text-[#5B7B7A]">David Keirsey</strong> revelam que nosso <strong className="text-[#C85C40]">temperamento</strong> influencia diretamente <strong className="text-[#5B7B7A]">nossas reações emocionais, necessidades afetivas e desafios nos relacionamentos</strong>.
          </p>
          <p className="text-base md:text-lg text-[#5B7B7A] leading-relaxed mb-6">
            Quando combinamos essas duas descobertas, conseguimos entender <strong className="text-[#5B7B7A]">com exatidão o que aproxima ou afasta emocionalmente duas pessoas</strong>. E mais do que isso: podemos prever <strong className="text-[#C85C40]">o que funciona e o que pode criar barreiras na conexão entre vocês</strong>.
          </p>
        </div>
        <div className="bg-white py-6 px-4 md:px-8 rounded-lg shadow-lg border border-[#D2A878]/20 relative">
          {/* Detalhe de mapa no card */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#F2E8DC] rounded-full border border-[#D2A878]/40 flex items-center justify-center z-10">
            <div className="w-6 h-6 text-[#5B7B7A]">📍</div>
          </div>

          <h4 className="text-xl md:text-2xl font-serif font-bold text-[#5B7B7A] text-center mb-4">📊 O Que Isso Significa Na Prática?</h4>
       
          {/* 3️⃣ Prova Social e Dados de Validação */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8">
            {[
              { number: "93%", text: "Precisão Comportamental" },
              { number: "37mil+", text: "Análises Realizadas" },
              { number: "89%", text: "Melhora em 30 dias" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-[#F2E8DC] rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow relative"
              >
                <div className="absolute inset-0 bg-[url('/img/texture-paper.png')] opacity-5 rounded-xl"></div>
                <div className="text-2xl md:text-3xl font-bold text-[#C85C40] mb-2">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-[#5B7B7A] font-medium">
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4️⃣ Gatilho de Curiosidade */}
        <div className="text-center mt-8">
          <p className="text-lg md:text-xl font-semibold text-[#C85C40] italic">
            Agora que temos as respostas do teste, conseguimos revelar os padrões emocionais de {nome_parceiro} – e como eles impactam diretamente sua relação com ele. Você pode ter notado que, em alguns momentos, ele age de forma distante ou não expressa sentimentos como você gostaria. Agora você vai entender o porquê.
          </p>
        </div>
      </div>
    </div>
  );
}
