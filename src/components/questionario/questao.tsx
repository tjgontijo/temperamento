import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface QuestaoProps {
  pergunta: string;
  complemento?: string;
  tipo: 'input' | 'temperamento' | 'linguagem' | 'temperamento_autor' | 'linguagem_autor';
  opcoes?: Array<{ 
    valor: number; 
    texto: string;
  }>;
  valor: string;
  onChange: (valor: string) => void;
  onNext: () => void;
  onBack?: () => void;
  progresso: number;
  isUltima?: boolean;
  isPrimeira?: boolean;
}

export function Questao({
  pergunta,
  complemento,
  tipo,
  opcoes = [],
  valor,
  onChange,
  onNext,
  onBack,
  progresso,
  isUltima = false,
  isPrimeira = false,
}: QuestaoProps) {
  const [localValor, setLocalValor] = useState(valor);

  // Atualiza o valor local quando a pergunta ou valor mudam
  useEffect(() => {
    setLocalValor(valor);
  }, [pergunta, valor]);

  const handleNext = () => {
    onNext();
  };

  const handleOpcaoClick = (novoValor: number) => {
    const valorString = String(novoValor);
    setLocalValor(valorString);
    onChange(valorString);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 via-white to-pink-50 px-4">
      {/* Barra de Progresso Fixa no Topo */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100">
        <motion.div
          className="h-full bg-purple-600"
          initial={{ width: 0 }}
          animate={{ width: `${progresso}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Container Principal - Centralizado com largura máxima */}
      <div className="w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="space-y-10 w-full"
        >
          {/* Pergunta e Complemento */}
          <AnimatePresence mode="wait">
            <motion.div
              key={pergunta} // Força nova animação quando a pergunta muda
              className="space-y-3 text-left px-4"
            >
              <motion.h2 
                className="text-2xl font-medium text-gray-900 leading-tight"
                dangerouslySetInnerHTML={{ __html: pergunta }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.2,
                  ease: "easeOut"
                }}
              />
              {complemento && (
                <motion.p 
                  className="text-base font-normal text-gray-500 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: complemento }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 0.2,
                    delay: 0.05,
                    ease: "easeOut"
                  }}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Área de Resposta */}
          <div className="space-y-6 w-full">
            {tipo === 'input' ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <Input
                  value={localValor}
                  onChange={(e) => {
                    const novoValor = e.target.value;
                    setLocalValor(novoValor);
                    onChange(novoValor);
                  }}
                  placeholder="Digite sua resposta"
                  className="w-full text-lg p-6 h-14 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-purple-400 transition-colors text-center bg-white shadow-sm"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && localValor.trim()) {
                      handleNext();
                    }
                  }}
                />
                <Button
                  onClick={handleNext}
                  disabled={!localValor.trim()}
                  className="w-full bg-purple-600 hover:bg-purple-700 h-14 text-base font-medium rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isUltima ? 'Ver Resultado' : 'Continuar'}
                </Button>
              </motion.div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={pergunta} // Isso força uma nova animação quando a pergunta muda
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid gap-3"
                >
                  {opcoes.map((opcao) => (
                    <motion.div
                      key={opcao.valor}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: 1,
                        transition: {
                          duration: 0.2,
                          delay: opcao.valor * 0.05
                        }
                      }}
                      exit={{ 
                        opacity: 0,
                        transition: {
                          duration: 0.1,
                          delay: (opcoes.length - opcao.valor - 1) * 0.02
                        }
                      }}
                    >
                      <Button
                        onClick={() => handleOpcaoClick(opcao.valor)}
                        variant={localValor === String(opcao.valor) ? "default" : "outline"}
                        className={`w-full min-h-[60px] text-left justify-start p-4 text-base font-normal transition-all transform hover:scale-[1.02] active:scale-[0.98] whitespace-normal shadow-sm ${
                          localValor === String(opcao.valor)
                            ? 'bg-purple-600 text-white hover:bg-purple-700 border-none' 
                            : 'hover:bg-white hover:border-purple-200 bg-white'
                        }`}
                      >
                        {opcao.texto}
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </motion.div>

        {/* Botão Voltar */}
        {!isPrimeira && onBack && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="mt-8 flex justify-center"
          >
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-gray-400 hover:text-purple-600 hover:bg-purple-50 gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
