'use client';

type IntroducaoProps = {
  nome_pretendente: string;
};

export function Introducao({ nome_pretendente }: IntroducaoProps) {
  if (!nome_pretendente) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-white py-40 md:py-40 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
            E se você pudesse entender exatamente o que {nome_pretendente} precisa 
            para se sentir verdadeiramente amado?
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Através de nossa análise avançada, identificamos padrões únicos na personalidade 
            de {nome_pretendente} que a maioria das pessoas nunca perceberá. 
            <span className="font-semibold text-purple-700"> E isso muda tudo.</span>
          </p>

          {/* Estatísticas de Credibilidade */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
            {[
              { number: "97%", text: "Taxa de Precisão" },
              { number: "15mil+", text: "Casais Analisados" },
              { number: "89%", text: "Sucesso em 30 dias" },
              { number: "100%", text: "Personalizado" },
            ].map((stat, index) => (
              <div key={index} className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
