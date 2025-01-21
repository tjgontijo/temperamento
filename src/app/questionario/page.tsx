'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QuestaoType } from '@/types/questionario';
import { gerarQuestionario } from '@/data';
import { Questao } from '@/components/questionario/questao';
import { Loading } from '@/components/ui/loading';
import { salvarQuestoes, salvarResposta, obterDados, obterResposta, limparDados } from '@/utils/storage';

export default function QuestionarioPage() {
  const router = useRouter();
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [questoes, setQuestoes] = useState<QuestaoType[]>([]);
  const [nomePretendente, setNomePretendente] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  // Inicializa as questões e limpa dados anteriores
  useEffect(() => {
    // Limpa dados anteriores
    limparDados();
    
    // Gera novas questões
    const novasQuestoes = gerarQuestionario({
      quantidadeTemperamento: 2,
      quantidadeLinguagem: 2,
      quantidadeTemperamentoAutor: 2,
      quantidadeLinguagemAutor: 2,
    });
    setQuestoes(novasQuestoes);
    salvarQuestoes(novasQuestoes);
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
      const questao = questoes[questaoAtual];
      console.group('=== Estado Atual do Questionário ===');
      console.log('Questão Atual:', questao);
      console.log('\nRespostas Acumuladas:', obterDados());
      console.groupEnd();
    }
  }, [questaoAtual, questoes]);

  if (questoes.length === 0) {
    return <div>Carregando...</div>;
  }

  const questao = questoes[questaoAtual];
  const progresso = ((questaoAtual + 1) / questoes.length) * 100;
  const isPrimeira = questaoAtual === 0;
  const isUltima = questaoAtual === questoes.length - 1;

  const handleResposta = async (valor: string) => {
    salvarResposta(questao, valor);
    
    // Se for a última questão, mostra loading e redireciona
    if (questaoAtual === questoes.length - 1) {
      setIsLoading(true);
      // Simula um tempo de processamento para melhor UX
      await new Promise(resolve => setTimeout(resolve, 4000));
      router.push('/resultado');
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

    // Se for a última questão, mostra loading e redireciona
    if (questaoAtual === questoes.length - 1) {
      setIsLoading(true);
      // Simula um tempo de processamento para melhor UX
      await new Promise(resolve => setTimeout(resolve, 4000));
      router.push('/resultado');
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
      {isLoading && <Loading />}
    </>
  );
}
