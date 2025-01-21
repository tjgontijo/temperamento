export type CategoriaTemperamento = 'sanguinio' | 'colerico' | 'melancolico' | 'fleumatico';
export type CategoriaLinguagem = 'palavra_afirmacao' | 'tempo_qualidade' | 'presentes' | 'atos_servico' | 'toque_fisico';

export type ContadoresTemperamento = {
  [K in CategoriaTemperamento]: number;
};

export type ContadoresLinguagem = {
  [K in CategoriaLinguagem]: number;
};

export interface Contadores {
  temperamento: ContadoresTemperamento;
  temperamentoAutor: ContadoresTemperamento;
  linguagem: ContadoresLinguagem;
  linguagemAutor: ContadoresLinguagem;
}

export interface QuestaoBase {
  id: string | number;
  tipo: string;
  pergunta: string;
  complemento?: string;
}

export interface QuestaoInput extends QuestaoBase {
  tipo: 'input';
}

export interface Resposta {
  texto: string;
  categoria?: string;
}

export interface QuestaoTemperamento extends QuestaoBase {
  tipo: 'temperamento' | 'linguagem' | 'temperamento_autor' | 'linguagem_autor';
  respostas: Record<number, { texto: string; categoria?: string }>;
}

export interface QuestaoLinguagem extends QuestaoBase {
  tipo: 'linguagem' | 'linguagem_autor';
  respostas: Resposta[];
}

export type QuestaoType = QuestaoInput | QuestaoTemperamento | QuestaoLinguagem;

export interface TemperamentoResultado {
  valor: number;
  segundo: number;
  total: number;
}

export interface LinguagemResultado {
  valor: number;
  segundo: number;
  total: number;
}

export interface ResultadoProps {
  nome: string;
  pretendente: string;
  questoes: QuestaoType[];
  respostas: Record<string | number, string>;
  contadores: Contadores;
}

export interface ResultadoCalculado {
  informacoes: {
    nome_autor: string;
    nome_pretendente: string;
  };
  temperamento: TemperamentoResultado;
  linguagem: LinguagemResultado;
  temperamento_autor: TemperamentoResultado;
  linguagem_autor: LinguagemResultado;
}
