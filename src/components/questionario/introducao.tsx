'use client';

import { Heart, BrainCircuit, Clock, Focus } from 'lucide-react';

interface IntroducaoProps {
  onStart: () => void;
}

export function Introducao({ onStart }: IntroducaoProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center">
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Bem-vinda à Análise de Conexão Emocional
            </h1>
            <p className="text-xl text-gray-600">
              Este teste foi desenvolvido com base científica para que mulheres como você consiga entender melhor seu parceiro. E para obter os melhores resultados, por favor, siga as recomendações abaixo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Recomendação 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-pink-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Seja Sincera</h2>
              </div>
              <p className="text-gray-600">
                Insira as informações solicitadas com o máximo de atenção e veracidade. Isso é fundamental para uma análise 
                precisa e personalizada da compatibilidade entre vocês.
              </p>
            </div>

            {/* Recomendação 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center mb-4">
                <BrainCircuit className="w-8 h-8 text-purple-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Foco Total</h2>
              </div>
              <p className="text-gray-600">
                Encontre um local tranquilo e silencioso. Sua concentração é essencial 
                para respostas mais precisas e resultados mais certeiros.
              </p>
            </div>

            {/* Recomendação 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Reserve Tempo</h2>
              </div>
              <p className="text-gray-600">
                O questionário leva cerca de 5 minutos. Dedique esse tempo sem 
                interrupções para uma experiência mais proveitosa.
              </p>
            </div>

            {/* Recomendação 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center mb-4">
                <Focus className="w-8 h-8 text-green-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Evite Distrações</h2>
              </div>
              <p className="text-gray-600">
                Coloque o celular em modo <strong>Não Perturbe</strong> e se concentre totalmente em suas respostas. 
                Cada resposta é importante para sua análise final.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onStart}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            >
              Começar Análise
              <Heart className="ml-2 w-5 h-5" />
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Ao começar, você concorda em fornecer informações verdadeiras para o melhor resultado da análise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
