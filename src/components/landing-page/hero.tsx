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
    <div className="bg-gradient-to-b from-[#5B7B7A] to-[#8BA888] min-h-[80vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl mx-auto text-center relative">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl mb-12">
          <div className="inline-flex items-center bg-[#C85C40]/80 text-white px-4 py-2 rounded-full mb-6 mx-auto">
            <span>{nome_autor}, Sua Análise Revelou Algo Importante!</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-[#F2E8DC]">
            Descobrimos Por Que <span className="text-[#C85C40]/90">{nome_parceiro}</span> Está Agindo Diferente E Como Conectar Vocês Dois De Forma Natural
          </h1>

          <div className="mb-8">
            <div className="inline-block text-xl font-bold mb-4 pb-2 border-b-2 border-[#D2A878] text-[#F2E8DC]">
              Com Base nas Suas Respostas, Identificamos:
            </div>
            
            <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-xl p-5">
              <div className="flex items-center p-3 border-b border-white/10">
                <span className="text-[#C85C40] text-xl mr-3">✓</span>
                <p className="text-[#5B7B7A]">O Verdadeiro Motivo da Distância Entre Vocês</p>
              </div>
              
              <div className="flex items-center p-3 border-b border-white/10">
                <span className="text-[#C85C40] text-xl mr-3">✓</span>
                <p className="text-[#5B7B7A]">Por Que Seus Esforços Não Estão Funcionando</p>
              </div>
              
              <div className="flex items-center p-3">
                <span className="text-[#C85C40] text-xl mr-3">✓</span>
                <p className="text-[#5B7B7A]">O Que Realmente Faz <span className="text-[#C85C40]/90">{nome_parceiro}</span> Se Conectar</p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <p className="text-md md:text-xl text-[#F2E8DC]/90 italic">
              Nos Próximos Minutos, Você Vai Entender Exatamente Como Transformar Seu Relacionamento Com <span className="text-[#C85C40]/90">{nome_parceiro}</span>
            </p>
            <div className="flex flex-col items-center mt-6">
              <p className="text-md md:text-lg text-[#F2E8DC]/90 italic mb-2">
                Continue Lendo Para Entender O Que Sua Análise Revelou
              </p>
              <div className="text-[#F2E8DC] text-2xl animate-bounce">↓</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
