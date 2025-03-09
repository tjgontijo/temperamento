'use client';

import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck } from 'lucide-react';
import { obterResultadosQuestionario } from '@/utils/storage';

export function Urgencia({ nome_parceiro }: { nome_parceiro: string }) {
  const [timeLeft, setTimeLeft] = useState({
    horas: 0,
    minutos: 20,
    segundos: 0
  });

  useEffect(() => {
    // Obtém o timestamp inicial dos resultados
    const resultados = obterResultadosQuestionario();
    const timestampInicial = resultados?.timestamp || Date.now();
    
    // Define o tempo limite como 20 minutos (1200000 ms) após o timestamp inicial
    const tempoLimite = timestampInicial + 1200000;

    const calcularTempoRestante = () => {
      const agora = Date.now();
      const diferenca = Math.max(0, tempoLimite - agora);
      
      const horas = Math.floor(diferenca / (1000 * 60 * 60));
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
      
      return { horas, minutos, segundos };
    };

    // Atualiza o tempo inicial
    setTimeLeft(calcularTempoRestante());

    const timer = setInterval(() => {
      const tempoRestante = calcularTempoRestante();
      setTimeLeft(tempoRestante);

      // Se o tempo acabou, limpa o intervalo
      if (tempoRestante.horas === 0 && tempoRestante.minutos === 0 && tempoRestante.segundos === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (!nome_parceiro) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="relative bg-gradient-to-b from-[#8BA888] via-[#8BA888]/90 to-[#5B7B7A] py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-3 bg-[#C85C40] text-[#F2E8DC] px-4 py-2 rounded-full mb-6">
          <Clock className="w-5 h-5" />
          <span className="font-medium text-sm">Oferta Por Tempo Limitado</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F2E8DC] mb-6 max-w-3xl mx-auto leading-tight">
          Essa <span className="text-[#C85C40]">Oportunidade Única</span> Vai Expirar em Breve
        </h2>

        <p className="text-lg text-[#F2E8DC]/90 mb-8 max-w-2xl mx-auto">
          Não deixe passar a chance de conquistar {nome_parceiro} com um guia 100% personalizado. 
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
              className="relative bg-white/10 backdrop-blur-sm p-4 md:p-6 text-center min-w-[80px] md:min-w-[100px] border border-[#F2E8DC]/20 rounded-lg"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#F2E8DC] mb-2">
                {item.value}
              </div>
              <div className="text-xs md:text-sm text-[#F2E8DC]/80 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* <a 
            href="#plano-vip"
            className="utmify w-full md:w-auto bg-gradient-to-r from-[#C85C40] to-[#AA8878] hover:from-[#C85C40] hover:to-[#C85C40] text-[#F2E8DC] text-lg font-bold py-4 px-12 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
          >
            QUERO FORTALECER MEU RELACIONAMENTO COM {(nome_parceiro || '').toUpperCase()}
          </a> */}
          
          <div className="text-sm text-[#F2E8DC]/80 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#F2E8DC]" />
            <span>7 dias de garantia incondicional</span>
          </div>
        </div>
      </div>
    </div>
  );
}
