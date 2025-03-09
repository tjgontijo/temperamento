'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface QuestaoProps {
  pergunta: string;
  complemento?: string;
  tipo: string;
  opcoes?: Array<{ 
    valor: string; 
    texto: string;
  }>;
  respostaSelecionada: string;
  onResposta: (valor: string) => void;
  onBack?: () => void;
  progresso: number;
  isUltima?: boolean;
  isPrimeira?: boolean;
  nomePretendente?: string;
  isLoading?: boolean;
}

export function Questao({
  pergunta,
  complemento,
  tipo,
  opcoes = [],
  respostaSelecionada,
  onResposta,
  onBack,
  progresso,
  isUltima = false,
  isPrimeira = false,
  nomePretendente,
  isLoading = false,
}: QuestaoProps) {
  const [localValor, setLocalValor] = useState(respostaSelecionada);

  // Atualiza o valor local quando a pergunta ou valor mudam
  useEffect(() => {
    setLocalValor(respostaSelecionada);
  }, [pergunta, respostaSelecionada]);

  const handleChange = (novoValor: string) => {
    setLocalValor(novoValor);
    onResposta(novoValor);
    // Rola a página para o topo suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpcaoClick = (valor: string) => {
    setLocalValor(valor);
    onResposta(valor);
    // Rola a página para o topo suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Formata o texto substituindo as variáveis
  const formatarTextoComDestaque = (texto: string, nomePretendente?: string) => {
    if (!texto) return texto;

    const nomeDestacado = nomePretendente || 'ele';
    
    return texto.replace(
      /\{nome\}/g, 
      `<span class="font-bold text-[#C85C40]">${nomeDestacado}</span>`
    );
  };

  // Garante que opcoes é sempre um array
  const opcoesArray = Array.isArray(opcoes) ? opcoes : [];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#F2E8DC] via-white to-[#D2A878] px-4 py-20">
      {/* Barra de Progresso Fixa no Topo */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#F2E8DC]">
        <motion.div
          className="h-full bg-[#5B7B7A]"
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
              key={pergunta}
              className="space-y-3 text-left px-4"
            >
              <motion.h2 
                className="text-lg font-medium text-[#5B7B7A] leading-tight"
                dangerouslySetInnerHTML={{ 
                  __html: formatarTextoComDestaque(
                    pergunta, 
                    nomePretendente
                  ) 
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              {complemento && (
                <motion.p 
                  className="text-base font-normal text-[#AA8878] leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: formatarTextoComDestaque(
                      complemento, 
                      nomePretendente
                    ) 
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Campo de Input ou Opções */}
          <motion.div
            className="space-y-4 w-full px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {tipo === 'input' || tipo === 'textarea' ? (
              tipo === 'textarea' ? (
                <textarea
                  className="w-full text-lg p-4 border-2 border-[#D2A878] rounded-xl focus:border-[#5B7B7A] focus:ring-[#5B7B7A] transition-colors min-h-[150px] resize-none bg-white shadow-sm"
                  value={localValor}
                  onChange={(e) => handleChange(e.target.value)}
                  placeholder="Digite sua resposta aqui..."
                />
              ) : (
                <Input
                  type="text"
                  value={localValor}
                  onChange={(e) => handleChange(e.target.value)}
                  className="w-full text-lg p-4 h-12 border-2 border-[#D2A878] rounded-xl focus:border-[#5B7B7A] focus:ring-[#5B7B7A] transition-colors text-center bg-white shadow-sm"
                  placeholder="Digite sua resposta aqui..."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && localValor.trim()) {
                      // handleNext();
                    }
                  }}
                />
              )
            ) : (
              <div className="grid gap-2">
                {opcoesArray.map((opcao) => (
                  <Button
                    key={opcao.valor}
                    onClick={() => handleOpcaoClick(opcao.valor)}
                    variant="questionario"
                    className={`w-full px-4 py-3 h-auto text-left flex items-start justify-start whitespace-normal font-normal text-sm ${
                      opcao.valor === localValor
                        ? 'border-2 border-[#5B7B7A] text-[#5B7B7A] bg-[#F2E8DC]'
                        : 'bg-white text-[#AA8878] border-2 border-[#D2A878] hover:bg-[#F2E8DC]'
                    }`}
                  >
                    <span dangerouslySetInnerHTML={{ 
                      __html: formatarTextoComDestaque(
                        opcao.texto, 
                        nomePretendente
                      ) 
                    }} />
                  </Button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Botões de Navegação */}
          <motion.div
            className="flex flex-col w-full px-4 pt-4 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {tipo === 'input' || tipo === 'textarea' ? (
              <Button
                // onClick={handleNext}
                disabled={!localValor.trim() || isLoading}
                className="w-full bg-gradient-to-r from-[#8BA888] to-[#5B7B7A] h-14 text-base font-medium rounded-xl transition-all transform active:scale-[0.98] shadow-sm disabled:opacity-50 disabled:cursor-not-allowed text-white"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : isUltima ? (
                  'Finalizar'
                ) : (
                  'Continuar'
                )}
              </Button>
            ) : null}

            {!isPrimeira && onBack && (
              <Button
                onClick={onBack}
                variant="ghost"
                className="w-full text-[#AA8878] gap-2 transition-colors bg-transparent hover:bg-transparent active:bg-transparent"
              >
                <ArrowLeft size={20} />
                Voltar
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
