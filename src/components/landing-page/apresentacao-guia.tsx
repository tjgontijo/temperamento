'use client';

import Image from 'next/image';

export function ApresentacaoGuia() {
  return (
    <div className="relative bg-gradient-to-b from-white via-[#8BA888]/5 to-[#5B7B7A]/10 py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        {/* 1️⃣ Headline Principal */}
        <div className="text-center">
          <div className="text-xl md:text-2xl font-serif font-semibold text-[#5B7B7A] mb-4 uppercase tracking-wider flex items-center justify-center gap-3">
            <span className="w-8 h-0.5 bg-[#C85C40]"></span>
            📢 Apresentamos
            <span className="w-8 h-0.5 bg-[#C85C40]"></span>
          </div> 
          <p className="text-xl md:text-2xl text-[#AA8878] italic max-w-2xl mx-auto font-serif mb-6">
            <span className="text-[#C85C40] font-bold">📘 O GUIA COMPLETO DA CONEXÃO EMOCIONAL</span><br />
            O Único Método Científico Que Transforma Relacionamentos Frios em Conexões Magnéticas em 21 Dias
          </p>
          <Image src="/cover3d-guia.png" alt="O Guia Completo da Conexão Emocional" width={400} height={300} className="mx-auto" />
        </div>

        {/* 2️⃣ Parágrafos Introdutórios */}
        <div className="space-y-6 text-base md:text-lg text-[#5B7B7A] leading-relaxed bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#D2A878]/20">
          <p className="text-xl md:text-2xl text-[#C85C40] italic max-w-2xl mx-auto text-center font-serif">
            💡 Por Que Alguns Casais Mantêm a Chama Acesa Enquanto Outros Se Distanciam Cada Vez Mais?
          </p>
          
          <p className="text-base md:text-lg text-[#AA8878] leading-relaxed mb-4 text-center">
            A resposta não está na rotina, no tempo juntos ou na <strong>personalidade difícil</strong> dele. Está em algo muito mais profundo: a <span className="font-bold text-[#5B7B7A]">Sintonia Emocional</span>.
          </p>
          
          <div className="bg-[#F2E8DC]/50 p-4 rounded-lg border border-[#D2A878]/20 mb-6">
            <p className="text-lg font-bold text-[#5B7B7A] text-center mb-3">
              O MAPA DA CONEXÃO EMOCIONAL™
            </p>
            <p className="text-base text-[#AA8878] mb-3 text-center">
              Um sistema revolucionário que combina:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-2">
              <span className="inline-flex items-center px-3 py-1 bg-white/70 rounded-full text-sm text-[#5B7B7A]">
                <span className="w-2 h-2 bg-[#8BA888] rounded-full mr-2"></span>
                Ciência dos Temperamentos
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-white/70 rounded-full text-sm text-[#5B7B7A]">
                <span className="w-2 h-2 bg-[#8BA888] rounded-full mr-2"></span>
                Linguagens do Amor
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-white/70 rounded-full text-sm text-[#5B7B7A]">
                <span className="w-2 h-2 bg-[#8BA888] rounded-full mr-2"></span>
                Gatilhos de Conexão Masculina
              </span>
            </div>
          </div>
          
          <div className="bg-white/90 rounded-xl shadow-lg p-6 border-l-4 border-[#8BA888]">
            <h3 className="text-xl font-serif font-semibold text-[#5B7B7A] mb-4 text-center">
              O QUE VOCÊ VAI DOMINAR
            </h3>
            <ul className="space-y-6 text-base text-[#AA8878]">
              <li className="flex items-start">
                <span className="mr-3 text-[#8BA888] text-xl">✓</span>
                <div>
                  <p className="font-bold text-[#5B7B7A]">O Código Secreto do Comportamento Masculino</p>
                  <p>Como os temperamentos controlam as ações dele e como usar isso a seu favor</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#8BA888] text-xl">✓</span>
                <div>
                  <p className="font-bold text-[#5B7B7A]">Gatilhos de Segurança Emocional</p>
                  <p>As chaves exatas que fazem um homem se abrir naturalmente</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#8BA888] text-xl">✓</span>
                <div>
                  <p className="font-bold text-[#5B7B7A]">Comunicação Magnética</p>
                  <p>A forma cientificamente comprovada de fazer ele realmente te ouvir</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#8BA888] text-xl">✓</span>
                <div>
                  <p className="font-bold text-[#5B7B7A]">Vínculo Emocional Contínuo</p>
                  <p>Como criar uma conexão profunda usando a Linguagem do Amor dele</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
