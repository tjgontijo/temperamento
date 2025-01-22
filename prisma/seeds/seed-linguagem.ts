import { PrismaClient } from '@prisma/client'

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

export const seedLinguagem = async (prismaClient?: PrismaClient) => {
  const client = prismaClient || prisma;

  // Primeiro, encontra o tipo de questão 'LINGUAGEM'
  const tipoQuestao = await client.tipoQuestao.findUnique({
    where: { nome: 'LINGUAGEM' }
  });

  if (!tipoQuestao) {
    console.error('Tipo de questão LINGUAGEM não encontrado');
    return;
  }

  // Dados das questões de linguagem
  const questoes = [
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Quando você faz algo especial por {nome}, como ele(a) costuma demonstrar gratidão?",
      complemento: "Observe como ele(a) naturalmente expressa apreciação.",
      alternativas: [
        { texto: "Faz questão de me abraçar e demonstrar carinho físico", tipoAlternativa: "TOQUE_FISICO" },
        { texto: "Expressa verbalmente o quanto ficou feliz e agradecido(a)", tipoAlternativa: "PALAVRA_AFIRMACAO" },
        { texto: "Dedica um tempo especial só para mim como forma de agradecimento", tipoAlternativa: "TEMPO_QUALIDADE" },
        { texto: "Retribui fazendo algo prático para me ajudar", tipoAlternativa: "ATOS_SERVICO" },
        { texto: "Me presenteia com algo especial em retribuição", tipoAlternativa: "PRESENTES" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como {nome} costuma agir quando está com saudade de você?",
      complemento: "A forma como alguém lida com a saudade revela muito sobre sua linguagem do amor.",
      alternativas: [
        { texto: "Faz questão de ter longas conversas para matar a saudade", tipoAlternativa: "TEMPO_QUALIDADE" },
        { texto: "Envia presentes ou lembrancinhas para diminuir a distância", tipoAlternativa: "PRESENTES" },
        { texto: "Manda mensagens carinhosas expressando seus sentimentos", tipoAlternativa: "PALAVRA_AFIRMACAO" },
        { texto: "Quando nos encontramos, busca muito contato físico", tipoAlternativa: "TOQUE_FISICO" },
        { texto: "Planeja coisas práticas para fazer quando estivermos juntos", tipoAlternativa: "ATOS_SERVICO" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Quando {nome} quer demonstrar que se importa com você, o que ele(a) geralmente faz?",
      complemento: "Observe os gestos espontâneos que demonstram cuidado.",
      alternativas: [
        { texto: "Oferece ajuda em tarefas ou resolve problemas práticos", tipoAlternativa: "ATOS_SERVICO" },
        { texto: "Me surpreende com presentes, mesmo sem ocasião especial", tipoAlternativa: "PRESENTES" },
        { texto: "Faz questão de estar próximo(a) fisicamente, com toques e carinhos", tipoAlternativa: "TOQUE_FISICO" },
        { texto: "Dedica tempo exclusivo para estarmos juntos", tipoAlternativa: "TEMPO_QUALIDADE" },
        { texto: "Expressa seus sentimentos com palavras carinhosas", tipoAlternativa: "PALAVRA_AFIRMACAO" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Em momentos de comemoração, como {nome} naturalmente expressa sua alegria com você?",
      complemento: "As reações espontâneas revelam muito sobre a pessoa.",
      alternativas: [
        { texto: "Faz questão de me elogiar e expressar seu orgulho", tipoAlternativa: "PALAVRA_AFIRMACAO" },
        { texto: "Quer comemorar com abraços e demonstrações físicas de afeto", tipoAlternativa: "TOQUE_FISICO" },
        { texto: "Organiza algo especial para fazermos juntos", tipoAlternativa: "TEMPO_QUALIDADE" },
        { texto: "Compra algo especial para marcar o momento", tipoAlternativa: "PRESENTES" },
        { texto: "Se dedica a fazer algo prático que sabe que me agrada", tipoAlternativa: "ATOS_SERVICO" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Quando {nome} percebe que você está chateado(a), qual é sua reação mais comum?",
      complemento: "O jeito de consolar revela muito sobre como a pessoa expressa amor.",
      alternativas: [
        { texto: "Procura estar fisicamente próximo, com abraços e gestos de conforto", tipoAlternativa: "TOQUE_FISICO" },
        { texto: "Tenta resolver praticamente o que está te incomodando", tipoAlternativa: "ATOS_SERVICO" },
        { texto: "Dedica tempo para te ouvir e estar presente", tipoAlternativa: "TEMPO_QUALIDADE" },
        { texto: "Usa palavras de conforto e encorajamento", tipoAlternativa: "PALAVRA_AFIRMACAO" },
        { texto: "Traz algo especial para te animar", tipoAlternativa: "PRESENTES" }
      ]
    }
  ];

  // Criar as questões com suas alternativas
  for (const questao of questoes) {
    await client.questao.create({
      data: {
        pergunta: questao.pergunta,
        complemento: questao.complemento,
        tipoQuestaoId: questao.tipoQuestaoId,
        alternativas: {
          create: await Promise.all(
            // Embaralha as alternativas antes de criar
            shuffleArray(questao.alternativas).map(async (alternativa) => {
              const tipoAlternativa = await client.tipoAlternativa.findUnique({
                where: { nome: alternativa.tipoAlternativa }
              });

              if (!tipoAlternativa) {
                throw new Error(`Tipo de alternativa ${alternativa.tipoAlternativa} não encontrado`);
              }

              return {
                texto: alternativa.texto,
                tipoAlternativaId: tipoAlternativa.id
              };
            })
          )
        }
      }
    });
  }
};
