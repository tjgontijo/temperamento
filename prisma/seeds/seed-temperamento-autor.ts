import { PrismaClient, TipoQuestao, TipoAlternativa } from '@prisma/client';
import { temperamento_autor } from '../../src/data/temperamento-autor';

export const seedTemperamentoAutor = async (prisma: PrismaClient) => {
  // Buscar o ID do tipo de questão de temperamento
  const tipoQuestao: TipoQuestao | null = await prisma.tipoQuestao.findUnique({
    where: { nome: 'TEMPERAMENTO' }
  });

  if (!tipoQuestao) {
    throw new Error('Tipo de questão TEMPERAMENTO não encontrado');
  }

  // Buscar os tipos de alternativa
  const tipoAlternativas: TipoAlternativa[] = await prisma.tipoAlternativa.findMany({
    where: { 
      nome: {
        in: ['SANGUINIO', 'COLERICO', 'MELANCOLICO', 'FLEUMATICO']
      }
    }
  });

  const tiposPorNome: Record<string, string> = {};
  tipoAlternativas.forEach(tipo => {
    tiposPorNome[tipo.nome.toUpperCase()] = tipo.id;
  });



  // Criar questões de temperamento do autor
  for (const questao of temperamento_autor) {
    const alternativas = Object.entries(questao.respostas).map(([_, resposta]) => ({
      texto: resposta.texto,
      tipoAlternativaId: tiposPorNome[resposta.categoria.toUpperCase()]
    }));

    await prisma.questao.create({
      data: {
        tipoQuestaoId: tipoQuestao.id,
        pergunta: questao.pergunta,
        complemento: questao.complemento || '',
        alternativas: {
          create: alternativas.map(alt => ({
            texto: alt.texto,
            tipoAlternativa: { 
              connect: { 
                id: alt.tipoAlternativaId
              } 
            }
          }))
        }
      }
    });
  }


};
