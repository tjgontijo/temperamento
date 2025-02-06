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
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Quando você faz algo especial por {nome}, qual dessas atitudes ele parece valorizar mais?",
      "complemento": "A forma como ele reage ao seu carinho pode indicar a maneira que ele mais gosta de receber amor.",
      "alternativas": [
          { "texto": "{nome} fica visivelmente feliz quando eu elogio e digo palavras carinhosas.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "{nome} se ilumina quando dedico atenção exclusiva para ele, sem distrações.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "{nome} parece mais conectado quando eu demonstro carinho, como abraços e toques sutis.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "{nome} se sente especial quando faço algo por ele, como ajudá-lo em algo importante.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "{nome} adora quando eu o surpreendo com um presente ou lembrança simbólica.", "tipoAlternativa": "PRESENTES" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Se você quer animar {nome} depois de um dia ruim, qual dessas ações parece surtir mais efeito?",
      "complemento": "A maneira como ele responde ao seu conforto pode revelar como ele se sente mais amado.",
      "alternativas": [
          { "texto": "{nome} fica claramente melhor quando eu falo palavras de incentivo e carinho para ele.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "{nome} parece se acalmar quando paramos tudo para ficar juntos sem pressa.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "{nome} relaxa mais rapidamente quando eu o abraço ou fico fisicamente próxima.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "{nome} se sente aliviado quando eu ajudo com alguma tarefa que está pesando para ele.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "{nome} parece animado quando eu o surpreendo com algo simbólico para alegrar seu dia.", "tipoAlternativa": "PRESENTES" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Quando você tenta demonstrar seu carinho por {nome}, o que ele reage de forma mais positiva?",
      "complemento": "A reação dele pode indicar o tipo de gesto que ele mais valoriza em um relacionamento.",
      "alternativas": [
          { "texto": "{nome} fica radiante quando eu digo algo carinhoso ou expresso minha admiração por ele.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "{nome} parece mais conectado quando dedicamos um tempo juntos, apenas nós dois.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "{nome} se aproxima ainda mais quando eu o toco, seja segurando sua mão ou abraçando.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "{nome} se sente muito valorizado quando percebe que eu faço algo para facilitar sua vida.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "{nome} demonstra alegria quando recebe algo especial que mostre que pensei nele.", "tipoAlternativa": "PRESENTES" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Se você quer que {nome} perceba o quanto é importante para você, qual dessas ações ele tende a notar mais?",
      "complemento": "A forma como ele percebe o seu amor pode indicar o que ele mais valoriza em um relacionamento.",
      "alternativas": [
          { "texto": "{nome} se enche de orgulho quando eu falo sobre o quanto ele é especial para mim.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "{nome} parece mais envolvido quando dedicamos tempo exclusivo um ao outro, como um jantar só nosso, ou assistir um filme juntos.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "{nome} responde com carinho quando eu me aproximo e demonstro afeto físico.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "{nome} valoriza muito quando eu faço algo prático para ajudá-lo no dia a dia.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "{nome} fica surpreso e feliz quando eu o presenteio com algo especial.", "tipoAlternativa": "PRESENTES" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Se você faz algo romântico para {nome}, como ele tende a reagir de forma mais intensa?",
      "complemento": "A reação dele pode indicar qual demonstração de amor tem mais impacto emocional para ele.",
      "alternativas": [
          { "texto": "{nome} parece mais tocado quando eu digo coisas bonitas e encorajadoras para ele.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "{nome} realmente se envolve quando criamos momentos só nossos, sem interrupções.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "{nome} responde com carinho quando há contato físico, como abraços e toques.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "{nome} demonstra gratidão quando percebe que eu faço algo prático para facilitar sua vida.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "{nome} fica emocionado e empolgado quando recebe um presente especial.", "tipoAlternativa": "PRESENTES" }
      ]
  },
  {
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Se você quer fazer {nome} se sentir amado, qual dessas ações parece ter mais impacto sobre ele?",
    "complemento": "A forma como ele responde ao seu carinho pode indicar o que realmente toca o coração dele.",
    "alternativas": [
        { "texto": "{nome} parece mais feliz quando eu expresso admiração e elogio suas qualidades.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "{nome} se conecta mais quando passamos um tempo juntos, sem distrações.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "{nome} fica mais próximo quando há contato físico, como abraços ou toques sutis.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "{nome} valoriza muito quando percebo suas necessidades e faço algo para ajudá-lo.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "{nome} adora receber presentes que mostrem que pensei nele.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Quando você demonstra carinho por {nome}, qual dessas reações ele costuma ter?",
    "complemento": "O jeito que ele reage pode revelar qual tipo de afeto ele mais valoriza.",
    "alternativas": [
        { "texto": "{nome} fica claramente tocado quando eu digo palavras encorajadoras e carinhosas para ele.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "{nome} sempre prioriza tempo de qualidade comigo quando quer demonstrar que está envolvido.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "{nome} responde de forma intensa ao contato físico, como abraços e proximidade.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "{nome} se sente mais amado quando percebo suas dificuldades e tento ajudá-lo de forma prática.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "{nome} sempre se empolga quando recebe algo especial e simbólico de mim.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Se você quisesse agradar {nome} sem dizer nada, apenas com um gesto, qual dessas opções teria mais efeito?",
    "complemento": "O que faz ele se sentir especial pode estar nessa resposta.",
    "alternativas": [
        { "texto": "Escrever um bilhete ou mandar uma mensagem destacando o quanto ele é especial para mim.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "Reservar um tempo para um encontro só nosso, sem distrações.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "Segurar a mão dele, dar um abraço apertado ou demonstrar carinho físico espontaneamente.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "Fazer algo que ele precisa, como ajudá-lo em alguma tarefa sem que ele peça.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "Dar um presente simbólico que tenha um significado especial para ele.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Se você pergunta a {nome} como ele se sente no relacionamento, qual dessas respostas ele provavelmente daria?",
    "complemento": "A forma como ele descreve o que o faz feliz pode indicar a linguagem do amor dele.",
    "alternativas": [
        { "texto": "\"Adoro quando você me motiva e reconhece as coisas que faço.\"", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "\"O melhor é quando conseguimos passar tempo juntos de verdade.\"", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "\"Gosto quando estamos próximos, quando você me toca, me abraça... isso me faz bem.\"", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "\"O que eu mais gosto é quando você me ajuda com as coisas e se preocupa com o que eu preciso.\"", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "\"Eu gosto de surpresas, pequenos detalhes que mostram que você pensa em mim.\"", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Se {nome} está passando por um momento difícil, o que parece ajudar ele a se sentir melhor?",
    "complemento": "O que mais o conforta pode indicar a forma como ele sente o amor.",
    "alternativas": [
        { "texto": "Falar palavras de apoio e lembrar o quanto ele é forte e especial.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "Ficar ao lado dele, mostrando que estou presente sem pressa.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "Abraçá-lo forte e demonstrar carinho físico.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "Ajudá-lo de maneira prática, resolvendo algo que está preocupando ele.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "Fazer uma surpresa para alegrá-lo, algo simbólico para mostrar que me importo.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se {nome} recebe um elogio ou um carinho inesperado, como ele tende a reagir?",
  "complemento": "A forma como ele responde pode indicar o que realmente toca seu coração.",
  "alternativas": [
      { "texto": "{nome} responde com um abraço ou um toque físico espontâneo.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} demonstra querer passar mais tempo com a pessoa que demonstrou carinho.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} se empolga se a demonstração de carinho vier acompanhada de uma surpresa simbólica.", "tipoAlternativa": "PRESENTES" },
      { "texto": "{nome} sorri e responde com palavras de gratidão ou um elogio de volta.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} reconhece e valoriza o gesto, especialmente se envolveu ajuda prática.", "tipoAlternativa": "ATOS_SERVICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se alguém quer demonstrar para {nome} o quanto ele é especial, qual atitude ele parece notar mais?",
  "complemento": "A forma como ele reage pode indicar como ele percebe o amor e a atenção.",
  "alternativas": [
      { "texto": "{nome} parece mais conectado quando há proximidade física, como um toque ou abraço.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} demonstra entusiasmo quando recebe um presente simbólico que mostra que pensaram nele.", "tipoAlternativa": "PRESENTES" },
      { "texto": "{nome} se impressiona quando alguém percebe o que ele precisa e age para ajudá-lo.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} fica visivelmente tocado quando recebe elogios sinceros e palavras positivas.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} se envolve mais quando alguém reserva tempo exclusivo para estar com ele.", "tipoAlternativa": "TEMPO_QUALIDADE" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se {nome} recebe uma surpresa de alguém, qual dessas reações ele costuma ter?",
  "complemento": "A reação dele pode revelar o que mais valoriza emocionalmente.",
  "alternativas": [
      { "texto": "{nome} se aproxima fisicamente, talvez um abraço ou um toque, mostrando que gostou.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} agradece e destaca o quanto a surpresa o fez se sentir especial.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} tenta retribuir fazendo algo útil para mostrar gratidão.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} parece querer prolongar o momento, aproveitando mais tempo com a pessoa.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} fica visivelmente animado quando recebe algo inesperado que simboliza carinho.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se {nome} está passando por um momento difícil, o que parece ajudá-lo mais?",
  "complemento": "A forma como ele busca apoio pode indicar sua principal necessidade emocional.",
  "alternativas": [
      { "texto": "{nome} se acalma quando alguém oferece ajuda prática, sem ele precisar pedir.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} parece mais confortável quando recebe um abraço ou um toque reconfortante.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} se anima ao ouvir palavras que o motivem e reforcem sua importância.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} se sente melhor quando alguém reserva um tempo para estar com ele.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} fica mais feliz quando alguém o surpreende com um gesto simbólico.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Quando {nome} recebe atenção de alguém que gosta, como ele tende a reagir?",
  "complemento": "A forma como ele responde pode indicar o que o faz se sentir mais especial.",
  "alternativas": [
      { "texto": "{nome} retribui querendo ajudar ou fazendo algo prático para demonstrar gratidão.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} quer prolongar o momento e manter a conexão por mais tempo.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} se aproxima fisicamente, demonstrando mais abertura e carinho.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} se empolga quando recebe algo inesperado que demonstra que pensaram nele.", "tipoAlternativa": "PRESENTES" },
      { "texto": "{nome} retribui com palavras gentis e gosta de ouvir que é importante.", "tipoAlternativa": "PALAVRA_AFIRMACAO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se alguém quer demonstrar carinho por {nome}, o que parece deixá-lo mais feliz?",
  "complemento": "A maneira como ele reage pode indicar o que o faz se sentir mais amado.",
  "alternativas": [
      { "texto": "{nome} parece mais conectado quando há contato físico, como um abraço ou um toque sutil.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} se anima quando recebe palavras sinceras sobre o quanto ele é especial.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} gosta quando alguém percebe o que ele precisa e se adianta para ajudá-lo.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} demonstra estar mais envolvido quando passam tempo juntos, sem distrações.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} fica feliz e surpreso quando recebe um presente ou algo simbólico.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Quando {nome} percebe que alguém se importa com ele, qual dessas atitudes parece ter mais impacto?",
  "complemento": "O que ele valoriza pode indicar como ele percebe o amor.",
  "alternativas": [
      { "texto": "{nome} sente que é importante quando ouve palavras que reforçam suas qualidades e esforços.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} valoriza quando alguém se dedica a passar tempo com ele, sem distrações.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} reage melhor a gestos de carinho físico, como um abraço ou um toque no braço.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} se sente cuidado quando alguém faz algo por ele, sem que ele precise pedir.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} fica claramente feliz quando recebe um presente inesperado.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se alguém quer conquistar a confiança de {nome}, qual dessas abordagens parece mais eficaz?",
  "complemento": "O que chama a atenção dele pode indicar o que ele mais valoriza em uma relação.",
  "alternativas": [
      { "texto": "{nome} se conecta mais com quem reserva tempo para estar com ele e criar momentos especiais.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} percebe quando alguém se expressa com palavras sinceras e motivadoras.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} gosta quando recebe carinho físico sutil, demonstrando conexão e proximidade.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} se sente mais confortável quando alguém faz algo útil para ajudá-lo no dia a dia.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} valoriza quando recebe algo simbólico que mostre que pensaram nele.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se {nome} se sente inseguro ou em dúvida sobre algo, o que parece tranquilizá-lo mais?",
  "complemento": "A maneira como ele busca conforto pode indicar sua principal necessidade emocional.",
  "alternativas": [
      { "texto": "{nome} se acalma ao ouvir palavras que reafirmam sua importância e suas qualidades.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} relaxa quando alguém fica ao lado dele, dedicando tempo sem pressa.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} se sente mais seguro quando há contato físico, como um abraço forte.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} melhora quando percebe que alguém faz algo prático para ajudá-lo.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} se anima quando recebe um gesto simbólico para lembrá-lo de que é especial.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Quando {nome} fala sobre momentos inesquecíveis, o que parece marcar mais ele?",
  "complemento": "O que ele considera especial pode indicar como ele se sente mais amado.",
  "alternativas": [
      { "texto": "{nome} menciona palavras que ouviu e que fizeram ele se sentir especial.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} sempre lembra de experiências e momentos que passou com alguém importante.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} destaca os momentos de carinho físico, como abraços e proximidade.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} se lembra de quando alguém fez algo por ele sem precisar pedir.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} fala sobre presentes ou gestos simbólicos que significaram muito para ele.", "tipoAlternativa": "PRESENTES" }
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
