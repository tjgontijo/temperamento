import { PrismaClient, TipoQuestao, TipoAlternativa } from '@prisma/client';

export const seedLinguagem = async (prisma: PrismaClient) => {
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
    tiposPorNome[tipo.nome] = tipo.id;
  });

  // Definir tipo para as questões
  type QuestaoInput = {
    tipoQuestaoId: string;
    pergunta: string;
    complemento: string;
    alternativas: {
      texto: string;
      tipoAlternativaId: string;
    }[];
  };

  // Seed das questões de linguagem
  const questoes: QuestaoInput[] = [
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "{nome} acabou de receber uma notícia incrível, como uma promoção no trabalho. Qual seria a forma mais significativa para ele celebrar com você?",
      complemento: "Pense em como você gostaria de ser reconhecido e valorizado em um momento de conquista.",
      alternativas: [
        {
          texto: "Quero que me faça um elogio sincero e significativo.",
          tipoAlternativaId: tiposPorNome['PALAVRA_AFIRMACAO']
        },
        {
          texto: "Quero um abraço apertado e caloroso.",
          tipoAlternativaId: tiposPorNome['TOQUE_FISICO']
        },
        {
          texto: "Quero que reserve um tempo especial só para mim, sem distrações.",
          tipoAlternativaId: tiposPorNome['TEMPO_QUALIDADE']
        },
        {
          texto: "Quero que faça algo especial por mim, como preparar um jantar ou me ajudar em uma tarefa importante.",
          tipoAlternativaId: tiposPorNome['ATOS_SERVICO']
        },
        {
          texto: "Quero ganhar um presente que mostre que pensou em mim.",
          tipoAlternativaId: tiposPorNome['PRESENTES']
        }
      ]
    }
  ];


  // Criar questões de linguagem
  for (const questao of questoes) {
    await prisma.questao.create({
      data: {
        tipoQuestaoId: tipoQuestao.id,
        pergunta: questao.pergunta,
        complemento: questao.complemento,
        alternativas: {
          create: questao.alternativas.map(alt => ({
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
