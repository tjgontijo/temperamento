import { analisarCasalGroq } from './couple-analysis-groq';
import { analisarCasal } from './couple-analysis-openai';

interface ResultadoAnalise {
  titulo: string;
  subtitulo: string;
  paragrafos: string[];
}

interface DadosAnalise {
  nomeAutor: string;
  nomeParceiro: string;
  temperamentoParceiro: string;
  linguagemParceiro: string;
  temperamentoAutor: string;
  linguagemAutor: string;
  statusRelacionamento: string;
  filhos: string;
  whatsappNumber?: string; // Número do WhatsApp validado
}

interface RetornoAnalise {
  sucesso: boolean;
  resultado?: ResultadoAnalise;
  mensagem: string;
  provedor?: 'groq' | 'openai';
}

export async function realizarAnalise(
  dadosAnalise: DadosAnalise
): Promise<RetornoAnalise> {
  try {
    console.log('Tentando análise via Groq...');
    const resultadoGroq = await analisarCasalGroq(
      dadosAnalise.nomeAutor, 
      dadosAnalise.nomeParceiro,
      dadosAnalise.temperamentoParceiro,
      dadosAnalise.linguagemParceiro,
      dadosAnalise.temperamentoAutor,
      dadosAnalise.linguagemAutor,
      dadosAnalise.statusRelacionamento,
      dadosAnalise.filhos
    );
    
    return {
      sucesso: true,
      resultado: resultadoGroq,
      mensagem: 'Análise realizada com sucesso - G',
      provedor: 'groq'
    };
  } catch {
    console.log('Groq falhou, tentando OpenAI como fallback...');
    
    try {
      const resultadoOpenAI = await analisarCasal(
        dadosAnalise.nomeAutor, 
        dadosAnalise.nomeParceiro,
        dadosAnalise.temperamentoParceiro,
        dadosAnalise.linguagemParceiro,
        dadosAnalise.temperamentoAutor,
        dadosAnalise.linguagemAutor,
        dadosAnalise.statusRelacionamento,
        dadosAnalise.filhos
      );
      
      return {
        sucesso: true,
        resultado: resultadoOpenAI,
        mensagem: 'Análise realizada com sucesso - O',
        provedor: 'openai'
      };
    } catch (error) {
      console.error('Erro ao tentar análise via OpenAI:', error);
      throw error;
    }
  }
}
