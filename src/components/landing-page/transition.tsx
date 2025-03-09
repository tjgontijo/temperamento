'use client';

type TransitionProps = {
  nome_parceiro: string;
};

export function Transition({ nome_parceiro }: TransitionProps) {
  return (
    <div className="relative bg-gradient-to-br from-[#F2E8DC] via-white to-[#D2A878]/20 py-16 md:py-24 px-4 overflow-hidden">
      {/* Elementos decorativos inspirados em mapas */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grade de coordenadas */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(#5B7B7A 1px, transparent 1px), linear-gradient(90deg, #5B7B7A 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Elementos de mapa decorativos */}
        <div className="absolute top-20 left-12 w-32 h-32 border border-[#D2A878]/30 rounded-lg rotate-12" />
        <div className="absolute bottom-16 right-16 w-40 h-40 border border-dashed border-[#5B7B7A]/30 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-[#8BA888]/30 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border-b-2 border-r-2 border-[#C85C40]/20 rotate-45" />
      </div>

      <div className="max-w-2xl mx-auto space-y-8 relative z-10">
        {/* 1️⃣ Headline Forte e Direta */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5B7B7A] mb-6 leading-tight uppercase">
            Agora que você entende como {nome_parceiro} se conecta emocionalmente, como você pode usar isso para criar uma relação mais forte e irresistível?
          </h2>
        </div>

        {/* 2️⃣ Parágrafo de Reflexão e Leve Desconforto */}
        <div>
          <p className="text-base md:text-lg text-[#5B7B7A] leading-relaxed mb-6 text-left">
            Saber como ele sente e expressa o amor é um grande passo, mas apenas ter essa informação não garante que você conseguirá criar a conexão que deseja. 
            <br />
            Talvez você já tenha sentido que:
          </p>
          <ul className="text-base md:text-lg text-[#5B7B7A] leading-relaxed mb-6 list-none space-y-4 max-w-xl mx-auto">
            <li className="flex items-start">
              <span className="mr-3 text-[#C85C40] font-bold text-2xl">•</span>
              <span>Você se esforça para demonstrar interesse, mas ele parece distante, como se suas tentativas de aproximação simplesmente não o tocassem.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#C85C40] font-bold text-2xl">•</span>
              <span>Quando você mostra carinho ou atenção, ele não reage da forma que você espera, e isso te deixa frustrada, sem entender o que está errado.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#C85C40] font-bold text-2xl">•</span>
              <span>Mesmo quando as coisas parecem estar bem, há sempre uma sensação de que algo está faltando — como se a conexão nunca fosse realmente profunda.</span>
            </li>
          </ul>
          <p className="text-base md:text-lg text-[#5B7B7A] leading-relaxed mb-6 text-left">
            A verdade? Não é sobre querer mais, se esforçar mais ou mudar quem você é. É sobre saber exatamente como criar a conexão certa para que ele perceba, valorize e sinta que precisa de você.
          </p>
        </div>

        {/* 3️⃣ Apresentação das Opções */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 mb-6 border border-[#D2A878]/20">
          <h3 className="text-2xl font-serif font-semibold text-[#5B7B7A] mb-4 text-center">
            Agora, você tem duas escolhas
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-center">
            <div className="bg-[#F2E8DC]/50 p-4 rounded-lg border border-[#C85C40]/20">
              <h4 className="font-bold text-[#C85C40] mb-2">Caminho 1: Tentar Sozinha</h4>
              <p className="text-sm text-[#5B7B7A]">
                Aplicar essas informações por conta própria e correr o risco de não saber exatamente o que funciona.
              </p>
            </div>
            <div className="bg-[#F2E8DC]/50 p-4 rounded-lg border border-[#8BA888]/20">
              <h4 className="font-bold text-[#8BA888] mb-2">Caminho 2: Seguir Um Método Comprovado</h4>
              <p className="text-sm text-[#5B7B7A]">
                Usar um passo a passo validado, que transforma esse conhecimento em ações certeiras para criar uma conexão emocional verdadeira e fazer ele querer você ainda mais.
              </p>
            </div>
          </div>
        </div>

        {/* 4️⃣ Transição para a Oferta */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-serif font-bold text-[#C85C40] italic">
            E sabe qual é a boa notícia? 
            <br />
            Esse método já existe! E é capaz de mudar completamente a dinâmica entre vocês.
          </p>
        </div>
      </div>
    </div>
  );
}
