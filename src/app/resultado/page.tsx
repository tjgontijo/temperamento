'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Clock, Heart, MessageCircle, ShieldCheck, Target } from 'lucide-react';
import { ResultadoCalculado } from '@/types/questionario';
import { calcularResultado } from '@/data';
import { obterDados } from '@/utils/storage';
import { TEMPERAMENTOS, LINGUAGENS } from '@/data/constantes';
import { Countdown } from '@/components/countdown';

function Headline({ nomeAutor, nomePretendente }: { nomeAutor: string; nomePretendente: string }) {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 drop-shadow-lg leading-tight">
          Parabéns, {nomeAutor}! Você já está a um passo de conquistar o coração de {nomePretendente} – e só você terá essa chance única!
        </h1>
        <p className="text-lg md:text-2xl italic font-medium leading-relaxed">
          Descubra como usar o que sabemos sobre {nomePretendente} para criar uma conexão irresistível e única!
        </p>
      </div>
    </div>
  );
}

function Introducao({ nomePretendente }: { nomePretendente: string }) {
  return (
    <div className="bg-white py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Você já sabe que cada pessoa é única, mas será que sabe como usar isso a seu favor? 
          Baseado no que descobrimos sobre {nomePretendente}, temos as chaves para abrir o coração 
          dele – e transformar seu desejo em realidade.
        </p>
      </div>
    </div>
  );
}

function ResultadosIniciais({ 
  nomePretendente, 
  temperamentoPrincipal, 
  temperamentoSecundario,
  linguagemPrincipal,
  linguagemSecundaria 
}: { 
  nomePretendente: string;
  temperamentoPrincipal: string;
  temperamentoSecundario: string;
  linguagemPrincipal: string;
  linguagemSecundaria: string;
}) {
  return (
    <div className="bg-gray-50 py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8 text-center px-4">
          Aqui está o que conseguimos identificar sobre {nomePretendente} até agora – e que a maioria das pessoas nem imagina:
        </h2>
        
        <div className="space-y-6 md:space-y-8">
          <div className="flex items-start gap-3 md:gap-4">
            <Target className="w-6 h-6 md:w-8 md:h-8 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Temperamento</h3>
              <p className="text-sm md:text-base text-gray-600">
                <span className="font-bold text-purple-600">{temperamentoPrincipal}</span>, 
                com toques de <span className="text-purple-600">{temperamentoSecundario}</span> – 
                uma combinação que revela muito sobre ele.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 md:gap-4">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-pink-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Linguagem do Amor</h3>
              <p className="text-sm md:text-base text-gray-600">
                Ele se sente mais valorizado pelo <span className="font-bold text-pink-600">{linguagemPrincipal}</span>, 
                mas também responde bem ao <span className="text-pink-600">{linguagemSecundaria}</span>.
              </p>
            </div>
          </div>
        </div>

        <p className="text-base md:text-lg text-gray-700 mt-6 md:mt-8 text-center px-4">
          Com essas informações, você já está muito à frente, mas imagine o poder de saber exatamente 
          como agir com base nisso – é exatamente isso que vamos te mostrar agora.
        </p>
      </div>
    </div>
  );
}

