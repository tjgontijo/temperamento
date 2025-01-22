import { PrismaClient, TipoQuestao, TipoAlternativa } from '@prisma/client';

// Função para embaralhar array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

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
      tipoAlternativa: string;
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
          tipoAlternativa: 'SANGUINIO'
        },
        {
          texto: "Expresso minha opinião de forma direta e firme.",
          tipoAlternativa: 'COLERICO'
        },
        {
          texto: "Analiso cuidadosamente antes de apresentar meus argumentos.",
          tipoAlternativa: 'MELANCOLICO'
        },
        {
          texto: "Mantenho a calma e busco um meio-termo.",
          tipoAlternativa: 'FLEUMATICO'
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
          tipoAlternativa: 'SANGUINIO'
        },
        {
          texto: "Defendo meu ponto de vista com convicção.",
          tipoAlternativa: 'COLERICO'
        },
        {
          texto: "Analizo profundamente a crítica e reflito sobre ela.",
          tipoAlternativa: 'MELANCOLICO'
        },
        {
          texto: "Ouço sem me alterar e considero o que foi dito.",
          tipoAlternativa: 'FLEUMATICO'
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
          tipoAlternativa: 'SANGUINIO'
        },
        {
          texto: "Lidero conversas e tomo iniciativa de interagir.",
          tipoAlternativa: 'COLERICO'
        },
        {
          texto: "Observo e analiso o ambiente antes de me envolver.",
          tipoAlternativa: 'MELANCOLICO'
        },
        {
          texto: "Converso tranquilamente com algumas pessoas próximas.",
          tipoAlternativa: 'FLEUMATICO'
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
          tipoAlternativa: 'SANGUINIO'
        },
        {
          texto: "Reorganizo tudo com determinação para manter o controle.",
          tipoAlternativa: 'COLERICO'
        },
        {
          texto: "Analizo detalhadamente o impacto da mudança.",
          tipoAlternativa: 'MELANCOLICO'
        },
        {
          texto: "Aceito tranquilamente e me adapto sem grandes problemas.",
          tipoAlternativa: 'FLEUMATICO'
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
          tipoAlternativa: 'SANGUINIO'
        },
        {
          texto: "Ataco o problema com estratégia e determinação.",
          tipoAlternativa: 'COLERICO'
        },
        {
          texto: "Analizo meticulosamente todos os detalhes.",
          tipoAlternativa: 'MELANCOLICO'
        },
        {
          texto: "Resolvo calmamente, sem me estressar.",
          tipoAlternativa: 'FLEUMATICO'
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
          tipoAlternativa: 'SANGUINIO'
        },
        {
          texto: "Ofereço soluções práticas e diretas.",
          tipoAlternativa: 'COLERICO'
        },
        {
          texto: "Escuto atentamente e ofereço apoio emocional profundo.",
          tipoAlternativa: 'MELANCOLICO'
        },
        {
          texto: "Estou presente de forma calma e acolhedora.",
          tipoAlternativa: 'FLEUMATICO'
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
          tipoAlternativa: 'SANGUINIO'
        },
        {
          texto: "Sou rigoroso e disciplinado com meus compromissos.",
          tipoAlternativa: 'COLERICO'
        },
        {
          texto: "Planejo detalhadamente e sigo o plano à risca.",
          tipoAlternativa: 'MELANCOLICO'
        },
        {
          texto: "Cumpro tranquilamente, sem estresse.",
          tipoAlternativa: 'FLEUMATICO'
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
          tipoAlternativa: 'SANGUINIO'
        },
        {
          texto: "Lidero e direciono as ações para alcançar resultados.",
          tipoAlternativa: 'COLERICO'
        },
        {
          texto: "Analizo detalhes e contribuo com planejamento.",
          tipoAlternativa: 'MELANCOLICO'
        },
        {
          texto: "Ajudo a manter o clima harmonioso e colaborativo.",
          tipoAlternativa: 'FLEUMATICO'
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
          create: await Promise.all(
            shuffleArray(questao.alternativas).map(async (alternativa) => {
              const tipoAlternativaId = tiposPorNome[alternativa.tipoAlternativa];
              if (!tipoAlternativaId) {
                throw new Error(`Tipo de alternativa ${alternativa.tipoAlternativa} não encontrado`);
              }
              return {
                texto: alternativa.texto,
                tipoAlternativaId: tipoAlternativaId
              }
            })
          )
        }
      }
    });
  }
};
