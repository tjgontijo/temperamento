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

  type QuestaoInput = {
    tipoQuestaoId: string;
    pergunta: string;
    complemento: string;
    alternativas: {
      texto: string;
      tipoAlternativa: string;
    }[];
  };

  // Dados das questões de temperamento do autor
  const questoes: QuestaoInput[] = [
    {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Você tem um dia completamente livre, sem nenhuma obrigação. O que faz?",
      "complemento": "Imagine que você pode fazer qualquer coisa sem preocupações. Como aproveita esse tempo?",
      "alternativas": [
          { "texto": "Aproveito para planejar meus próximos passos e colocar pendências em dia.", "tipoAlternativa": "COLERICO" },
          { "texto": "Fico em casa relaxando, sem pressa para decidir o que fazer.", "tipoAlternativa": "FLEUMATICO" },
          { "texto": "Saio para encontrar amigos, conversar e me divertir ao máximo.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "Passo o dia sozinha, lendo um bom livro ou assistindo algo inspirador.", "tipoAlternativa": "MELANCOLICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Você está planejando uma viagem com amigos. Como organiza tudo?",
      "complemento": "Cada pessoa tem um jeito diferente de lidar com viagens. Qual é o seu?",
      "alternativas": [
          { "texto": "Assumo o controle e defino roteiros, horários e tudo o que precisa ser feito.", "tipoAlternativa": "COLERICO" },
          { "texto": "Só quero saber dos momentos divertidos! Deixo a organização para os outros.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "Faço pesquisas detalhadas sobre os melhores lugares e planejo cada passo com cuidado.", "tipoAlternativa": "MELANCOLICO" },
          { "texto": "Vou no fluxo, sem estresse. O importante é relaxar e curtir o momento.", "tipoAlternativa": "FLEUMATICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Se alguém te dá um presente inesperado, como você reage?",
      "complemento": "Imagine que um amigo te dá um presente sem motivo aparente. Como você responde?",
      "alternativas": [
          { "texto": "Agradeço de forma discreta e aceito sem muita cerimônia.", "tipoAlternativa": "FLEUMATICO" },
          { "texto": "Agradeço de forma direta e já penso em retribuir de alguma maneira.", "tipoAlternativa": "COLERICO" },
          { "texto": "Fico super animada, abraço a pessoa e expresso minha felicidade na hora!", "tipoAlternativa": "SANGUINIO" },
          { "texto": "Fico tocada e guardo o presente com muito carinho, valorizando o gesto.", "tipoAlternativa": "MELANCOLICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Seu grupo de amigos quer escolher um restaurante, mas ninguém decide. O que você faz?",
      "complemento": "Cada um tem um jeito de lidar com a indecisão em grupo. Como você age?",
      "alternativas": [
          { "texto": "Espero alguém decidir e sigo a escolha do grupo sem me preocupar.", "tipoAlternativa": "FLEUMATICO" },
          { "texto": "Faço piada da situação e tento tornar a escolha divertida.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "Tomo a decisão rapidamente para acabar logo com a indecisão.", "tipoAlternativa": "COLERICO" },
          { "texto": "Sugiro opções baseadas no gosto de cada um e tento equilibrar as preferências.", "tipoAlternativa": "MELANCOLICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Você recebe uma crítica construtiva. Como reage?",
      "complemento": "Nem sempre é fácil ouvir críticas. Qual é sua reação mais comum?",
      "alternativas": [
          { "texto": "Defendo meu ponto de vista e justifico minhas escolhas.", "tipoAlternativa": "COLERICO" },
          { "texto": "Aceito a crítica e não fico remoendo, desde que seja dita de forma respeitosa.", "tipoAlternativa": "FLEUMATICO" },
          { "texto": "Levo na esportiva e sigo em frente sem dar muita importância.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "Fico refletindo sobre a crítica por um bom tempo e tento aprender com ela.", "tipoAlternativa": "MELANCOLICO" }
      ]
  },
  {
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "O que você faz quando está interessada em alguém?",
    "complemento": "Você conheceu alguém que chamou sua atenção. Como costuma agir quando gosta de alguém?",
    "alternativas": [
        { "texto": "Espero a outra pessoa demonstrar interesse primeiro, sem me apressar.", "tipoAlternativa": "FLEUMATICO" },
        { "texto": "Observo primeiro, analiso os sinais e espero um momento certo para me aproximar.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "Faço questão de estar sempre por perto e puxar assunto de forma divertida.", "tipoAlternativa": "SANGUINIO" },
        { "texto": "Vou direto ao ponto, deixo claro meu interesse e vejo se a pessoa corresponde.", "tipoAlternativa": "COLERICO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Como você reage quando está brigada com alguém importante para você?",
    "complemento": "Você teve um desentendimento com alguém que ama. Como lida com a situação?",
    "alternativas": [
        { "texto": "Sei que estou certa, então não corro atrás. Quem quiser que venha conversar.", "tipoAlternativa": "COLERICO" },
        { "texto": "Preciso desabafar logo! Falo o que sinto na hora, mesmo que depois me arrependa.", "tipoAlternativa": "SANGUINIO" },
        { "texto": "Deixo o tempo resolver, prefiro evitar o conflito ao máximo.", "tipoAlternativa": "FLEUMATICO" },
        { "texto": "Fico remoendo tudo, tentando entender o que deu errado e ensaiando o que dizer.", "tipoAlternativa": "MELANCOLICO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Quando você recebe um elogio, qual é sua reação?",
    "complemento": "Você recebe um elogio inesperado de alguém que admira. Como responde?",
    "alternativas": [
        { "texto": "Sorrio discretamente, sem muita reação, porque não sei bem o que dizer.", "tipoAlternativa": "FLEUMATICO" },
        { "texto": "Agradeço com um sorriso confiante e sigo em frente.", "tipoAlternativa": "COLERICO" },
        { "texto": "Adoro elogios! Retribuo na hora e sigo a conversa animadamente.", "tipoAlternativa": "SANGUINIO" },
        { "texto": "Fico meio sem jeito, mas agradeço de forma sincera.", "tipoAlternativa": "MELANCOLICO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Se você tem um grande objetivo, como age para conquistá-lo?",
    "complemento": "Você tem um sonho ou uma meta importante. Qual é sua abordagem para alcançá-lo?",
    "alternativas": [
        { "texto": "Vou com tudo! Planejo, executo e faço o que for preciso para chegar lá.", "tipoAlternativa": "COLERICO" },
        { "texto": "Vou devagar, sem pressa, e confio que tudo se ajeita no seu tempo.", "tipoAlternativa": "FLEUMATICO" },
        { "texto": "Analiso cada detalhe antes de agir, prefiro ter certeza antes de qualquer passo.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "Começo empolgada, mas às vezes me distraio no caminho e preciso de motivação extra.", "tipoAlternativa": "SANGUINIO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Se você pudesse escolher um superpoder, qual seria?",
    "complemento": "Imagine que você acordou com um superpoder incrível. Qual deles mais combina com você?",
    "alternativas": [
        { "texto": "Ser invisível para observar tudo sem ser notada e evitar conflitos.", "tipoAlternativa": "FLEUMATICO" },
        { "texto": "Ler mentes e entender profundamente o que as pessoas sentem e pensam.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "Ter força e determinação imbatíveis para conquistar qualquer coisa!", "tipoAlternativa": "COLERICO" },
        { "texto": "Encantar qualquer pessoa com meu carisma e energia contagiante!", "tipoAlternativa": "SANGUINIO" }
    ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Você descobre que alguém está espalhando um boato sobre você. Como reage?",
  "complemento": "Uma pessoa inventou algo sobre você e a notícia está se espalhando. O que faz?",
  "alternativas": [
      { "texto": "Encaro a pessoa de frente e resolvo a situação sem rodeios.", "tipoAlternativa": "COLERICO" },
      { "texto": "Faço piada da situação e deixo claro que não me abalo facilmente.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "Fico magoada e reflito bastante sobre por que isso aconteceu.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Ignoro completamente e sigo minha vida como se nada tivesse acontecido.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se um filme fosse feito sobre sua vida, qual gênero mais combinaria?",
  "complemento": "Imagine que sua história vai para os cinemas. Que tipo de filme seria?",
  "alternativas": [
      { "texto": "Um grande drama cheio de reviravoltas emocionantes.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Uma aventura cheia de ação, desafios e superação.", "tipoAlternativa": "COLERICO" },
      { "texto": "Uma comédia divertida, com muitas histórias engraçadas.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "Um filme tranquilo e reflexivo, sobre aprender e crescer aos poucos.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Você está em uma festa, mas não conhece quase ninguém. Como age?",
  "complemento": "Você foi convidada para um evento onde a maioria das pessoas é desconhecida. O que faz?",
  "alternativas": [
      { "texto": "Aproveito para observar, entender o ambiente e só depois interajo.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Chego cumprimentando todo mundo e tento fazer amizade rápido.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "Fico tranquila, converso se alguém puxar assunto, mas não forço nada.", "tipoAlternativa": "FLEUMATICO" },
      { "texto": "Tomo a frente, inicio conversas e tento organizar algo para animar o clima.", "tipoAlternativa": "COLERICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se você pudesse viajar no tempo, para onde iria?",
  "complemento": "Imagine que você tem uma máquina do tempo. Qual seria sua escolha?",
  "alternativas": [
      { "texto": "Para o futuro, onde posso ver as novas tecnologias e estar sempre à frente.", "tipoAlternativa": "COLERICO" },
      { "texto": "Para um momento feliz da minha vida, para reviver boas lembranças.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Para a época de ouro das festas e diversão, como os anos 80 ou 90!", "tipoAlternativa": "SANGUINIO" },
      { "texto": "Para um tempo pacífico, onde pudesse viver tranquilamente sem preocupações.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Você encontra uma carteira cheia de dinheiro na rua. O que faz?",
  "complemento": "Ninguém está por perto e você vê uma carteira caída no chão. Qual é sua reação?",
  "alternativas": [
      { "texto": "Levo para casa, penso com calma e analiso a melhor forma de resolver a situação.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Posto nas redes sociais e tento encontrar o dono rapidamente.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "Vou até a delegacia ou banco para entregar a quem pertence.", "tipoAlternativa": "COLERICO" },
      { "texto": "Coloco em um lugar visível e espero que o dono volte procurar.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Você está em um grupo de trabalho e percebe que ninguém está tomando iniciativa. O que faz?",
  "complemento": "O prazo está chegando e ninguém está organizando as tarefas. Qual é sua atitude?",
  "alternativas": [
      { "texto": "Assumo o comando e começo a delegar funções para garantir que tudo saia como planejado.", "tipoAlternativa": "COLERICO" },
      { "texto": "Faço minha parte no meu ritmo e espero que os outros se organizem também.", "tipoAlternativa": "FLEUMATICO" },
      { "texto": "Sugiro um plano bem estruturado e tento convencer o grupo a segui-lo.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Quebro o gelo com brincadeiras e tento animar o pessoal para começarmos juntos.", "tipoAlternativa": "SANGUINIO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Você tem um compromisso importante e está atrasada. Como lida com a situação?",
  "complemento": "O relógio está correndo e o atraso é inevitável. Qual é sua reação?",
  "alternativas": [
      { "texto": "Mando mensagem explicando e, ao chegar, tento resolver o que for possível rapidamente.", "tipoAlternativa": "COLERICO" },
      { "texto": "Aceito que não há muito a fazer e vou tranquila, sem estresse.", "tipoAlternativa": "FLEUMATICO" },
      { "texto": "Fico incomodada e me culpo por não ter saído antes, tentando encontrar uma solução no caminho.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Penso em uma forma criativa ou divertida de me desculpar quando chegar.", "tipoAlternativa": "SANGUINIO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Você precisa aprender algo completamente novo. Como aborda essa situação?",
  "complemento": "Seja um novo idioma, habilidade ou tecnologia, qual é seu jeito de aprender?",
  "alternativas": [
      { "texto": "Mergulho de cabeça, pratico e me desafio a aprender o mais rápido possível.", "tipoAlternativa": "COLERICO" },
      { "texto": "Pesquiso bastante antes de começar e sigo um método bem organizado.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Aprendo no meu tempo, sem pressa e sem cobranças.", "tipoAlternativa": "FLEUMATICO" },
      { "texto": "Transformo o aprendizado em algo divertido e interativo, envolvendo outras pessoas.", "tipoAlternativa": "SANGUINIO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Alguém te chama para um evento do qual você não quer participar. O que faz?",
  "complemento": "Seja uma festa, um compromisso social ou uma reunião, você não está a fim de ir. Como lida com isso?",
  "alternativas": [
      { "texto": "Digo que não posso e tento não prolongar a conversa.", "tipoAlternativa": "COLERICO" },
      { "texto": "Dou uma desculpa educada para evitar constrangimentos.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Aceito para não causar problemas, mas tento sair cedo.", "tipoAlternativa": "FLEUMATICO" },
      { "texto": "Acabo indo, pois gosto de me divertir e aproveitar qualquer oportunidade social.", "tipoAlternativa": "SANGUINIO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se você fosse um personagem de um livro, qual seria seu papel?",
  "complemento": "Imagine que você vive em uma grande história. Qual papel mais combina com você?",
  "alternativas": [
      { "texto": "O líder destemido que toma as decisões e guia os outros ao sucesso.", "tipoAlternativa": "COLERICO" },
      { "texto": "O herói emocional e profundo, que sempre vê além das aparências.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "O personagem divertido que traz leveza e momentos inesquecíveis para a história.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "O sábio discreto, que observa tudo e sempre tem um conselho valioso.", "tipoAlternativa": "FLEUMATICO" }
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
