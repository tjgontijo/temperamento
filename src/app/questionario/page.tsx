'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { todasQuestoes } from '@/data';
import { foiVisualizado, limparResultado } from '@/utils/storage';
import { Questao as QuestaoComponent } from '@/components/questionario/questao';
import { QuestaoType, QuestaoInput, QuestaoTemperamento, TipoQuestao, Contadores, CategoriaTemperamento, CategoriaLinguagem, RespostaTemperamento, RespostaLinguagem } from '@/types/questionario';
import { Loader2 } from 'lucide-react';

// Questões iniciais para coletar nomes
const QUESTOES_INICIAIS: QuestaoInput[] = [
  {
    id: 'nome',
    tipo: 'input',
    pergunta: 'Qual é o seu nome?',
    complemento: 'Digite seu nome completo'
  },
  {
    id: 'nomeAutor',
    tipo: 'input',
    pergunta: 'Qual é o nome do seu pretendente?',
    complemento: 'Digite o nome completo do seu pretendente'
  }
];

// Configuração do questionário
const QUESTIONARIO_CONFIG = {
  quantidadeQuestoes: {
    temperamento: 2,
    temperamentoAutor: 2,
    linguagem: 2,
    linguagemAutor: 2
  },
  tipos: {
    temperamento: 'Temperamento' as TipoQuestao,
    temperamentoAutor: 'Temperamento do Autor' as TipoQuestao,
    linguagem: 'Linguagem do Amor' as TipoQuestao,
    linguagemAutor: 'Linguagem do Amor do Autor' as TipoQuestao
  }
} as const;

// Função para embaralhar array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Função para selecionar N questões aleatórias de um array
function selecionarQuestoes<T>(questoes: T[], quantidade: number): T[] {
  return shuffleArray(questoes).slice(0, quantidade);
}

