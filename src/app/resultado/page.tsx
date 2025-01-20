'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Heart, MessageCircle, Target } from 'lucide-react';
import { obterResultado, marcarComoVisualizado } from '@/utils/storage';
import { ResultadoProps, ResultadoCalculado } from '@/types/questionario';
import { calcularResultado } from '@/lib/resultado';

const Headline = ({ nomeAutor, nomePretendente }: { nomeAutor: string, nomePretendente: string }) => (
  <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800 text-white">
    <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
    <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          <span className="block text-purple-200 mb-2">{nomeAutor},</span>
          você já deu o primeiro passo para conquistar o coração de {nomePretendente}!
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 max-w-2xl mx-auto">
          Agora que você entende melhor {nomePretendente}, está na hora de dar o próximo passo para criar o Match Certo.
        </p>
      </div>
    </div>
  </div>
);

const Introducao = ({ nomePretendente }: { nomePretendente: string }) => (
  <div className="bg-white py-16">
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
        <p className="text-xl mb-6 text-gray-700 leading-relaxed">
          Com base nas suas respostas, conseguimos traçar os primeiros sinais do temperamento 
          e da linguagem do amor de {nomePretendente}. Essas características são a chave para conquistar 
          de vez o coração dele.
        </p>
        <p className="text-xl font-semibold text-purple-800 leading-relaxed">
          Mas como transformar essas descobertas em ações práticas? Como criar uma conexão 
          única e irresistível com ele?
        </p>
      </div>
    </div>
  </div>
);

