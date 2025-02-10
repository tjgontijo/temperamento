'use client';

type IntroducaoProps = {
  nome_parceiro: string;
};

export function Introducao({ nome_parceiro }: IntroducaoProps) {
  if (!nome_parceiro) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* 1️⃣ Headline Curta e Impactante */}
        <div className="text-center">
          <div className="inline-block bg-purple-100/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
            🔬 Ciência Por Trás da Conexão Emocional
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4 leading-tight">
          Como Sabemos o Que Realmente Aproxima ou Afasta Você de {nome_parceiro}?
          </h2>
        </div>

        {/* 2️⃣ Texto Curto Validando a Metodologia */}
        <div className="text-left">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          O que realmente faz um relacionamento dar certo? Algumas pessoas acreditam que o amor sozinho é suficiente, mas a verdade é que <strong className="text-gray-900">a chave para uma conexão profunda está em entender como cada pessoa sente e expressa emoções</strong>.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Estudos do <strong className="text-gray-900">Dr. Gary Chapman</strong> mostram que <span className="font-semibold text-gray-900">as Linguagens do Amor</span> definem a forma como alguém recebe e demonstra carinho. Muitas vezes, <strong className="text-gray-900">não é a falta de sentimentos que afasta um casal, mas sim a maneira como esses sentimentos são comunicados</strong>.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Além disso, pesquisas de <strong className="text-gray-900">Tim LaHaye</strong> e <strong className="text-gray-900">David Keirsey</strong> revelam que nosso <strong className="text-gray-900">temperamento</strong> influencia diretamente <strong className="text-gray-900">nossas reações emocionais, necessidades afetivas e desafios nos relacionamentos</strong>.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Quando combinamos essas duas descobertas, conseguimos entender <strong className="text-gray-900">com exatidão o que aproxima ou afasta emocionalmente duas pessoas</strong>. E mais do que isso: podemos prever <strong className="text-gray-900">o que funciona e o que pode criar barreiras na conexão entre vocês</strong>.
          </p>
        </div>
        <div className="bg-white py-6 px-4 md:px-8 rounded-lg shadow-lg">
        <h4 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-4">📊 O Que Isso Significa Na Prática?</h4>
       

        {/* 3️⃣ Prova Social e Dados de Validação */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8">
          {[
            { number: "96%", text: "Precisão Comportamental" },
            { number: "15mil+", text: "Análises Realizadas" },
            { number: "89%", text: "Sucesso em 30 dias" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                {stat.text}
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* 4️⃣ Gatilho de Curiosidade */}
        <div className="text-center mt-8">
          <p className="text-lg md:text-xl font-semibold text-purple-700 italic">
          Agora que temos as respostas do teste, conseguimos revelar os padrões emocionais de THiago – e como eles impactam diretamente sua relação com ele. Você pode ter notado que, em alguns momentos, ele age de forma distante ou não expressa sentimentos como você gostaria. Agora você vai entender o porquê.
          </p>
        </div>
      </div>
    </div>
  );
}
