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

export const temperamento_autor: Questao[] = [
  {
    "id": 1,
    "tipo": "Temperamento do Autor",
    "pergunta": "Como você costuma reagir quando está em um grupo novo de pessoas?",
    "complemento": "Pense em sua reação natural ao se encontrar em um ambiente social desconhecido.",
    "respostas": {
      1: {
        "texto": "Logo começo a conversar e fazer amizade com todos.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Tomo a iniciativa de liderar ou organizar atividades.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Observo cuidadosamente antes de me aproximar.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Me adapto tranquilamente ao ritmo do grupo.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 2,
    "tipo": "Temperamento do Autor",
    "pergunta": "Como você expressa seus sentimentos em um relacionamento?",
    "complemento": "Pense em como você naturalmente demonstra afeto e emoções.",
    "respostas": {
      1: {
        "texto": "De forma espontânea e expressiva, com muito entusiasmo.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Através de ações diretas e declarações claras.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "De maneira profunda e significativa, com gestos pensados.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Calmamente e de forma constante, sem grandes demonstrações.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 3,
    "tipo": "Temperamento do Autor",
    "pergunta": "Em um projeto em grupo, qual é geralmente seu papel?",
    "respostas": {
      1: {
        "texto": "Motivo o grupo e trago energia positiva.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Lidero e organizo as tarefas.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Cuido dos detalhes e da qualidade.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Apoio o grupo e mantenho a harmonia.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 4,
    "tipo": "Temperamento do Autor",
    "pergunta": "Como você lida com mudanças inesperadas em seus planos?",
    "respostas": {
      1: {
        "texto": "Encaro como uma nova aventura.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Rapidamente crio um novo plano de ação.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Preciso de tempo para processar e me adaptar.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Aceito tranquilamente e me ajusto.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 5,
    "tipo": "Temperamento do Autor",
    "pergunta": "Quando você está estressado, como costuma reagir?",
    "respostas": {
      1: {
        "texto": "Procuro distrações e diversão.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Tento resolver o problema imediatamente.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Fico introspectivo e analítico.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Mantenho a calma e sigo em frente.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 6,
    "tipo": "Temperamento do Autor",
    "pergunta": "Você está em um restaurante e percebe que o pedido veio errado. O que você faz?",
    "respostas": {
      1: {
        "texto": "Faço uma piada sobre a situação.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Chamo o garçom e peço para corrigir imediatamente.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Fico desapontado mas hesito em reclamar.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Aceito para evitar confusão.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 7,
    "tipo": "Temperamento do Autor",
    "pergunta": "Como você prefere passar seu tempo livre?",
    "respostas": {
      1: {
        "texto": "Socializando com amigos.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Planejando e realizando projetos pessoais.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Em atividades criativas ou reflexivas.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Relaxando tranquilamente em casa.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 8,
    "tipo": "Temperamento do Autor",
    "pergunta": "Em uma discussão acalorada, qual é sua postura mais comum?",
    "respostas": {
      1: {
        "texto": "Tento descontrair o ambiente.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Defendo meu ponto de vista com firmeza.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Pondero todos os argumentos antes de falar.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Busco um meio termo para resolver o conflito.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 9,
    "tipo": "Temperamento do Autor",
    "pergunta": "Como você reage quando alguém está triste ou chateado?",
    "respostas": {
      1: {
        "texto": "Tento animar a pessoa com histórias ou piadas.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Sugiro soluções práticas para o problema.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Ouço atentamente e ofereço conselhos profundos.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Ofereço apoio silencioso e compreensivo.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 10,
    "tipo": "Temperamento do Autor",
    "pergunta": "Como você costuma tomar decisões importantes?",
    "respostas": {
      1: {
        "texto": "Seguindo minha intuição e o que parece mais divertido.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Rapidamente, confiando em minha análise.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Cuidadosamente, considerando todas as opções.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Gradualmente, evitando extremos.",
        "categoria": "Fleumático"
      }
    }
  }
];
