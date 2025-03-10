import React, { useState, useEffect, useRef } from 'react';
import { whatsappService } from '@/services/evolution-api/whatsapp.service';
import { formatBrazilianPhone, cleanPhone } from '@/lib/masks/phone';
import { validateBrazilianPhone } from '@/lib/validations/phone';
import { webhookService, WebhookPayload } from '@/services/webhook/webhook.service';
import { realizarAnalise } from '@/services/couple-analysis/couple-analysis';
import { obterDadosContexto } from '@/utils/storage';

type DadosResultadoType = {
  temperamento: {
    principal: string;
    secundario: string;
    totalPontos: number;
    quantidadePrincipal: number;
    quantidadeSecundario: number;
    percentualPrincipal: number;
    percentualSecundario: number;
  };
  linguagem: {
    principal: string;
    secundario: string;
    totalPontos: number;
    quantidadePrincipal: number;
    quantidadeSecundario: number;
    percentualPrincipal: number;
    percentualSecundario: number;
  };
  temperamentoAutor: {
    principal: string;
    secundario: string;
    totalPontos: number;
    quantidadePrincipal: number;
    quantidadeSecundario: number;
    percentualPrincipal: number;
    percentualSecundario: number;
  };
  linguagemAutor: {
    principal: string;
    secundario: string;
    totalPontos: number;
    quantidadePrincipal: number;
    quantidadeSecundario: number;
    percentualPrincipal: number;
    percentualSecundario: number;
  };
  informacoes: {
    nome_autor: string;
    nome_parceiro: string;
    status_relacionamento: string;
    filhos: string;
  };
  timestamp: number;
  whatsappNumber: string;
  analise: {
    titulo: string;
    subtitulo: string;
    paragrafos: string[];
  };
};

interface ModalWhatsAppProps {
  onValidated: (whatsappNumber: string) => void;
  onClose: () => void;
}

