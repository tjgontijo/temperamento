'use client';

type IntroducaoProps = {
  nome_pretendente: string;
};

export function Introducao({ nome_pretendente }: IntroducaoProps) {
  if (!nome_pretendente) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* 1️⃣ Headline Curta e Impactante */}
        <div className="text-center">
          <div className="inline-block bg-purple-100/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
            🔬 Metodologia Científica
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4 leading-tight">
            Nossa Metodologia: Como Deciframos {nome_pretendente}
          </h2>
        </div>

        {/* 2️⃣ Texto Curto Validando a Metodologia */}
        <div className="text-center">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Não existe mistério no amor, existe compreensão. Nossa metodologia combina princípios 
            da psicologia comportamental, temperamentos e linguagens do amor para identificar 
            padrões que a maioria das pessoas não percebe. Assim, conseguimos mostrar exatamente 
            como {nome_pretendente} se conecta emocionalmente e como você pode se comunicar 
            da melhor forma com ele.
          </p>
        </div>

        {/* 3️⃣ Prova Social e Dados de Validação */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8">
          {[
            { number: "97%", text: "Precisão Comportamental" },
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

        {/* 4️⃣ Gatilho de Curiosidade */}
        <div className="text-center mt-8">
          <p className="text-lg md:text-xl font-semibold text-purple-700 italic">
            Agora que você já sabe como essa análise foi feita, vamos direto ao que descobrimos sobre {nome_pretendente}.
          </p>
        </div>
      </div>
    </div>
  );
}
