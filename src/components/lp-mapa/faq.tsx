'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-[#D2A878]/30 last:border-0">
      <button
        className="w-full py-4 flex items-center justify-between text-left"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-[#5B7B7A]">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-[#C85C40] transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-[#5B7B7A]/90">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Como esse método pode transformar meu relacionamento?",
      answer: "Se você sente que, por mais que tente, algo sempre parece estar faltando na sua relação, o Mapa da Conexão Emocional vai te ajudar a finalmente entender o que está impedindo essa conexão profunda com seu parceiro. Você aprenderá como lidar com o temperamento e a linguagem do amor dele, ajustando sua comunicação e atitudes para criar uma relação equilibrada, segura e cheia de significado."
    },
    {
      question: "Esse método funciona para qualquer tipo de relacionamento?",
      answer: "Sim! O Mapa da Conexão Emocional é baseado na psicologia comportamental e pode ser aplicado tanto para quem está começando um relacionamento quanto para quem deseja resgatar a conexão emocional em uma relação de longa data."
    },
    {
      question: "Vou precisar mudar quem eu sou para aplicar esse método?",
      answer: "Não! O objetivo do método não é que você mude quem você é, mas sim que aprenda a agir estrategicamente, respeitando sua personalidade e a do seu parceiro. Pequenos ajustes na forma como você se comunica e interpreta o comportamento dele podem transformar a relação sem que você perca sua essência."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os resultados podem variar, mas muitas mulheres percebem mudanças na dinâmica do relacionamento em poucos dias ao aplicarem as estratégias corretas para o temperamento e a linguagem do amor do parceiro."
    },
    {
      question: "Como eu recebo o material após a compra?",
      answer: "Após a confirmação do pagamento, você terá acesso imediato ao Mapa da Conexão Emocional na plataforma Kwify. A Kwify é uma das plataformas mais seguras do Brasil, garantindo um ambiente confiável e protegido para sua experiência de aprendizado."
    },
    {
      question: "E se eu perceber que o material não se encaixa na minha necessidade?",
      answer: "Você tem 7 dias de garantia, conforme o Código de Defesa do Consumidor. Se sentir que o material não atende às suas expectativas, poderá solicitar um reembolso diretamente pela plataforma Kwify, de forma simples e sem burocracia."
    },
    {
      question: "O conteúdo é digital ou físico?",
      answer: "O Mapa da Conexão Emocional é 100% digital, acessível de qualquer dispositivo. Isso permite que você aplique as estratégias no seu próprio ritmo, sem depender de um material impresso."
    },
    {
      question: "Posso aplicar as estratégias mesmo sem a participação do meu parceiro?",
      answer: "Sim! O método foi desenvolvido para que você possa iniciar mudanças no relacionamento por conta própria, influenciando positivamente a dinâmica entre vocês, sem precisar que ele estude ou participe diretamente."
    },
    {
      question: "O guia aborda comunicação e resolução de conflitos?",
      answer: "Sim! Você aprenderá a ajustar sua comunicação para ser realmente ouvida, evitar desgastes desnecessários e criar momentos de conexão real com seu parceiro. O material ensina como transformar conversas comuns em oportunidades para fortalecer a relação, sem criar distanciamento."
    }
  ];
  

  return (
    <div className="bg-gradient-to-br from-[#F2E8DC] via-white to-[#D2A878]/10 py-16 md:py-20 relative">
      {/* Elementos decorativos inspirados em mapas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-12 w-32 h-32 border border-dashed border-[#D2A878]/30 rounded-lg rotate-12 opacity-50" />
        <div className="absolute bottom-16 right-16 w-40 h-40 border-2 border-[#5B7B7A]/20 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-[#8BA888]/30 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border-b-2 border-r-2 border-[#C85C40]/20 rotate-45" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-[#5B7B7A] mb-2">
          Ainda tem dúvidas?
        </h2>
        <p className="text-center text-[#C85C40] mb-12">
          Veja as respostas para as perguntas mais comuns
        </p>

        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur rounded-2xl p-6 shadow-sm border border-[#D2A878]/20 relative">
          {/* Detalhe estilo mapa no card */}
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#D2A878]/40"></div>
          </div>
          <div className="absolute top-8 right-12 w-6 h-6 border-2 border-[#D2A878]/30 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-[#D2A878]/20 rounded-full"></div>
          </div>
          
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
