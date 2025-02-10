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
    <div className="border-b border-purple-100 last:border-0">
      <button
        className="w-full py-4 flex items-center justify-between text-left"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-purple-900">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-purple-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "O que eu vou aprender nesse guia?",
      answer: "Você vai entender como os temperamentos e as linguagens do amor influenciam a conexão emocional e aprender estratégias práticas para fortalecer seu relacionamento."
    },
    {
      question: "Esse método funciona para qualquer tipo de relacionamento?",
      answer: "Sim! O Mapa da Conexão Emocional é baseado na psicologia comportamental e pode ser aplicado em diferentes fases do relacionamento – desde quem está começando a se envolver até quem quer melhorar um relacionamento de longa data."
    },
    {
      question: "Vou precisar mudar quem eu sou para aplicar esse método?",
      answer: "Não! Esse guia não ensina manipulação ou joguinhos, mas sim como criar uma conexão autêntica e real com ele."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os resultados podem variar, mas muitas mulheres percebem mudanças na dinâmica do relacionamento em poucos dias, quando aplicam as estratégias corretamente."
    },
    {
      question: "Como eu recebo o material após a compra?",
      answer: "Após a confirmação do pagamento, você receberá acesso imediato ao Mapa da Conexão Emocional na plataforma Kwify. A Kwify é uma das plataformas mais seguras e reconhecidas do Brasil, garantindo que você possa acessar seu material de forma rápida e protegida."
    },
    {
      question: "E se eu perceber que o material não se encaixa na minha necessidade?",
      answer: "Você tem 7 dias de garantia, conforme o Código de Defesa do Consumidor. Caso perceba que o material não atende suas expectativas, poderá solicitar o reembolso de forma simples e sem burocracia diretamente pela plataforma Kwify."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-900 mb-2">
          Ainda tem dúvidas?
        </h2>
        <p className="text-center text-purple-700 mb-12">
          Veja as respostas para as perguntas mais comuns
        </p>

        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm border border-purple-100">
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
