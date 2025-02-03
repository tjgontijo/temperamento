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
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Quando {nome} faz planos para vocês, como costuma agir?",
      "complemento": "Essa resposta pode revelar se ele gosta de controle, de improviso ou se simplesmente prefere que você decida tudo.",
      "alternativas": [
          { "texto": "{nome} decide tudo sozinho e já me avisa como vai ser.", "tipoAlternativa": "COLERICO" },
          { "texto": "{nome} gosta de pesquisar bem antes de sugerir algo, tudo precisa estar certo.", "tipoAlternativa": "MELANCOLICO" },
          { "texto": "{nome} me pergunta onde eu quero ir e aceita qualquer ideia.", "tipoAlternativa": "FLEUMATICO" },
          { "texto": "{nome} sugere algo na hora e improvisamos juntos.", "tipoAlternativa": "SANGUINIO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Se algo sai diferente do planejado, qual é a reação de {nome}?",
      "complemento": "A forma como ele lida com imprevistos pode dizer muito sobre sua personalidade.",
      "alternativas": [
          { "texto": "{nome} fica irritado e já tenta resolver o problema de forma rápida.", "tipoAlternativa": "COLERICO" },
          { "texto": "{nome} fica incomodado e tenta entender onde deu errado.", "tipoAlternativa": "MELANCOLICO" },
          { "texto": "{nome} dá risada da situação e segue em frente sem estresse.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "{nome} não se preocupa muito, simplesmente se adapta ao que aconteceu.", "tipoAlternativa": "FLEUMATICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Quando {nome} precisa tomar uma decisão importante, o que faz?",
      "complemento": "Essa escolha pode mostrar se ele age por impulso, lógica ou se evita decisões difíceis.",
      "alternativas": [
          { "texto": "{nome} decide rápido, sem hesitação, e segue em frente.", "tipoAlternativa": "COLERICO" },
          { "texto": "{nome} pensa bastante, analisa prós e contras antes de agir.", "tipoAlternativa": "MELANCOLICO" },
          { "texto": "{nome} pede a opinião de várias pessoas antes de escolher.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "{nome} evita tomar a decisão até o último momento.", "tipoAlternativa": "FLEUMATICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Como {nome} costuma agir quando está com um grupo de amigos?",
      "complemento": "Isso pode te dar pistas sobre a energia dele e como ele gosta de se relacionar.",
      "alternativas": [
          { "texto": "{nome} gosta de contar histórias, fazer piadas e ser o centro das atenções.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "{nome} é reservado, conversa pouco e observa mais do que fala.", "tipoAlternativa": "MELANCOLICO" },
          { "texto": "{nome} prefere interações um a um e evita grandes grupos.", "tipoAlternativa": "FLEUMATICO" },
          { "texto": "{nome} toma a liderança da conversa e influencia o grupo.", "tipoAlternativa": "COLERICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Como {nome} demonstra interesse por você?",
      "complemento": "Essa resposta pode indicar o que ele valoriza e como ele expressa seus sentimentos.",
      "alternativas": [
          { "texto": "{nome} faz questão de estar sempre por perto e mandar mensagens espontâneas.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "{nome} demonstra de forma prática, ajudando e resolvendo coisas para mim.", "tipoAlternativa": "COLERICO" },
          { "texto": "{nome} diz coisas profundas e faz pequenos gestos cheios de significado.", "tipoAlternativa": "MELANCOLICO" },
          { "texto": "{nome} é discreto, mas constante. Mostra interesse de um jeito sutil.", "tipoAlternativa": "FLEUMATICO" }
      ]
  },
  {
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Se você e {nome} combinam de se encontrar, como ele lida com horários?",
    "complemento": "A forma como ele se organiza pode revelar muito sobre sua personalidade.",
    "alternativas": [
        { "texto": "{nome} sempre chega no horário ou até antes. Ele odeia atrasos!", "tipoAlternativa": "COLERICO" },
        { "texto": "{nome} costuma planejar bem, mas às vezes algo inesperado atrasa ele.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "{nome} é pontual, mas se atrasar um pouco, não se estressa com isso.", "tipoAlternativa": "FLEUMATICO" },
        { "texto": "{nome} quase nunca chega no horário exato, mas compensa com um bom humor contagiante.", "tipoAlternativa": "SANGUINIO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Quando {nome} precisa lidar com um problema ou desafio, o que ele faz?",
    "complemento": "A forma como ele encara dificuldades pode revelar se ele é mais prático, emocional ou estratégico.",
    "alternativas": [
        { "texto": "{nome} age rápido e tenta resolver tudo sem perder tempo.", "tipoAlternativa": "COLERICO" },
        { "texto": "{nome} analisa bem a situação e pensa em diferentes soluções antes de agir.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "{nome} faz piada da situação e tenta levar o problema de forma leve.", "tipoAlternativa": "SANGUINIO" },
        { "texto": "{nome} evita estresse e espera o problema se resolver sozinho.", "tipoAlternativa": "FLEUMATICO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Se {nome} recebe uma crítica construtiva, como ele reage?",
    "complemento": "A maneira como ele lida com opiniões pode indicar seu nível de autoconfiança e abertura para mudanças.",
    "alternativas": [
        { "texto": "{nome} ouve, mas logo tenta se justificar e mostrar que está certo.", "tipoAlternativa": "COLERICO" },
        { "texto": "{nome} leva a sério e fica refletindo sobre a crítica por bastante tempo.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "{nome} não leva muito a sério, ri da situação e segue a vida.", "tipoAlternativa": "SANGUINIO" },
        { "texto": "{nome} aceita, mas não se incomoda muito. Se achar útil, ele muda.", "tipoAlternativa": "FLEUMATICO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Se você e {nome} estão assistindo um filme juntos, qual é a atitude dele?",
    "complemento": "O jeito dele em momentos simples pode revelar traços importantes da sua personalidade.",
    "alternativas": [
        { "texto": "{nome} prefere filmes que fazem pensar e trazem reflexões profundas.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "{nome} escolhe algo que prenda a atenção e gosta de comentar sobre o filme.", "tipoAlternativa": "SANGUINIO" },
        { "texto": "{nome} gosta de assistir tranquilo, sem muitas interrupções ou emoções exageradas.", "tipoAlternativa": "FLEUMATICO" },
        { "texto": "{nome} adora filmes cheios de ação e não tem paciência para histórias muito lentas.", "tipoAlternativa": "COLERICO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Se {nome} pudesse escolher qualquer tipo de viagem, qual seria?",
    "complemento": "O jeito como ele gosta de explorar o mundo pode revelar muito sobre sua energia e personalidade.",
    "alternativas": [
        { "texto": "{nome} escolheria um destino cheio de desafios e aventuras, como trilhas ou esportes radicais.", "tipoAlternativa": "COLERICO" },
        { "texto": "{nome} preferiria um lugar histórico e cultural, para aprender e explorar com calma.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "{nome} adoraria uma viagem sem roteiro fixo, conhecendo pessoas novas e aproveitando cada momento.", "tipoAlternativa": "SANGUINIO" },
        { "texto": "{nome} escolheria um lugar tranquilo, sem muita agitação, apenas para descansar e curtir o ambiente.", "tipoAlternativa": "FLEUMATICO" }
    ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se {nome} precisa enfrentar um desafio no trabalho ou nos estudos, como ele age?",
  "complemento": "O comportamento dele sob pressão pode revelar muito sobre sua personalidade.",
  "alternativas": [
      { "texto": "{nome} encara o problema de frente e tenta resolver tudo rapidamente.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} analisa a situação com calma antes de agir.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} tenta não se preocupar demais e lida com o desafio no seu tempo.", "tipoAlternativa": "FLEUMATICO" },
      { "texto": "{nome} pede ajuda e faz piada para aliviar a tensão.", "tipoAlternativa": "SANGUINIO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se vocês brigam por algo bobo, qual costuma ser a reação de {nome}?",
  "complemento": "As reações emocionais podem indicar o nível de controle e maturidade dele.",
  "alternativas": [
      { "texto": "{nome} quer resolver na hora e já parte para o confronto.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} se fecha e fica remoendo o assunto por um tempo.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} dá risada da situação e tenta mudar de assunto.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} prefere evitar brigas e ignora até que o clima melhore.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Como {nome} lida com momentos românticos?",
  "complemento": "A forma como ele expressa o carinho pode revelar muito sobre suas emoções.",
  "alternativas": [
      { "texto": "{nome} não é muito de palavras, mas demonstra com atitudes práticas.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} cria momentos especiais e gosta de expressar sentimentos profundos.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} é espontâneo e adora elogios e brincadeiras românticas.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} é carinhoso, mas de um jeito discreto e tranquilo.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se {nome} pudesse escolher uma maneira de passar o tempo livre, o que ele faria?",
  "complemento": "Os hobbies e preferências podem indicar a energia e o estilo dele.",
  "alternativas": [
      { "texto": "{nome} prefere algo produtivo, como aprender algo novo ou treinar.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} gosta de passar tempo sozinho lendo, desenhando ou refletindo.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} quer estar com amigos, se divertir e aproveitar cada momento.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} adora ficar relaxando, assistindo algo ou descansando.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se vocês estão conversando e acontece um silêncio, como {nome} reage?",
  "complemento": "O conforto dele com momentos de silêncio pode dizer muito sobre sua personalidade.",
  "alternativas": [
      { "texto": "{nome} não se sente desconfortável, apenas continua no ritmo dele.", "tipoAlternativa": "FLEUMATICO" },
      { "texto": "{nome} se sente incomodado e tenta preencher o silêncio de alguma forma.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} observa o silêncio e pode até usá-lo para refletir.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} acha silêncio perda de tempo e logo muda de assunto ou faz algo.", "tipoAlternativa": "COLERICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Como {nome} age em situações de estresse?",
  "complemento": "O nível de controle emocional dele pode ser um grande indicativo do temperamento.",
  "alternativas": [
      { "texto": "{nome} age rápido e não deixa o estresse tomar conta.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} sente profundamente, precisa de um tempo para processar.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} tenta aliviar o estresse rindo ou distraindo a mente.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} evita o estresse ao máximo e segue a vida tranquilamente.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Quando {nome} quer algo, qual é a abordagem dele?",
  "complemento": "A forma como ele busca o que deseja pode indicar se ele é persistente ou mais relaxado.",
  "alternativas": [
      { "texto": "{nome} faz um plano e corre atrás do objetivo sem hesitar.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} pensa muito antes de agir e só decide se tiver certeza.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} age sem pensar muito, só vai e vê no que dá.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} se adapta à situação e não força nada.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se {nome} recebe um presente, como ele reage?",
  "complemento": "A reação dele pode dizer muito sobre como ele se relaciona com emoções e reconhecimento.",
  "alternativas": [
      { "texto": "{nome} fica grato, mas não demonstra muita emoção.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} valoriza muito, guarda com carinho e se emociona.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} faz festa, brinca e demonstra entusiasmo.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} aceita de forma tranquila e discreta.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Se {nome} estiver muito cansado, o que ele faz?",
  "complemento": "A forma como ele lida com exaustão pode indicar o seu ritmo de vida.",
  "alternativas": [
      { "texto": "{nome} segue em frente, mesmo cansado, porque tem coisas a fazer.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} se recolhe e precisa de um tempo sozinho para recarregar.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} ignora o cansaço e tenta se distrair com algo divertido.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} descansa sem culpa e espera a energia voltar naturalmente.", "tipoAlternativa": "FLEUMATICO" }
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
