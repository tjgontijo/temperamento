import { Temperamentos, Linguagens } from '@/data/constantes';

// Tipos base para categorias
export type CategoriaTemperamento = keyof Temperamentos;
export type CategoriaLinguagem = keyof Linguagens;

// Tipos para questões
export interface QuestaoType {
  id: string;
  tipoQuestaoId: string;
  tipo: string;
  pergunta: string;
  complemento?: string;
  alternativas?: Array<{
    id: string;
    texto: string;
    tipoAlternativaId: string;
  }>;
}

// Tipos para resultados
export interface ResultadoValores {
  temperamentoPrincipal: string;
  temperamentoSecundario: string;
  totalPontosTemperamento: number;
  percentualTemperamentoPrincipal: number;
  percentualTemperamentoSecundario: number;
}

export interface ResultadoCalculado {
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
}
