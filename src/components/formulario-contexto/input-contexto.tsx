'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';

interface InputContextoProps {
  pergunta: string;
  descricao?: string;
  tipo: 'input' | 'textarea';
  valor: string;
  onChange: (valor: string) => void;
  onNext?: () => void;
  onBack?: () => void;
  progresso: number;
  isUltima?: boolean;
  isPrimeira?: boolean;
}

export function InputContexto({
  pergunta,
  descricao,
  tipo,
  valor,
  onChange,
  onNext,
  onBack,
  progresso,
  isUltima = false,
  isPrimeira = false,
}: InputContextoProps) {
  const [localValor, setLocalValor] = useState(valor);

  // Atualiza o valor local quando o valor da prop muda
  useEffect(() => {
    setLocalValor(valor);
  }, [valor]);

  const handleChange = (novoValor: string) => {
    setLocalValor(novoValor);
    onChange(novoValor);
  };

  const handleNext = () => {
    if (localValor.trim() && onNext) {
      onNext();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 via-white to-pink-50 px-4">
      {/* Barra de Progresso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100">
        <motion.div
          className="h-full bg-purple-600"
          initial={{ width: 0 }}
          animate={{ width: `${progresso}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Container Principal */}
      <div className="w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="space-y-10 w-full"
        >
          {/* Pergunta e Descrição */}
          <AnimatePresence mode="wait">
            <motion.div
              key={pergunta}
              className="space-y-3 text-left px-4"
            >
              <motion.h2 
                className="text-2xl font-medium text-gray-900 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {pergunta}
              </motion.h2>
              {descricao && (
                <motion.p 
                  className="text-base font-normal text-gray-500 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {descricao}
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Campo de Input */}
          <motion.div
            className="space-y-4 w-full px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {tipo === 'textarea' ? (
              <textarea
                className="w-full text-lg p-6 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-purple-400 transition-colors min-h-[150px] resize-none bg-white shadow-sm"
                value={localValor}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Digite sua resposta aqui..."
              />
            ) : (
              <Input
                type="text"
                value={localValor}
                onChange={(e) => handleChange(e.target.value)}
                className="w-full text-lg p-6 h-14 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-purple-400 transition-colors text-center bg-white shadow-sm"
                placeholder="Digite sua resposta aqui..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && localValor.trim()) {
                    handleNext();
                  }
                }}
              />
            )}
          </motion.div>

          {/* Botões de Navegação */}
          <motion.div
            className="flex flex-col w-full px-4 pt-4 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={handleNext}
              disabled={!localValor.trim()}
              className="w-full bg-purple-600 hover:bg-purple-700 h-14 text-base font-medium rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUltima ? 'Iniciar Questionário' : 'Continuar'}
            </Button>

            {!isPrimeira && onBack && (
              <Button
                onClick={onBack}
                variant="ghost"
                className="w-full text-gray-400 hover:text-purple-600 hover:bg-purple-50 gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
