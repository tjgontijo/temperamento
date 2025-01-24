'use server'

type QuestaoType = {
  id: string;
  texto: string;
  tipo: string;
  tipoQuestao: TipoQuestaoType;
  alternativas: AlternativaType[];
};

import prisma from '@/lib/prisma'

type TipoQuestao = 'TEMPERAMENTO' | 'LINGUAGEM' | 'TEMPERAMENTO_AUTOR' | 'LINGUAGEM_AUTOR'

export async function buscarQuestoesPorTipo(
  tipos: TipoQuestao[], 
  quantidadePorTipo: number
): Promise<QuestaoType[]> {
  //console.log('Buscando questões. Quantidade por tipo:', quantidadePorTipo);

  const questoesPromises = tipos.map(async (tipo) => {
    // Busca o tipo de questão primeiro
    const tipoQuestao = await prisma.tipoQuestao.findUnique({
      where: { 
        nome: tipo 
      }
    });

    if (!tipoQuestao) {
      console.error(`Tipo de questão não encontrado: ${tipo}`);
      return [];
    }

    const questoes = await prisma.questao.findMany({
      where: { 
        tipoQuestaoId: tipoQuestao.id
      },
      include: { 
        tipoQuestao: true,
        alternativas: {
          include: { tipoAlternativa: true }
        }
      }
    });
    

    // Embaralhar e pegar a quantidade desejada
    const questoesSelecionadas = questoes
      .sort(() => 0.5 - Math.random())
      .slice(0, quantidadePorTipo);
    
    // Transformar para o formato QuestaoType
    return questoesSelecionadas.map(questao => ({
      id: questao.id,
      tipoQuestaoId: questao.tipoQuestaoId,
      tipo: questao.tipoQuestao.nome,
      pergunta: questao.pergunta,
      complemento: questao.complemento,
      alternativas: questao.alternativas.map(alt => ({
        id: alt.id,
        texto: alt.texto,
        tipoAlternativaId: alt.tipoAlternativaId
      }))
    }));
  });

  // Aguardar todas as promises e achatar o resultado
  const resultado = (await Promise.all(questoesPromises))
    .flat();

  // Embaralhar o resultado final
  const resultadoFinal = resultado.sort(() => 0.5 - Math.random());

  // console.log('Resultado final:', {
  //   total: resultadoFinal.length,
  //   porTipo: resultadoFinal.reduce((acc, q) => {
  //     acc[q.tipo] = (acc[q.tipo] || 0) + 1;
  //     return acc;
  //   }, {} as Record<string, number>)
  // });

  if (resultadoFinal.length === 0) {
    throw new Error('Nenhuma questão encontrada para os tipos solicitados');
  }

  return resultadoFinal;
}

export async function consultarTiposAlternativa() {
  const tipos = await prisma.tipoAlternativa.findMany({
    include: {
      tipoQuestao: true
    }
  });

  console.log('Tipos de Alternativa:', JSON.stringify(tipos, null, 2));
  return tipos;
}
