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
    "tipo": "temperamento_autor",
    "pergunta": "Como você costuma reagir quando está em um grupo novo de pessoas?",
    "complemento": "Pense em sua reação natural ao se encontrar em um ambiente social desconhecido.",
    "respostas": {
      1: {
        "texto": "Logo começo a conversar e fazer amizade com todos.",
        "categoria": "sanguinio"
      },
      2: {
        "texto": "Tomo a iniciativa de liderar ou organizar atividades.",
        "categoria": "colerico"
      },
      3: {
        "texto": "Observo cuidadosamente antes de me aproximar.",
        "categoria": "melancolico"
      },
      4: {
        "texto": "Me adapto tranquilamente ao ritmo do grupo.",
        "categoria": "fleumatico"
      }
    }
  },
  {
    "id": 2,
    "tipo": "temperamento_autor",
    "pergunta": "Como você expressa seus sentimentos em um relacionamento?",
    "complemento": "Pense em como você naturalmente demonstra afeto e emoções.",
    "respostas": {
      1: {
        "texto": "De forma espontânea e expressiva, com muito entusiasmo.",
        "categoria": "sanguinio"
      },
      2: {
        "texto": "Através de ações diretas e declarações claras.",
        "categoria": "colerico"
      },
      3: {
        "texto": "De maneira profunda e significativa, com gestos pensados.",
        "categoria": "melancolico"
      },
      4: {
        "texto": "Calmamente e de forma constante, sem grandes demonstrações.",
        "categoria": "fleumatico"
      }
    }
  },
  {
    "id": 3,
    "tipo": "temperamento_autor",
    "pergunta": "Em um projeto em grupo, qual é geralmente seu papel?",
    "respostas": {
      1: {
        "texto": "Motivo o grupo e trago energia positiva.",
        "categoria": "sanguinio"
      },
      2: {
        "texto": "Lidero e organizo as tarefas.",
        "categoria": "colerico"
      },
      3: {
        "texto": "Cuido dos detalhes e da qualidade.",
        "categoria": "melancolico"
      },
      4: {
        "texto": "Apoio o grupo e mantenho a harmonia.",
        "categoria": "fleumatico"
      }
    }
  },
  {
    "id": 4,
    "tipo": "temperamento_autor",
    "pergunta": "Como você lida com mudanças inesperadas em seus planos?",
    "respostas": {
      1: {
        "texto": "Encaro como uma nova aventura.",
        "categoria": "sanguinio"
      },
      2: {
        "texto": "Rapidamente crio um novo plano de ação.",
        "categoria": "colerico"
      },
      3: {
        "texto": "Preciso de tempo para processar e me adaptar.",
        "categoria": "melancolico"
      },
      4: {
        "texto": "Aceito tranquilamente e me ajusto.",
        "categoria": "fleumatico"
      }
    }
  },
  {
    "id": 5,
    "tipo": "temperamento_autor",
    "pergunta": "Quando você está estressado, como costuma reagir?",
    "respostas": {
      1: {
        "texto": "Procuro distrações e diversão.",
        "categoria": "sanguinio"
      },
      2: {
        "texto": "Tento resolver o problema imediatamente.",
        "categoria": "colerico"
      },
      3: {
        "texto": "Fico introspectivo e analítico.",
        "categoria": "melancolico"
      },
      4: {
        "texto": "Mantenho a calma e sigo em frente.",
        "categoria": "fleumatico"
      }
    }
  },
  {
    "id": 6,
    "tipo": "temperamento_autor",
    "pergunta": "Você está em um restaurante e percebe que o pedido veio errado. O que você faz?",
    "respostas": {
      1: {
        "texto": "Faço uma piada sobre a situação.",
        "categoria": "sanguinio"
      },
      2: {
        "texto": "Chamo o garçom e peço para corrigir imediatamente.",
        "categoria": "colerico"
      },
      3: {
        "texto": "Fico desapontado mas hesito em reclamar.",
        "categoria": "melancolico"
      },
      4: {
        "texto": "Aceito para evitar confusão.",
        "categoria": "fleumatico"
      }
    }
  },
  {
    "id": 7,
    "tipo": "temperamento_autor",
    "pergunta": "Como você prefere passar seu tempo livre?",
    "respostas": {
      1: {
        "texto": "Socializando com amigos.",
        "categoria": "sanguinio"
      },
      2: {
        "texto": "Planejando e realizando projetos pessoais.",
        "categoria": "colerico"
      },
      3: {
        "texto": "Em atividades criativas ou reflexivas.",
        "categoria": "melancolico"
      },
      4: {
        "texto": "Relaxando tranquilamente em casa.",
        "categoria": "fleumatico"
      }
    }
  },
  {
    "id": 8,
    "tipo": "temperamento_autor",
    "pergunta": "Em uma discussão acalorada, qual é sua postura mais comum?",
    "respostas": {
      1: {
        "texto": "Tento descontrair o ambiente.",
        "categoria": "sanguinio"
      },
      2: {
        "texto": "Defendo meu ponto de vista com firmeza.",
        "categoria": "colerico"
      },
      3: {
        "texto": "Pondero todos os argumentos antes de falar.",
        "categoria": "melancolico"
      },
      4: {
        "texto": "Busco um meio termo para resolver o conflito.",
        "categoria": "fleumatico"
      }
    }
  },
  {
    "id": 9,
    "tipo": "temperamento_autor",
    "pergunta": "Como você reage quando alguém está triste ou chateado?",
    "respostas": {
      1: {
        "texto": "Tento animar a pessoa com histórias ou piadas.",
        "categoria": "sanguinio"
      },
      2: {
        "texto": "Sugiro soluções práticas para o problema.",
        "categoria": "colerico"
      },
      3: {
        "texto": "Ouço atentamente e ofereço conselhos profundos.",
        "categoria": "melancolico"
      },
      4: {
        "texto": "Ofereço apoio silencioso e compreensivo.",
        "categoria": "fleumatico"
      }
    }
  },
  {
    "id": 10,
    "tipo": "temperamento_autor",
    "pergunta": "Como você costuma tomar decisões importantes?",
    "respostas": {
      1: {
        "texto": "Seguindo minha intuição e o que parece mais divertido.",
        "categoria": "sanguinio"
      },
      2: {
        "texto": "Rapidamente, confiando em minha análise.",
        "categoria": "colerico"
      },
      3: {
        "texto": "Cuidadosamente, considerando todas as opções.",
        "categoria": "melancolico"
      },
      4: {
        "texto": "Gradualmente, evitando extremos.",
        "categoria": "fleumatico"
      }
    }
  }
];
