'use client';

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Target, Users2, AlertTriangle } from "lucide-react";
import { DepoimentoCard } from "@/components/layout/depoimento-card";import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PatternBackground } from '@/components/layout/PatternBackground';

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Decorative Blurred Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8BA888] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C85C40] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-[#F2E8DC] to-[#D2A878] flex items-center overflow-hidden">
        <div className="relative">
          <PatternBackground />
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Coluna de Texto */}
          <div className="space-y-6 md:space-y-7 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-[#5B7B7A] mb-4 leading-tight uppercase">
              Por que ele age assim? Sem perceber, você pode estar afastando ele…
            </h1>
            <div className="text-lg text-[#AA8878] mb-6 space-y-4">
              <p>
                Você já tentou de tudo, mas ele continua agindo de um jeito que não faz sentido? Talvez ele esteja demonstrando carinho e você nem tenha percebido. Ou pior: você pode estar fazendo algo que afasta ele sem querer.
              </p>                
            </div>
            <div className="text-lg text-[#AA8878] mb-6">
              <p className="font-semibold text-[#5B7B7A] italic">
                Existe uma forma de entender como ele pensa no amor e o que realmente aproxima vocês. Quer saber como?
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <Button 
                onClick={() => router.push('/questionario')} 
                className="bg-gradient-to-r from-[#8BA888] to-[#5B7B7A] text-white font-semibold py-8 px-9 rounded-xl shadow-xl text-xl whitespace-normal text-center hover:scale-105 transition-transform duration-300"
              >
                Descubra Agora o Que Está Afastando Vocês
              </Button>
            </div>
          </div>

          {/* Coluna de Imagem */}
          <div className="flex justify-center items-center w-full">
            <Image 
              src="/deco-girls-background-hero.png" 
              alt="Mulher Pensativa" 
              width={500} 
              height={500} 
              className="block md:hidden w-full h-auto object-cover md:object-contain md:max-w-full -mx-4 md:mx-0 rounded-b-[20px] translate-x-3 md:translate-x-8"
              priority
            />
            <Image 
              src="/deco-girls-background-hero-desktop.png" 
              alt="Mulher Pensativa" 
              width={500} 
              height={500} 
              className="hidden md:block w-full h-auto object-cover md:object-contain md:max-w-full -mx-4 md:mx-0"
              priority
            />
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5B7B7A] mb-6 uppercase">
              O Que Você Vai Descobrir Com Esta Análise?
            </h2>
            <p className="text-xl text-[#AA8878] mb-8">
              Você já sentiu que ele gosta de você, mas, às vezes, parece distante ou confuso? 
              Isso acontece porque cada pessoa tem uma forma única de se conectar emocionalmente. 
              <br />
              Com esta análise, você vai finalmente entender o que aproxima ou afasta vocês dois.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#F2E8DC] rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Target className="w-10 h-10 text-[#C85C40] mr-4" />
                <h3 className="text-xl font-semibold text-[#5B7B7A]">
                  Por Que Ele Age Assim?
                </h3>
              </div>
              <p className="text-[#AA8878]">
                Descubra os padrões emocionais que influenciam o comportamento dele no relacionamento.
              </p>
            </div>

            <div className="p-6 bg-[#F2E8DC] rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Heart className="w-10 h-10 text-[#C85C40] mr-4" />
                <h3 className="text-xl font-semibold text-[#5B7B7A]">
                  O Que Faz Ele Se Sentir Amado?
                </h3>
              </div>
              <p className="text-[#AA8878]">
                Entenda como ele realmente percebe e recebe amor, para evitar mal-entendidos.
              </p>
            </div>

            <div className="p-6 bg-[#F2E8DC] rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <MessageCircle className="w-10 h-10 text-[#C85C40] mr-4" />
                <h3 className="text-xl font-semibold text-[#5B7B7A]">
                  Como Criar Uma Conexão Genuína?
                </h3>
              </div>
              <p className="text-[#AA8878]">
                Aprenda a se comunicar de um jeito que ele compreenda e valorize.
              </p>
            </div>

            <div className="p-6 bg-[#F2E8DC] rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <AlertTriangle className="w-10 h-10 text-[#C85C40] mr-4" />
                <h3 className="text-xl font-semibold text-[#5B7B7A]">
                  Como Evitar Erros Que Afastam?
                </h3>
              </div>
              <p className="text-[#AA8878]">
                Identifique atitudes que podem estar enfraquecendo a relação sem você perceber.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5B7B7A] mb-6">
              Está pronta para descobrir o que realmente acontece entre vocês?
            </h3>
            <Button
              onClick={() => router.push('/questionario')}
              className="bg-gradient-to-r from-[#8BA888] to-[#5B7B7A] text-white font-semibold py-8 px-8 rounded-xl shadow-xl text-xl hover:scale-105 transition-transform duration-300 whitespace-normal text-center"
            >
              Receber Minha Análise Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 bg-[#F2E8DC]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5B7B7A] mb-4">
            Histórias de Sucesso
          </h2>
          <p className="text-xl text-[#AA8878] text-center max-w-2xl mx-auto mb-12">
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
            <DepoimentoCard
              nome="Fernanda"
              idade={35}
              cidade="Maringá, PR"
              texto="Cresci em uma família tradicional e sempre tive dificuldade em entender as nuances emocionais do meu parceiro. O relatório me mostrou padrões de comunicação que eu nunca tinha percebido antes."
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#F2E8DC] to-[#D2A878] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5B7B7A] mb-6">
            Sua História de Transformação Começa Aqui
          </h2>
          <p className="text-xl text-[#AA8878] max-w-3xl mx-auto mb-10">
            Centenas de mulheres já descobriram como entender melhor seus relacionamentos. Agora é sua vez de desvendar os segredos da conexão emocional e transformar sua história de amor.
          </p>
          <Button
            onClick={() => router.push('/questionario')}
            className="bg-gradient-to-r from-[#8BA888] to-[#5B7B7A] text-white font-semibold py-8 px-8 rounded-xl shadow-xl text-xl hover:scale-105 transition-transform duration-300 whitespace-normal text-center"
          >
            Estou Pronta Para Mudar Minha História
          </Button>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 bg-[#F2E8DC]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5B7B7A] mb-6 uppercase">
              Como Funciona a Análise do Casal?
            </h2>
            <p className="text-xl text-[#AA8878] mb-8">
              Toda relação tem sua dinâmica única, e entender essa conexão pode transformar completamente o seu relacionamento. 
              Nossa análise vai muito além de identificar o temperamento e a linguagem do amor dele – ela revela como vocês dois interagem e o que pode fortalecer ainda mais essa relação.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <Users2 className="w-10 h-10 text-[#C85C40] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-[#5B7B7A]">1. Responda o Questionário</h3>
                  <p className="text-[#AA8878]">
                    São apenas 2 minutos de perguntas simples sobre você e seu parceiro.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <Heart className="w-10 h-10 text-[#C85C40] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-[#5B7B7A]">2. Receba a Análise</h3>
                  <p className="text-[#AA8878]">
                    Nossa análise vai revelar os padrões emocionais de vocês dois.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <Target className="w-10 h-10 text-[#C85C40] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-[#5B7B7A]">3. Entenda os Detalhes</h3>
                  <p className="text-[#AA8878]">
                    Descubra como vocês se conectam e o que pode melhorar na relação.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <MessageCircle className="w-10 h-10 text-[#C85C40] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-[#5B7B7A]">4. Aplique as Dicas</h3>
                  <p className="text-[#AA8878]">
                    Use nossos insights para fortalecer ainda mais a conexão entre vocês.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => router.push('/questionario')}
              className="bg-gradient-to-r from-[#8BA888] to-[#5B7B7A] text-white font-semibold py-8 px-8 rounded-xl shadow-xl text-xl hover:scale-105 transition-transform duration-300 whitespace-normal text-center"
            >
              Começar Minha Análise Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
