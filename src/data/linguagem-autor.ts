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
  }
}

export const linguagem_autor: Questao[] = [
  {
    "id": 1,
    "tipo": "Linguagem do Amor do Autor",
    "pergunta": "Como você gostaria que {nome} demonstrasse amor por você em um dia comum?",
    "complemento": "Pense em gestos que fariam você se sentir verdadeiramente amado(a).",
    "respostas": {
      1: {
        "texto": "Com demonstrações físicas de afeto ao longo do dia.",
        "categoria": "Toque Físico"
      },
      2: {
        "texto": "Me dizendo palavras carinhosas e de afirmação.",
        "categoria": "Palavras de Afirmação"
      },
      3: {
        "texto": "Dedicando tempo de qualidade comigo, sem distrações.",
        "categoria": "Tempo de Qualidade"
      },
      4: {
        "texto": "Fazendo pequenas coisas para me ajudar no dia a dia.",
        "categoria": "Atos de Serviço"
      },
      5: {
        "texto": "Me surpreendendo com pequenos presentes ou lembranças.",
        "categoria": "Presentes"
      }
    }
  },
  {
    "id": 2,
    "tipo": "Linguagem do Amor do Autor",
    "pergunta": "O que mais te magoa em um relacionamento?",
    "complemento": "Às vezes, o que mais nos machuca revela o que mais valorizamos.",
    "respostas": {
      1: {
        "texto": "Falta de contato físico ou demonstrações de afeto.",
        "categoria": "Toque Físico"
      },
      2: {
        "texto": "Ausência de palavras de afirmação e reconhecimento.",
        "categoria": "Palavras de Afirmação"
      },
      3: {
        "texto": "Falta de tempo dedicado exclusivamente a mim.",
        "categoria": "Tempo de Qualidade"
      },
      4: {
        "texto": "Quando não recebo ajuda em momentos necessários.",
        "categoria": "Atos de Serviço"
      },
      5: {
        "texto": "Esquecimento de datas especiais ou falta de presentes significativos.",
        "categoria": "Presentes"
      }
    }
  },
  {
    "id": 3,
    "tipo": "Linguagem do Amor do Autor",
    "pergunta": "O que te faz sentir mais valorizado em um relacionamento?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Quando a pessoa faz coisas práticas para me ajudar.",
        "categoria": "Atos de Serviço"
      },
      2: {
        "texto": "Receber elogios e palavras de afirmação frequentes.",
        "categoria": "Palavras de Afirmação"
      },
      3: {
        "texto": "Demonstrações físicas de afeto e carinho.",
        "categoria": "Toque Físico"
      },
      4: {
        "texto": "Ter momentos de atenção exclusiva e conversas profundas.",
        "categoria": "Tempo de Qualidade"
      },
      5: {
        "texto": "Receber presentes thoughtful e significativos.",
        "categoria": "Presentes"
      }
    }
  },
  {
    "id": 4,
    "tipo": "Linguagem do Amor do Autor",
    "pergunta": "Como você prefere que alguém demonstre gratidão por algo que você fez?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Com um abraço ou outro gesto físico de carinho.",
        "categoria": "Toque Físico"
      },
      2: {
        "texto": "Expressando verbalmente o quanto apreciou.",
        "categoria": "Palavras de Afirmação"
      },
      3: {
        "texto": "Dedicando um tempo especial comigo.",
        "categoria": "Tempo de Qualidade"
      },
      4: {
        "texto": "Retribuindo com alguma ajuda prática.",
        "categoria": "Atos de Serviço"
      },
      5: {
        "texto": "Com um pequeno presente ou lembrança.",
        "categoria": "Presentes"
      }
    }
  },
  {
    "id": 5,
    "tipo": "Linguagem do Amor do Autor",
    "pergunta": "O que mais te machuca quando está em um relacionamento?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Falta de atenção ou tempo dedicado.",
        "categoria": "Tempo de Qualidade"
      },
      2: {
        "texto": "Palavras duras ou falta de reconhecimento verbal.",
        "categoria": "Palavras de Afirmação"
      },
      3: {
        "texto": "Quando não recebo ajuda em momentos necessários.",
        "categoria": "Atos de Serviço"
      },
      4: {
        "texto": "Distância física ou falta de carinho.",
        "categoria": "Toque Físico"
      },
      5: {
        "texto": "Esquecimento de datas ou momentos especiais.",
        "categoria": "Presentes"
      }
    }
  },
  {
    "id": 6,
    "tipo": "Linguagem do Amor do Autor",
    "pergunta": "Você está se sentindo inseguro sobre uma decisão importante. O que alguém poderia fazer para te ajudar?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Me ajudar a pesquisar e organizar as informações.",
        "categoria": "Atos de Serviço"
      },
      2: {
        "texto": "Me dar palavras de confiança e encorajamento.",
        "categoria": "Palavras de Afirmação"
      },
      3: {
        "texto": "Sentar comigo e discutir todas as opções.",
        "categoria": "Tempo de Qualidade"
      },
      4: {
        "texto": "Me dar um abraço reconfortante.",
        "categoria": "Toque Físico"
      },
      5: {
        "texto": "Me dar algo que me lembre de minha capacidade.",
        "categoria": "Presentes"
      }
    }
  },
  {
    "id": 7,
    "tipo": "Linguagem do Amor do Autor",
    "pergunta": "Como você gosta de comemorar suas conquistas?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Com abraços e demonstrações físicas de carinho.",
        "categoria": "Toque Físico"
      },
      2: {
        "texto": "Com reconhecimento verbal e elogios.",
        "categoria": "Palavras de Afirmação"
      },
      3: {
        "texto": "Passando tempo com pessoas especiais.",
        "categoria": "Tempo de Qualidade"
      },
      4: {
        "texto": "Com alguém preparando algo especial para mim.",
        "categoria": "Atos de Serviço"
      },
      5: {
        "texto": "Recebendo um presente comemorativo.",
        "categoria": "Presentes"
      }
    }
  },
  {
    "id": 8,
    "tipo": "Linguagem do Amor do Autor",
    "pergunta": "O que te faz sentir mais amado no dia a dia?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Quando fazem pequenas coisas para me ajudar.",
        "categoria": "Atos de Serviço"
      },
      2: {
        "texto": "Receber mensagens carinhosas e elogios.",
        "categoria": "Palavras de Afirmação"
      },
      3: {
        "texto": "Ter momentos de atenção exclusiva.",
        "categoria": "Tempo de Qualidade"
      },
      4: {
        "texto": "Receber gestos físicos de carinho.",
        "categoria": "Toque Físico"
      },
      5: {
        "texto": "Receber pequenas surpresas ou lembranças.",
        "categoria": "Presentes"
      }
    }
  },
  {
    "id": 9,
    "tipo": "Linguagem do Amor do Autor",
    "pergunta": "Como você gosta de demonstrar que se importa com alguém?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Fazendo coisas práticas para ajudar.",
        "categoria": "Atos de Serviço"
      },
      2: {
        "texto": "Dizendo o quanto a pessoa é especial para mim.",
        "categoria": "Palavras de Afirmação"
      },
      3: {
        "texto": "Dedicando tempo e atenção exclusiva.",
        "categoria": "Tempo de Qualidade"
      },
      4: {
        "texto": "Com gestos físicos de carinho.",
        "categoria": "Toque Físico"
      },
      5: {
        "texto": "Dando presentes significativos.",
        "categoria": "Presentes"
      }
    }
  },
  {
    "id": 10,
    "tipo": "Linguagem do Amor do Autor",
    "pergunta": "O que você mais valoriza quando está passando por um momento difícil?",
    "complemento": "",
    "respostas": {
      1: {
        "texto": "Ajuda prática com as dificuldades.",
        "categoria": "Atos de Serviço"
      },
      2: {
        "texto": "Palavras de conforto e encorajamento.",
        "categoria": "Palavras de Afirmação"
      },
      3: {
        "texto": "Alguém que dedique tempo para me ouvir.",
        "categoria": "Tempo de Qualidade"
      },
      4: {
        "texto": "Um abraço ou gesto físico de apoio.",
        "categoria": "Toque Físico"
      },
      5: {
        "texto": "Um presente que me faça sentir melhor.",
        "categoria": "Presentes"
      }
    }
  }
];
