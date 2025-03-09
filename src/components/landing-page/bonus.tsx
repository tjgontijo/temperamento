'use client';

export function Bonus() {
  return (
    <div className="relative bg-gradient-to-b from-[#D2A878]/20 via-[#F2E8DC] to-white py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
            <span className="block text-[#5B7B7A]">Bônus Exclusivos</span>
            <span className="text-[#C85C40]">Para Você</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#D4B483] rounded-full mt-4 mb-8"></div>
          <p className="text-lg md:text-xl text-[#5B7B7A]/90 max-w-3xl mx-auto">
            Prepare-se para acelerar ainda mais seus resultados com estes dois bônus exclusivos criados para complementar sua jornada de conexão emocional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Elemento decorativo de mapa */}
          <div className="absolute inset-0 -z-10 pointer-events-none opacity-5">
            <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-[#D4B483] rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-[#5B7B7A] rounded-full"></div>
            <div className="absolute top-1/3 right-1/3 w-32 h-8 border-b border-dashed border-[#AA8878]"></div>
            <div className="absolute bottom-1/3 left-1/3 w-8 h-32 border-r border-dashed border-[#AA8878]"></div>
          </div>

          {/* Bônus 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#D2A878]/30 relative group hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-3 -left-3 bg-[#C85C40] text-white h-14 w-14 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
              #1
            </div>
            <div className="pt-6 pl-6">
              <h3 className="text-2xl font-bold text-[#5B7B7A] mb-4">O Guia da Comunicação Feminina Irresistível</h3>
              
              <p className="text-[#5B7B7A]/80 mb-6">
                Descubra como falar com um homem de forma que ele realmente ouça e valorize o que você diz.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#8BA888] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Como expressar suas necessidades sem parecer carente ou controladora</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#8BA888] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Frases que abrem a mente e o coração de um homem</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#8BA888] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Como transformar conflitos em oportunidades de conexão</span>
                </li>
              </ul>
              
              <div className="w-full h-1 bg-gradient-to-r from-[#D2A878]/30 to-[#8BA888]/30 rounded-full my-6"></div>
              
              <div className="text-[#AA8878]/60 text-sm italic">
                <p>Valor individual: R$97</p>
                <p className="font-bold text-[#8BA888]">Você recebe GRATUITAMENTE</p>
              </div>
            </div>
          </div>
            
          {/* Bônus 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#D2A878]/30 relative group hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-3 -left-3 bg-[#C85C40] text-white h-14 w-14 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
              #2
            </div>
            <div className="pt-6 pl-6">
              <h3 className="text-2xl font-bold text-[#5B7B7A] mb-4">Desafio de 21 Dias Para Reacender a Conexão Emocional</h3>
              
              <p className="text-[#5B7B7A]/80 mb-6">
                Um guia prático diário para transformar seu relacionamento em apenas 3 semanas.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#8BA888] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Atividades diárias simples para reconectar gradualmente</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#8BA888] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Como criar momentos de intimidade genuína e duradoura</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#8BA888] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Calendário completo com instruções diárias para reconexão</span>
                </li>
              </ul>
              
              <div className="w-full h-1 bg-gradient-to-r from-[#D2A878]/30 to-[#8BA888]/30 rounded-full my-6"></div>
              
              <div className="text-[#AA8878]/60 text-sm italic">
                <p>Valor individual: R$127</p>
                <p className="font-bold text-[#8BA888]">Você recebe GRATUITAMENTE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
