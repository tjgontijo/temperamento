import { QuestaoInput } from '@/types/questionario';

export interface Questao {
  id: string;
  tipo: string;
  pergunta: string;
  complemento?: string;
}

export const informacoes: QuestaoInput[] = [
  {
    id: 'nome_autor',
    tipo: 'input',
    pergunta: 'Qual é o seu nome?',
    complemento: 'Digite apenas o primeiro nome'
  },
  {
    id: 'nome_pretendente',
    tipo: 'input',
    pergunta: 'Qual é o nome do seu pretendente?',
    complemento: 'Digite apenas o primeiro nome do seu pretendente'
  }
];
