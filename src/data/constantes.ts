export type Temperamentos = {
  [key: number]: string;
  1: 'Sanguíneo';
  2: 'Colérico';
  3: 'Melancólico';
  4: 'Fleumático';
};

export type Linguagens = {
  [key: number]: string;
  1: 'Palavras de Afirmação';
  2: 'Tempo de Qualidade';
  3: 'Presentes';
  4: 'Atos de Serviço';
  5: 'Toque Físico';
};

export const TEMPERAMENTOS: Temperamentos = {
  1: 'Sanguíneo',
  2: 'Colérico',
  3: 'Melancólico',
  4: 'Fleumático'
} as const;

export const LINGUAGENS: Linguagens = {
  1: 'Palavras de Afirmação',
  2: 'Tempo de Qualidade',
  3: 'Presentes',
  4: 'Atos de Serviço',
  5: 'Toque Físico'
} as const;
