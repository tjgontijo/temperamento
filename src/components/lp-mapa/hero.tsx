'use client';

type HeroProps = {
  nome_autor: string;
  nome_parceiro: string;
};

export function Hero({ nome_autor, nome_parceiro }: HeroProps) {
  if (!nome_parceiro) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-gradient-to-b from-[#5B7B7A] to-[#8BA888] min-h-[80vh] flex items-center justify-center py-16 px-4 md:px-8 mb-8">
      <div className="max-w-3xl mx-auto text-center relative bg-white/15 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
        <div className="inline-flex items-center bg-[#C85C40] text-white px-6 py-3 rounded-full mb-8 mx-auto font-medium shadow-md">
          <span className="text-lg">{nome_autor}, Sua Análise Revelou Algo Importante!</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-10 text-white">
          Descobrimos Por Que <span className="text-[#FFD700] drop-shadow-sm">{nome_parceiro}</span> Está Agindo Diferente E Como Conectar Vocês Dois De Forma Natural
        </h1>

        <div className="mb-10">
          <div className="inline-block text-xl font-bold mb-6 pb-2 border-b-2 border-[#FFD700] text-white">
            Com Base nas Suas Respostas, Identificamos:
          </div>
          
          <div className="mt-6 bg-[#2D3F3F]/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="flex items-center p-4 border-b border-white/20 hover:bg-white/10 transition-colors rounded-t-lg">
              <span className="text-[#FFD700] text-2xl mr-4 flex-shrink-0">✓</span>
              <p className="text-white text-lg">O Verdadeiro Motivo da Distância Entre Vocês</p>
            </div>
            
            <div className="flex items-center p-4 border-b border-white/20 hover:bg-white/10 transition-colors">
              <span className="text-[#FFD700] text-2xl mr-4 flex-shrink-0">✓</span>
              <p className="text-white text-lg">Por Que Seus Esforços Não Estão Funcionando</p>
            </div>
            
            <div className="flex items-center p-4 hover:bg-white/10 transition-colors rounded-b-lg">
              <span className="text-[#FFD700] text-2xl mr-4 flex-shrink-0">✓</span>
              <p className="text-white text-lg">O Que Realmente Faz <span className="text-[#FFD700] font-medium">{nome_parceiro}</span> Se Conectar</p>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <p className="text-lg md:text-xl text-white italic font-medium">
            Nos Próximos Minutos, Você Vai Entender Exatamente Como Transformar Seu Relacionamento Com <span className="text-[#FFD700] font-medium">{nome_parceiro}</span>
          </p>
          <div className="flex flex-col items-center mt-8">
            <p className="text-lg md:text-xl text-white/90 italic mb-3">
              Continue Lendo Para Entender O Que Sua Análise Revelou
            </p>
            <div className="text-[#FFD700] text-3xl animate-bounce mt-2">↓</div>
          </div>
        </div>
      </div>
    </div>
  );
}
