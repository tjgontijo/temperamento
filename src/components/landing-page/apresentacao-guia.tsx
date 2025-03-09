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
          <Image src="/cover3d-guia.png" alt="O Guia Completo da Conexão Emocional" width={400} height={300} className="mx-auto" />
          <p className="text-xl md:text-2xl text-[#AA8878] italic max-w-2xl mx-auto font-serif">
            O único método baseado na ciência dos temperamentos e das linguagens do amor que mostra exatamente como criar um vínculo emocional forte e duradouro com ele.
          </p>
        </div>

        {/* 2️⃣ Parágrafos Introdutórios */}
        <div className="space-y-6 text-base md:text-lg text-[#5B7B7A] leading-relaxed bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#D2A878]/20">
          <p className="text-xl md:text-2xl text-[#C85C40] italic max-w-2xl mx-auto text-center font-serif">
            💡 O que realmente faz um homem se sentir conectado e presente no relacionamento?
          </p>
        </div>
        <div className="text-left">
          <p className="text-base md:text-lg text-[#AA8878] leading-relaxed mb-4">
            Muitas mulheres acreditam que o problema no relacionamento está na rotina, na falta de tempo ou até no jeito do parceiro. Mas a verdade é que o que mantém um homem emocionalmente envolvido não é apenas a atração ou o tempo juntos, e sim a forma como ele se sente emocionalmente seguro e compreendido ao seu lado.
          </p>
          <p className="text-base md:text-lg text-[#AA8878] leading-relaxed mb-4">
            Se ele parece distante, se os diálogos já não fluem ou se a conexão que vocês tinham parece ter esfriado, não significa que o amor acabou – significa que vocês perderam a sintonia.
          </p>
          <p className="text-base md:text-lg text-[#AA8878] leading-relaxed mb-4">
            Chegou a hora de transformar esse conhecimento em ações estratégicas e eficazes, que fazem com que ele naturalmente se aproxime de você sem resistência e sem esforço forçado.
          </p>
          <p className="text-base md:text-lg text-[#AA8878] leading-relaxed mb-4">
            O <strong className="text-[#C85C40]">Mapa da Conexão Emocional</strong> é um guia prático e transformador que ensina como fortalecer e até restaurar o seu relacionamento, de forma definitiva.
          </p>
        </div>

        {/* 3️⃣ O Que Você Vai Aprender */}
        <div className="bg-white/90 rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-[#8BA888]">
          <h3 className="text-2xl font-serif font-semibold text-[#5B7B7A] mb-6 text-left">
            O que você vai aprender:
          </h3>
          <ul className="space-y-4 text-base md:text-lg text-[#AA8878]">
            {[
              "Como os temperamentos influenciam o comportamento dele e como usá-los a favor da relação.",
              "Os gatilhos emocionais que fazem um homem se sentir seguro, conectado e verdadeiramente presente.",
              "Como evitar os erros invisíveis que minam a relação e fazem ele se afastar sem que você perceba.",
              "A maneira certa de se comunicar para que ele realmente te escute, sem defensivas ou bloqueios emocionais.",
              "Como criar um vínculo emocional contínuo usando a Linguagem do Amor dele – sem precisar mudar quem você é."
            ]
            .map((item, index) => (
              <li key={index} className="flex items-start group">
                <span className="mr-4 text-[#8BA888] font-bold text-2xl">
                  ✔
                </span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4️⃣ Por Que Este Guia Funciona */}
        <div className="bg-[#F2E8DC]/70 rounded-xl p-6 md:p-8 border-l-4 border-[#C85C40]">
          <h3 className="text-2xl font-serif font-semibold text-[#5B7B7A] mb-6 text-left">
            Por que este guia funciona?
          </h3>
          <ul className="space-y-4 text-base md:text-lg text-[#AA8878]">
            {[
              "Baseado em estudos científicos sobre Temperamentos e Linguagens do Amor, sem achismos ou joguinhos.",
              "Passo a passo claro e direto ao ponto, fácil de aplicar no dia a dia.",
              "Resultados rápidos: pequenas mudanças que já fazem ele perceber a diferença no relacionamento.",
              "Nada de manipulação ou joguinhos: apenas um caminho autêntico para fortalecer a conexão emocional.",
              "A abordagem certa para cada tipo de homem, respeitando a personalidade dele e o que realmente o faz se sentir envolvido na relação."
            ]
            .map((item, index) => (
              <li key={index} className="flex items-start group">
                <span className="mr-4 text-[#C85C40] font-bold text-2xl">
                  ✔
                </span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
