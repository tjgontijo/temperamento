import { temperamento } from './temperamento';
import { linguagem } from './linguagem';
import { temperamento_autor } from './temperamento-autor';
import { linguagem_autor } from './linguagem-autor';

export interface QuestaoBase {
  id: number;
  tipo: string;
  pergunta: string;
  complemento?: string;
  peso: number;
  respostas: {
    [key: number]: {
      texto: string;
      categoria: string;
    }
  };
}

export const todasQuestoes = [
  ...temperamento,
  ...linguagem,
  ...temperamento_autor,
  ...linguagem_autor
];

export { 
  temperamento, 
  linguagem, 
  temperamento_autor, 
  linguagem_autor 
};
