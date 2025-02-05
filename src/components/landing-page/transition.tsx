'use client';

type TransitionProps = {
  nome_pretendente: string;
};

export function Transition({ nome_pretendente }: TransitionProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* 1️⃣ Headline Forte e Direta */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6 leading-tight">
            Agora que você sabe como {nome_pretendente} se conecta, o que você vai fazer com essa informação?
          </h2>
        </div>

        {/* 2️⃣ Parágrafo de Reflexão e Leve Desconforto */}
        <div className="text-center">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Ter essas informações é um grande passo. Agora você entende como {nome_pretendente} sente e expressa o amor. 
            Mas será que saber disso é o suficiente para conquistar e manter o interesse dele? 
            Muitas mulheres acham que apenas entender um homem basta, mas acabam cometendo erros 
            que afastam ao invés de aproximar.
          </p>
        </div>

        {/* 3️⃣ Apresentação das Opções */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4 text-center">
            Suas Opções Agora
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-700 mb-2">Caminho 1: Por Conta Própria</h4>
              <p className="text-sm text-red-600">
                Tentar por conta própria, testando abordagens e aprendendo com tentativa e erro.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-700 mb-2">Caminho 2: Guiado</h4>
              <p className="text-sm text-green-600">
                Seguir um passo a passo claro, criado para transformar essas informações em ações certeiras.
              </p>
            </div>
          </div>
        </div>

        {/* 4️⃣ Transição para a Oferta */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-bold text-purple-800 italic">
            Se houvesse um guia que ensinasse exatamente o que fazer para conquistar {nome_pretendente}, 
            sem arriscar afastá-lo, você usaria?
          </p>
        </div>
      </div>
    </div>
  );
}
