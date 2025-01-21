export interface Questao {
  id: number;
  tipo: string;
  pergunta: string;
  complemento?: string;
  respostas: {
    [key: number]: {
      texto: string;
      categoria: string;
    }
  };
}

export const linguagem: Questao[] = [
  {
    "id": 1,
    "tipo": "linguagem",
    "pergunta": "{nome} acabou de receber uma notícia incrível, como uma promoção no trabalho. Qual seria a forma mais significativa para ele celebrar com você?",
    "complemento": "Pense em como seu parceiro gostaria de ser reconhecido e valorizado neste momento especial.",
    "respostas": {
      1: {
        "texto": "Ele gostaria de ouvir palavras de incentivo e orgulho pelo esforço dele.",
        "categoria": "palavra_afirmacao"
      },
      2: {
        "texto": "Ele adoraria que você o abraçasse com carinho e o mantivesse próximo.",
        "categoria": "toque_fisico"
      },
      3: {
        "texto": "Ele preferiria passar a noite comemorando juntos, só vocês dois.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Ele apreciaria que você organizasse algo prático, como um jantar especial em casa.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Ele ficaria feliz se você desse a ele um presente simbólico para marcar a conquista.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 2,
    "tipo": "linguagem",
    "pergunta": "Imagine que {nome} teve um dia muito difícil e está claramente estressado. O que você acha que o ajudaria a se sentir melhor?",
    "complemento": "Pense em como você pode oferecer suporte emocional e prático.",
    "respostas": {
      1: {
        "texto": "Expressar palavras de encorajamento e compreensão.",
        "categoria": "palavra_afirmacao"
      },
      2: {
        "texto": "Oferecer uma massagem relaxante ou um abraço acolhedor.",
        "categoria": "toque_fisico"
      },
      3: {
        "texto": "Dedicar tempo exclusivo para ouvi-lo e estar presente.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Ajudar com tarefas pendentes para aliviar sua carga.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Surpreendê-lo com algo especial que ele goste.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 3,
    "tipo": "linguagem",
    "pergunta": "É aniversário de {nome} e você quer fazer algo especial. O que o deixaria mais animado?",
    "complemento": "Pense em como você pode tornar este dia inesquecível.",
    "respostas": {
      1: {
        "texto": "Demonstrações físicas de carinho ao longo do dia.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Uma carta ou mensagem expressando seus sentimentos por ele.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Um dia inteiro dedicado a fazer atividades que ele goste com você.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Organizar uma surpresa especial, cuidando de todos os detalhes.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Um presente bem pensado que demonstre que você o conhece bem.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 4,
    "tipo": "linguagem",
    "pergunta": "Se {nome} está se sentindo inseguro sobre algo, o que você acha que o faria se sentir mais amado?",
    "complemento": "Pense em como você pode oferecer apoio emocional.",
    "respostas": {
      1: {
        "texto": "Demonstrações físicas de apoio, como segurar a mão dele.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Palavras de encorajamento e afirmação sobre as qualidades dele.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Dedicar tempo para ouvi-lo e estar presente com ele.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Ajudá-lo de forma prática com o que está causando a insegurança.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Um pequeno presente que mostre que você está pensando nele.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 5,
    "tipo": "linguagem",
    "pergunta": "Durante uma discussão, o que você acha que {nome} mais valoriza?",
    "complemento": "Pense em como você pode manter a calma e oferecer apoio.",
    "respostas": {
      1: {
        "texto": "Um abraço ou contato físico reconfortante.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Ouvir que você ainda o ama, mesmo durante o conflito.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Que você dedique tempo para resolver o problema juntos.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Que você demonstre mudança através de ações concretas.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Um gesto de reconciliação, como um presente significativo.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 6,
    "tipo": "linguagem",
    "pergunta": "Vocês estão planejando um dia especial. O que você acha que {nome} mais gostaria?",
    "complemento": "Pense em como você pode tornar este dia memorável.",
    "respostas": {
      1: {
        "texto": "Momentos de intimidade e carinho físico.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Que você expressasse verbalmente o quanto ele significa para você.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Um dia inteiro dedicado a fazer atividades juntos.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Que você organizasse tudo, poupando ele de preocupações.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Uma surpresa especial preparada por você.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 7,
    "tipo": "linguagem",
    "pergunta": "Quando {nome} alcança uma meta pessoal, como você acha que ele gostaria de comemorar com você?",
    "complemento": "Pense em como você pode compartilhar da alegria dele.",
    "respostas": {
      1: {
        "texto": "Com demonstrações físicas de afeto e orgulho.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Com palavras sinceras de reconhecimento pelo esforço dele.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Passando um tempo especial juntos celebrando.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Com você preparando algo especial para ele.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Com um presente que simbolize a conquista.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 8,
    "tipo": "linguagem",
    "pergunta": "Em um dia comum, o que você acha que faz {nome} se sentir mais amado?",
    "complemento": "Pense em como você pode demonstrar amor no dia a dia.",
    "respostas": {
      1: {
        "texto": "Toques carinhosos e demonstrações físicas de afeto.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Mensagens carinhosas ao longo do dia.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Momentos de qualidade, mesmo que breves.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Pequenos gestos de ajuda no dia a dia.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Pequenas surpresas ou lembrancinhas.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 9,
    "tipo": "linguagem",
    "pergunta": "Quando {nome} está feliz com algo, como ele geralmente gosta de compartilhar isso com você?",
    "complemento": "Pense em como você pode compartilhar da alegria dele.",
    "respostas": {
      1: {
        "texto": "Buscando proximidade física e contato.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Contando todos os detalhes e querendo sua opinião.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Querendo passar tempo com você para celebrar.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Fazendo algo especial para você em retribuição.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Comprando algo para vocês compartilharem.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 10,
    "tipo": "linguagem",
    "pergunta": "{nome} quer te mostrar algo que ele está orgulhoso, como um projeto ou ideia. Como você acha que ele gostaria que você reagisse?",
    "complemento": "Pense em como você pode demonstrar orgulho e apoio.",
    "respostas": {
      1: {
        "texto": "Com um abraço forte de orgulho.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Com palavras específicas de admiração pelo trabalho dele.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Dedicando tempo para entender todos os detalhes.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Oferecendo ajuda prática para melhorar ainda mais.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Comemorando com um presente relacionado.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 11,
    "tipo": "linguagem",
    "pergunta": "Você acabou de alcançar uma conquista importante no trabalho. Como gostaria que as pessoas ao seu redor reconhecessem isso?",
    "complemento": "Pense em como você se sente mais valorizado em momentos de sucesso.",
    "respostas": {
      1: {
        "texto": "Com um abraço caloroso ou outro gesto físico de carinho.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Com palavras sinceras de reconhecimento e admiração.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Dedicando tempo para celebrar comigo.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Me ajudando em alguma tarefa ou responsabilidade.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Com um presente significativo para marcar o momento.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 12,
    "tipo": "linguagem",
    "pergunta": "Em um dia difícil, o que mais te ajuda a se sentir melhor?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Receber um abraço reconfortante.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Ouvir palavras de encorajamento e apoio.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Ter alguém disponível para me ouvir e estar presente.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Receber ajuda prática com as tarefas do dia.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Ganhar algo especial que me faça sorrir.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 13,
    "tipo": "linguagem",
    "pergunta": "O que te faz sentir mais valorizado em um relacionamento?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Demonstrações físicas de afeto e carinho.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Receber elogios e palavra_afirmacao frequentes.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Ter momentos de atenção exclusiva e conversas profundas.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Quando a pessoa faz coisas práticas para me ajudar.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Receber presentes thoughtful e significativos.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 14,
    "tipo": "linguagem",
    "pergunta": "Como você prefere que alguém demonstre gratidão por algo que você fez?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Com um abraço ou outro gesto físico de carinho.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Expressando verbalmente o quanto apreciou.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Dedicando um tempo especial comigo.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Retribuindo com alguma ajuda prática.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Com um pequeno presente ou lembrança.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 15,
    "tipo": "linguagem",
    "pergunta": "O que mais te machuca quando está em um relacionamento?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Distância física ou falta de carinho.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Palavras duras ou falta de reconhecimento verbal.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Falta de atenção ou tempo dedicado.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Quando não recebo ajuda em momentos necessários.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Esquecimento de datas ou momentos especiais.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 16,
    "tipo": "linguagem",
    "pergunta": "Você está se sentindo inseguro sobre uma decisão importante. O que alguém poderia fazer para te ajudar?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Me dar um abraço reconfortante.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Me dar palavras de confiança e encorajamento.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Sentar comigo e discutir todas as opções.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Me ajudar a pesquisar e organizar as informações.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Me dar algo que me lembre de minha capacidade.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 17,
    "tipo": "linguagem",
    "pergunta": "Como você gosta de comemorar suas conquistas?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Com abraços e demonstrações físicas de carinho.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Com reconhecimento verbal e elogios.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Passando tempo com pessoas especiais.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Com alguém preparando algo especial para mim.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Recebendo um presente comemorativo.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 18,
    "tipo": "linguagem",
    "pergunta": "O que te faz sentir mais amado no dia a dia?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Receber gestos físicos de carinho.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Receber mensagens carinhosas e elogios.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Ter momentos de atenção exclusiva.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Quando fazem pequenas coisas para me ajudar.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Receber pequenas surpresas ou lembranças.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 19,
    "tipo": "linguagem",
    "pergunta": "Como você gosta de demonstrar que se importa com alguém?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Com gestos físicos de carinho.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Dizendo o quanto a pessoa é especial para mim.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Dedicando tempo e atenção exclusiva.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Fazendo coisas práticas para ajudar.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Dando presentes significativos.",
        "categoria": "presentes"
      }
    }
  },
  {
    "id": 20,
    "tipo": "linguagem",
    "pergunta": "O que você mais valoriza quando está passando por um momento difícil?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Um abraço ou gesto físico de apoio.",
        "categoria": "toque_fisico"
      },
      2: {
        "texto": "Palavras de conforto e encorajamento.",
        "categoria": "palavra_afirmacao"
      },
      3: {
        "texto": "Alguém que dedique tempo para me ouvir.",
        "categoria": "tempo_qualidade"
      },
      4: {
        "texto": "Ajuda prática com as dificuldades.",
        "categoria": "atos_servico"
      },
      5: {
        "texto": "Um presente que me faça sentir melhor.",
        "categoria": "presentes"
      }
    }
  }
];
