import { temperamento } from './temperamento';
import { linguagem } from './linguagem';
import { temperamento_autor } from './temperamento-autor';
import { linguagem_autor } from './linguagem-autor';
import { informacoes } from './informacoes';
import { QuestaoType, QuestaoTemperamento } from '@/types/questionario';
import { salvarInformacoes } from '@/utils/storage';
import { analisarCasal } from '@/services/openai';

interface ConfiguracaoQuestionario {
  quantidadeTemperamento?: number;
  quantidadeLinguagem?: number;
  quantidadeTemperamentoAutor?: number;
  quantidadeLinguagemAutor?: number;
}

// Função de Fisher-Yates shuffle
function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Função para pegar N itens aleatórios de um array
function pegarQuestoes<T>(questoes: T[], quantidade?: number): T[] {
  if (!quantidade || quantidade >= questoes.length) {
    return shuffle(questoes);
  }
  return shuffle(questoes).slice(0, quantidade);
}

export function gerarQuestionario(config: ConfiguracaoQuestionario = {}): QuestaoType[] {
  // Sempre inclui todas as questões de informações no início
  const questionarioFinal: QuestaoType[] = [...informacoes];

  // Pega a quantidade configurada (ou todas) de cada tipo de questão e embaralha
  const questoesTemperamento = pegarQuestoes(temperamento as QuestaoTemperamento[], config.quantidadeTemperamento);
  const questoesLinguagem = pegarQuestoes(linguagem as QuestaoTemperamento[], config.quantidadeLinguagem);
  const questoesTemperamentoAutor = pegarQuestoes(temperamento_autor as QuestaoTemperamento[], config.quantidadeTemperamentoAutor);
  const questoesLinguagemAutor = pegarQuestoes(linguagem_autor as QuestaoTemperamento[], config.quantidadeLinguagemAutor);

  // Adiciona todas as questões selecionadas ao questionário final
  return [
    ...questionarioFinal,
    ...questoesTemperamento,
    ...questoesLinguagem,
    ...questoesTemperamentoAutor,
    ...questoesLinguagemAutor,
  ];
}

// Array com todas as questões (mantido para compatibilidade)
export const todasQuestoes = gerarQuestionario();

interface ContadoresBase {
  [key: number]: number;
}

interface ContadoresTemperamento extends ContadoresBase {
  1: number;
  2: number;
  3: number;
  4: number;
}

