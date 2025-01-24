'use client';

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function Urgencia({ nome_pretendente }: { nome_pretendente: string }) {
  const [timeLeft, setTimeLeft] = useState({
    horas: 0,
    minutos: 20,
    segundos: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let {  horas, minutos, segundos } = prev;
        
        segundos--;
        
        if (segundos < 0) {
          minutos--;
          segundos = 59;
        }
        
        if (minutos < 0) {
          horas--;
          minutos = 59;
        }        

        
        return {  horas, minutos, segundos };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (!nome_pretendente) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-gradient-to-br from-red-50 to-pink-50 py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,0,0,0.1),_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(255,0,0,0.1),_transparent_50%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-3 bg-red-100 text-red-800 px-4 py-2 rounded-full mb-6">
          <Clock className="w-5 h-5" />
          <span className="font-medium text-sm">Oferta Por Tempo Limitado</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto leading-tight">
          Essa Oportunidade Única Vai Expirar em Breve
        </h2>

        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Não deixe passar a chance de conquistar {nome_pretendente} com um guia 100% personalizado. 
          Essa oferta especial vai desaparecer em:
        </p>

        {/* Countdown */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-8">
          {[
            { label: 'Horas', value: formatNumber(timeLeft.horas) },
            { label: 'Minutos', value: formatNumber(timeLeft.minutos) },
            { label: 'Segundos', value: formatNumber(timeLeft.segundos) }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 md:p-6 text-center min-w-[80px] md:min-w-[100px]"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                {item.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="w-full md:w-auto bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white text-lg font-bold py-4 px-12 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
            QUERO CONQUISTAR {(nome_pretendente || '').toUpperCase()}
          </button>
          
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-green-500" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
            <span>Garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </div>
  );
}
