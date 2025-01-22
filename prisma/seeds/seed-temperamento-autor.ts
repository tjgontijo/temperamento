import { PrismaClient, TipoAlternativa } from '@prisma/client'

const prisma = new PrismaClient()

// Função para embaralhar array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const seedTemperamentoAutor = async (prismaClient?: PrismaClient) => {
  const client = prismaClient || prisma;

  // Primeiro, encontra o tipo de questão 'temperamento_autor'
  const tipoQuestao = await client.tipoQuestao.findUnique({
    where: { nome: 'TEMPERAMENTO_AUTOR' }
  });

  if (!tipoQuestao) {
    console.error('Tipo de questão TEMPERAMENTO_AUTOR não encontrado');
    return;
  }

  // Dados das questões de temperamento do autor
  const questoes = [
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como você costuma reagir quando está em um grupo novo de pessoas?",
      complemento: "Pense em sua reação natural ao se encontrar em um ambiente social desconhecido.",
      alternativas: [
        { texto: "Logo começo a conversar e fazer amizade com todos.", tipoAlternativa: "SANGUINIO" },
        { texto: "Tomo a iniciativa de liderar ou organizar atividades.", tipoAlternativa: "COLERICO" },
        { texto: "Observo cuidadosamente antes de me aproximar.", tipoAlternativa: "MELANCOLICO" },
        { texto: "Me adapto tranquilamente ao ritmo do grupo.", tipoAlternativa: "FLEUMATICO" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como você expressa seus sentimentos em um relacionamento?",
      complemento: "Pense em como você naturalmente demonstra afeto e emoções.",
      alternativas: [
        { texto: "De forma espontânea e expressiva, com muito entusiasmo.", tipoAlternativa: "SANGUINIO" },
        { texto: "Através de ações diretas e declarações claras.", tipoAlternativa: "COLERICO" },
        { texto: "De maneira profunda e significativa, com gestos pensados.", tipoAlternativa: "MELANCOLICO" },
        { texto: "Calmamente e de forma constante, sem grandes demonstrações.", tipoAlternativa: "FLEUMATICO" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Em um projeto em grupo, qual é geralmente seu papel?",
      complemento: "",
      alternativas: [
        { texto: "Motivo o grupo e trago energia positiva.", tipoAlternativa: "SANGUINIO" },
        { texto: "Lidero e organizo as tarefas.", tipoAlternativa: "COLERICO" },
        { texto: "Cuido dos detalhes e da qualidade.", tipoAlternativa: "MELANCOLICO" },
        { texto: "Apoio o grupo e mantenho a harmonia.", tipoAlternativa: "FLEUMATICO" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como você lida com mudanças inesperadas em seus planos?",
      complemento: "",
      alternativas: [
        { texto: "Encaro como uma nova aventura.", tipoAlternativa: "SANGUINIO" },
        { texto: "Rapidamente crio um novo plano de ação.", tipoAlternativa: "COLERICO" },
        { texto: "Preciso de tempo para processar e me adaptar.", tipoAlternativa: "MELANCOLICO" },
        { texto: "Aceito tranquilamente e me ajusto.", tipoAlternativa: "FLEUMATICO" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Quando você está estressado, como costuma reagir?",
      complemento: "",
      alternativas: [
        { texto: "Procuro distrações e diversão.", tipoAlternativa: "SANGUINIO" },
        { texto: "Tento resolver o problema imediatamente.", tipoAlternativa: "COLERICO" },
        { texto: "Fico introspectivo e analítico.", tipoAlternativa: "MELANCOLICO" },
        { texto: "Mantenho a calma e sigo em frente.", tipoAlternativa: "FLEUMATICO" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Você está em um restaurante e percebe que o pedido veio errado. O que você faz?",
      complemento: "",
      alternativas: [
        { texto: "Faço uma piada sobre a situação.", tipoAlternativa: "SANGUINIO" },
        { texto: "Chamo o garçom e peço para corrigir imediatamente.", tipoAlternativa: "COLERICO" },
        { texto: "Fico desapontado mas hesito em reclamar.", tipoAlternativa: "MELANCOLICO" },
        { texto: "Aceito para evitar confusão.", tipoAlternativa: "FLEUMATICO" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como você prefere passar seu tempo livre?",
      complemento: "",
      alternativas: [
        { texto: "Socializando com amigos.", tipoAlternativa: "SANGUINIO" },
        { texto: "Planejando e realizando projetos pessoais.", tipoAlternativa: "COLERICO" },
        { texto: "Em atividades criativas ou reflexivas.", tipoAlternativa: "MELANCOLICO" },
        { texto: "Relaxando tranquilamente em casa.", tipoAlternativa: "FLEUMATICO" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Em uma discussão acalorada, qual é sua postura mais comum?",
      complemento: "",
      alternativas: [
        { texto: "Tento descontrair o ambiente.", tipoAlternativa: "SANGUINIO" },
        { texto: "Defendo meu ponto de vista com firmeza.", tipoAlternativa: "COLERICO" },
        { texto: "Pondero todos os argumentos antes de falar.", tipoAlternativa: "MELANCOLICO" },
        { texto: "Busco um meio termo para resolver o conflito.", tipoAlternativa: "FLEUMATICO" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como você reage quando alguém está triste ou chateado?",
      complemento: "",
      alternativas: [
        { texto: "Tento animar a pessoa com histórias ou piadas.", tipoAlternativa: "SANGUINIO" },
        { texto: "Sugiro soluções práticas para o problema.", tipoAlternativa: "COLERICO" },
        { texto: "Ouço atentamente e ofereço conselhos profundos.", tipoAlternativa: "MELANCOLICO" },
        { texto: "Ofereço apoio silencioso e compreensivo.", tipoAlternativa: "FLEUMATICO" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como você costuma tomar decisões importantes?",
      complemento: "",
      alternativas: [
        { texto: "Seguindo minha intuição e o que parece mais divertido.", tipoAlternativa: "SANGUINIO" },
        { texto: "Rapidamente, confiando em minha análise.", tipoAlternativa: "COLERICO" },
        { texto: "Cuidadosamente, considerando todas as opções.", tipoAlternativa: "MELANCOLICO" },
        { texto: "Gradualmente, evitando extremos.", tipoAlternativa: "FLEUMATICO" }
      ]
    }
  ];

  // Buscar os tipos de alternativa
  const tiposAlternativa = await client.tipoAlternativa.findMany({
    where: {
      nome: {
        in: ['SANGUINIO', 'COLERICO', 'MELANCOLICO', 'FLEUMATICO']
      }
    }
  });

  const tiposMap: Record<string, string> = {};
  tiposAlternativa.forEach(tipo => {
    tiposMap[tipo.nome] = tipo.id;
  });

  // Primeiro, limpa as questões existentes desse tipo
  await client.questao.deleteMany({
    where: { tipoQuestaoId: tipoQuestao.id }
  });

  // Criar as questões com suas alternativas
  for (const questao of questoes) {
    await client.questao.create({
      data: {
        pergunta: questao.pergunta,
        complemento: questao.complemento || '',
        tipoQuestaoId: tipoQuestao.id,
        alternativas: {
          create: shuffleArray(questao.alternativas).map(alternativa => {
            const tipoAlternativaId = tiposMap[alternativa.tipoAlternativa];
            if (!tipoAlternativaId) {
              throw new Error(`Tipo de alternativa ${alternativa.tipoAlternativa} não encontrado`);
            }
            return {
              texto: alternativa.texto,
              tipoAlternativaId: tipoAlternativaId
            };
          })
        }
      }
    });
  }

  console.log('Seed de Temperamento do Autor concluído');
};
