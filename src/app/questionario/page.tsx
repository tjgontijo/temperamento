'use client';

import { useEffect, useState } from 'react';
import { QuestaoType } from '@/types/questionario';
import { buscarQuestoesPorTipo } from '@/lib/actions/questionario-actions';
import { Questao } from '@/components/questionario/questao';
import { FormularioContexto } from '@/components/formulario-contexto/page';
import { motion } from 'framer-motion';
import { 
  salvarResposta, 
  obterDadosContexto,
  obterRespostas,
  salvarAnalise,
  salvarResultadosQuestionario,
  obterResultadosQuestionario
} from '@/utils/storage';
import { useRouter } from 'next/navigation';
import { calcularResultado } from '@/lib/actions/resultado-actions';
import { analisarCasal } from '@/services/openai';

export default function QuestionarioPage() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [questoes, setQuestoes] = useState<QuestaoType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    async function carregarQuestoes() {
      if (!isClient || !localStorage.getItem('contexto_data')) {
        return;
      }

      const novasQuestoes = await buscarQuestoesPorTipo([
        'TEMPERAMENTO', 
        'LINGUAGEM', 
        'TEMPERAMENTO_AUTOR', 
        'LINGUAGEM_AUTOR'
      ], 2);

      setQuestoes(novasQuestoes);
    }

    carregarQuestoes();
  }, [isClient]);

  const handleContextoConcluido = () => {
    async function carregarQuestoes() {
      const novasQuestoes = await buscarQuestoesPorTipo([
        'TEMPERAMENTO', 
        'LINGUAGEM', 
        'TEMPERAMENTO_AUTOR', 
        'LINGUAGEM_AUTOR'
      ], 2);

      setQuestoes(novasQuestoes);
    }

    carregarQuestoes();
  };

  const handleResposta = async (alternativaId: string) => {
    if (!questoes.length) {
      console.error('Não há questões carregadas');
      return;
    }
    
    const questao = questoes[questaoAtual];
    if (!questao) {
      console.error('Questão atual não encontrada:', questaoAtual);
      return;
    }

    // Encontra o tipoAlternativaId correto
    const alternativaSelecionada = questao.alternativas?.find(alt => alt.id === alternativaId);
    if (!alternativaSelecionada) {
      console.error('Alternativa não encontrada:', alternativaId);
      return;
    }

    console.log('Salvando resposta:', {
      questaoId: questao.id,
      tipoQuestaoId: questao.tipoQuestaoId,
      alternativaId,
      tipoAlternativaId: alternativaSelecionada.tipoAlternativaId
    });

    salvarResposta(
      questao.id,
      questao.tipoQuestaoId,
      alternativaSelecionada.tipoAlternativaId
    );
    
    if (questaoAtual === questoes.length - 1) {
      setIsLoading(true);
      try {
        const respostas = obterRespostas();
        
        console.log('Estado final do questionário:', {
          questoes: questoes.map(q => ({ id: q.id, tipo: q.tipo })),
          respostas: Object.entries(respostas).map(([id, r]) => ({ 
            questaoId: id, 
            tipoQuestaoId: r.tipoQuestaoId,
            tipoAlternativaId: r.tipoAlternativaId 
          }))
        });
        
        if (Object.keys(respostas).length !== questoes.length) {
          console.error('Respostas incompletas. Esperado:', questoes.length, 'Obtido:', Object.keys(respostas).length);
          return;
        }
        
        const resultados = await calcularResultado(respostas);
        
        // Obter contexto
        const contexto = obterDadosContexto();
        if (!contexto) {
          throw new Error('Dados de contexto não encontrados');
        }
        
        // Log detalhado antes de salvar
        console.group('Salvando Resultados');
        console.log('Resultados calculados:', JSON.stringify(resultados, null, 2));
        console.log('Contexto:', contexto);
        
        // Adicionar informações de contexto aos resultados
        const resultadosCompletos = {
          ...resultados,
          informacoes: {
            nome_autor: contexto.nome_autor,
            nome_pretendente: contexto.nome_pretendente,
            historia_relacionamento: contexto.historia_relacionamento
          },
          analise: await analisarCasal(
            contexto.nome_autor || '',
            contexto.nome_pretendente || '',
            resultados.temperamento.principal,
            resultados.temperamento.secundario,
            resultados.linguagem.principal,
            resultados.linguagem.secundario,
            resultados.temperamentoAutor.principal,
            resultados.temperamentoAutor.secundario,
            resultados.linguagemAutor.principal,
            resultados.linguagemAutor.secundario
          )
        };
        
        console.log('Resultados completos:', JSON.stringify(resultadosCompletos, null, 2));
        console.groupEnd();

        salvarResultadosQuestionario(resultadosCompletos);

        const resultadosObtidos = obterResultadosQuestionario();
        console.log('Resultados obtidos no questionário:', JSON.stringify(resultadosObtidos, null, 2));

        router.push('/resultado');
      } catch (error) {
        console.error('Erro ao processar respostas:', error);
        setIsLoading(false);
      }
      return;
    }
    
    setQuestaoAtual(prev => Math.min(prev + 1, questoes.length - 1));
  };

  const handleBack = () => {
    if (questaoAtual > 0) {
      setQuestaoAtual(prev => prev - 1);
    }
  };

  if (!isClient) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center"
      >
        <div className="w-full py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </motion.div>
    );
  }

  if (typeof window !== 'undefined' && !localStorage.getItem('contexto_data')) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <FormularioContexto onConcluido={handleContextoConcluido} />
      </motion.div>
    );
  }

  if (questoes.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center"
      >
        <div className="w-full py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </motion.div>
    );
  }

  const questao = questoes[questaoAtual];
  const progresso = ((questaoAtual + 1) / questoes.length) * 100;
  const isPrimeira = questaoAtual === 0;
  const isUltima = questaoAtual === questoes.length - 1;

  // Só buscar resposta atual se houver questão
  const respostaAtual = questao ? (obterRespostas()[questao.id]?.tipoAlternativaId || '') : '';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Questao
        pergunta={questao.pergunta}
        complemento={questao.complemento}
        tipo={questao.tipo}
        opcoes={questao.alternativas ? questao.alternativas.map(alt => ({
          valor: alt.id,
          texto: alt.texto
        })) : []}
        valor={respostaAtual}
        onChange={handleResposta}
        onNext={() => {}}
        onBack={handleBack}
        progresso={progresso}
        isUltima={isUltima}
        isPrimeira={isPrimeira}
        isLoading={isLoading}
        nomeAutor={obterDadosContexto()?.nome_autor}
        nomePretendente={obterDadosContexto()?.nome_pretendente}
      />
    </motion.div>
  );
}
