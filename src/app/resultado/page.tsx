'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Clock, Heart, MessageCircle, ShieldCheck, Target } from 'lucide-react';
import { ResultadoCalculado } from '@/types/questionario';
import { calcularResultado } from '@/lib/actions/resultado-actions';
import { obterRespostas, obterDadosContexto, obterAnalise, salvarAnalise, obterResultadosQuestionario } from '@/utils/storage';
import { Loading } from '@/components/ui/loading';
import Image from 'next/image';
import { Countdown } from '@/components/countdown';

const TEMPERAMENTOS: Record<string, string> = {
  FLEUMATICO: 'Fleumático',
  MELANCOLICO: 'Melancólico',
  COLERICO: 'Colérico',
  SANGUINIO: 'Sanguíneo'
};

const LINGUAGENS: Record<string, string> = {
  PRESENTES: 'Presentes',
  ATOS_DE_SERVICO: 'Atos de Serviço',
  TEMPO_DE_QUALIDADE: 'Tempo de Qualidade',
  PALAVRAS_DE_AFIRMACAO: 'Palavras de Afirmação',
  TOQUE_FISICO: 'Toque Físico'
};

function Headline({ nome_autor, nome_pretendente }: { nome_autor: string; nome_pretendente: string }) {
  if (!nome_pretendente) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white py-12 md:py-20 px-4 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-8 -left-8 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Tag de exclusividade */}
        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6 text-sm md:text-base">
          ✨ Análise Exclusiva e Personalizada
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 drop-shadow-lg leading-tight">
          <span className="block mb-2">Parabéns, {nome_autor}!</span>
          <span className="block text-pink-200">
            Descobrimos o Caminho Direto para o Coração de {nome_pretendente}
          </span>
        </h1>

        <p className="text-lg md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto text-pink-50">
          Em poucos minutos, você terá acesso ao guia mais poderoso e personalizado 
          para criar uma conexão irresistível com {nome_pretendente}.
        </p>
      </div>
    </div>
  );
}