function ApresentacaoGuia({ nomePretendente }: { nomePretendente: string }) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
              Apresentamos: Match Perfeito
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              O único guia que transforma o que descobrimos sobre {nomePretendente} em um 
              passo a passo prático e exclusivo para você conquistar o coração dele.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 max-w-sm mx-auto">
              <Image
                src="/guia-capa.png"
                alt="Capa do Guia Match Perfeito"
                width={400}
                height={300}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Beneficios({ 
  temperamentoPrincipal, 
  linguagemPrincipal 
}: { 
  temperamentoPrincipal: string;
  linguagemPrincipal: string;
}) {
  return (
    <div className="bg-white py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8 text-center px-4">
          Com o Match Perfeito, você terá acesso a estratégias que funcionam de verdade, incluindo:
        </h2>

        <div className="space-y-4 md:space-y-6 px-2">
          {[
            `Como lidar com o temperamento ${temperamentoPrincipal} de forma leve e natural.`,
            `Os gestos e atitudes que falam diretamente ao coração de quem tem o ${linguagemPrincipal} como linguagem do amor.`,
            'O passo a passo para criar uma conexão emocional que ele nunca esquecerá.',
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 md:gap-4">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm md:text-base text-gray-700">{item}</p>
            </div>
          ))}

          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-purple-50 rounded-lg border-2 border-purple-200">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <p className="text-sm md:text-base text-gray-700 font-medium">
                Bônus: Frases prontas para usar em mensagens que tocam fundo no coração dele e criam um vínculo imediato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Oferta({ nomePretendente }: { nomePretendente: string }) {
  return (
    <div className="bg-gray-50 py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 md:mb-8">
          <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4 px-4">
            Se você fosse contratar um especialista em relacionamentos para receber esse tipo de orientação, 
            gastaria facilmente mais de <span className="line-through">R$300</span>.
          </p>
          <div className="inline-block bg-green-100 px-4 md:px-6 py-2 md:py-3 rounded-lg mx-4">
            <p className="text-xl md:text-2xl font-bold text-green-800">
              Mas como participante do teste, você pode garantir o Match Perfeito por apenas R$37
            </p>
          </div>
        </div>

        <p className="text-base md:text-lg text-gray-700 px-4">
          E ainda recebe um bônus exclusivo e a garantia de que estará no caminho certo para conquistar {nomePretendente}.
        </p>

        <div className="mt-6 md:mt-8 px-4">
          <button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white text-lg md:text-xl font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg shadow-lg transform transition hover:scale-105">
            QUERO CONQUISTAR {nomePretendente.toUpperCase()} AGORA!
          </button>
        </div>
      </div>
    </div>
  );
}

function Urgencia({ nomePretendente }: { nomePretendente: string }) {
  return (
    <div className="bg-white py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4">
            <Clock className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
            <p className="text-base md:text-lg font-medium text-red-600">
              Oferta especial expira em:
            </p>
          </div>
          <Countdown minutes={30} />
          <p className="text-xs md:text-sm text-gray-500 mt-2 px-4">
            * Após este tempo, o valor volta ao normal de R$300
          </p>
        </div>

        <div className="bg-gray-50 p-4 md:p-6 rounded-lg mb-6 md:mb-8 mx-2">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 flex-shrink-0" />
            <div>
              <p className="text-sm md:text-base text-gray-700 italic">
                "Depois de usar o Match Perfeito, percebi que entendê-lo de verdade fazia toda a diferença. 
                Hoje, ele me diz que nunca se sentiu tão compreendido – e nossa relação está melhor do que 
                eu poderia imaginar."
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-2">- Maria S.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4 justify-center p-4 md:p-6 bg-green-50 rounded-lg mx-2">
          <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-green-600 flex-shrink-0" />
          <p className="text-sm md:text-base text-gray-700">
            Se em até 7 dias você não sentir que está no caminho certo para conquistar {nomePretendente}, 
            devolvemos 100% do seu investimento. Sem perguntas, sem riscos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Resultado() {
  const router = useRouter();
  const [resultado, setResultado] = useState<ResultadoCalculado | null>(null);

  useEffect(() => {
    const data = obterDados();
    if (!data.questoes.length) {
      router.push('/');
      return;
    }

    const resultadoCalculado = calcularResultado(data.questoes, data.respostas);
    console.log('Resultado calculado:', resultadoCalculado);
    setResultado(resultadoCalculado);
  }, [router]);

  if (!resultado || !resultado.informacoes) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">Carregando resultados...</p>
        </div>
      </div>
    );
  }

  const { nome_autor, nome_pretendente } = resultado.informacoes;
  const temperamentoPrincipal = TEMPERAMENTOS[resultado.temperamento.valor];
  const temperamentoSecundario = TEMPERAMENTOS[resultado.temperamento.segundo];
  const linguagemPrincipal = LINGUAGENS[resultado.linguagem.valor];
  const linguagemSecundaria = LINGUAGENS[resultado.linguagem.segundo];

  return (
    <div className="min-h-screen bg-white">
      <Headline nomeAutor={nome_autor} nomePretendente={nome_pretendente} />
      <Introducao nomePretendente={nome_pretendente} />
      <ResultadosIniciais 
        nomePretendente={nome_pretendente}
        temperamentoPrincipal={temperamentoPrincipal}
        temperamentoSecundario={temperamentoSecundario}
        linguagemPrincipal={linguagemPrincipal}
        linguagemSecundaria={linguagemSecundaria}
      />
      <ApresentacaoGuia nomePretendente={nome_pretendente} />
      <Beneficios 
        temperamentoPrincipal={temperamentoPrincipal}
        linguagemPrincipal={linguagemPrincipal}
      />
      <Oferta nomePretendente={nome_pretendente} />
      <Urgencia nomePretendente={nome_pretendente} />
    </div>
  );
}