export default function Questionario() {
  const router = useRouter();
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [questoes] = useState<QuestaoType[]>(() => {
    // Separa as questões por tipo
    const questoesTemperamento = todasQuestoes.filter(q => q.tipo === QUESTIONARIO_CONFIG.tipos.temperamento) as QuestaoTemperamento[];
    const questoesTemperamentoAutor = todasQuestoes.filter(q => q.tipo === QUESTIONARIO_CONFIG.tipos.temperamentoAutor) as QuestaoTemperamento[];
    const questoesLinguagem = todasQuestoes.filter(q => q.tipo === QUESTIONARIO_CONFIG.tipos.linguagem) as QuestaoTemperamento[];
    const questoesLinguagemAutor = todasQuestoes.filter(q => q.tipo === QUESTIONARIO_CONFIG.tipos.linguagemAutor) as QuestaoTemperamento[];

    // Seleciona questões aleatórias de cada tipo
    const questoesTemperamentoSelecionadas = selecionarQuestoes(questoesTemperamento, QUESTIONARIO_CONFIG.quantidadeQuestoes.temperamento);
    const questoesTemperamentoAutorSelecionadas = selecionarQuestoes(questoesTemperamentoAutor, QUESTIONARIO_CONFIG.quantidadeQuestoes.temperamentoAutor);
    const questoesLinguagemSelecionadas = selecionarQuestoes(questoesLinguagem, QUESTIONARIO_CONFIG.quantidadeQuestoes.linguagem);
    const questoesLinguagemAutorSelecionadas = selecionarQuestoes(questoesLinguagemAutor, QUESTIONARIO_CONFIG.quantidadeQuestoes.linguagemAutor);

    // Retorna todas as questões na ordem correta
    return [
      ...QUESTOES_INICIAIS,
      ...questoesTemperamentoSelecionadas,
      ...questoesTemperamentoAutorSelecionadas,
      ...questoesLinguagemSelecionadas,
      ...questoesLinguagemAutorSelecionadas
    ];
  });

  const [contadores, setContadores] = useState<Contadores>({
    temperamento: {
      'Sanguíneo': 0,
      'Colérico': 0,
      'Melancólico': 0,
      'Fleumático': 0
    },
    temperamentoAutor: {
      'Sanguíneo': 0,
      'Colérico': 0,
      'Melancólico': 0,
      'Fleumático': 0
    },
    linguagem: {
      'Palavras de Afirmação': 0,
      'Tempo de Qualidade': 0,
      'Presentes': 0,
      'Atos de Serviço': 0,
      'Toque Físico': 0
    },
    linguagemAutor: {
      'Palavras de Afirmação': 0,
      'Tempo de Qualidade': 0,
      'Presentes': 0,
      'Atos de Serviço': 0,
      'Toque Físico': 0
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Se já visualizou o resultado anterior, limpa tudo
    if (foiVisualizado()) {
      limparResultado();
    }
  }, []);

  // Função auxiliar para gerenciar o localStorage
  const updateLocalStorage = (newData: Partial<{
    nome?: string;
    nomeAutor?: string;
    contadores?: Contadores;
  }>) => {
    try {
      // Recupera os dados atuais do localStorage
      const currentData = localStorage.getItem('questionario');
      const parsedData = currentData ? JSON.parse(currentData) : {};

      // Atualiza apenas os campos fornecidos
      const updatedData = {
        ...parsedData,
        ...newData
      };

      // Salva no localStorage
      localStorage.setItem('questionario', JSON.stringify(updatedData));
    } catch (error) {
      console.error('Erro ao atualizar localStorage:', error);
    }
  };

  const questao = questoes[questaoAtual];
  const progresso = ((questaoAtual + 1) / questoes.length) * 100;

  const getOpcoesFormatadas = () => {
    if (!questao || questao.tipo === 'input') return [];
    
    if ('respostas' in questao) {
      return Object.entries(questao.respostas).map(([key, resposta]) => ({
        valor: key,
        texto: resposta.texto
      }));
    }
    return [];
  };

  const handleResposta = async (valor: string) => {
    // Atualiza os contadores ou salva os nomes
    if (questao.tipo === 'input') {
      // Salva o nome ou nome do autor
      const novasRespostas = {
        ...respostas,
        [questao.id]: valor.trim()
      };
      setRespostas(novasRespostas);
  
      // Atualiza localStorage com nomes
      updateLocalStorage({
        nome: novasRespostas['nome'] || undefined,
        nomeAutor: novasRespostas['nomeAutor'] || undefined
      });
      return; // Não avança automaticamente para as questões de input
    }
  
    // Para questões que atualizam os contadores
    if ('respostas' in questao) {
      const valorNumerico = parseInt(valor, 10);
      const resposta = questao.respostas[valorNumerico] as RespostaTemperamento | RespostaLinguagem;
      if (resposta) {
        
        // Atualiza os contadores no estado e localStorage
        setContadores(prev => {
          const novosContadores = { ...prev };
  
          switch (questao.tipo) {
            case 'Temperamento':
              if ('categoria' in resposta && resposta.categoria in novosContadores.temperamento) {
                novosContadores.temperamento[resposta.categoria as CategoriaTemperamento] += 1;
              }
              break;
            case 'Temperamento do Autor':
              if ('categoria' in resposta && resposta.categoria in novosContadores.temperamentoAutor) {
                novosContadores.temperamentoAutor[resposta.categoria as CategoriaTemperamento] += 1;
              }
              break;
            case 'Linguagem do Amor':
              if ('categoria' in resposta && resposta.categoria in novosContadores.linguagem) {
                novosContadores.linguagem[resposta.categoria as CategoriaLinguagem] += 1;
              }
              break;
            case 'Linguagem do Amor do Autor':
              if ('categoria' in resposta && resposta.categoria in novosContadores.linguagemAutor) {
                novosContadores.linguagemAutor[resposta.categoria as CategoriaLinguagem] += 1;
              }
              break;
          }
  
          // Atualiza localStorage
          updateLocalStorage({ contadores: novosContadores });
  
          return novosContadores;
        });
      }
    }
  
    // Avança para a próxima questão (se houver)
    if (questaoAtual < questoes.length - 1) {
      setTimeout(() => {
        setQuestaoAtual(questaoAtual + 1);
      }, 400);
      return;
    }
  
    // Finaliza se for a última questão
    if (questaoAtual === questoes.length - 1) {
      setIsLoading(true);
      try {
        updateLocalStorage({ contadores });
        router.push('/resultado');
      } catch (error) {
        console.error('Erro ao finalizar questionário:', error);
        alert('Ocorreu um erro ao salvar suas respostas. Por favor, tente novamente.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSubmit = () => {
    try {
      setIsLoading(true);

      // Atualiza o localStorage com os contadores finais e nomes
      updateLocalStorage({
        nome: respostas['nome'],
        nomeAutor: respostas['nomeAutor'],
        contadores: {
          temperamento: { ...contadores.temperamento },
          temperamentoAutor: { ...contadores.temperamentoAutor },
          linguagem: { ...contadores.linguagem },
          linguagemAutor: { ...contadores.linguagemAutor }
        }
      });
  
      // Redireciona para a página de resultados
      router.push('/resultado');
    } catch (error) {
      console.error('Erro ao enviar questionário:', error);
      alert('Ocorreu um erro ao enviar suas respostas. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    if (questaoAtual < questoes.length - 1) {
      setQuestaoAtual(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (questaoAtual > 0) {
      setQuestaoAtual(prev => prev - 1);
    }
  };

  const formatarTextoComNome = (texto: string) => {
    return texto.replace(
      '{nome}',
      `<span class="font-semibold text-purple-600">${respostas['nomeAutor'] || 'nome'}</span>`
    );
  };

  if (!questao) {
    return null;
  }

  const perguntaFormatada = formatarTextoComNome(questao.pergunta);
  const complementoFormatado = questao.complemento ? formatarTextoComNome(questao.complemento) : undefined;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-purple-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600">Calculando seu resultado...</p>
        </div>
      </div>
    );
  }

  return (
    <QuestaoComponent
      pergunta={perguntaFormatada}
      complemento={complementoFormatado}
      tipo={questao.tipo === 'input' ? 'input' : 'temperamento'}
      opcoes={getOpcoesFormatadas()}
      valor={String(respostas[questao.id] || '')}
      onChange={handleResposta}
      onNext={handleNext}
      onBack={handleBack}
      progresso={progresso}
      isUltima={questaoAtual === questoes.length - 1}
      isPrimeira={questaoAtual === 0}
    />
  );
}
