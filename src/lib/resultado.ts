import { QuestaoType, ResultadoProps } from '@/types/questionario';

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
  const questoesTemperamento = questionario.questoes.filter(q => q.tipo === 'Temperamento');
  const questoesTemperamentoAutor = questionario.questoes.filter(q => q.tipo === 'temperamento_autor');
  const questoesLinguagem = questionario.questoes.filter(q => q.tipo === 'linguagem');
  const questoesLinguagemAutor = questionario.questoes.filter(q => q.tipo === 'linguagem_autor');

  // Processa cada tipo de questão
  questoesTemperamento.forEach(questao => {
    if ('respostas' in questao) {
      const resposta = questionario.respostas[questao.id];
      if (resposta && questao.respostas[resposta]) {
        const categoria = questao.respostas[resposta].categoria;
        resultado.temperamento[categoria] += questao.peso || 1;
      }
    }
  });

  questoesTemperamentoAutor.forEach(questao => {
    if ('respostas' in questao) {
      const resposta = questionario.respostas[questao.id];
      if (resposta && questao.respostas[resposta]) {
        const categoria = questao.respostas[resposta].categoria;
        resultado.temperamentoAutor[categoria] += questao.peso || 1;
      }
    }
  });

  questoesLinguagem.forEach(questao => {
    if ('respostas' in questao) {
      const resposta = questionario.respostas[questao.id];
      if (resposta && questao.respostas[resposta]) {
        const categoria = questao.respostas[resposta].categoria;
        resultado.linguagem[categoria] += questao.peso || 1;
      }
    }
  });

  questoesLinguagemAutor.forEach(questao => {
    if ('respostas' in questao) {
      const resposta = questionario.respostas[questao.id];
      if (resposta && questao.respostas[resposta]) {
        const categoria = questao.respostas[resposta].categoria;
        resultado.linguagemAutor[categoria] += questao.peso || 1;
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
      const respostaIndex = respostasUsuario[questao.id];
      
      // Verifica se a resposta existe
      if (respostaIndex && questao.respostas[respostaIndex]) {
        const resposta = questao.respostas[respostaIndex];
        const categoria = resposta.categoria;
        const peso = questao.peso || 1;

        // Incrementa o contador apropriado baseado no tipo da questão
        switch (questao.tipo) {
          case 'Temperamento':
            resultado.temperamento[categoria] += peso;
            break;
          case 'temperamento_autor':
            resultado.temperamentoAutor[categoria] += peso;
            break;
          case 'linguagem':
            resultado.linguagem[categoria] += peso;
            break;
          case 'linguagem_autor':
            resultado.linguagemAutor[categoria] += peso;
            break;
        }
      }
    }
  });

  return resultado;
}
