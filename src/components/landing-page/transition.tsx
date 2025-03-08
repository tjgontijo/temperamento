'use client';

type TransitionProps = {
  nome_parceiro: string;
};

export function Transition({ nome_parceiro }: TransitionProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* 1️⃣ Headline Forte e Direta */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-6 leading-tight uppercase">
            Agora que você entende como {nome_parceiro} se conecta emocionalmente, como você pode usar isso para criar uma relação mais forte e irresistível?
          </h2>
        </div>

        {/* 2️⃣ Parágrafo de Reflexão e Leve Desconforto */}
        <div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-left">
          Saber como ele sente e expressa o amor é um grande passo, mas apenas ter essa informação não garante que você conseguirá criar a conexão que deseja. 
          <br />
          Talvez você já tenha sentido que:
          </p>
          <ul className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 list-none space-y-4 max-w-xl mx-auto">
            <li className="flex items-start">
              <span className="mr-3 text-red-500 font-bold text-2xl">•</span>
              <span>Você se esforça para demonstrar interesse, mas ele parece distante, como se suas tentativas de aproximação simplesmente não o tocassem.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-red-500 font-bold text-2xl">•</span>
              <span>Quando você mostra carinho ou atenção, ele não reage da forma que você espera, e isso te deixa frustrada, sem entender o que está errado.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-red-500 font-bold text-2xl">•</span>
              <span>Mesmo quando as coisas parecem estar bem, há sempre uma sensação de que algo está faltando — como se a conexão nunca fosse realmente profunda.</span>
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-left">
          A verdade? Não é sobre querer mais, se esforçar mais ou mudar quem você é. É sobre saber exatamente como criar a conexão certa para que ele perceba, valorize e sinta que precisa de você.
          </p>
        </div>

        {/* 3️⃣ Apresentação das Opções */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4 text-center">
            Agora, você tem duas escolhas
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-center">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-700 mb-2">Caminho 1: Tentar Sozinha</h4>
              <p className="text-sm text-red-600">
                Aplicar essas informações por conta própria e correr o risco de não saber exatamente o que funciona.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-700 mb-2">Caminho 2: Seguir Um Método Comprovado</h4>
              <p className="text-sm text-green-600">
              Usar um passo a passo validado, que transforma esse conhecimento em ações certeiras para criar uma conexão emocional verdadeira e fazer ele querer você ainda mais.
              </p>
            </div>
          </div>
        </div>

        {/* 4️⃣ Transição para a Oferta */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-bold text-purple-800 italic">
            E sabe qual é a boa notícia? 
            <br />
            Esse método já existe! E é capaz de mudar completamente a dinâmica entre vocês.
          </p>
        </div>
      </div>
    </div>
  );
}
