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
    setErro('');

    if (tipo === 'input_whatsapp') {
      const valorFormatado = formatBrazilianPhone(novoValor);
      setLocalValor(valorFormatado);
      onChange(valorFormatado);
      return;
    }
    
    if (tipo === 'input') {
      novoValor = novoValor.slice(0, 50);
      novoValor = novoValor.charAt(0).toUpperCase() + novoValor.slice(1);
      novoValor = novoValor.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
      if (novoValor.trim() !== novoValor.trim().split(/\s+/)[0]) {
        setErro('Por favor, digite apenas o primeiro nome');
      }
    }
    
    setLocalValor(novoValor);
    onChange(novoValor);
  };

  const handleNext = async () => {
    const valorTratado = localValor.trim();
    
    if (tipo === 'input') {
      if (!valorTratado) {
        setErro('Este campo é obrigatório');
        return;
      }

      if (valorTratado !== valorTratado.split(/\s+/)[0]) {
        setErro('Por favor, digite apenas o primeiro nome');
        return;
      }

      if (!/^[a-zA-ZÀ-ÿ]+$/.test(valorTratado)) {
        setErro('Por favor, use apenas letras');
        return;
      }

      if (valorTratado.length < 2) {
        setErro('O nome deve ter pelo menos 2 letras');
        return;
      }

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
      }
    } else if (tipo === 'input_whatsapp') {
      const apenasNumeros = cleanPhone(valorTratado);
      if (!validateBrazilianPhone(apenasNumeros)) {
        setErro('Digite um número de celular válido com DDD');
        return;
      }
    } else if (tipo === 'select') {
      if (!valorTratado) {
        setErro('Por favor, selecione uma opção');
        return;
      }
    } else if (tipo === 'textarea') {
      onNext?.();
      return;
    }
    
    if (valorTratado && onNext) {
      onNext();
    }
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gradient-to-b from-[#F2E8DC] via-white to-[#D2A878]/20 px-4 overflow-hidden">
      {/* Barra de Progresso */}
      <div className="w-full h-1 bg-[#F2E8DC]">
        <motion.div
          className="h-full bg-[#5B7B7A]"
          initial={{ width: 0 }}
          animate={{ width: `${progresso}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Container Principal */}
      <div className="w-full max-w-2xl mx-auto flex-1 flex flex-col justify-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="space-y-6 w-full"
        >
          {/* Elementos decorativos inspirados em mapas */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            {/* Grade de coordenadas */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, #8BA888 1px, transparent 1px), linear-gradient(to bottom, #8BA888 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />
            {/* Círculo concêntrico no canto superior direito */}
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full border-2 border-[#C85C40]" />
          </div>

          {/* Pergunta e Descrição */}
          <AnimatePresence mode="wait">
            <motion.div
              key={pergunta}
              className="space-y-3 text-left px-4"
            >
              <motion.h2 
                className="text-2xl font-medium text-[#5B7B7A] leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {pergunta}
              </motion.h2>
              {descricao && (
                <motion.p 
                  className="text-base font-normal text-[#AA8878] leading-relaxed"
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
                  <SelectTrigger className="w-full text-lg p-6 border-2 border-[#D2A878] rounded-xl focus:border-[#5B7B7A] focus:ring-[#5B7B7A] transition-colors text-center bg-white shadow-sm">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    {opcoes?.map((opcao) => (
                      <SelectItem key={opcao} value={opcao} className="text-lg p-4 text-[#5B7B7A] hover:bg-[#F2E8DC]">
                        {opcao}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {erro && (
                  <p className="text-sm text-[#C85C40] text-center animate-fadeIn">{erro}</p>
                )}
              </div>
            ) : tipo === 'textarea' ? (
              <div className="space-y-2">
                <Textarea
                  ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                  value={localValor}
                  onChange={(e) => handleChange(e.target.value)}
                  className={`w-full text-lg p-6 border-2 border-[#D2A878] rounded-xl focus:border-[#5B7B7A] focus:ring-[#5B7B7A] transition-colors min-h-[150px] resize-none bg-white shadow-sm`}
                  placeholder="Descreva com suas palavras..."
                  maxLength={500}
                />
                <div className="text-right text-sm text-[#AA8878]">
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
                  className={`w-full text-lg p-6 border-2 rounded-xl focus:ring-[#5B7B7A] transition-colors text-center bg-white shadow-sm ${
                    erro ? 'border-[#C85C40]' : 'border-[#D2A878] focus:border-[#5B7B7A]'
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
                  <p className="text-sm text-[#C85C40] text-center animate-fadeIn">{erro}</p>
                )}
              </div>
            ) : (
              <div className="space-y-2">
                <Input
                  ref={inputRef as React.RefObject<HTMLInputElement>}
                  type="text"
                  value={localValor}
                  onChange={(e) => handleChange(e.target.value)}
                  className={`w-full text-lg p-6 border-2 rounded-xl focus:ring-[#5B7B7A] transition-colors text-center bg-white shadow-sm ${
                    erro ? 'border-[#C85C40]' : 'border-[#D2A878] focus:border-[#5B7B7A]'
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
                  <p className="text-sm text-[#C85C40] text-center animate-fadeIn">{erro}</p>
                )}
              </div>
            )}
          </motion.div>

          {/* Botões de Navegação */}
          <motion.div
            className="flex flex-col w-full px-4 space-y-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={handleNext}
              disabled={tipo === 'input' ? (!localValor.trim() || validando) : validando}
              className="w-full bg-[#5B7B7A] hover:bg-[#5B7B7A]/90 h-14 text-base font-medium rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm disabled:opacity-50 disabled:cursor-not-allowed text-white"
            >
              {validando ? 'Validando...' : isUltima ? 'Iniciar Questionário' : 'Continuar'}
            </Button>

            {!isPrimeira && onBack && (
              <Button
                onClick={onBack}
                variant="ghost"
                className="w-full text-[#AA8878] hover:text-[#5B7B7A] hover:bg-[#F2E8DC] gap-2"
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
