'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QuestaoType } from '@/types/questionario';
import { buscarQuestoesPorTipo } from '@/lib/actions/questionario-actions';
import { Questao } from '@/components/questionario/questao';
import { Loading } from '@/components/ui/loading';
import { LoadingQuestionario } from '@/components/ui/loading-questionario';
import { Introducao } from '@/components/questionario/introducao';
import { salvarQuestoes, salvarResposta, obterDados, obterResposta, limparDados } from '@/utils/storage';

export default function QuestionarioPage() {
  const router = useRouter();
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [questoes, setQuestoes] = useState<QuestaoType[]>([]);
  const [nomePretendente, setNomePretendente] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [mostrarIntroducao, setMostrarIntroducao] = useState(true);

  // Inicializa as questões e limpa dados anteriores
  useEffect(() => {
    async function carregarQuestoes() {
      // Limpa dados anteriores
      limparDados();
      
      // Gera novas questões usando server action
      const novasQuestoes = await buscarQuestoesPorTipo([
        'temperamento', 
        'linguagem', 
        'temperamento_autor', 
        'linguagem_autor'
      ], 2);

      setQuestoes(novasQuestoes);
      salvarQuestoes(novasQuestoes);
    }

    carregarQuestoes();
  }, []);

  // Atualiza o nome do pretendente quando ele é informado
  useEffect(() => {
    const dados = obterDados();
    if (dados.respostas?.['input_nome_pretendente']) {
      setNomePretendente(dados.respostas['input_nome_pretendente']);
    }
  }, [questaoAtual]);

  // Debug do estado atual
  useEffect(() => {
    if (questoes.length > 0) {
    }
  }, [questaoAtual, questoes]);

  if (questoes.length === 0) {
    return <LoadingQuestionario />;
  }

  if (mostrarIntroducao) {
    return <Introducao onStart={() => setMostrarIntroducao(false)} />;
  }

  const questao = questoes[questaoAtual];
  const progresso = ((questaoAtual + 1) / questoes.length) * 100;
  const isPrimeira = questaoAtual === 0;
  const isUltima = questaoAtual === questoes.length - 1;

  const handleResposta = async (valor: string) => {
    // Salva a resposta primeiro
    salvarResposta(questao, valor);
    
    // Se for a última questão
    if (questaoAtual === questoes.length - 1) {
      setIsLoading(true);
      try {
        // Garante que todas as respostas foram salvas
        const dados = obterDados();
        if (!dados.questoes.length || !dados.respostas) {
          console.error('Dados incompletos:', dados);
          return;
        }
        
        // Redireciona para a página de resultados
        router.replace('/resultado');
      } catch (error) {
        console.error('Erro ao processar respostas:', error);
        setIsLoading(false);
      }
      return;
    }
    
    // Avança automaticamente apenas se não for uma questão de input
    if (questao.tipo !== 'input') {
      setQuestaoAtual(prev => Math.min(prev + 1, questoes.length - 1));
    }
  };

  const handleNext = async () => {
    const respostaAtual = obterResposta(questao);
    if (!respostaAtual) {
      return;
    }

    // Se for a última questão
    if (questaoAtual === questoes.length - 1) {
      setIsLoading(true);
      try {
        // Garante que todas as respostas foram salvas
        const dados = obterDados();
        if (!dados.questoes.length || !dados.respostas) {
          console.error('Dados incompletos:', dados);
          return;
        }
        
        // Redireciona para a página de resultados
        router.replace('/resultado');
      } catch (error) {
        console.error('Erro ao processar respostas:', error);
        setIsLoading(false);
      }
      return;
    }

    setQuestaoAtual(prev => Math.min(prev + 1, questoes.length - 1));
  };

  const handleBack = () => {
    setQuestaoAtual(prev => Math.max(prev - 1, 0));
  };

  const getOpcoesFormatadas = () => {
    if (!('respostas' in questao)) return [];
    return Object.entries(questao.respostas).map(([valor, resposta]) => ({
      valor: Number(valor),
      texto: resposta.texto,
    }));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Questao
        pergunta={questao.pergunta}
        complemento={questao.complemento}
        tipo={questao.tipo}
        opcoes={getOpcoesFormatadas()}
        valor={obterResposta(questao) || ''}
        onChange={handleResposta}
        onNext={handleNext}
        onBack={handleBack}
        progresso={progresso}
        isUltima={isUltima}
        isPrimeira={isPrimeira}
        nomePretendente={nomePretendente}
      />
    </>
  );
}
