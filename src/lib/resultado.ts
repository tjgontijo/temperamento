import { QuestaoType, ResultadoProps, QuestaoTemperamento } from '@/types/questionario';

export interface ResultadoContagem {
  temperamento: Record<string, number>;
  temperamentoAutor: Record<string, number>;
  linguagem: Record<string, number>;
  linguagemAutor: Record<string, number>;
}

// Função para inicializar contadores de temperamento
function inicializarContadoresTemperamento(): Record<string, number> {
  return {
    'sanguinio': 0,
    'colerico': 0,
    'melancolico': 0,
    'fleumatico': 0
  };
}

// Função para inicializar contadores de linguagem
function inicializarContadoresLinguagem(): Record<string, number> {
  return {
    'palavra_afirmacao': 0,
    'tempo_qualidade': 0,
    'presentes': 0,
    'atos_servico': 0,
    'toque_fisico': 0
  };
}

export function processarQuestionario(questionario: ResultadoProps): ResultadoContagem {
  // Inicializa os contadores
  const resultado: ResultadoContagem = {
    temperamento: inicializarContadoresTemperamento(),
    temperamentoAutor: inicializarContadoresTemperamento(),
    linguagem: inicializarContadoresLinguagem(),
    linguagemAutor: inicializarContadoresLinguagem()
  };

  // Filtra as questões por tipo
  const questoesTemperamento = questionario.questoes.filter((q): q is QuestaoTemperamento => q.tipo === 'temperamento');
  const questoesTemperamentoAutor = questionario.questoes.filter((q): q is QuestaoTemperamento => q.tipo === 'temperamento_autor');
  const questoesLinguagem = questionario.questoes.filter((q): q is QuestaoTemperamento => q.tipo === 'linguagem');
  const questoesLinguagemAutor = questionario.questoes.filter((q): q is QuestaoTemperamento => q.tipo === 'linguagem_autor');

  // Processa cada tipo de questão
  questoesTemperamento.forEach(questao => {
    const resposta = questionario.respostas[String(questao.id)];
    if (resposta && typeof resposta === 'string') {
      const respostaNum = Number(resposta);
      const respostaObj = questao.respostas[respostaNum];
      if (respostaObj && respostaObj.categoria) {
        resultado.temperamento[respostaObj.categoria] += 1;
      }
    }
  });

  questoesTemperamentoAutor.forEach(questao => {
    const resposta = questionario.respostas[String(questao.id)];
    if (resposta && typeof resposta === 'string') {
      const respostaNum = Number(resposta);
      const respostaObj = questao.respostas[respostaNum];
      if (respostaObj && respostaObj.categoria) {
        resultado.temperamentoAutor[respostaObj.categoria] += 1;
      }
    }
  });

  questoesLinguagem.forEach(questao => {
    const resposta = questionario.respostas[String(questao.id)];
    if (resposta && typeof resposta === 'string') {
      const respostaNum = Number(resposta);
      const respostaObj = questao.respostas[respostaNum];
      if (respostaObj && respostaObj.categoria) {
        resultado.linguagem[respostaObj.categoria] += 1;
      }
    }
  });

  questoesLinguagemAutor.forEach(questao => {
    const resposta = questionario.respostas[String(questao.id)];
    if (resposta && typeof resposta === 'string') {
      const respostaNum = Number(resposta);
      const respostaObj = questao.respostas[respostaNum];
      if (respostaObj && respostaObj.categoria) {
        resultado.linguagemAutor[respostaObj.categoria] += 1;
      }
    }
  });

  return resultado;
}

export function calcularResultado(
  respostasUsuario: Record<string | number, string | number>,
  questoes: QuestaoType[]
): ResultadoContagem {
  // Inicializa os contadores
  const resultado: ResultadoContagem = {
    temperamento: inicializarContadoresTemperamento(),
    temperamentoAutor: inicializarContadoresTemperamento(),
    linguagem: inicializarContadoresLinguagem(),
    linguagemAutor: inicializarContadoresLinguagem()
  };

  // Para cada questão, verifica a resposta e incrementa o contador apropriado
  questoes.forEach((questao) => {
    // Ignora questões de input
    if (questao.tipo === 'input') return;

    // Verifica se tem respostas
    if ('respostas' in questao) {
      const respostaRaw = respostasUsuario[questao.id];
      const respostaIndex = typeof respostaRaw === 'string' ? parseInt(respostaRaw, 10) : respostaRaw;
      
      // Verifica se a resposta existe e é um número válido
      if (typeof respostaIndex === 'number' && !isNaN(respostaIndex) && questao.respostas[respostaIndex]) {
        const resposta = questao.respostas[respostaIndex];
        if (resposta && resposta.categoria) {
          // Incrementa o contador apropriado baseado no tipo da questão
          switch (questao.tipo) {
            case 'temperamento':
              if (resposta.categoria in resultado.temperamento) {
                resultado.temperamento[resposta.categoria] += 1;
              }
              break;
            case 'temperamento_autor':
              if (resposta.categoria in resultado.temperamentoAutor) {
                resultado.temperamentoAutor[resposta.categoria] += 1;
              }
              break;
            case 'linguagem':
              if (resposta.categoria in resultado.linguagem) {
                resultado.linguagem[resposta.categoria] += 1;
              }
              break;
            case 'linguagem_autor':
              if (resposta.categoria in resultado.linguagemAutor) {
                resultado.linguagemAutor[resposta.categoria] += 1;
              }
              break;
          }
        }
      }
    }
  });

  return resultado;
}
