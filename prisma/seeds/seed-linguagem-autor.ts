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
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Quando você pensa em um relacionamento feliz com {nome}, o que vem primeiro na sua mente?",
      "complemento": "Sua resposta pode revelar o que te faz sentir mais conectada e valorizada.",
      "alternativas": [
          { "texto": "O carinho físico, os abraços apertados e a proximidade constante.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "Os momentos juntos, sem pressa, aproveitando a companhia um do outro.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "As surpresas e pequenos gestos inesperados que mostram que ele pensa em mim.", "tipoAlternativa": "PRESENTES" },
          { "texto": "As conversas profundas e o jeito como ele me faz sentir especial com palavras.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "O jeito como ele cuida de mim e percebe minhas necessidades sem eu precisar falar.", "tipoAlternativa": "ATOS_SERVICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Se você e {nome} estivessem passando por um momento difícil no relacionamento, o que te ajudaria a se sentir mais segura?",
      "complemento": "A forma como você busca conforto pode revelar muito sobre o que te faz sentir amada.",
      "alternativas": [
          { "texto": "Manter o contato físico, com abraços e carinhos, sem necessariamente precisar dizer nada.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "Ouvir dele palavras sinceras dizendo que tudo vai ficar bem, o quanto me ama e sou importante.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "Receber um gesto e/ou um objeto simbólico que me lembrasse do que vivemos juntos.", "tipoAlternativa": "PRESENTES" },
          { "texto": "Perceber que ele está disposto a fazer algo para melhorar as coisas sem eu precisar pedir.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "Ter um tempo só nosso, longe de distrações, para conversarmos e nos reconectarmos.", "tipoAlternativa": "TEMPO_QUALIDADE" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Se {nome} quisesse te surpreender em um dia comum, o que te deixaria mais feliz?",
      "complemento": "O que faria você se sentir mais especial e valorizada inesperadamente?",
      "alternativas": [
          { "texto": "Me presentear com algo que mostrasse que ele pensa em mim.", "tipoAlternativa": "PRESENTES" },
          { "texto": "Me dar um abraço forte e demorado que me fizesse esquecer do mundo.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "Ele aparecer do nada só para me ver e passar um tempo comigo.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "Ele resolver algo para mim ou me ajudar sem eu precisar pedir.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "Uma mensagem inesperada dizendo o quanto ele me ama e sou importante para ele.", "tipoAlternativa": "PALAVRA_AFIRMACAO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Se {nome} fosse demonstrar o quanto gosta de você na frente dos outros, o que mais te deixaria feliz?",
      "complemento": "O jeito que você se sente valorizada em público pode dizer muito sobre o que te faz bem no relacionamento.",
      "alternativas": [
          { "texto": "Se {nome} me desse uma rosa de maneira inesperada.", "tipoAlternativa": "PRESENTES" },
          { "texto": "Se {nome} segurasse minha mão, me abraçasse ou demonstrasse carinho físico.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "Se {nome} prestasse atenção em mim e me incluísse nas conversas.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "Se {nome} falasse de mim de forma carinhosa e fizesse questão de me elogiar.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "Se {nome} fizesse algo por mim, mostrando que se importa com meu bem-estar.", "tipoAlternativa": "ATOS_SERVICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Se {nome} tivesse um dia super corrido, mas quisesse mostrar que está pensando em você, qual atitude faria mais diferença?",
      "complemento": "A forma como você gosta de ser lembrada pode revelar muito sobre sua maneira de sentir amor.",
      "alternativas": [
          { "texto": "Ele me surpreenderia com algo simbólico que me lembrasse dele.", "tipoAlternativa": "PRESENTES" },
          { "texto": "Ele resolveria algo para mim, me aliviando um pouco do stress do dia a dia.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "Ele faria questão de me abraçar forte na primeira oportunidade.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "Ele reservaria um tempinho, nem que fosse pouco, para estar comigo.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "Uma ligação rápida ou uma mensagem dizendo que sente minha falta.", "tipoAlternativa": "PALAVRA_AFIRMACAO" }
      ]
  },
  {
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Se {nome} quisesse fazer algo especial no seu aniversário, o que te deixaria mais feliz?",
    "complemento": "O que tornaria essa data realmente marcante para você?",
    "alternativas": [
        { "texto": "Se ele me escrevesse uma carta ou dissesse algo significativo sobre mim.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "Se ele organizasse um momento só nosso, sem distrações.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "Se ele me enchesse de carinho, abraços e beijos ao longo do dia.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "Se ele cuidasse de tudo, me poupando de preocupações e organizando algo por conta própria.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "Se ele me desse um presente significativo, mostrando que pensou em mim.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Se {nome} estivesse chateado com você, o que te faria sentir que tudo está bem novamente?",
    "complemento": "O jeito que você lida com conflitos pode indicar como se sente mais amada.",
    "alternativas": [
        { "texto": "Se ele viesse falar comigo e dissesse que me ama.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "Se ele separasse um tempo para ficarmos juntos e conversarmos.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "Se ele me abraçasse apertado e mostrasse que está tudo bem.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "Se ele fizesse algo prático para demonstrar que se importa comigo, como deixar a louça lavada ou fazer o jantar.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "Se ele me desse algo simbólico como forma de reconciliação.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Se {nome} estivesse viajando a trabalho há muitos dias, como ele poderia te fazer sentir amada?",
    "complemento": "A forma como você mantém a conexão pode revelar muito sobre sua forma de se sentir especial.",
    "alternativas": [
        { "texto": "Se ele me mandasse mensagens e áudios carinhosos e me ligasse sempre que possível.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "Se ele planejasse momentos para conversarmos e mantermos nossa conexão.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "Se ele fizesse chamadas de vídeo e demonstrasse carinho, mesmo que à distância.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "Se ele encontrasse maneiras de facilitar minha rotina, mesmo de longe.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "Se ele me enviasse cartas, flores ou presentes para me lembrar dele.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Se {nome} te chamasse para um fim de semana especial, qual dessas opções te deixaria mais feliz?",
    "complemento": "O tipo de programa que você mais valoriza pode indicar sua necessidade emocional.",
    "alternativas": [
        { "texto": "Um retiro romântico só nós dois, sem distrações do mundo.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "Um dia cheio de carinho, com abraços e proximidade o tempo todo.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "Um jantar romântico, onde ele me falasse tudo o que sente por mim.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "Um fim de semana relaxante, onde ele se preocupasse em cuidar de tudo para mim.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "Uma surpresa especial, como um presente simbólico que mostrasse o quanto ele me conhece.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Se você estivesse tendo um dia ruim, como gostaria que {nome} reagisse?",
    "complemento": "A forma como você busca conforto emocional pode revelar sua principal linguagem do amor.",
    "alternativas": [
        { "texto": "Que ele me dissesse algo inspirador e me lembrasse do quanto sou especial.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "Que ele parasse tudo e ficasse comigo para me animar.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "Que ele me abraçasse apertado e ficasse perto de mim.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "Que ele assumisse algumas tarefas minhas para aliviar meu dia.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "Que ele me surpreendesse com um gesto ou presente inesperado.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se {nome} quisesse demonstrar o quanto você é especial para ele de uma forma inesperada, o que mais te emocionaria?",
  "complemento": "A forma como você recebe amor pode estar nessa resposta.",
  "alternativas": [
      { "texto": "Se ele dissesse palavras bonitas, reforçando o quanto sou importante para ele.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Se ele planejasse um momento só nosso, para curtirmos juntos.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Se ele fizesse algo prático por mim, como resolver um problema sem que eu pedisse.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Se ele me surpreendesse com um presente especial, um chocolate que eu goste, sem motivo específico.", "tipoAlternativa": "PRESENTES" },
      { "texto": "Se ele viesse e me abraçasse forte, e me enchesse de carinho.", "tipoAlternativa": "TOQUE_FISICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se {nome} te dissesse 'eu te amo', como você gostaria que ele complementasse essa demonstração?",
  "complemento": "A maneira como você imagina esse momento pode revelar como se sente mais amada.",
  "alternativas": [
      { "texto": "Gostaria que ele olhasse nos meus olhos e falasse tudo o que sente por mim.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Que ele estivesse presente, tirando um tempo só para nós dois.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Que ele me abraçasse forte e me fizesse sentir segura.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Com uma ação, cuidando de algo para mim, para ver que ele presta atenção nas minhas necessidades.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Que ele me presenteasse com algo simbólico que representasse nosso amor.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se {nome} estivesse distraído com algo e você quisesse que ele demonstrasse mais atenção, o que te faria sentir melhor?",
  "complemento": "Sua resposta pode indicar como você se sente mais valorizada no relacionamento.",
  "alternativas": [
      { "texto": "Que ele olhasse para mim e dissesse algo carinhoso, reafirmando o que sente.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Que ele parasse o que estivesse fazendo e reservasse um tempo para estarmos juntos.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Que ele simplesmente viesse até mim e segurasse minha mão ou me abraçasse.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Que ele percebesse que eu preciso de algo e fizesse isso por mim sem que eu pedisse.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Que ele aparecesse com um mimo ou uma lembrança inesperada para me fazer sorrir.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se {nome} estivesse muito ocupado, mas quisesse demonstrar que pensa em você, o que significaria mais?",
  "complemento": "O jeito como você gosta de receber amor, mesmo na correria do dia a dia, pode estar nessa escolha.",
  "alternativas": [
      { "texto": "Se ele me enviasse uma mensagem ou um áudio reforçando que sente minha falta.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Se ele fizesse questão de separar um tempinho, nem que fosse curto, só para nós.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Se, ao me ver, ele fizesse questão de me encher de carinho e abraços.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Se ele resolvesse algo para mim ou me ajudasse com alguma coisa sem que eu pedisse.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Se ele me mandasse algo simbólico, como uma flor ou um pequeno presente.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se você estivesse contando algo importante para {nome}, o que te faria sentir que ele realmente se importa?",
  "complemento": "Sua resposta pode indicar o que te faz sentir mais ouvida e valorizada.",
  "alternativas": [
      { "texto": "Se ele dissesse palavras de apoio e reconhecimento sobre o que eu estou contando, mostrando que ele se importa.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Se ele realmente prestasse atenção, sem distrações, e ficasse ali comigo.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Se ele se aproximasse e demonstrasse fisicamente que está presente.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Se ele fizesse algo concreto para me ajudar com a situação.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Se, depois, ele me surpreendesse com um gesto simbólico mostrando que lembrou do que eu disse.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se {nome} quisesse demonstrar o quanto você é importante para ele depois de um dia difícil, o que faria mais sentido para você?",
  "complemento": "Sua resposta pode indicar o que te faz sentir mais segura e amada em momentos desafiadores.",
  "alternativas": [
      { "texto": "Se ele dissesse algo motivador e reforçasse o quanto sou incrível.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Se ele cancelasse outros compromissos para passar um tempo comigo.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Se ele me abraçasse forte e ficasse ali comigo em silêncio.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Se ele assumisse alguma responsabilidade por mim para aliviar meu dia.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Se ele me presenteasse com algo simbólico, mostrando que pensou em mim.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se {nome} fizesse algo que te deixasse chateada, como ele poderia demonstrar que se importa e quer se reconciliar?",
  "complemento": "A forma como você lida com reconciliação pode revelar muito sobre sua forma de receber amor.",
  "alternativas": [
      { "texto": "Se ele dissesse palavras sinceras, explicando o quanto me valoriza.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Se ele reservasse um tempo só para nós dois conversarmos.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Se ele viesse até mim e me abraçasse sem dizer nada.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Se ele fizesse algo para compensar o erro e me ajudar de alguma forma.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Se ele me desse um presente simbólico para marcar a reconciliação.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se {nome} estivesse planejando algo especial para você, o que te deixaria mais emocionada?",
  "complemento": "O tipo de surpresa que mais te toca pode indicar sua principal necessidade emocional no relacionamento.",
  "alternativas": [
      { "texto": "Se ele escrevesse algo profundo e emocionante para mim.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Se ele organizasse um dia só para nós dois, sem interrupções.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Se ele viesse até mim e demonstrasse carinho o tempo todo.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Se ele percebesse algo que eu precisava e resolvesse sem eu pedir.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Se ele me desse algo simbólico que mostrasse que pensou em mim.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se você e {nome} tivessem uma rotina muito corrida, qual atitude dele mostraria que ele ainda está conectado com você?",
  "complemento": "O que faria você se sentir valorizada mesmo na correria do dia a dia?",
  "alternativas": [
      { "texto": "Se ele me mandasse mensagens ou áudios carinhosos ao longo do dia.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Se ele fizesse questão de separar um momento só para nós dois.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Se, ao nos vermos, ele fizesse questão de me encher de carinho.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Se ele me ajudasse com algo prático, percebendo que estou sobrecarregada.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Se ele me surpreendesse com um presente inesperado, mostrando que pensa em mim.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se você estivesse passando por um momento de insegurança no relacionamento, o que {nome} poderia fazer para te fazer se sentir amada novamente?",
  "complemento": "A maneira como você busca segurança emocional pode indicar sua principal forma de se sentir amada.",
  "alternativas": [
      { "texto": "Gostaria que ele dissesse exatamente o que sente por mim, sem deixar dúvidas.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Se ele passasse mais tempo comigo e fizesse questão de me dar atenção.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Que ele me desse um abraço forte, se aproximasse e me envolvesse com carinho e proximidade física.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Se ele me ajudasse com algo que estou precisando, sem eu pedir. Mostraria que ele presta atenção em mim.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Se ele me desse um presente simbólico que me lembrasse o quanto sou especial para ele.", "tipoAlternativa": "PRESENTES" }
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
