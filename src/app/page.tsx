'use client';

import { motion } from 'framer-motion';
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Target, Users2, AlertTriangle } from "lucide-react";
import { DepoimentoCard } from "@/components/layout/depoimento-card";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative overflow-hidden">
      {/* Decorative Blurred Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 flex items-center">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-purple-900 mb-8 leading-tight uppercase">
                Descubra o temperamento e a linguagem do amor dele e veja o que realmente aproxima ou afasta vocês dois.
              </h1>
              <div className="text-lg text-gray-700 mb-10 space-y-4">
                <p>
                  Você já percebeu que, por mais que exista química, às vezes ele parece distante? 
                  Ou que, mesmo gostando de você, as coisas não fluem como você gostaria? Isso acontece porque cada pessoa sente e expressa o amor de um jeito único.
                </p>                
              </div>
              <div className="text-lg text-gray-700 mb-10 space-y-4">
              <p className="font-semibold text-purple-800">
                  Mas e se houvesse uma forma de entender como ele realmente pensa e o que faz um relacionamento dar certo para ele?
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <p className="text-xl text-gray-600 mb-6 italic">
                  E é assim que eu vou te ajudar! Responda algumas perguntas e receba uma análise personalizada sobre como ele pensa e o que faz um relacionamento dar certo para ele
                </p>
                <Button
                  onClick={() => router.push('/questionario')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-8 px-14 rounded-full shadow-xl text-xl"
                >
                  Começar Análise Gratuita
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6 uppercase">
              O Que Você Vai Descobrir Com Esta Análise?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Você já sentiu que ele gosta de você, mas, às vezes, parece distante ou confuso? 
              Isso acontece porque cada pessoa tem uma forma única de se conectar emocionalmente. 
              Com esta análise, você vai finalmente entender o que aproxima ou afasta vocês dois.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Target className="w-10 h-10 text-purple-600 mr-4" />
                <h3 className="text-xl font-semibold text-purple-900">
                  Por Que Ele Age Assim?
                </h3>
              </div>
              <p className="text-gray-700">
                Descubra os padrões emocionais que influenciam o comportamento dele no relacionamento.
              </p>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Heart className="w-10 h-10 text-purple-600 mr-4" />
                <h3 className="text-xl font-semibold text-purple-900">
                  O Que Faz Ele Se Sentir Amado?
                </h3>
              </div>
              <p className="text-gray-700">
                Entenda como ele realmente percebe e recebe amor, para evitar mal-entendidos.
              </p>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <MessageCircle className="w-10 h-10 text-purple-600 mr-4" />
                <h3 className="text-xl font-semibold text-purple-900">
                  Como Criar Uma Conexão Genuína?
                </h3>
              </div>
              <p className="text-gray-700">
                Aprenda a se comunicar de um jeito que ele compreenda e valorize.
              </p>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <AlertTriangle className="w-10 h-10 text-purple-600 mr-4" />
                <h3 className="text-xl font-semibold text-purple-900">
                  Como Evitar Erros Que Afastam?
                </h3>
              </div>
              <p className="text-gray-700">
                Identifique atitudes que podem estar enfraquecendo a relação sem você perceber.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">
              Está pronta para descobrir o que realmente acontece entre vocês?
            </h3>
            <Button
              onClick={() => router.push('/questionario')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-8 px-14 rounded-full shadow-xl text-xl"
            >
              Começar Análise Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimento Após Benefícios */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-900">Experiência Real</h3>
                  <p className="text-gray-600">Validando Nossa Análise</p>
                </div>
              </div>
              <blockquote className="text-2xl italic text-gray-800 mb-6">
                &quot;Eu achava que meu namorado era frio, mas depois do teste entendi que ele expressa amor de uma forma diferente da minha. Isso mudou tudo!&quot;
              </blockquote>
              <div className="text-right">
                <p className="font-semibold text-purple-900">Ana Paula, 28</p>
                <p className="text-gray-600">São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6 uppercase">
              Como Funciona a Análise do Casal?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Toda relação tem sua dinâmica única, e entender essa conexão pode transformar completamente o seu relacionamento. 
              Nossa análise vai muito além de identificar o temperamento e a linguagem do amor dele – ela revela como vocês dois interagem e o que pode fortalecer ainda mais essa relação.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-900">
                  Responda Algumas Perguntas
                </h3>
              </div>
              <p className="text-gray-700">
                Conte um pouco sobre vocês dois. Compartilhe suas percepções sobre o comportamento dele e a forma como vocês se relacionam.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-900">
                  Nossa Análise Inteligente
                </h3>
              </div>
              <p className="text-gray-700">
                Identificamos padrões emocionais no casal. Utilizamos conceitos de psicologia comportamental e linguagens do amor para entender como vocês se conectam.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-900">
                  Descubra Seus Pontos Fortes e Desafios
                </h3>
              </div>
              <p className="text-gray-700">
                Receba um relatório exclusivo sobre a dinâmica entre vocês. Entenda o que fortalece a relação, o que pode estar criando barreiras e como ajustar a comunicação.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-900">
                  Transforme Seu Relacionamento
                </h3>
              </div>
              <p className="text-gray-700">
                Aplique os insights e veja a diferença. Use as informações para criar uma conexão mais profunda e um relacionamento mais leve e equilibrado.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">
              Agora que você sabe como funciona, está pronta para entender o que realmente acontece entre vocês?
            </h3>
            <Button
              onClick={() => router.push('/questionario')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-8 px-14 rounded-full shadow-xl text-xl"
            >
              Começar Análise Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimento Após Como Funciona */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-200 rounded-full opacity-50 blur-2xl"></div>
            <div className="relative z-10 text-right">
              <div className="flex items-center justify-end mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-purple-900">Transformação Real</h3>
                  <p className="text-gray-600">Melhorando Relacionamentos</p>
                </div>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center ml-4">
                  <Users2 className="w-8 h-8 text-pink-600" />
                </div>
              </div>
              <blockquote className="text-2xl italic text-gray-800 mb-6">
                &quot;A gente brigava muito porque eu achava que ele não se importava. Depois da análise, percebi que o jeito dele de demonstrar amor era diferente do meu. Agora nossa relação está muito mais leve e feliz!&quot;
              </blockquote>
              <div>
                <p className="font-semibold text-purple-900">Mariana, 32</p>
                <p className="text-gray-600">Rio de Janeiro, RJ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronta para Transformar seu Relacionamento?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Comece agora mesmo a jornada para uma conexão mais profunda e significativa.
          </p>
          <Button
            onClick={() => router.push('/formulario-contexto')}
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg rounded-full"
          >
            Começar Análise Gratuita
          </Button>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-4">
            Histórias de Sucesso
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Descubra como outras mulheres transformaram seus relacionamentos através do nosso método
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DepoimentoCard
              nome="Ana Paula"
              idade={28}
              cidade="São Paulo, SP"
              texto="Depois de entender o temperamento do meu namorado, nossa comunicação melhorou muito! Agora sei como expressar minhas necessidades de uma forma que ele compreende e responde positivamente."
            />
            <DepoimentoCard
              nome="Mariana"
              idade={32}
              cidade="Rio de Janeiro, RJ"
              texto="O relatório foi revelador! Descobri que meu pretendente tem uma linguagem do amor totalmente diferente da minha. Fazer os ajustes sugeridos nos aproximou muito mais."
            />
            <DepoimentoCard
              nome="Camila"
              idade={25}
              cidade="Belo Horizonte, MG"
              texto="Estava quase desistindo do relacionamento por não entender algumas atitudes dele. O questionário me ajudou a ver que era apenas seu temperamento melancólico se manifestando."
            />
            <DepoimentoCard
              nome="Beatriz"
              idade={30}
              cidade="Curitiba, PR"
              texto="Os insights sobre a linguagem do amor dele mudaram tudo! Agora sei exatamente como demonstrar meu afeto de uma forma que ele realmente valoriza e aprecia."
            />
            <DepoimentoCard
              nome="Juliana"
              idade={27}
              cidade="Florianópolis, SC"
              texto="O material complementar foi fundamental. As dicas práticas e exercícios me ajudaram a construir uma conexão muito mais profunda com meu parceiro."
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