const ResultadoParcial = ({ 
  titulo,
  subtitulo,
  temperamentos,
  linguagens
}: { 
  titulo: string;
  subtitulo: string;
  temperamentos: { nome: string; valor: number }[];
  linguagens: { nome: string; valor: number }[];
}) => (
  <section className="p-8 bg-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-purple-900 mb-2">{titulo}</h2>
      <p className="text-gray-600 mb-8">{subtitulo}</p>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="font-semibold text-purple-900 mb-4">Temperamentos</h3>
          <div className="space-y-4">
            {temperamentos.map((temp, index) => (
              <div key={index} className="bg-purple-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-purple-900">{temp.nome}</span>
                  <span className="text-purple-700">{temp.valor}%</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${temp.valor}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-purple-900 mb-4">Linguagens do Amor</h3>
          <div className="space-y-4">
            {linguagens.map((ling, index) => (
              <div key={index} className="bg-purple-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-purple-900">{ling.nome}</span>
                  <span className="text-purple-700">{ling.valor}%</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${ling.valor}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SobreProcesso = () => (
  <section className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold text-purple-900 mb-6">Sobre o Processo</h2>
    
    <div className="grid gap-6 md:grid-cols-3">
      <div className="flex items-start space-x-4">
        <Heart className="w-6 h-6 text-purple-300 mt-1" />
        <div>
          <h3 className="font-semibold">Precisão</h3>
          <p className="text-gray-600">Resultados baseados em pesquisas e estudos científicos</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <MessageCircle className="w-6 h-6 text-purple-300 mt-1" />
        <div>
          <h3 className="font-semibold">Rápido</h3>
          <p className="text-gray-600">Questionário completo em menos de 10 minutos</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <Target className="w-6 h-6 text-purple-300 mt-1" />
        <div>
          <h3 className="font-semibold">Compatibilidade</h3>
          <p className="text-gray-600">
            &ldquo;O amor é paciente, o amor é bondoso...&rdquo;
            <br />
            <span className="text-sm text-gray-500">1 Coríntios 13:4</span>
          </p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <Heart className="w-6 h-6 text-purple-300 mt-1" />
        <div>
          <h3 className="font-semibold">Privacidade</h3>
          <p className="text-gray-600">Seus dados são mantidos em sigilo</p>
        </div>
      </div>
    </div>
  </section>
);

const ApresentacaoGuia = () => (
  <section className="p-8 bg-purple-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-purple-900 mb-4">Como Interpretar os Resultados</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-purple-900 mb-2">Temperamentos</h3>
          <p className="text-gray-600">
            Os temperamentos são traços naturais de personalidade. Cada pessoa tem uma combinação única,
            com um ou dois temperamentos predominantes. Entender isso ajuda a compreender melhor as
            reações e comportamentos naturais.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-purple-900 mb-2">Linguagens do Amor</h3>
          <p className="text-gray-600">
            As linguagens do amor são as formas como expressamos e recebemos amor. Conhecer as linguagens
            principais ajuda a comunicar amor de forma mais efetiva e evitar mal-entendidos no relacionamento.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Beneficios = () => (
  <section className="p-8 bg-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-purple-900 mb-6">Benefícios do Autoconhecimento</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 bg-purple-50 rounded-lg">
          <Heart className="w-8 h-8 text-red-500 mb-4" />
          <h3 className="font-semibold text-purple-900 mb-2">Relacionamentos Mais Profundos</h3>
          <p className="text-gray-600">
            Entenda melhor suas reações e as do seu parceiro para construir conexões mais significativas.
          </p>
        </div>
        <div className="p-6 bg-purple-50 rounded-lg">
          <MessageCircle className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="font-semibold text-purple-900 mb-2">Comunicação Efetiva</h3>
          <p className="text-gray-600">
            Aprenda a expressar seus sentimentos e necessidades de forma clara e compreensível.
          </p>
        </div>
        <div className="p-6 bg-purple-50 rounded-lg">
          <Target className="w-8 h-8 text-green-500 mb-4" />
          <h3 className="font-semibold text-purple-900 mb-2">Crescimento Pessoal</h3>
          <p className="text-gray-600">
            Use o conhecimento sobre si mesmo para desenvolver-se e melhorar seus relacionamentos.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Oferta = ({ nomePretendente }: { nomePretendente: string }) => (
  <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">
          Descubra como conquistar {nomePretendente} de uma vez por todas!
        </h2>
        <p className="text-xl mb-12 text-purple-200">
          Tenha acesso ao guia completo e personalizado para entender e conquistar
          o coração do seu pretendente.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <Target className="w-6 h-6 text-purple-300 mt-1" />
            <div>
              <h3 className="font-semibold">Estratégias Personalizadas</h3>
              <p className="text-purple-200">
                Dicas específicas baseadas no temperamento e linguagem do amor.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <Heart className="w-6 h-6 text-purple-300 mt-1" />
            <div>
              <h3 className="font-semibold">Conexão Profunda</h3>
              <p className="text-purple-200">
                Aprenda a criar laços emocionais duradouros.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <MessageCircle className="w-6 h-6 text-purple-300 mt-1" />
            <div>
              <h3 className="font-semibold">Comunicação Efetiva</h3>
              <p className="text-purple-200">
                Saiba como se expressar da maneira que ele mais valoriza.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg">
          Quero o Guia Completo
        </button>
      </div>
    </div>
  </div>
);

const Depoimento = () => (
  <div className="bg-white py-16">
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-6">
            <Image
              src="/avatar-maria.jpg"
              alt="Maria S."
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <p className="text-xl italic text-gray-700 text-center mb-6 leading-relaxed">
            Depois que usei o Match Perfeito, comecei a entender melhor o comportamento dele 
            e percebi que pequenas mudanças fizeram toda a diferença. Hoje, sinto que nossa 
            conexão é única!
          </p>
          <p className="font-semibold text-purple-800">Maria S.</p>
        </div>
      </div>
    </div>
  </div>
);

const Garantia = () => (
  <div className="bg-gray-50 py-16">
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Nossa Garantia Incondicional
        </h3>
        <p className="text-lg text-center text-gray-600">
          Se você não sentir que está no caminho certo para conquistar ele em até 7 dias, 
          devolvemos seu investimento integral. Sem perguntas.
        </p>
      </div>
    </div>
  </div>
);

export default function Resultado() {
  const router = useRouter();
  const [resultado, setResultado] = useState<ResultadoCalculado | null>(null);

  useEffect(() => {
    const resultadoSalvo = obterResultado();

    if (!resultadoSalvo) {
      router.push('/');
      return;
    }

    const { nome, pretendente, questoes, respostas } = resultadoSalvo;
    const resultadoCalculado = calcularResultado(respostas, questoes);

    setResultado({
      nome,
      pretendente,
      ...resultadoCalculado
    });

    marcarComoVisualizado();
  }, [router]);

  if (!resultado) {
    return <div>Carregando...</div>;
  }

  const temperamentoPretendente = Object.entries(resultado.temperamentos || {}).map(([nome, valor]) => ({ nome, valor }));
  const linguagemPretendente = Object.entries(resultado.linguagens || {}).map(([nome, valor]) => ({ nome, valor }));
  const temperamentoRespondente = Object.entries(resultado.temperamentosRespondente || {}).map(([nome, valor]) => ({ nome, valor }));
  const linguagemRespondente = Object.entries(resultado.linguagensRespondente || {}).map(([nome, valor]) => ({ nome, valor }));

  return (
    <div className="min-h-screen bg-white">
      <Headline nomeAutor={resultado.nome} nomePretendente={resultado.pretendente} />
      <Introducao nomePretendente={resultado.pretendente} />
      
      <ResultadoParcial
        titulo="Resultados do Pretendente"
        subtitulo="Aqui está o que descobrimos sobre seu pretendente"
        temperamentos={temperamentoPretendente}
        linguagens={linguagemPretendente}
      />
      
      <ResultadoParcial
        titulo="Seus Resultados"
        subtitulo="E aqui está o que descobrimos sobre você"
        temperamentos={temperamentoRespondente}
        linguagens={linguagemRespondente}
      />
      
      <SobreProcesso />
      <ApresentacaoGuia />
      <Beneficios />
      <Oferta nomePretendente={resultado.pretendente} />
      <Depoimento />
      <Garantia />
    </div>
  );
}
