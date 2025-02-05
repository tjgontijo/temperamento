'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Heart, Lightbulb, MessageCircle, Target, Users2 } from "lucide-react";
import { DepoimentoCard } from "@/components/layout/depoimento-card";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-[80vh] bg-gradient-to-b from-pink-50 to-purple-50 flex items-center">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-6">
                Descubra o Caminho para o Coração Dele
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Entenda profundamente o temperamento e a linguagem do amor do seu pretendente 
                para criar uma conexão verdadeira e duradoura.
              </p>
              <Button
                onClick={() => router.push('/questionario')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Iniciar Questionário
              </Button>
            </div>
          </div>
        </section>

        {/* Benefícios Section */}
        <section id="beneficios" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
              Transforme Seu Relacionamento
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <Heart className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Conexão Mais Profunda</h3>
                  <p className="text-gray-600">
                    Entenda as necessidades emocionais dele e crie uma conexão genuína e duradoura.
                  </p>
                </div>
              </div>

              <div className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <MessageCircle className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Comunicação Efetiva</h3>
                  <p className="text-gray-600">
                    Aprenda a se comunicar de forma que ele realmente entenda e se sinta valorizado.
                  </p>
                </div>
              </div>

              <div className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <Lightbulb className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Insights Valiosos</h3>
                  <p className="text-gray-600">
                    Descubra padrões de comportamento e como lidar com diferentes situações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona Section */}
        <section id="como-funciona" className="py-20 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
              Como Funciona
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Users2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Observe</h3>
                <p className="text-gray-600">
                  Compartilhe suas observações sobre o comportamento dele.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Analise</h3>
                <p className="text-gray-600">
                  Nossa análise identifica o temperamento e linguagem do amor.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Aprenda</h3>
                <p className="text-gray-600">
                  Receba insights personalizados e estratégias práticas.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Aplique</h3>
                <p className="text-gray-600">
                  Coloque em prática as dicas e veja os resultados.
                </p>
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
      </main>

      <Footer />
    </>
  );
}
