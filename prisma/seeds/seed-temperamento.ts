import { PrismaClient, TipoQuestao, TipoAlternativa } from '@prisma/client';

export const seedTemperamento = async (prisma: PrismaClient) => {
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

  // Seed das questões de temperamento
  const questoes: QuestaoInput[] = [
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Você está em uma reunião importante e percebe que os outros estão tomando uma decisão com a qual você não concorda. O que você faz?",
      complemento: "Pense na sua primeira reação diante de uma situação onde sua opinião diverge do grupo.",
      alternativas: [
        {
          texto: "Tento aliviar a tensão com humor enquanto expresso minha opinião.",
          tipoAlternativaId: tiposPorNome['SANGUINIO']
        },
        {
          texto: "Expresso minha opinião de forma direta e firme.",
          tipoAlternativaId: tiposPorNome['COLERICO']
        },
        {
          texto: "Analiso cuidadosamente antes de apresentar meus argumentos.",
          tipoAlternativaId: tiposPorNome['MELANCOLICO']
        },
        {
          texto: "Mantenho a calma e busco um meio-termo.",
          tipoAlternativaId: tiposPorNome['FLEUMATICO']
        }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como você reage quando alguém te critica?",
      complemento: "Reflita sobre sua primeira reação ao receber uma crítica.",
      alternativas: [
        {
          texto: "Tento transformar a situação em algo mais leve e divertido.",
          tipoAlternativaId: tiposPorNome['SANGUINIO']
        },
        {
          texto: "Defendo meu ponto de vista com convicção.",
          tipoAlternativaId: tiposPorNome['COLERICO']
        },
        {
          texto: "Analizo profundamente a crítica e reflito sobre ela.",
          tipoAlternativaId: tiposPorNome['MELANCOLICO']
        },
        {
          texto: "Ouço sem me alterar e considero o que foi dito.",
          tipoAlternativaId: tiposPorNome['FLEUMATICO']
        }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Em uma festa ou evento social, como você geralmente se comporta?",
      complemento: "Pense em como você interage em ambientes com muitas pessoas.",
      alternativas: [
        {
          texto: "Sou o centro das atenções, conversando e fazendo todos rirem.",
          tipoAlternativaId: tiposPorNome['SANGUINIO']
        },
        {
          texto: "Lidero conversas e tomo iniciativa de interagir.",
          tipoAlternativaId: tiposPorNome['COLERICO']
        },
        {
          texto: "Observo e analiso o ambiente antes de me envolver.",
          tipoAlternativaId: tiposPorNome['MELANCOLICO']
        },
        {
          texto: "Converso tranquilamente com algumas pessoas próximas.",
          tipoAlternativaId: tiposPorNome['FLEUMATICO']
        }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como você lida com mudanças inesperadas em seus planos?",
      complemento: "Reflita sobre sua reação quando algo não sai como o esperado.",
      alternativas: [
        {
          texto: "Rapidamente improviso e transformo em algo divertido.",
          tipoAlternativaId: tiposPorNome['SANGUINIO']
        },
        {
          texto: "Reorganizo tudo com determinação para manter o controle.",
          tipoAlternativaId: tiposPorNome['COLERICO']
        },
        {
          texto: "Analizo detalhadamente o impacto da mudança.",
          tipoAlternativaId: tiposPorNome['MELANCOLICO']
        },
        {
          texto: "Aceito tranquilamente e me adapto sem grandes problemas.",
          tipoAlternativaId: tiposPorNome['FLEUMATICO']
        }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como você se comporta quando precisa resolver um problema complexo?",
      complemento: "Pense na sua abordagem para desafios que exigem solução.",
      alternativas: [
        {
          texto: "Busco inspiração criativa e solução rápida.",
          tipoAlternativaId: tiposPorNome['SANGUINIO']
        },
        {
          texto: "Ataco o problema com estratégia e determinação.",
          tipoAlternativaId: tiposPorNome['COLERICO']
        },
        {
          texto: "Analizo meticulosamente todos os detalhes.",
          tipoAlternativaId: tiposPorNome['MELANCOLICO']
        },
        {
          texto: "Resolvo calmamente, sem me estressar.",
          tipoAlternativaId: tiposPorNome['FLEUMATICO']
        }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como você reage quando alguém próximo está passando por um momento difícil?",
      complemento: "Reflita sobre como você oferece apoio em momentos de tristeza.",
      alternativas: [
        {
          texto: "Tento animar e trazer leveza à situação.",
          tipoAlternativaId: tiposPorNome['SANGUINIO']
        },
        {
          texto: "Ofereço soluções práticas e diretas.",
          tipoAlternativaId: tiposPorNome['COLERICO']
        },
        {
          texto: "Escuto atentamente e ofereço apoio emocional profundo.",
          tipoAlternativaId: tiposPorNome['MELANCOLICO']
        },
        {
          texto: "Estou presente de forma calma e acolhedora.",
          tipoAlternativaId: tiposPorNome['FLEUMATICO']
        }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como você lida com prazos e compromissos?",
      complemento: "Pense em sua organização e cumprimento de tarefas.",
      alternativas: [
        {
          texto: "Faço na hora, com energia e criatividade.",
          tipoAlternativaId: tiposPorNome['SANGUINIO']
        },
        {
          texto: "Sou rigoroso e disciplinado com meus compromissos.",
          tipoAlternativaId: tiposPorNome['COLERICO']
        },
        {
          texto: "Planejo detalhadamente e sigo o plano à risca.",
          tipoAlternativaId: tiposPorNome['MELANCOLICO']
        },
        {
          texto: "Cumpro tranquilamente, sem estresse.",
          tipoAlternativaId: tiposPorNome['FLEUMATICO']
        }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Em um ambiente de trabalho em equipe, qual é o seu papel típico?",
      complemento: "Reflita sobre como você contribui em projetos coletivos.",
      alternativas: [
        {
          texto: "Trago energia e motivo o grupo com entusiasmo.",
          tipoAlternativaId: tiposPorNome['SANGUINIO']
        },
        {
          texto: "Lidero e direciono as ações para alcançar resultados.",
          tipoAlternativaId: tiposPorNome['COLERICO']
        },
        {
          texto: "Analiso detalhes e contribuo com planejamento.",
          tipoAlternativaId: tiposPorNome['MELANCOLICO']
        },
        {
          texto: "Ajudo a manter o clima harmonioso e colaborativo.",
          tipoAlternativaId: tiposPorNome['FLEUMATICO']
        }
      ]
    }
  ];
  // Criar questões de temperamento
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