const ModalWhatsApp = ({ onValidated, onClose }: ModalWhatsAppProps) => {
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [sending, setSending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
    } catch (error) {
      console.error('Erro ao verificar número de WhatsApp no localStorage:', error);
    }
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatBrazilianPhone(e.target.value);
    setWhatsappNumber(formattedValue);
  };

  const processarAnalise = async (whatsappNumber: string) => {
    try {
      // Limpar o número de telefone
      const cleanedNumber = cleanPhone(whatsappNumber);
      
      // Verificar se o número é um WhatsApp válido
      const response = await whatsappService.checkWhatsappNumber(cleanedNumber);
      if (!response.isWhatsapp) {
        setMessage('Este número não está registrado no WhatsApp.');
        return null;
      }

      // Obter dados do localStorage
      const dadosResultadoStorage: DadosResultadoType = JSON.parse(localStorage.getItem('resultados_questionario') as string);
      
      // Obter dados do contexto
      const contextoData = obterDadosContexto();
      if (!contextoData) {
        throw new Error('Dados de contexto não encontrados');
      }

      // Realizar análise do casal
      const analiseResult = await realizarAnalise({
        nomeAutor: contextoData.nome_autor,
        nomeParceiro: contextoData.nome_parceiro,
        temperamentoParceiro: dadosResultadoStorage.temperamento.principal,
        linguagemParceiro: dadosResultadoStorage.linguagem.principal,
        temperamentoAutor: dadosResultadoStorage.temperamentoAutor.principal,
        linguagemAutor: dadosResultadoStorage.linguagemAutor.principal,
        statusRelacionamento: contextoData.status_relacionamento,
        filhos: contextoData.filhos
      });

      if (!analiseResult.sucesso || !analiseResult.resultado) {
        throw new Error('Falha ao realizar análise do casal');
      }

      // Atualizar o objeto dadosResultado com o número de WhatsApp e a análise
      const dadosAtualizados = {
        ...dadosResultadoStorage,
        whatsappNumber: cleanedNumber,
        analise: analiseResult.resultado
      };

      // Salvar os dados atualizados no localStorage
      localStorage.setItem('resultados_questionario', JSON.stringify(dadosAtualizados));

      const payload: WebhookPayload = {
        resultados: {
          temperamento: {
            principal: dadosResultadoStorage.temperamento.principal,
            secundario: dadosResultadoStorage.temperamento.secundario,
            totalPontos: dadosResultadoStorage.temperamento.totalPontos,
            quantidadePrincipal: dadosResultadoStorage.temperamento.quantidadePrincipal,
            quantidadeSecundario: dadosResultadoStorage.temperamento.quantidadeSecundario,
            percentualPrincipal: dadosResultadoStorage.temperamento.percentualPrincipal,
            percentualSecundario: dadosResultadoStorage.temperamento.percentualSecundario,
          },
          linguagem: {
            principal: dadosResultadoStorage.linguagem.principal,
            secundario: dadosResultadoStorage.linguagem.secundario,
            totalPontos: dadosResultadoStorage.linguagem.totalPontos,
            quantidadePrincipal: dadosResultadoStorage.linguagem.quantidadePrincipal,
            quantidadeSecundario: dadosResultadoStorage.linguagem.quantidadeSecundario,
            percentualPrincipal: dadosResultadoStorage.linguagem.percentualPrincipal,
            percentualSecundario: dadosResultadoStorage.linguagem.percentualSecundario,
          },
          temperamentoAutor: {
            principal: dadosResultadoStorage.temperamentoAutor.principal,
            secundario: dadosResultadoStorage.temperamentoAutor.secundario,
            totalPontos: dadosResultadoStorage.temperamentoAutor.totalPontos,
            quantidadePrincipal: dadosResultadoStorage.temperamentoAutor.quantidadePrincipal,
            quantidadeSecundario: dadosResultadoStorage.temperamentoAutor.quantidadeSecundario,
            percentualPrincipal: dadosResultadoStorage.temperamentoAutor.percentualPrincipal,
            percentualSecundario: dadosResultadoStorage.temperamentoAutor.percentualSecundario,
          },
          linguagemAutor: {
            principal: dadosResultadoStorage.linguagemAutor.principal,
            secundario: dadosResultadoStorage.linguagemAutor.secundario,
            totalPontos: dadosResultadoStorage.linguagemAutor.totalPontos,
            quantidadePrincipal: dadosResultadoStorage.linguagemAutor.quantidadePrincipal,
            quantidadeSecundario: dadosResultadoStorage.linguagemAutor.quantidadeSecundario,
            percentualPrincipal: dadosResultadoStorage.linguagemAutor.percentualPrincipal,
            percentualSecundario: dadosResultadoStorage.linguagemAutor.percentualSecundario,
          },           
          informacoes: {
            nome_autor: contextoData.nome_autor,
            nome_parceiro: contextoData.nome_parceiro,
            status_relacionamento: contextoData.status_relacionamento,
            filhos: contextoData.filhos,
            whatsappNumber: cleanedNumber,              
          },            
          analise: {
            titulo: analiseResult.resultado.titulo,
            subtitulo: analiseResult.resultado.subtitulo,
            paragrafos: analiseResult.resultado.paragrafos
          },
          timestamp: dadosResultadoStorage.timestamp
        }
      };

      // Enviar para o webhook
      try {
        await webhookService.enviarResultados(payload);
      } catch (error) {
        console.error('Erro ao enviar para webhook:', error);
      }

      return analiseResult.resultado;
    } catch (error) {
      console.error('Erro ao processar análise:', error);
      setMessage('Ocorreu um erro ao processar sua análise. Por favor, tente novamente mais tarde.');
      return null;
    }
  };

  const handleSubmit = async () => {
    setSending(true);
    setProgress(0);
    setMessage('');

    // Simulando a barra de progresso
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    // Primeiro validamos com a função local
    if (!validateBrazilianPhone(whatsappNumber)) {
      setSending(false);
      setMessage('Por favor, insira um número de telefone brasileiro válido.');
      return;
    }

    try {
      // Processar a análise e enviar para o WhatsApp
      const resultado = await processarAnalise(whatsappNumber);
      
      if (resultado) {
        // Se a análise foi bem-sucedida, chamamos o callback onValidated
        onValidated(cleanPhone(whatsappNumber));
        
        // Fechar o modal após 3 segundos
        setTimeout(() => {
          setSending(false);
          setMessage('Número registrado com sucesso!');
          onClose();
        }, 3000);
      } else {
        setSending(false);
      }
    } catch (error) {
      setSending(false);
      setMessage('Ocorreu um erro ao validar o número. Tente novamente.');
      console.error('Erro ao validar WhatsApp:', error);
    }
  };

  return (
    <div className="modal bg-gradient-to-br from-white to-[#F2E8DC] rounded-2xl shadow-2xl p-8 max-w-md w-full border-t-4 border-[#8BA888] animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif font-bold text-[#5B7B7A] flex items-center">
          <span className="text-[#C85C40] mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6" fill="currentColor">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          </span>
          Receba sua análise no WhatsApp
        </h2>
        <button 
          onClick={onClose}
          className="text-[#AA8878] hover:text-[#5B7B7A] transition-colors duration-300"
          aria-label="Fechar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="mb-6 bg-white bg-opacity-50 p-4 rounded-lg border-l-4 border-[#D2A878]">
        <p className="text-[#AA8878] text-sm leading-relaxed">
          Para completar o envio da sua análise personalizada, precisamos do seu número de WhatsApp. 
          Sua análise e dicas práticas serão enviadas imediatamente você começar a aplicar.
        </p>
      </div>
      
      {message && (
        <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded">
          <p className="text-red-600 text-sm flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {message}
          </p>
        </div>
      )}
      
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-[#8BA888]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="tel"
          value={whatsappNumber}
          onChange={handleInputChange}
          placeholder="(00) 00000-0000"
          className="w-full pl-10 pr-4 py-3 border-2 border-[#D2A878] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BA888] focus:border-transparent transition-all duration-300"
        />
      </div>
      
      {sending && (
        <div className="w-full h-3 bg-gray-200 rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#8BA888] to-[#5B7B7A] transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      
      <div className="flex justify-end space-x-3">
        <button 
          onClick={onClose}
          className="px-5 py-3 border-2 border-[#AA8878] rounded-lg text-[#AA8878] hover:bg-[#F2E8DC] transition-colors duration-300 font-medium"
        >
          Cancelar
        </button>
        <button 
          onClick={handleSubmit}
          disabled={sending} 
          className={`px-5 py-3 bg-gradient-to-r from-[#8BA888] to-[#5B7B7A] hover:from-[#5B7B7A] hover:to-[#8BA888] text-white rounded-lg font-medium transition-all duration-300 flex items-center ${sending ? 'opacity-70 cursor-not-allowed' : 'shadow-lg hover:shadow-xl'}`}
        >
          {sending ? 'Enviando...' : 'Enviar'}
          <svg className={`ml-2 w-5 h-5 ${sending ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {sending ? 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /> : 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            }
          </svg>
        </button>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-xs text-[#AA8878] italic">
          Seus dados estão protegidos e não serão compartilhados com terceiros.
        </p>
      </div>
    </div>
  );
};

export default ModalWhatsApp;