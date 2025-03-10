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
    <div className="modal bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#5B7B7A]">
          Receba sua análise no WhatsApp
        </h2>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <p className="text-gray-600 mb-4">
        Precisamos do seu número do WhatsApp para enviar a análise completa.
      </p>
      
      {message && (
        <p className="text-red-500 mb-4">
          {message}
        </p>
      )}
      
      <input
        ref={inputRef}
        type="tel"
        value={whatsappNumber}
        onChange={handleInputChange}
        placeholder="(00) 00000-0000"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B7B7A] mb-4"
      />
      
      {sending && (
        <div className="w-full h-2 bg-gray-200 rounded-full mb-4 overflow-hidden">
          <div 
            className="h-full bg-[#247742] transition-all duration-300 ease-in-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      
      <div className="flex justify-end space-x-2">
        <button 
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
        >
          Cancelar
        </button>
        <button 
          onClick={handleSubmit} 
          className="px-4 py-2 bg-[#247742] hover:bg-[#128C7E] text-white rounded-md"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ModalWhatsApp;