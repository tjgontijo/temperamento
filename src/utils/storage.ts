import { QuestaoType } from '@/types/questionario';

const STORAGE_KEY = 'questionario';

interface StorageData {
  questoes: QuestaoType[];
  respostas: Record<string, string>;
}

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
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    return {
      questoes: [],
      respostas: {}
    };
  }
  return JSON.parse(data);
};

export const limparDados = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const obterResposta = (questao: QuestaoType): string | undefined => {
  const data = obterDados();
  const chaveResposta = questao.tipo === 'input' ? 
    `input_${questao.id}` : 
    `${questao.tipo}_${questao.id}`;
  return data.respostas[chaveResposta];
};
