import { temperamento } from './temperamento';
import { linguagem } from './linguagem';
import { temperamento_autor } from './temperamento-autor';
import { linguagem_autor } from './linguagem-autor';
import { informacoes } from './informacoes';
import { QuestaoType, QuestaoInput, QuestaoTemperamento } from '@/types/questionario';

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
  const questionarioFinal: QuestaoType[] = [...informacoes as QuestaoInput[]];

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

export function calcularResultado(questoes: QuestaoType[], respostas: Record<string, string>) {
  if (!questoes.length) return null;

  // Inicializa os contadores
  const contadores = {
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
        contadores[questao.tipo as keyof typeof contadores][valor]++;
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

  // Calcula os resultados
  return {
    informacoes,
    temperamento: {
      valor: getDoisMaiores(contadores.temperamento).primeiro.key,
      segundo: getDoisMaiores(contadores.temperamento).segundo.key,
      total: Object.values(contadores.temperamento).reduce((a, b) => a + b, 0),
    },
    linguagem: {
      valor: getDoisMaiores(contadores.linguagem).primeiro.key,
      segundo: getDoisMaiores(contadores.linguagem).segundo.key,
      total: Object.values(contadores.linguagem).reduce((a, b) => a + b, 0),
    },
    temperamento_autor: {
      valor: getDoisMaiores(contadores.temperamento_autor).primeiro.key,
      segundo: getDoisMaiores(contadores.temperamento_autor).segundo.key,
      total: Object.values(contadores.temperamento_autor).reduce((a, b) => a + b, 0),
    },
    linguagem_autor: {
      valor: getDoisMaiores(contadores.linguagem_autor).primeiro.key,
      segundo: getDoisMaiores(contadores.linguagem_autor).segundo.key,
      total: Object.values(contadores.linguagem_autor).reduce((a, b) => a + b, 0),
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
