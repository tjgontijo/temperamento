'use server';

import { ResultadoCalculado } from "@/types/questionario";
import prisma from "@/lib/prisma";
import { salvarResultadosQuestionario } from '@/utils/storage';

interface RespostaData {
  tipoQuestaoId: string;
  tipoAlternativaId: string;
}

type ResultadoCategoria = {
  principal: string;
  secundario: string;
  totalPontos: number;
  quantidadePrincipal: number;
  quantidadeSecundario: number;
  percentualPrincipal: number;
  percentualSecundario: number;
};

// Resultado padrão para quando não há dados
const resultadoPadrao: ResultadoCategoria = {
  principal: '',
  secundario: '',
  totalPontos: 0,
  quantidadePrincipal: 0,
  quantidadeSecundario: 0,
  percentualPrincipal: 0,
  percentualSecundario: 0
};

export async function calcularResultado(respostas: Record<string, RespostaData>): Promise<ResultadoCalculado> {
  // Verifica se há respostas
  if (!respostas || Object.keys(respostas).length === 0) {
    return {
      temperamento: resultadoPadrao,
      linguagem: resultadoPadrao,
      temperamentoAutor: resultadoPadrao,
      linguagemAutor: resultadoPadrao
    };
  }

  // Busca os tipos de alternativa correspondentes
  const tiposAlternativa = await prisma.tipoAlternativa.findMany({
    where: {
      id: {
        in: Object.values(respostas).map(r => r.tipoAlternativaId), // IDs das alternativas fornecidos nas respostas
      },
    },
    select: {
      id: true,
      nome: true
    }
  });

  if (!tiposAlternativa || tiposAlternativa.length === 0) {
    return {
      temperamento: resultadoPadrao,
      linguagem: resultadoPadrao,
      temperamentoAutor: resultadoPadrao,
      linguagemAutor: resultadoPadrao
    };
  }

  // Cria o mapeamento de nomes por ID
  const nomesPorId = tiposAlternativa.reduce((acc: Record<string, string>, tipo) => {
    acc[tipo.id] = tipo.nome; // Mapeia o ID para o nome
    return acc;
  }, {});

  // Busca todas as questões respondidas com seus tipos
  const questoes: QuestaoComTipo[] = await prisma.questao.findMany({
    where: {
      id: {
        in: Object.keys(respostas)
      }
    },
    include: {
      tipoQuestao: true
    }
  });

  // Agrupa as respostas por tipo de questão e conta os tipos de alternativa
  const contadores: Record<string, Record<string, number>> = {};

  questoes.forEach((questao: QuestaoComTipo) => {
    const resposta = respostas[questao.id];
    if (!resposta) return;

    const tipoQuestao = questao.tipoQuestao.nome;
    const tipoAltId = resposta.tipoAlternativaId;

    // Mapeia os tipos de questão para as categorias corretas
    const categoriaMap: Record<string, string> = {
      'TEMPERAMENTO': 'TEMPERAMENTO',
      'TEMPERAMENTO_AUTOR': 'TEMPERAMENTO_AUTOR',
      'LINGUAGEM': 'LINGUAGEM',
      'LINGUAGEM_AUTOR': 'LINGUAGEM_AUTOR'
    };

    const categoria = categoriaMap[tipoQuestao] || tipoQuestao;

    if (!contadores[categoria]) {
      contadores[categoria] = {};
    }

    contadores[categoria][tipoAltId] = (contadores[categoria][tipoAltId] || 0) + 1;
  });

  // Função para calcular o resultado por categoria
  function calcularResultadoPorCategoria(
    categoria: string
  ): ResultadoCategoria {
    
    const contadoresDaCategoria = contadores[categoria];
    if (!contadoresDaCategoria) {
      return resultadoPadrao;
    }

    const totalRespostas = Object.values(contadoresDaCategoria).reduce((a, b) => a + b, 0);
    if (totalRespostas === 0) {
      return resultadoPadrao;
    }

    const tiposOrdenados = Object.entries(contadoresDaCategoria)
      .sort((a, b) => b[1] - a[1]);

    const principalId = tiposOrdenados[0]?.[0];
    const secundarioId = tiposOrdenados[1]?.[0];

    // Mapeamento de nomes para categorias específicas
    const mapeamentoNomes: Record<string, string> = {
      'COLERICO': 'Colérico',
      'FLEUMATICO': 'Fleumático', 
      'SANGUINIO': 'Sanguíneo',
      'MELANCOLICO': 'Melancólico',
      'PALAVRA_AFIRMACAO': 'Palavras de Afirmação',
      'TOQUE_FISICO': 'Toque Físico',
      'TEMPO_QUALIDADE': 'Tempo de Qualidade',
      'ATOS_SERVICO': 'Atos de Serviço',
      'PRESENTES': 'Presentes'
    };

    return {
      principal: principalId ? (mapeamentoNomes[nomesPorId[principalId]] || nomesPorId[principalId]) : '',
      secundario: secundarioId ? (mapeamentoNomes[nomesPorId[secundarioId]] || nomesPorId[secundarioId]) : '',
      totalPontos: totalRespostas,
      quantidadePrincipal: tiposOrdenados[0]?.[1] || 0,
      quantidadeSecundario: tiposOrdenados[1]?.[1] || 0,
      percentualPrincipal: principalId ? tiposOrdenados[0][1] / totalRespostas : 0,
      percentualSecundario: secundarioId ? tiposOrdenados[1][1] / totalRespostas : 0
    };
  }

  // Calcula os resultados para cada categoria
  const resultado: ResultadoCalculado = {
    temperamento: calcularResultadoPorCategoria('TEMPERAMENTO'),
    linguagem: calcularResultadoPorCategoria('LINGUAGEM'),
    temperamentoAutor: calcularResultadoPorCategoria('TEMPERAMENTO_AUTOR'),
    linguagemAutor: calcularResultadoPorCategoria('LINGUAGEM_AUTOR')
  };

  // Salva os resultados no localStorage
  if (typeof window !== 'undefined') {
    const resultadosCompletos = {
      temperamento: resultado.temperamento,
      linguagem: resultado.linguagem,
      temperamentoAutor: resultado.temperamentoAutor,
      linguagemAutor: resultado.linguagemAutor,
    };
    salvarResultadosQuestionario(resultadosCompletos);
  }

  return resultado;
}
