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

export const seedLinguagemAutor = async (prismaClient?: PrismaClient) => {
  const client = prismaClient || prisma;

  // Primeiro, encontra o tipo de questão 'linguagem_autor'
  const tipoQuestao = await client.tipoQuestao.findUnique({
    where: { nome: 'LINGUAGEM_AUTOR' }
  });

  if (!tipoQuestao) {
    console.error('Tipo de questão LINGUAGEM_AUTOR não encontrado');
    return;
  }

  // Dados das questões de linguagem do autor
  const questoes = [
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como você gostaria que {nome} demonstrasse amor por você em um dia comum?",
      complemento: "Pense em gestos que fariam você se sentir verdadeiramente amado(a).",
      alternativas: [
        { texto: "Com demonstrações físicas de afeto ao longo do dia.", tipoAlternativa: "TOQUE_FISICO" },
        { texto: "Me dizendo palavras carinhosas e de afirmação.", tipoAlternativa: "PALAVRA_AFIRMACAO" },
        { texto: "Dedicando tempo de qualidade comigo, sem distrações.", tipoAlternativa: "TEMPO_QUALIDADE" },
        { texto: "Fazendo pequenas coisas para me ajudar no dia a dia.", tipoAlternativa: "ATOS_SERVICO" },
        { texto: "Me surpreendendo com pequenos presentes ou lembranças.", tipoAlternativa: "PRESENTES" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "O que mais te magoa em um relacionamento?",
      complemento: "Às vezes, o que mais nos machuca revela o que mais valorizamos.",
      alternativas: [
        { texto: "Falta de contato físico ou demonstrações de afeto.", tipoAlternativa: "TOQUE_FISICO" },
        { texto: "Ausência de palavra_afirmacao e reconhecimento.", tipoAlternativa: "PALAVRA_AFIRMACAO" },
        { texto: "Falta de tempo dedicado exclusivamente a mim.", tipoAlternativa: "TEMPO_QUALIDADE" },
        { texto: "Quando não recebo ajuda em momentos necessários.", tipoAlternativa: "ATOS_SERVICO" },
        { texto: "Esquecimento de datas especiais ou falta de presentes significativos.", tipoAlternativa: "PRESENTES" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "O que te faz sentir mais valorizado em um relacionamento?",
      complemento: "",
      alternativas: [
        { texto: "Quando a pessoa faz coisas práticas para me ajudar.", tipoAlternativa: "ATOS_SERVICO" },
        { texto: "Receber elogios e palavra_afirmacao frequentes.", tipoAlternativa: "PALAVRA_AFIRMACAO" },
        { texto: "Demonstrações físicas de afeto e carinho.", tipoAlternativa: "TOQUE_FISICO" },
        { texto: "Ter momentos de atenção exclusiva e conversas profundas.", tipoAlternativa: "TEMPO_QUALIDADE" },
        { texto: "Receber presentes thoughtful e significativos.", tipoAlternativa: "PRESENTES" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como você prefere que alguém demonstre gratidão por algo que você fez?",
      complemento: "",
      alternativas: [
        { texto: "Com um abraço ou outro gesto físico de carinho.", tipoAlternativa: "TOQUE_FISICO" },
        { texto: "Expressando verbalmente o quanto apreciou.", tipoAlternativa: "PALAVRA_AFIRMACAO" },
        { texto: "Dedicando um tempo especial comigo.", tipoAlternativa: "TEMPO_QUALIDADE" },
        { texto: "Retribuindo com alguma ajuda prática.", tipoAlternativa: "ATOS_SERVICO" },
        { texto: "Com um pequeno presente ou lembrança.", tipoAlternativa: "PRESENTES" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "O que mais te machuca quando está em um relacionamento?",
      complemento: "",
      alternativas: [
        { texto: "Falta de atenção ou tempo dedicado.", tipoAlternativa: "TEMPO_QUALIDADE" },
        { texto: "Palavras duras ou falta de reconhecimento verbal.", tipoAlternativa: "PALAVRA_AFIRMACAO" },
        { texto: "Quando não recebo ajuda em momentos necessários.", tipoAlternativa: "ATOS_SERVICO" },
        { texto: "Distância física ou falta de carinho.", tipoAlternativa: "TOQUE_FISICO" },
        { texto: "Esquecimento de datas ou momentos especiais.", tipoAlternativa: "PRESENTES" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Você está se sentindo inseguro sobre uma decisão importante. O que alguém poderia fazer para te ajudar?",
      complemento: "",
      alternativas: [
        { texto: "Me ajudar a pesquisar e organizar as informações.", tipoAlternativa: "ATOS_SERVICO" },
        { texto: "Me dar palavras de confiança e encorajamento.", tipoAlternativa: "PALAVRA_AFIRMACAO" },
        { texto: "Sentar comigo e discutir todas as opções.", tipoAlternativa: "TEMPO_QUALIDADE" },
        { texto: "Me dar um abraço reconfortante.", tipoAlternativa: "TOQUE_FISICO" },
        { texto: "Me dar algo que me lembre de minha capacidade.", tipoAlternativa: "PRESENTES" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como você gosta de comemorar suas conquistas?",
      complemento: "",
      alternativas: [
        { texto: "Com abraços e demonstrações físicas de carinho.", tipoAlternativa: "TOQUE_FISICO" },
        { texto: "Com reconhecimento verbal e elogios.", tipoAlternativa: "PALAVRA_AFIRMACAO" },
        { texto: "Passando tempo com pessoas especiais.", tipoAlternativa: "TEMPO_QUALIDADE" },
        { texto: "Com alguém preparando algo especial para mim.", tipoAlternativa: "ATOS_SERVICO" },
        { texto: "Recebendo um presente comemorativo.", tipoAlternativa: "PRESENTES" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "O que te faz sentir mais amado no dia a dia?",
      complemento: "",
      alternativas: [
        { texto: "Quando fazem pequenas coisas para me ajudar.", tipoAlternativa: "ATOS_SERVICO" },
        { texto: "Receber mensagens carinhosas e elogios.", tipoAlternativa: "PALAVRA_AFIRMACAO" },
        { texto: "Ter momentos de atenção exclusiva.", tipoAlternativa: "TEMPO_QUALIDADE" },
        { texto: "Receber gestos físicos de carinho.", tipoAlternativa: "TOQUE_FISICO" },
        { texto: "Receber pequenas surpresas ou lembranças.", tipoAlternativa: "PRESENTES" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "Como você gosta de demonstrar que se importa com alguém?",
      complemento: "",
      alternativas: [
        { texto: "Fazendo coisas práticas para ajudar.", tipoAlternativa: "ATOS_SERVICO" },
        { texto: "Dizendo o quanto a pessoa é especial para mim.", tipoAlternativa: "PALAVRA_AFIRMACAO" },
        { texto: "Dedicando tempo e atenção exclusiva.", tipoAlternativa: "TEMPO_QUALIDADE" },
        { texto: "Com gestos físicos de carinho.", tipoAlternativa: "TOQUE_FISICO" },
        { texto: "Dando presentes significativos.", tipoAlternativa: "PRESENTES" }
      ]
    },
    {
      tipoQuestaoId: tipoQuestao.id,
      pergunta: "O que você mais valoriza quando está passando por um momento difícil?",
      complemento: "",
      alternativas: [
        { texto: "Ajuda prática com as dificuldades.", tipoAlternativa: "ATOS_SERVICO" },
        { texto: "Palavras de conforto e encorajamento.", tipoAlternativa: "PALAVRA_AFIRMACAO" },
        { texto: "Alguém que dedique tempo para me ouvir.", tipoAlternativa: "TEMPO_QUALIDADE" },
        { texto: "Um abraço ou gesto físico de apoio.", tipoAlternativa: "TOQUE_FISICO" },
        { texto: "Um presente que me faça sentir melhor.", tipoAlternativa: "PRESENTES" }
      ]
    }
  ];

  // Buscar os tipos de alternativa
  const tiposAlternativa = await client.tipoAlternativa.findMany({
    where: {
      nome: {
        in: ['PALAVRA_AFIRMACAO', 'TOQUE_FISICO', 'TEMPO_QUALIDADE', 'ATOS_SERVICO', 'PRESENTES']
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
        complemento: questao.complemento,
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

  console.log('Seed de Linguagem do Autor concluído');
};

// Remover a função main para ser usado como módulo
// export const main = async () => {
//   try {
//     await seedLinguagemAutor();
//   } catch (e) {
//     console.error(e);
//     process.exit(1);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// Descomentar se quiser rodar diretamente
// main();