function Introducao({ nome_pretendente }: { nome_pretendente: string }) {
  if (!nome_pretendente) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-white py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
            E se você pudesse entender exatamente o que {nome_pretendente} precisa 
            para se sentir verdadeiramente amado?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Através de nossa análise avançada, identificamos padrões únicos na personalidade 
            de {nome_pretendente} que a maioria das pessoas nunca perceberá. 
            <span className="font-semibold text-purple-700"> E isso muda tudo.</span>
          </p>

          {/* Estatísticas de Credibilidade */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
            {[
              { number: "97%", text: "Taxa de Precisão" },
              { number: "15mil+", text: "Casais Analisados" },
              { number: "89%", text: "Sucesso em 30 dias" },
              { number: "100%", text: "Personalizado" },
            ].map((stat, index) => (
              <div key={index} className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultadosIniciais({ 
  nome_pretendente, 
  temperamentoPrincipal, 
  temperamentoSecundario,
  linguagemPrincipal,
  linguagemSecundaria,
  analise
}: { 
  nome_pretendente: string;
  temperamentoPrincipal: string;
  temperamentoSecundario: string;
  linguagemPrincipal: string;
  linguagemSecundaria: string;
  analise: {
    titulo: string;
    subtitulo: string;
    paragrafos: string[];
  }
}) {
  if (!nome_pretendente) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Análise Personalizada
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-8">
          Revelando os Segredos do Coração de {nome_pretendente}
        </h3>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          Nossa análise avançada revelou aspectos únicos da personalidade dele que podem ser a chave para uma conexão profunda e duradoura.
        </p>

        {/* Perfil de Temperamento */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 text-left">
          <h4 className="text-2xl font-bold text-indigo-800 mb-6">
            Perfil de Temperamento
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-xl font-semibold text-gray-700 mb-4">
                Temperamento Principal
              </h5>
              <p className="text-lg text-gray-600">
                {temperamentoPrincipal}
              </p>
            </div>
            <div>
              <h5 className="text-xl font-semibold text-gray-700 mb-4">
                Influência Secundária
              </h5>
              <p className="text-lg text-gray-600">
                {temperamentoSecundario}
              </p>
            </div>
          </div>
        </div>

        {/* Linguagem do Amor */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-left">
          <h4 className="text-2xl font-bold text-indigo-800 mb-6">
            Linguagem do Amor
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-xl font-semibold text-gray-700 mb-4">
                Linguagem Principal
              </h5>
              <p className="text-lg text-gray-600">
                {linguagemPrincipal}
              </p>
            </div>
            <div>
              <h5 className="text-xl font-semibold text-gray-700 mb-4">
                Linguagem Secundária
              </h5>
              <p className="text-lg text-gray-600">
                {linguagemSecundaria}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApresentacaoGuia({ nome_pretendente }: { nome_pretendente: string }) {
  if (!nome_pretendente) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 to-pink-900 py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(219,39,119,0.1),_transparent_50%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-block bg-pink-500/20 backdrop-blur-sm px-4 py-1 rounded-full text-pink-100 text-sm mb-6">
              Apresentando
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Match Perfeito: Seu Guia Personalizado para Conquistar {nome_pretendente}
            </h2>
            
            <p className="text-lg text-pink-100 mb-8 leading-relaxed">
              Um guia estratégico e personalizado que transforma sua compreensão sobre {nome_pretendente} 
              em ações práticas e efetivas para criar uma conexão profunda e duradoura.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "100% Personalizado para vocês dois",
                "Estratégias práticas e testadas",
                "Resultados em até 30 dias",
                "Suporte exclusivo"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-pink-100">
                  <svg className="w-5 h-5 text-pink-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Efeito de brilho */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 opacity-30 blur-xl rounded-xl" />
              
              {/* Imagem do guia */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/guia-capa.png"
                  alt="Guia Match Perfeito"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
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
    <div className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transforme Conhecimento em Conquista
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            O Match Perfeito vai muito além da teoria. É um guia prático que transforma 
            sua compreensão em ações concretas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: "🎯",
              title: "Estratégias Personalizadas",
              description: `Aprenda exatamente como lidar com o temperamento ${temperamentoPrincipal} dele de forma natural e efetiva.`
            },
            {
              icon: "💝",
              title: "Conexão Profunda",
              description: `Descubra como usar o ${linguagemPrincipal} para criar momentos inesquecíveis e fortalecer o vínculo entre vocês.`
            },
            {
              icon: "🗝️",
              title: "Passos Práticos",
              description: "Receba um roteiro dia a dia com ações específicas para conquistá-lo."
            },
            {
              icon: "⭐",
              title: "Resultados Rápidos",
              description: "Veja mudanças positivas no comportamento dele em questão de dias."
            }
          ].map((beneficio, index) => (
            <div key={index} className="bg-purple-50 rounded-2xl p-6 hover:bg-purple-100 transition-colors">
              <div className="text-4xl mb-4">{beneficio.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{beneficio.title}</h3>
              <p className="text-gray-600">{beneficio.description}</p>
            </div>
          ))}
        </div>

        {/* Bônus Especial */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
            <div className="absolute inset-0 bg-pink-500 opacity-10 rotate-45" />
          </div>
          
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Bônus Exclusivo</h3>
            </div>
            
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Guia de Mensagens Irresistíveis:</span> Uma coletânea 
              de mensagens prontas e personalizáveis que tocam exatamente nos pontos certos para 
              criar uma conexão imediata com ele.
            </p>
            
            <div className="flex items-center gap-2 text-pink-600">
              <span className="font-medium">Valor: R$97</span>
              <span className="text-gray-400">|</span>
              <span className="font-bold">Grátis</span> 
              <span className="text-sm text-gray-500">para você</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Oferta({ nome_pretendente }: { nome_pretendente: string }) {
  if (!nome_pretendente) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Invista no Seu Futuro com {nome_pretendente}
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Pacote Normal */}
            <div className="w-full md:w-1/2 max-w-sm bg-white/50 backdrop-blur rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-sm">
                  Valor Normal
                </div>
              </div>
              
              <div className="text-center mb-4 pt-4">
                <div className="text-4xl font-bold text-gray-400 line-through">R$297</div>
                <div className="text-sm text-gray-500">Consultoria Completa</div>
              </div>
              
              <ul className="text-gray-500 space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✓</span> Guia Personalizado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✓</span> Análise de Temperamento
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-400">✓</span> Estratégias Práticas
                </li>
              </ul>
            </div>

            {/* Oferta Especial */}
            <div className="w-full md:w-1/2 max-w-sm bg-white rounded-2xl shadow-2xl p-6 relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                  Oferta Especial
                </div>
              </div>
              
              <div className="text-center mb-4 pt-4">
                <div className="text-sm text-purple-600 font-medium mb-1">Apenas Hoje</div>
                <div className="text-5xl font-bold text-purple-700">R$37</div>
                <div className="text-sm text-gray-500">Economia de R$260</div>
              </div>
              
              <ul className="text-gray-700 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Guia Personalizado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Análise de Temperamento
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Estratégias Práticas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-500">+</span> 
                  <span className="font-medium">Bônus: Guia de Mensagens</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-500">+</span> 
                  <span className="font-medium">Garantia de 7 dias</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                QUERO CONQUISTAR {(nome_pretendente || '').toUpperCase()}
              </button>
            </div>
          </div>
        </div>

        {/* Selos de Segurança */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm">Compra Segura</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm">Pagamento Protegido</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">Satisfação Garantida</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Urgencia({ nome_pretendente }: { nome_pretendente: string }) {
  if (!nome_pretendente) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-white py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Timer */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full text-red-600 font-medium mb-4">
            <Clock className="w-5 h-5" />
            Oferta por Tempo Limitado
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Essa Oferta Expira em:
          </h3>
          
          <div className="mb-4">
            <Countdown minutes={30} />
          </div>
          
          <p className="text-red-600 text-sm font-medium">
            * Após este tempo, o valor volta ao normal de R$297
          </p>
        </div>

        {/* Depoimentos */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              texto: "O guia mudou completamente minha forma de me relacionar. Em duas semanas, já percebi uma diferença incrível na nossa conexão!",
              autor: "Maria S.",
              resultado: "Casados há 6 meses"
            },
            {
              texto: `Nunca imaginei que entender o temperamento dele faria tanta diferença. As dicas são práticas e funcionam de verdade!`,
              autor: "Ana L.",
              resultado: "Noivos há 2 meses"
            }
          ].map((depoimento, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg relative overflow-hidden">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex-shrink-0" />
                <div>
                  <p className="text-gray-700 italic mb-4">{depoimento.texto}</p>
                  <div>
                    <p className="font-medium text-gray-900">{depoimento.autor}</p>
                    <p className="text-sm text-green-600">{depoimento.resultado}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Garantia */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Garantia Incondicional de 7 Dias
              </h3>
              <p className="text-gray-700 mb-4">
                Se em até 7 dias você não perceber uma melhora significativa na sua conexão 
                com {nome_pretendente} ou não estiver 100% satisfeita com o conteúdo, 
                devolvemos todo seu investimento. Sem perguntas, sem complicação.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reembolso Rápido
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sem Burocracia
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Risco Zero
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Resultado() {
  const router = useRouter();
  const [resultado, setResultado] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResultado = () => {
      try {
        // Check if running in browser environment
        if (typeof window === 'undefined') {
          console.error('Ambiente de navegador não detectado');
          router.push('/');
          return;
        }

        // Recuperar diretamente do localStorage
        const resultadoSalvo = JSON.parse(
          localStorage.getItem('resultados_questionario') || 'null'
        );

        console.group('Diagnóstico de Resultado');
        console.log('Resultado Salvo:', resultadoSalvo);
        console.groupEnd();

        if (!resultadoSalvo) {
          console.error('Sem resultado salvo');
          router.push('/');
          return;
        }

        setResultado(resultadoSalvo);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar resultado:', error);
        setError(error instanceof Error ? error.message : 'Erro desconhecido');
        router.push('/');
        setLoading(false);
      }
    };

    fetchResultado();
  }, [router]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (!resultado) {
    return null;
  }

  const {
    temperamento = { principal: 'Não definido', secundario: 'Não definido' },
    linguagem = { principal: 'Não definido', secundario: 'Não definido' },
    informacoes = { nome_pretendente: 'Parceiro(a)' }
  } = resultado;

  return (
    <main>
      <Headline nome_autor={informacoes.nome_autor} nome_pretendente={informacoes.nome_pretendente} />
      <Introducao nome_pretendente={informacoes.nome_pretendente} />
      <ResultadosIniciais
        nome_pretendente={informacoes.nome_pretendente}
        temperamentoPrincipal={temperamento.principal}
        temperamentoSecundario={temperamento.secundario}
        linguagemPrincipal={linguagem.principal}
        linguagemSecundaria={linguagem.secundario}
        analise={resultado.analise}
      />
      <ApresentacaoGuia nome_pretendente={informacoes.nome_pretendente} />
      <Beneficios 
        temperamentoPrincipal={temperamento.principal}
        linguagemPrincipal={linguagem.principal}
      />
      <Oferta nome_pretendente={informacoes.nome_pretendente} />
      <Urgencia nome_pretendente={informacoes.nome_pretendente} />
    </main>
  );
}
