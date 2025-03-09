'use client';

import Image from 'next/image';

type IntroducaoProps = {
  nome_parceiro: string;
};

export function Introducao({ nome_parceiro }: IntroducaoProps) {
  if (!nome_parceiro) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <section className="py-16 bg-[#F2E8DC] text-[#AA8878] relative">
      {/* Elemento de transição visual */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#8BA888] to-[#F2E8DC] -mt-16"></div>
      
      <div className="container mx-auto px-4 pt-8">
        <div className="max-w-3xl mx-auto">
          {/* Título da seção com decoração */}
          <div className="text-center mb-10">
            <div className="w-24 h-1 bg-[#C85C40] mx-auto mb-6"></div>
            <h2 className="text-2xl font-semibold text-[#5B7B7A] mb-2">
              🔬 A CIÊNCIA DA CONEXÃO EMOCIONAL
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-[#5B7B7A] mt-4 leading-tight">
              Por Que Algumas Mulheres Conseguem Uma Conexão Profunda Com Seus
              Parceiros, Enquanto Outras Lutam Para Serem Notadas?
            </h3>
          </div>
          
          {/* Bloco de Autoridade 1 */}
          <div className="mb-12 bg-white/50 p-6 rounded-lg border border-[#D2A878]/30 shadow-sm">
            <p className="mb-4 text-[#5B7B7A] font-medium text-center">
              Após analisar mais de 37.000 relacionamentos, descobrimos um
              padrão surpreendente:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center p-4 bg-white/70 rounded-lg">
                <span className="text-[#C85C40] text-2xl mb-2">✓</span>
                <p className="text-center text-[#5B7B7A]">Não é sobre quanto amor existe</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/70 rounded-lg">
                <span className="text-[#C85C40] text-2xl mb-2">✓</span>
                <p className="text-center text-[#5B7B7A]">Não é sobre quanto esforço você faz</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/70 rounded-lg">
                <span className="text-[#C85C40] text-2xl mb-2">✓</span>
                <p className="text-center text-[#5B7B7A]">É sobre entender como ele processa emoções</p>
              </div>
            </div>
          </div>

          {/* Validação Científica */}
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative w-full max-w-md h-48 rounded-lg overflow-hidden">
                <Image 
                  src="/o_mapa_banner_wide.png" 
                  alt="Casal feliz após análise de temperamento"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B7B7A]/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                  <p className="font-medium">Transformando relacionamentos através da ciência</p>
                </div>
              </div>
            </div>
            
            <p className="font-semibold text-[#5B7B7A] text-center mb-4">Combinamos duas descobertas revolucionárias:</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="flex-1 bg-white/30 p-4 rounded-lg border border-[#8BA888]/30 text-center">
                <p className="font-medium">As 5 Linguagens do Amor</p>
                <p className="text-sm text-[#5B7B7A]">Dr. Gary Chapman</p>
              </div>
              <div className="flex-1 bg-white/30 p-4 rounded-lg border border-[#8BA888]/30 text-center">
                <p className="font-medium">A Ciência dos Temperamentos</p>
                <p className="text-sm text-[#5B7B7A]">Tim LaHaye</p>
              </div>
            </div>
          </div>

          {/* Prova Social Numérica */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <p className="font-bold text-[#5B7B7A] text-xl">📊 RESULTADOS COMPROVADOS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#D2A878]/20">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#C85C40]">93%</p>
                  <p className="text-sm">Precisão na Análise</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#C85C40]">89%</p>
                  <p className="text-sm">Melhora em 30 dias</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#C85C40]">37mil+</p>
                  <p className="text-sm">Relacionamentos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gancho Personalizado */}
          <div className="bg-gradient-to-r from-[#5B7B7A] to-[#8BA888] p-6 rounded-lg text-white">
            <p className="font-medium mb-4 text-center">
              E é exatamente isso que sua análise revelou sobre <span className="text-[#F2E8DC] font-bold">{nome_parceiro}</span>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm text-center">
                <p>Como ele processa emoções</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm text-center">
                <p>Por que ele age de forma distante</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm text-center">
                <p>O que realmente o faz se conectar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
