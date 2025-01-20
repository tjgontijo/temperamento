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

export const temperamento: Questao[] = [
  {
    "id": 1,
    "tipo": "Temperamento",
    "pergunta": "Você está em uma reunião importante e percebe que os outros estão tomando uma decisão com a qual você não concorda. O que você faz?",
    "complemento": "Pense na sua primeira reação diante de uma situação onde sua opinião diverge do grupo.",
    "respostas": {
      1: {
        "texto": "Tento aliviar a tensão com humor enquanto expresso minha opinião.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Expresso minha opinião de forma direta e firme.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Analiso cuidadosamente antes de apresentar meus argumentos.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Mantenho a calma e busco um meio-termo.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 2,
    "tipo": "Temperamento",
    "pergunta": "Como você reage quando alguém te critica?",
    "respostas": {
      1: {
        "texto": "Tento transformar a situação em algo mais leve e divertido.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Defendo meu ponto de vista com convicção.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Reflito profundamente sobre a crítica e posso ficar magoado.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Mantenho a calma e considero o feedback com tranquilidade.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 3,
    "tipo": "Temperamento",
    "pergunta": "Em um projeto em grupo, qual é geralmente seu papel?",
    "respostas": {
      1: {
        "texto": "Motivo o grupo e mantenho todos animados e engajados.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Tomo a iniciativa, defino metas e delego tarefas.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Cuido dos detalhes e da perfeição do trabalho.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Apoio o grupo e ajudo a manter a harmonia entre todos.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 4,
    "tipo": "Temperamento",
    "pergunta": "Como você lida com mudanças inesperadas em seus planos?",
    "respostas": {
      1: {
        "texto": "Vejo como uma oportunidade de fazer algo novo e divertido.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Rapidamente tomo controle e crio um novo plano.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Fico ansioso e preciso de tempo para me adaptar.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Mantenho a calma e me adapto gradualmente.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 5,
    "tipo": "Temperamento",
    "pergunta": "Quando você está estressado, como costuma reagir?",
    "respostas": {
      1: {
        "texto": "Busco pessoas e atividades divertidas para me distrair.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Enfrento o problema de frente e tomo ação imediata.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Fico introspectivo e analiso profundamente a situação.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Mantenho a calma e espero a situação se resolver.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 6,
    "tipo": "Temperamento",
    "pergunta": "Como você costuma tomar decisões importantes?",
    "respostas": {
      1: {
        "texto": "Sigo minha intuição e o que parece mais empolgante.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Decido rapidamente com base nos fatos disponíveis.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Analiso cuidadosamente todas as opções e consequências.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Considero calmamente todas as alternativas sem pressa.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 7,
    "tipo": "Temperamento",
    "pergunta": "Como você prefere passar seu tempo livre?",
    "respostas": {
      1: {
        "texto": "Saindo com amigos e conhecendo pessoas novas.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Realizando projetos e alcançando objetivos pessoais.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Em atividades criativas ou reflexivas sozinho.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Relaxando tranquilamente em um ambiente calmo.",
        "categoria": "Fleumático"
      }
    }
  },
  {
    "id": 8,
    "tipo": "Temperamento",
    "pergunta": "Em uma discussão acalorada, qual é sua postura mais comum?",
    "respostas": {
      1: {
        "texto": "Tento descontrair o ambiente e mediar com bom humor.",
        "categoria": "Sanguíneo"
      },
      2: {
        "texto": "Defendo meu ponto de vista com firmeza e determinação.",
        "categoria": "Colérico"
      },
      3: {
        "texto": "Analiso profundamente cada argumento antes de me posicionar.",
        "categoria": "Melancólico"
      },
      4: {
        "texto": "Mantenho a calma e busco um consenso pacífico.",
        "categoria": "Fleumático"
      }
    }
  }
];
