'use client';

type TransitionProps = {
  nome_parceiro: string;
};

export function Transition({ nome_parceiro }: TransitionProps) {
  return (
    <div className="relative bg-gradient-to-b from-white via-[#D2A878]/20 to-[#F2E8DC] py-16 md:py-24 px-4 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#8BA888]/10 to-[#5B7B7A]/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[#D2A878]/10 to-[#C85C40]/5 blur-3xl"></div>
      
      <div className="max-w-2xl mx-auto space-y-8 relative z-10">
        {/* 1️⃣ Headline Forte e Direta */}
        <div className="text-center">
          <div className="inline-block px-8 py-6 bg-gradient-to-r from-[#C85C40] to-[#b38450] rounded-lg shadow-lg mb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
              🚨 ATENÇÃO: O Que Você Descobriu Até Agora é Apenas 3% do Segredo Por Trás dos Relacionamentos de Cinema
            </h2>
          </div>
        </div>

        {/* 2️⃣ Parágrafo de Reflexão e Leve Desconforto */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-[#D2A878]/20">
          <p className="text-base md:text-lg text-[#5B7B7A] leading-relaxed mb-6 text-center font-medium">
            Você já entendeu que existe um padrão único entre você e {nome_parceiro}. Mas existe algo mais profundo acontecendo...
          </p>
          <div className="mb-6">
            <h3 className="text-lg font-serif font-semibold text-[#C85C40] mb-4 pb-2 border-b border-[#D2A878]/20 text-center">
              Enquanto outras mulheres continuam:
            </h3>
            <ul className="text-base md:text-lg text-[#5B7B7A] leading-relaxed list-none space-y-4 max-w-xl mx-auto">
              <li className="flex items-start">
                <span className="mr-3 text-[#C85C40] text-xl">❌</span>
                <span>Implorando por migalhas de atenção</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#C85C40] text-xl">❌</span>
                <span>Tentando adivinhar o que ele pensa</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#C85C40] text-xl">❌</span>
                <span>Perdendo seu homem dia após dia</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-serif font-semibold text-[#5B7B7A] mb-4 pb-2 border-b border-[#D2A878]/20 text-center">
              Você Agora Tem a Chance de:
            </h3>
            <ul className="text-base md:text-lg text-[#5B7B7A] leading-relaxed list-none space-y-4 max-w-xl mx-auto">
              <li className="flex items-start">
                <span className="mr-3 text-[#8BA888] text-xl">✅</span>
                <span>Dominar a arte da conexão emocional</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#8BA888] text-xl">✅</span>
                <span>Fazer {nome_parceiro} se viciar em sua presença </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#8BA888] text-xl">✅</span>
                <span>Transformar seu relacionamento em 7 dias</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#F2E8DC]/70 p-4 rounded-lg border border-[#D2A878]/20 text-center">
            <p className="text-base font-medium text-[#5B7B7A]">
              <span className="font-bold text-[#C85C40]">AVISO:</span> O que você vai descobrir agora é resultado de:
            </p>
            <div className="flex flex-wrap justify-center mt-2 gap-3">
              <span className="inline-flex items-center px-3 py-1 bg-white/70 rounded-full text-sm text-[#5B7B7A]">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                37.492 relacionamentos analisados
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-white/70 rounded-full text-sm text-[#5B7B7A]">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                89% de taxa de sucesso comprovada
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-white/70 rounded-full text-sm text-[#5B7B7A]">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Método testado e validado por especialistas
              </span>
            </div>
          </div>
        </div>

        {/* 3️⃣ Apresentação das Opções */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 mb-6 border border-[#D2A878]/20">
          <h3 className="text-2xl font-serif font-semibold text-[#5B7B7A] mb-4 text-center">
            Agora, você tem duas escolhas
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C85C40]/30 to-[#D2A878]/30 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-[#F2E8DC]/50 p-5 rounded-lg border border-[#C85C40]/20 h-full flex flex-col">
                <div className="w-12 h-12 mx-auto bg-[#C85C40]/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl text-[#C85C40]">☠</span>
                </div>
                <h4 className="font-bold text-[#C85C40] mb-2">Caminho 1</h4>
                <p className="text-sm text-[#5B7B7A] flex-grow">
                  Fechar esta página e continuar tentando adivinhar o que fazer...
                </p>
              </div>
            </div>
            
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5B7B7A]/30 to-[#8BA888]/30 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-[#F2E8DC]/50 p-5 rounded-lg border border-[#8BA888]/20 h-full flex flex-col">
                <div className="w-12 h-12 mx-auto bg-[#8BA888]/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl text-[#8BA888]">💘</span>
                </div>
                <h4 className="font-bold text-[#8BA888] mb-2">Caminho 2</h4>
                <p className="text-sm text-[#5B7B7A] flex-grow">
                  Ou descobrir o método científico que já transformou milhares de relacionamentos e aplicar ainda hoje no seu caso.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4️⃣ Transição para a Oferta */}
        <div className="text-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5B7B7A]/20 via-[#8BA888]/20 to-[#5B7B7A]/20 rounded-xl blur opacity-50"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-[#D2A878]/20">
              <p className="text-xl md:text-2xl font-serif font-bold text-[#C85C40] mb-2">
                Continue rolando para descobrir como ter acesso ao método completo 
              </p>
              <p className="text-base text-[#5B7B7A] italic mb-3">
                (Incluindo uma surpresa especial que preparamos para você hoje)
              </p>
              <div className="text-4xl animate-bounce mt-2">⬇</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
