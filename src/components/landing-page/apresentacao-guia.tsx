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
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6 leading-tight">
            O Mapa da Conexão Emocional
          </h2>
          <Image src="/cover3d-guia.png" alt="O Guia Completo da Conexão Emocional" width={800} height={600} className="mx-auto" />
          <p className="text-xl md:text-2xl text-gray-700 italic max-w-2xl mx-auto">
          O único método baseado na ciência dos temperamentos e das linguagens do amor que mostra exatamente como criar um vínculo emocional forte e duradouro com ele.
          </p>
        </div>


        {/* 2️⃣ Parágrafos Introdutórios */}
        <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
        <p className="text-xl md:text-2xl text-gray-700 italic max-w-2xl mx-auto text-center">
        💡 O que realmente faz um homem se apaixonar profundamente?
        </p>
        </div>
        <div className="text-left">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            O que faz um homem querer estar ao seu lado não é apenas atração, e sim a forma como ele se sente emocionalmente conectado a você.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          Muitas mulheres acreditam que a atração inicial é o suficiente para manter um relacionamento, mas a verdade é que a chave para um vínculo inquebrável está na forma como ele se sente emocionalmente conectado a você.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          Agora que você já entende como ele pensa, sente e expressa o amor, chegou a hora de transformar esse conhecimento em ações estratégicas que realmente funcionam.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          🗺️ O Mapa da Conexão Emocional é um passo a passo prático que vai te mostrar exatamente o que fazer, como agir e como se comunicar para fortalecer essa conexão e fazer com que ele veja você como única e insubstituível.
          </p>
        </div>

        {/* 3️⃣ O Que Você Vai Aprender */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-purple-600">
          <h3 className="text-2xl font-semibold text-purple-700 mb-6 text-center">
            O que você vai aprender:
          </h3>
          <ul className="space-y-4 text-base md:text-lg text-gray-700">
            {[
              "Como os temperamentos influenciam o comportamento dele e o que isso significa para o relacionamento de vocês.",
              "Como identificar os gatilhos emocionais que fazem ele se sentir seguro, conectado e verdadeiramente apaixonado.",
              "O que dizer e como agir para que ele veja você como alguém essencial e única na vida dele.",
              "Os erros mais comuns que afastam um homem de cada temperamento e como evitá-los.",
              "Como usar a Linguagem do Amor dele para criar um ciclo de conexão contínuo e manter o interesse sempre vivo."
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
          <h3 className="text-2xl font-semibold text-green-700 mb-6 text-center">
            Por que este guia funciona?
          </h3>
          <ul className="space-y-4 text-base md:text-lg text-green-800">
            {[
              "Baseado em estudos comprovados sobre Temperamentos e Linguagens do Amor, combinando ciência e prática.",
              "Método estruturado com passo a passo claro e fácil de aplicar, sem precisar mudar quem você é.",
              "Resultados que podem ser sentidos em poucos dias ao aplicar as estratégias certas para o temperamento dele.",
              "Não é sobre manipulação ou joguinhos, mas sim sobre criar uma conexão autêntica e verdadeira.",
              "A abordagem certa para cada tipo de homem, respeitando sua personalidade e a forma como ele se conecta emocionalmente."
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

        {/* 5️⃣ Chamada para Ação (Comentada) */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 shadow-2xl hover:scale-[1.02] transition-transform">
          <div className="flex justify-center items-center mb-4 space-x-3">
            <span className="text-3xl">📥</span>
            <h3 className="text-2xl md:text-3xl font-bold">
              Acesso imediato!
            </h3>
          </div>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Assim que você garantir seu acesso, já poderá começar a aplicar tudo e ver mudanças reais no comportamento dele.
          </p>
          {/* <button className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-100 transition-colors">
            Garantir Meu Acesso Agora
          </button> */}
        </div>
      </div>
    </div>
  );
}
