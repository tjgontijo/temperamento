'use client';

import { Heart, BrainCircuit, Clock, Focus } from 'lucide-react';

interface IntroducaoProps {
  onStart: () => void;
}

export function Introducao({ onStart }: IntroducaoProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2E8DC] to-[#D2A878] flex items-center">
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-2xl font-bold text-[#5B7B7A] mb-4 uppercase">
              Bem-vinda à Análise de Conexão Emocional
            </h1>
            <p className="text-xl text-[#AA8878]">
              Este teste foi desenvolvido com base científica para que mulheres como você consiga entender melhor seu parceiro. E para obter os melhores resultados, por favor, siga as recomendações abaixo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Recomendação 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-[#C85C40] mr-3" />
                <h2 className="text-xl font-semibold text-[#5B7B7A]">Seja Sincera</h2>
              </div>
              <p className="text-[#AA8878]">
                Insira as informações solicitadas com o máximo de atenção e veracidade. Isso é fundamental para uma análise 
                precisa e personalizada da compatibilidade entre vocês.
              </p>
            </div>

            {/* Recomendação 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center mb-4">
                <BrainCircuit className="w-8 h-8 text-[#8BA888] mr-3" />
                <h2 className="text-xl font-semibold text-[#5B7B7A]">Foco Total</h2>
              </div>
              <p className="text-[#AA8878]">
                Encontre um local tranquilo e silencioso. Sua concentração é essencial 
                para respostas mais precisas e resultados mais certeiros.
              </p>
            </div>

            {/* Recomendação 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-[#D2A878] mr-3" />
                <h2 className="text-xl font-semibold text-[#5B7B7A]">Reserve Tempo</h2>
              </div>
              <p className="text-[#AA8878]">
                O questionário leva cerca de 2 minutos. Dedique esse tempo sem 
                interrupções para uma experiência mais proveitosa.
              </p>
            </div>

            {/* Recomendação 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center mb-4">
                <Focus className="w-8 h-8 text-[#8BA888] mr-3" />
                <h2 className="text-xl font-semibold text-[#5B7B7A]">Evite Distrações</h2>
              </div>
              <p className="text-[#AA8878]">
                Coloque o celular em modo <strong>Não Perturbe</strong> e se concentre totalmente em suas respostas. 
                Cada resposta é importante para sua análise final.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onStart}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8BA888] to-[#5B7B7A] text-white text-lg font-semibold rounded-lg shadow-lg hover:from-[#5B7B7A] hover:to-[#8BA888] transition-all duration-200 transform hover:scale-105"
            >
              Começar Análise
              <Heart className="ml-2 w-5 h-5" />
            </button>
            <p className="mt-4 text-sm text-[#AA8878]">
              Ao começar, você concorda em fornecer informações verdadeiras para o melhor resultado da análise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
