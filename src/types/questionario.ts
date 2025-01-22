import { Temperamentos, Linguagens } from '@/data/constantes';

// Tipos base para categorias
export type CategoriaTemperamento = keyof Temperamentos;
export type CategoriaLinguagem = keyof Linguagens;

// Tipos para questões
export interface QuestaoBase {
  id: string | number;
  tipo: string;
  pergunta: string;
  complemento?: string;
}

export interface QuestaoInput extends QuestaoBase {
  tipo: 'input';
}

export interface QuestaoMultiplaEscolha extends QuestaoBase {
  tipo: 'temperamento' | 'linguagem' | 'temperamento_autor' | 'linguagem_autor';
  respostas: Record<number, {
    texto: string;
    categoria: CategoriaTemperamento | CategoriaLinguagem;
  }>;
}

export type QuestaoType = QuestaoInput | QuestaoMultiplaEscolha;

// Tipos para resultados
export interface ResultadoItem {
  tipo: string;
  nome: string;
  pontuacao: number;
}

export interface ResultadoCategoria {
  predominante: ResultadoItem;
  secundario: ResultadoItem;
  totalRespostas: number;
}

export interface ResultadoCalculado {
  informacoes: {
    nomeAutor: string;
    nomePretendente: string;
  };
  temperamentoPretendente: ResultadoCategoria;
  linguagemAmorPretendente: ResultadoCategoria;
  temperamentoAutor: ResultadoCategoria;
  linguagemAmorAutor: ResultadoCategoria;
  analise: {
    titulo: string;
    subtitulo: string;
    paragrafos: string[];
  };
}