interface ContadoresLinguagem extends ContadoresBase {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

interface Contadores {
  temperamento: ContadoresTemperamento;
  linguagem: ContadoresLinguagem;
  temperamento_autor: ContadoresTemperamento;
  linguagem_autor: ContadoresLinguagem;
}

interface Resultado {
  informacoes: {
    nome_autor: string;
    nome_pretendente: string;
  };
  temperamento: {
    valor: number;
    segundo: number;
    total: number;
  };
  linguagem: {
    valor: number;
    segundo: number;
    total: number;
  };
  temperamento_autor: {
    valor: number;
    segundo: number;
    total: number;
  };
  linguagem_autor: {
    valor: number;
    segundo: number;
    total: number;
  };
  analise: {
    titulo: string;
    subtitulo: string;
    paragrafos: string[];
  };
}

const TEMPERAMENTOS: { [key: number]: string } = {
  1: 'Sanguíneo',
  2: 'Colérico',
  3: 'Melancólico',
  4: 'Fleumático',
};

const LINGUAGENS: { [key: number]: string } = {
  1: 'Visual',
  2: 'Auditivo',
  3: 'Kinestésico',
  4: 'Lógico',
  5: 'Verbal',
};

export async function calcularResultado(questoes: QuestaoType[], respostas: Record<string, string>): Promise<Resultado | null> {
  if (!questoes.length) return null;

  // Inicializa os contadores
  const contadores: Contadores = {
    temperamento: { 1: 0, 2: 0, 3: 0, 4: 0 },
    linguagem: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    temperamento_autor: { 1: 0, 2: 0, 3: 0, 4: 0 },
    linguagem_autor: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  };

  // Extrai informações básicas
  const informacoes = {
    nome_autor: respostas['input_nome_autor'] || '',
    nome_pretendente: respostas['input_nome_pretendente'] || '',
  };

  // Salva as informações separadamente
  salvarInformacoes({ nome_autor: informacoes.nome_autor });

  // Processa cada questão
  questoes.forEach(questao => {
    const chaveResposta = questao.tipo === 'input' ? 
      `input_${questao.id}` : 
      `${questao.tipo}_${questao.id}`;
      
    const resposta = respostas[chaveResposta];
    if (!resposta) return;

    // Incrementa o contador apropriado para questões não-input
    if (questao.tipo !== 'input') {
      const valor = Number(resposta);
      if (questao.tipo in contadores) {
        const contador = contadores[questao.tipo as keyof Contadores];
        if (valor in contador) {
          contador[valor]++;
        }
      }
    }
  });

  // Encontra os dois maiores valores para cada categoria
  const getDoisMaiores = (obj: Record<number, number>) => {
    const entries = Object.entries(obj)
      .map(([key, value]) => ({ key: Number(key), value }))
      .sort((a, b) => b.value - a.value);
    
    return {
      primeiro: entries[0] || { key: 0, value: 0 },
      segundo: entries[1] || { key: 0, value: 0 }
    };
  };

  // Calcula os resultados finais
  const resultadoTemperamento = getDoisMaiores(contadores.temperamento);
  const resultadoLinguagem = getDoisMaiores(contadores.linguagem);
  const resultadoTemperamentoAutor = getDoisMaiores(contadores.temperamento_autor);
  const resultadoLinguagemAutor = getDoisMaiores(contadores.linguagem_autor);

  // Converte os números em nomes para a análise
  const temperamentoPretendente = TEMPERAMENTOS[resultadoTemperamento.primeiro.key];
  const temperamentoSecundarioPretendente = TEMPERAMENTOS[resultadoTemperamento.segundo.key];
  const linguagemPretendente = LINGUAGENS[resultadoLinguagem.primeiro.key];
  const linguagemSecundariaPretendente = LINGUAGENS[resultadoLinguagem.segundo.key];
  const temperamentoAutor = TEMPERAMENTOS[resultadoTemperamentoAutor.primeiro.key];
  const temperamentoSecundarioAutor = TEMPERAMENTOS[resultadoTemperamentoAutor.segundo.key];
  const linguagemAutor = LINGUAGENS[resultadoLinguagemAutor.primeiro.key];
  const linguagemSecundariaAutor = LINGUAGENS[resultadoLinguagemAutor.segundo.key];

  // Gera a análise do casal usando os nomes em vez dos números
  const analiseResponse = await analisarCasal(
    informacoes.nome_autor,
    informacoes.nome_pretendente,
    temperamentoPretendente,
    temperamentoSecundarioPretendente,
    linguagemPretendente,
    linguagemSecundariaPretendente,
    temperamentoAutor,
    temperamentoSecundarioAutor,
    linguagemAutor,
    linguagemSecundariaAutor
  );

  // Retorna os resultados e a análise
  return {
    informacoes,
    temperamento: {
      valor: resultadoTemperamento.primeiro.key,
      segundo: resultadoTemperamento.segundo.key,
      total: Object.values(contadores.temperamento).reduce((a, b) => a + b, 0),
    },
    linguagem: {
      valor: resultadoLinguagem.primeiro.key,
      segundo: resultadoLinguagem.segundo.key,
      total: Object.values(contadores.linguagem).reduce((a, b) => a + b, 0),
    },
    temperamento_autor: {
      valor: resultadoTemperamentoAutor.primeiro.key,
      segundo: resultadoTemperamentoAutor.segundo.key,
      total: Object.values(contadores.temperamento_autor).reduce((a, b) => a + b, 0),
    },
    linguagem_autor: {
      valor: resultadoLinguagemAutor.primeiro.key,
      segundo: resultadoLinguagemAutor.segundo.key,
      total: Object.values(contadores.linguagem_autor).reduce((a, b) => a + b, 0),
    },
    analise: {
      titulo: analiseResponse.titulo,
      subtitulo: analiseResponse.subtitulo,
      paragrafos: analiseResponse.paragrafos,
    },
  };
}

export { 
  temperamento,
  linguagem,
  temperamento_autor,
  linguagem_autor,
  informacoes,
};
