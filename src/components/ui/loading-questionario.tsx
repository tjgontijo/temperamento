'use client';

export function LoadingQuestionario() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Círculo externo animado */}
          <div className="absolute inset-0 border-4 border-purple-200 rounded-full animate-pulse" />
          
          {/* Círculo do meio girando */}
          <div className="absolute inset-2 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin" />
          
          {/* Coração pulsando no centro */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-purple-600 animate-bounce" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Preparando seu questionário
        </h2>
        <p className="text-gray-600">
          Estamos personalizando as perguntas para você...
        </p>
      </div>
    </div>
  );
}
