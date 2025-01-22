import { PrismaClient, TipoQuestao, TipoAlternativa } from '@prisma/client';
import { linguagem_autor } from '../../src/data/linguagem-autor';

export const seedLinguagemAutor = async (prisma: PrismaClient) => {
  // Buscar o ID do tipo de questão de linguagem
  const tipoQuestao: TipoQuestao | null = await prisma.tipoQuestao.findUnique({
    where: { nome: 'LINGUAGEM' }
  });

  if (!tipoQuestao) {
    throw new Error('Tipo de questão LINGUAGEM não encontrado');
  }

  // Buscar os tipos de alternativa
  const tipoAlternativas: TipoAlternativa[] = await prisma.tipoAlternativa.findMany({
    where: { 
      nome: {
        in: ['PALAVRA_AFIRMACAO', 'TOQUE_FISICO', 'TEMPO_QUALIDADE', 'ATOS_SERVICO', 'PRESENTES']
      }
    }
  });

  const tiposPorNome: Record<string, string> = {};
  tipoAlternativas.forEach(tipo => {
    tiposPorNome[tipo.nome.toUpperCase()] = tipo.id;
  });

  // Criar questões de linguagem do autor
  for (const questao of linguagem_autor) {
    const alternativas = Object.entries(questao.respostas).map(([_, resposta]) => ({
      texto: resposta.texto,
      tipoAlternativaId: tiposPorNome[resposta.categoria.toUpperCase().replace('_', '_')]
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
