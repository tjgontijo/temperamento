export type CategoriaTemperamento = 'Sanguíneo' | 'Colérico' | 'Melancólico' | 'Fleumático';
export type CategoriaLinguagem = 'Palavras de Afirmação' | 'Tempo de Qualidade' | 'Presentes' | 'Atos de Serviço' | 'Toque Físico';

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

export type TipoQuestao = 'Temperamento' | 'Temperamento do Autor' | 'Linguagem do Amor' | 'Linguagem do Amor do Autor';

export interface RespostaTemperamento {
  texto: string;
  categoria: CategoriaTemperamento;
}

export interface RespostaLinguagem {
  texto: string;
  categoria: CategoriaLinguagem;
}

export type Resposta = RespostaTemperamento | RespostaLinguagem;

export interface QuestaoTemperamento extends QuestaoBase {
  tipo: TipoQuestao;
  respostas: {
    [key: number]: Resposta;
  };
}

export type QuestaoType = QuestaoInput | QuestaoTemperamento;

export interface ResultadoProps {
  nome: string;
  pretendente: string;
  questoes: QuestaoType[];
  respostas: Record<string | number, string>;
  contadores: Contadores;
}

export interface ResultadoCalculado {
  nome: string;
  pretendente: string;
  temperamento: ContadoresTemperamento;
  temperamentoAutor: ContadoresTemperamento;
  linguagem: ContadoresLinguagem;
  linguagemAutor: ContadoresLinguagem;
}
