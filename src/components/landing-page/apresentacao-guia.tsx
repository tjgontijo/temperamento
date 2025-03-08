'use client';

import Image from 'next/image';

export function ApresentacaoGuia() {
  return (
    <div className="relative bg-gradient-to-br from-purple-100 via-white to-indigo-100 py-16 md:py-24 px-4 overflow-hidden">
      {/* Fundo decorativo com padrão de pontos */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: 'radial-gradient(#8B5CF6 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-100/20 to-transparent opacity-30 transform -skew-x-12" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        {/* 1️⃣ Headline Principal */}
        <div className="text-center">
          <div className="text-xl md:text-2xl font-semibold text-purple-600 mb-4 uppercase tracking-wider flex items-center justify-center gap-3">
            <span className="w-8 h-0.5 bg-purple-600"></span>
            📢 Apresentamos
            <span className="w-8 h-0.5 bg-purple-600"></span>
          </div>
          <Image src="/cover3d-guia.png" alt="O Guia Completo da Conexão Emocional" width={800} height={600} className="mx-auto" />
          <p className="text-xl md:text-2xl text-gray-700 italic max-w-2xl mx-auto">
          O único método baseado na ciência dos temperamentos e das linguagens do amor que mostra exatamente como criar um vínculo emocional forte e duradouro com ele.
          </p>
        </div>


        {/* 2️⃣ Parágrafos Introdutórios */}
        <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
        <p className="text-xl md:text-2xl text-gray-800 italic max-w-2xl mx-auto text-center">
        💡 O que realmente faz um homem se sentir conectado e presente no relacionamento?</p>
        </div>
        <div className="text-left">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          Muitas mulheres acreditam que o problema no relacionamento está na rotina, na falta de tempo ou até no jeito do parceiro. Mas a verdade é que o que mantém um homem emocionalmente envolvido não é apenas a atração ou o tempo juntos, e sim a forma como ele se sente emocionalmente seguro e compreendido ao seu lado.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          Se ele parece distante, se os diálogos já não fluem ou se a conexão que vocês tinham parece ter esfriado, não significa que o amor acabou – significa que vocês perderam a sintonia.</p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          Chegou a hora de transformar esse conhecimento em ações estratégicas e eficazes, que fazem com que ele naturalmente se aproxime de você sem resistência e sem esforço forçado.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          O <strong>Mapa da Conexão Emocional</strong> é um guia prático e transformador que ensina como fortalecer e até restaurar o seu relacionamento, de forma definitiva.          </p>
        </div>

        {/* 3️⃣ O Que Você Vai Aprender */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-purple-600">
          <h3 className="text-2xl font-semibold text-purple-700 mb-6 text-left">
            O que você vai aprender:
          </h3>
          <ul className="space-y-4 text-base md:text-lg text-gray-700">
            {[
              "Como os temperamentos influenciam o comportamento dele e como usá-los a favor da relação.",
              "Os gatilhos emocionais que fazem um homem se sentir seguro, conectado e verdadeiramente presente.",
              "Como evitar os erros invisíveis que minam a relação e fazem ele se afastar sem que você perceba.",
              "A maneira certa de se comunicar para que ele realmente te escute, sem defensivas ou bloqueios emocionais.",
              "Como criar um vínculo emocional contínuo usando a Linguagem do Amor dele – sem precisar mudar quem você é."
            ]
            .map((item, index) => (
              <li key={index} className="flex items-start group">
                <span className="mr-4 text-purple-500 font-bold text-2xl">
                  ✔
                </span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4️⃣ Por Que Este Guia Funciona */}
        <div className="bg-green-50 rounded-xl p-6 md:p-8 border-l-4 border-green-600">
          <h3 className="text-2xl font-semibold text-green-700 mb-6 text-left">
            Por que este guia funciona?
          </h3>
          <ul className="space-y-4 text-base md:text-lg text-green-800">
            {[
              "Baseado em estudos científicos sobre Temperamentos e Linguagens do Amor, sem achismos ou joguinhos.",
              "Passo a passo claro e direto ao ponto, fácil de aplicar no dia a dia.",
              "Resultados rápidos: pequenas mudanças que já fazem ele perceber a diferença no relacionamento.",
              "Nada de manipulação ou joguinhos: apenas um caminho autêntico para fortalecer a conexão emocional.",
              "A abordagem certa para cada tipo de homem, respeitando a personalidade dele e o que realmente o faz se sentir envolvido na relação."
            ]
            .map((item, index) => (
              <li key={index} className="flex items-start group">
                <span className="mr-4 text-green-500 font-bold text-2xl">
                  ✔
                </span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        5️⃣ Chamada para Ação (Comentada)
        {/* <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 shadow-2xl hover:scale-[1.02] transition-transform">
          <div className="flex justify-center items-center mb-4 space-x-3">            
            <h3 className="text-2xl md:text-3xl font-bold">
            O amor por si só não sustenta um relacionamento, a conexão emocional sim.
            </h3>
          </div>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
          Com as estratégias ensinadas em nosso Guia, você pode fazer com que ele se fique mais próximo, mais presente e mais envolvido emocionalmente do que nunca.</p>
          <button className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-100 transition-colors">
            Garantir Meu Acesso Agora
          </button>
        </div> */}
      </div>
    </div>
  );
}
