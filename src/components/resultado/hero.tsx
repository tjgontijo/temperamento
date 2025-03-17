'use client';

import React from 'react';

interface HeroProps {
  nome_autor: string;
  nome_parceiro: string;
}

export function Hero({ nome_autor, nome_parceiro }: HeroProps) {
  if (!nome_autor || !nome_parceiro) {
    return null;
  }

  return (
    <div className="bg-gradient-to-b from-[#F2E8DC] to-white min-h-[80vh] flex items-center justify-center pt-12 pb-20 px-4 md:px-8 mb-8 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#8BA888] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D2A878] opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-[#5B7B7A] opacity-5 rounded-full"></div>
      <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-[#C85C40] opacity-5 rounded-full"></div>
      
      <div className="max-w-4xl w-full mx-auto z-10">
        <div className="p-4 md:p-8 relative bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-xl border border-[#D2A878] border-opacity-20">
          <div className="text-center">
            {/* Ícone decorativo */}
            <div className="mx-auto w-16 h-16 mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8BA888] to-[#5B7B7A] rounded-full opacity-20 animate-pulse"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#5B7B7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            
            <h1 className="text-xl md:text-3xl lg:text-5xl font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#5B7B7A] to-[#8BA888] relative inline-block">
              {nome_autor}, sua análise está pronta!
              <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D2A878] to-transparent"></span>
            </h1>
            
            <div className="mb-10 px-4 py-6 bg-white rounded-xl shadow-sm">
              <h2 className="text-xl md:text-2xl font-medium text-[#AA8878] leading-relaxed">
                Com base na metodologia de <span className="font-serif font-semibold text-[#C85C40]">Dr. Gary Chapman</span> e <span className="font-serif font-semibold text-[#C85C40]">Tim LaHaye</span>, identificamos o temperamento e a linguagem do amor de <span className="font-serif font-semibold text-[#5B7B7A] border-b-2 border-[#D2A878] pb-0.5">{nome_parceiro}</span>.
              </h2>
            </div>
            
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-0.5 bg-[#D2A878]"></div>
              <div className="mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C85C40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="w-12 h-0.5 bg-[#D2A878]"></div>
            </div>
            
            <p className="text-lg text-[#5B7B7A] mb-6 italic font-medium px-6 py-3 inline-block bg-[#F2E8DC] rounded-full shadow-inner">
              Veja abaixo os principais insights do seu resultado!
              <span className="inline-block ml-2 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
