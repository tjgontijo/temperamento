'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { formatBrazilianPhone, cleanPhone } from '@/lib/masks/phone';
import { validateBrazilianPhone } from '@/lib/validations/phone';
import { validarNomeRedundante } from '@/services/nome-validator/nome-validator';
import { ArrowLeft } from 'lucide-react';

interface InputContextoProps {
  pergunta: string;
  descricao?: string;
  tipo: 'input' | 'textarea' | 'select' | 'input_whatsapp';
  opcoes?: string[];
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
  opcoes,
  valor,
  onChange,
  onNext,
  onBack,
  progresso,
  isUltima = false,
  isPrimeira = false,
}: InputContextoProps) {
  const [erro, setErro] = useState('');
  const [localValor, setLocalValor] = useState(valor);
  const [validando, setValidando] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setLocalValor(valor);
  }, [valor]);

  useEffect(() => {
    if (inputRef.current && tipo !== 'select') {
      inputRef.current.focus();
    }
  }, [tipo]);

  const handleChange = (novoValor: string) => {
    setErro(''); // Limpa mensagem de erro ao digitar

    if (tipo === 'input_whatsapp') {
      // Apenas formata para exibição
      const valorFormatado = formatBrazilianPhone(novoValor);
      setLocalValor(valorFormatado);
      onChange(valorFormatado);
      return;
    }
    
    if (tipo === 'input') {
      // Limita a 50 caracteres
      novoValor = novoValor.slice(0, 50);
      // Converte primeira letra para maiúscula
      novoValor = novoValor.charAt(0).toUpperCase() + novoValor.slice(1);
      // Permite apenas letras e espaços
      novoValor = novoValor.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
      // Valida se tem mais de uma palavra
      if (novoValor.trim() !== novoValor.trim().split(/\s+/)[0]) {
        setErro('Por favor, digite apenas o primeiro nome');
      }
    }
    
    setLocalValor(novoValor);
    onChange(novoValor);
  };

  const handleNext = async () => {
    const valorTratado = localValor.trim();
    
    // Validação para input comum
    if (tipo === 'input') {
      if (!valorTratado) {
        setErro('Este campo é obrigatório');
        return;
      }

      // Valida se tem apenas uma palavra
      if (valorTratado !== valorTratado.split(/\s+/)[0]) {
        setErro('Por favor, digite apenas o primeiro nome');
        return;
      }

      // Valida se tem apenas letras
      if (!/^[a-zA-ZÀ-ÿ]+$/.test(valorTratado)) {
        setErro('Por favor, use apenas letras');
        return;
      }

      // Valida se tem pelo menos 2 caracteres
      if (valorTratado.length < 2) {
        setErro('O nome deve ter pelo menos 2 letras');
        return;
      }

      // Valida se tem no máximo 50 caracteres
      if (valorTratado.length > 50) {
        setErro('O nome deve ter no máximo 50 letras');
        return;
      }

      setValidando(true);
      try {
        const resultado = await validarNomeRedundante(valorTratado);
        if (!resultado.valido) {
          setErro(resultado.mensagem);
          setValidando(false);
          return;
        }
      } catch (error) {
        console.error('Erro na validação:', error);
      } finally {
        setValidando(false);
        // Continua mesmo com erro na validação para não bloquear o usuário
      }
    } else if (tipo === 'input_whatsapp') {
      // Valida usando apenas os números
      const apenasNumeros = cleanPhone(valorTratado);
      if (!validateBrazilianPhone(apenasNumeros)) {
        setErro('Digite um número de celular válido com DDD');
        return;
      }
    }
    
    // Validação para select
    if (tipo === 'select') {
      if (!valorTratado) {
        setErro('Por favor, selecione uma opção');
        return;
      }
    }

    // Validação para textarea
    if (tipo === 'textarea') {
      // Permite avanço mesmo com textarea vazio
      onNext?.();
      return;
    }
    
    if (valorTratado && onNext) {
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
          className="space-y-6 w-full"
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
            {tipo === 'select' ? (
              <div className="space-y-2">
                <Select value={localValor} onValueChange={handleChange}>
                  <SelectTrigger className="w-full text-lg p-6 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-purple-400 transition-colors text-center bg-white shadow-sm">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    {opcoes?.map((opcao) => (
                      <SelectItem key={opcao} value={opcao} className="text-lg p-4">
                        {opcao}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {erro && (
                  <p className="text-sm text-red-500 text-center animate-fadeIn">{erro}</p>
                )}
              </div>
            ) : tipo === 'textarea' ? (
              <div className="space-y-2">
                <Textarea
                  ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                  value={localValor}
                  onChange={(e) => handleChange(e.target.value)}
                  className={`w-full text-lg p-6 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-purple-400 transition-colors min-h-[150px] resize-none bg-white shadow-sm`}
                  placeholder="Descreva com suas palavras..."
                  maxLength={500}
                />
                <div className="text-right text-sm text-gray-400">
                  {localValor.length}/500 caracteres
                </div>
              </div>
            ) : tipo === 'input_whatsapp' ? (
              <div className="space-y-2">
                <Input
                  ref={inputRef as React.RefObject<HTMLInputElement>}
                  type="tel"
                  inputMode="numeric"
                  value={localValor}
                  onChange={(e) => handleChange(e.target.value)}
                  className={`w-full text-lg p-6 border-2 rounded-xl focus:ring-purple-400 transition-colors text-center bg-white shadow-sm ${
                    erro ? 'border-red-300' : 'border-gray-200 focus:border-purple-400'
                  }`}
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && localValor.trim()) {
                      handleNext();
                    }
                  }}
                />
                {erro && (
                  <p className="text-sm text-red-500 text-center animate-fadeIn">{erro}</p>
                )}
              </div>
            ) : (
              <div className="space-y-2">
                <Input
                  ref={inputRef as React.RefObject<HTMLInputElement>}
                  type="text"
                  value={localValor}
                  onChange={(e) => handleChange(e.target.value)}
                  className={`w-full text-lg p-6 border-2 rounded-xl focus:ring-purple-400 transition-colors text-center bg-white shadow-sm ${
                    erro ? 'border-red-300' : 'border-gray-200 focus:border-purple-400'
                  }`}
                  placeholder="Digite apenas o primeiro nome..."
                  maxLength={50}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && localValor.trim()) {
                      handleNext();
                    }
                  }}
                />
                {erro && (
                  <p className="text-sm text-red-500 text-center animate-fadeIn">{erro}</p>
                )}
              </div>
            )}
          </motion.div>

          {/* Botões de Navegação */}
          <motion.div
            className="flex flex-col w-full px-4 space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={handleNext}
              disabled={tipo === 'input' ? (!localValor.trim() || validando) : validando}
              className="w-full bg-purple-600 hover:bg-purple-700 h-14 text-base font-medium rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {validando ? 'Validando...' : isUltima ? 'Iniciar Questionário' : 'Continuar'}
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
