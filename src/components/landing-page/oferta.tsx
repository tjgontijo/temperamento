'use client';

export function Oferta({ nome_parceiro }: { nome_parceiro: string }) {
  if (!nome_parceiro) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="relative bg-gradient-to-b from-white via-[#F2E8DC] to-[#D2A878]/20 py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D2A878]/20 to-[#8BA888]/20 opacity-50 rounded-3xl blur-xl"></div>
          
          <div className="relative z-10 p-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-8">
              <span className="block text-[#5B7B7A]">Invista no Seu</span>
              <span className="text-[#C85C40]">
                Futuro com {nome_parceiro}
              </span>
              <div className="mt-4 h-1 w-24 mx-auto bg-[#D4B483] rounded-full"></div>
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Plano Básico */}
          <div className="w-full md:w-1/2 max-w-sm">
            <div className="bg-white rounded-2xl p-8 relative border-2 border-[#D2A878]/30 shadow-lg">
              <h3 className="text-2xl font-bold text-[#5B7B7A] mb-6">Plano Básico</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 p-3 rounded-lg bg-[#F2E8DC]/50">
                  <svg className="w-5 h-5 text-[#8BA888] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium text-[#5B7B7A]">O Mapa da Conexão Emocional</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg bg-[#F2E8DC]/50">
                  <svg className="w-5 h-5 text-[#8BA888] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium text-[#5B7B7A]">1 ano de Acesso</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg bg-[#F2E8DC]/50">
                  <svg className="w-5 h-5 text-[#8BA888] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium text-[#5B7B7A]">Pagamento Único</span>
                </li>

                <div className="mt-2 mb-3">
                  <span className="text-[#C85C40] font-semibold line-through">+ Você também receberá:</span>
                </div>
                
                <li className="flex items-center gap-3 p-3 rounded-lg bg-[#C85C40]/10">
                  <svg className="w-5 h-5 text-[#C85C40] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                  </svg>
                  <span className="font-medium text-[#C85C40] text-left line-through">Guia de Mensagens</span>
                </li>

                <li className="flex items-center gap-3 p-3 rounded-lg bg-[#C85C40]/10">
                  <svg className="w-5 h-5 text-[#C85C40] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                  </svg>
                  <span className="font-medium text-[#C85C40] text-left line-through">Guia dos Erros que Afastam os Homens de Cada Temperamento</span>
                </li>
              </ul>

              <div className="text-center mb-6">
                <span className="text-6xl font-bold text-[#5B7B7A]">R$10</span>
              </div>

              <a 
                href="https://pay.kiwify.com.br/2REEUES"
                target="_blank"                
                className="utmify block w-full bg-[#8BA888] hover:bg-[#5B7B7A] text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative overflow-hidden group mb-4"
              >
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative">
                  QUERO O PLANO BÁSICO
                </span>
              </a>

              <div className="text-center text-sm">
                <p className="text-[#5B7B7A]/80">
                  Temos uma <span className="text-[#C85C40] font-semibold">oferta mais vantajosa</span> logo abaixo
                </p>
                <p className="text-xl mt-1">👇</p>
              </div>
            </div>
          </div>

          {/* Pacote Completo */}
          <div className="w-full md:w-1/2 max-w-sm relative">
            {/* Card Principal */}
            <div className="bg-white rounded-2xl p-8 relative transform transition-all duration-300 hover:scale-[1.02] border-2 border-[#D4B483] shadow-[0_8px_40px_-12px_rgba(210,168,120,0.5)]">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-[#C85C40] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ Mais Vendido ⭐
                </div>
              </div>
              
              <div className="text-center mb-6 pt-4">
                <h3 className="text-2xl font-bold text-[#5B7B7A] uppercase tracking-wider">Plano VIP</h3>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 p-3 rounded-lg bg-[#F2E8DC]/50">
                  <svg className="w-5 h-5 text-[#8BA888] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium text-[#5B7B7A]">O Mapa da Conexão Emocional</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg bg-[#F2E8DC]/50">
                  <svg className="w-5 h-5 text-[#8BA888] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium text-[#5B7B7A]">Acesso Vitalício</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg bg-[#F2E8DC]/50">
                  <svg className="w-5 h-5 text-[#8BA888] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium text-[#5B7B7A]">Pagamento Único</span>
                </li>

                <div className="mt-2 mb-3">
                  <span className="text-[#8BA888] font-semibold">+ Você também receberá:</span>
                </div>
                
                <li className="flex items-center gap-3 p-3 rounded-lg bg-[#8BA888]/20">
                  <svg className="w-5 h-5 text-[#8BA888] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                  </svg>
                  <span className="font-medium text-[#5B7B7A] text-left">Guia de Mensagens</span>
                </li>

                <li className="flex items-center gap-3 p-3 rounded-lg bg-[#8BA888]/20">
                  <svg className="w-5 h-5 text-[#8BA888] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                  </svg>
                  <span className="font-medium text-[#5B7B7A] text-left">Guia dos Erros que Afastam os Homens de Cada Temperamento</span>
                </li>
              </ul>

              <div className="text-center mb-6">
                <div className="inline-block relative">
                  <span className="text-6xl font-black text-[#5B7B7A]">R$27</span>
                </div>
                <p className="text-xs text-gray-600 mt-2 italic">
                  Aproveite antes que volte para R$49
                </p>
              </div>

              <a 
                href="https://pay.kiwify.com.br/HgJq08Z"
                target="_blank"
                className="utmify block w-full bg-gradient-to-r from-[#C85C40] to-[#D4B483] hover:from-[#C85C40] hover:to-[#D4B483] text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative">
                  QUERO O PLANO VIP AGORA!
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Texto de Justificativa */}
        <div className="mt-8 mb-8 text-center max-w-2xl mx-auto">
          <p className="text-gray-600 text-sm">
            Essa condição especial está disponível apenas por tempo limitado para tornar esse conhecimento acessível a mais mulheres.
          </p>
        </div>
      </div>
    </div>
  );
}
