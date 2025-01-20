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
    'Sanguíneo': 0,
    'Colérico': 0,
    'Melancólico': 0,
    'Fleumático': 0
  };
}

// Função para inicializar contadores de linguagem
function inicializarContadoresLinguagem(): Record<string, number> {
  return {
    'Palavras de Afirmação': 0,
    'Tempo de Qualidade': 0,
    'Presentes': 0,
    'Atos de Serviço': 0,
    'Toque Físico': 0
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
  const questoesTemperamentoAutor = questionario.questoes.filter(q => q.tipo === 'Temperamento do Autor');
  const questoesLinguagem = questionario.questoes.filter(q => q.tipo === 'Linguagem do Amor');
  const questoesLinguagemAutor = questionario.questoes.filter(q => q.tipo === 'Linguagem do Amor do Autor');

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
          case 'Temperamento do Autor':
            resultado.temperamentoAutor[categoria] += peso;
            break;
          case 'Linguagem do Amor':
            resultado.linguagem[categoria] += peso;
            break;
          case 'Linguagem do Amor do Autor':
            resultado.linguagemAutor[categoria] += peso;
            break;
        }
      }
    }
  });

  return resultado;
}
