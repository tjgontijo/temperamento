import { QuestaoType } from '@/types/questionario';

const STORAGE_KEY = 'questionario';
const INFO_KEY = 'informacoes';

interface StorageData {
  questoes: QuestaoType[];
  respostas: Record<string, string>;
  informacoes: {
    nome_autor?: string;
  };
}

export const salvarInformacoes = (informacoes: { nome_autor: string }) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(informacoes));
};

export const salvarResposta = (questao: QuestaoType, resposta: string) => {
  const data = obterDados();
  const chaveResposta = questao.tipo === 'input' ? 
    `input_${questao.id}` : 
    `${questao.tipo}_${questao.id}`;

  const novasRespostas = {
    ...data.respostas,
    [chaveResposta]: resposta
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    ...data,
    respostas: novasRespostas
  }));
};

export const salvarQuestoes = (questoes: QuestaoType[]) => {
  const data = obterDados();
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    ...data,
    questoes
  }));
};

export const obterDados = (): StorageData => {
  const questionarioData = localStorage.getItem(STORAGE_KEY);
  const informacoesData = localStorage.getItem(INFO_KEY);

  const baseData = {
    questoes: [],
    respostas: {},
    informacoes: {}
  };

  if (!questionarioData && !informacoesData) {
    return baseData;
  }

  const questionario = questionarioData ? JSON.parse(questionarioData) : baseData;
  const informacoes = informacoesData ? JSON.parse(informacoesData) : {};

  return {
    ...questionario,
    informacoes
  };
};

export const limparDados = () => {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(INFO_KEY);
};

export const obterResposta = (questao: QuestaoType): string | undefined => {
  const data = obterDados();
  const chaveResposta = questao.tipo === 'input' ? 
    `input_${questao.id}` : 
    `${questao.tipo}_${questao.id}`;
  return data.respostas[chaveResposta];
};
