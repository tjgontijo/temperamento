'use client';

import { ShieldCheck } from 'lucide-react';

export function Oferta({ nome_pretendente }: { nome_pretendente: string }) {
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
