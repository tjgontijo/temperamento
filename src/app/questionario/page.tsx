// Types específicos
'use client';

type TipoQuestaoType = {
  id: string;
  nome: string;
};

type AlternativaType = {
  id: string;
  texto: string;
  tipoAlternativaId: string;
};

type QuestaoType = {
  id: string;
  texto: string;
  tipo: string;
  tipoQuestao: TipoQuestaoType;
  alternativas: AlternativaType[];
};

type RespostaArmazenadaType = {
  questaoId: string;
  tipoQuestaoId: string;
  alternativaId: string;
  tipoAlternativaId: string;
};

type ResultadoCategoriaType = {
  principal: string;
  secundario: string;
  totalPontos: number;
  quantidadePrincipal: number;
  quantidadeSecundario: number;
  percentualPrincipal: number;
  percentualSecundario: number;
};

type InformacoesContextoType = {
  nome_autor: string;
  nome_pretendente: string;
  historia_relacionamento: string;
};

type AnaliseCasalType = {
  titulo: string;
  subtitulo: string;
  paragrafos: string[];
};

type ResultadoCalculadoType = {
  temperamento: ResultadoCategoriaType;
  linguagem: ResultadoCategoriaType;
  temperamentoAutor: ResultadoCategoriaType;
  linguagemAutor: ResultadoCategoriaType;
  informacoes?: InformacoesContextoType;
  analise?: AnaliseCasalType;
};

// Imports
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  salvarResposta,
  obterDadosContexto,
  obterRespostas,
  salvarResultadosQuestionario,
  obterResultadosQuestionario,
} from '@/utils/storage';
import { buscarQuestoesPorTipo } from '@/lib/actions/questionario-actions';
import { calcularResultado } from '@/lib/actions/resultado-actions';
import { analisarCasal } from '@/services/openai';
import { Questao } from '@/components/questionario/questao';
import { FormularioContexto } from '@/components/formulario-contexto/page';
import { motion } from 'framer-motion';
import { Loading } from '@/components/ui/loading';

export default function QuestionarioPage() {
  const [isClient, setIsClient] = useState(false);
  const [questoes, setQuestoes] = useState<QuestaoType[]>([]);
  const [indiceQuestaoAtual, setIndiceQuestaoAtual] = useState(0);
  const [etapaQuestionario, setEtapaQuestionario] = useState<'contexto' | 'perguntas'>('contexto');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    const carregarQuestoes = async () => {
      try {
        const questoesCarregadas: QuestaoType[] = await buscarQuestoesPorTipo([
          'TEMPERAMENTO',
          'LINGUAGEM',
          'TEMPERAMENTO_AUTOR',
          'LINGUAGEM_AUTOR',
        ], Number(process.env.NEXT_PUBLIC_QUESTOES_QUANTIDADE) || 8);

        setQuestoes(questoesCarregadas);
      } catch (error) {
        console.error('Erro ao carregar questões:', error);
      }
    };

    carregarQuestoes();
  }, []);

  const handleSalvarResposta = (questao: QuestaoType, alternativaSelecionada: AlternativaType) => {
    const resposta: RespostaArmazenadaType = {
      questaoId: questao.id,
      tipoQuestaoId: questao.tipoQuestao.id,
      alternativaId: alternativaSelecionada.id,
      tipoAlternativaId: alternativaSelecionada.tipoAlternativaId,
    };

    console.log('Salvando resposta:', resposta);
    salvarResposta(resposta.questaoId, resposta.tipoQuestaoId, resposta.tipoAlternativaId);
  };

  const handleResposta = async (alternativaId: string) => {
    if (!questoes.length) {
      console.error('Não há questões carregadas');
      return;
    }

    const questao = questoes[indiceQuestaoAtual];
    if (!questao) {
      console.error('Questão atual não encontrada:', indiceQuestaoAtual);
      return;
    }

    const alternativaSelecionada = questao.alternativas.find((alt) => alt.id === alternativaId);
    if (!alternativaSelecionada) {
      console.error('Alternativa não encontrada:', alternativaId);
      return;
    }

    handleSalvarResposta(questao, alternativaSelecionada);

    if (indiceQuestaoAtual === questoes.length - 1) {
      setIsLoading(true);
      try {
        const respostas = obterRespostas();
        const resultados = await calcularResultado(respostas);

        const contexto = obterDadosContexto();
        if (!contexto) {
          throw new Error('Dados de contexto não encontrados');
        }

        const resultadosCompletos: ResultadoCalculadoType = {
          ...resultados,
          informacoes: {
            nome_autor: contexto.nome_autor,
            nome_pretendente: contexto.nome_pretendente,
            historia_relacionamento: contexto.historia_relacionamento,
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
            resultados.linguagemAutor.secundario,
            contexto.historia_relacionamento || ''
          ),
        };

        console.log('Resultados completos:', JSON.stringify(resultadosCompletos, null, 2));
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

    setIndiceQuestaoAtual((prev) => Math.min(prev + 1, questoes.length - 1));
  };

  const handleBack = () => {
    if (indiceQuestaoAtual > 0) {
      setIndiceQuestaoAtual((prev) => prev - 1);
    }
  };

  if (!isClient) {
    return null;
  }

  if (isLoading) {
    return <Loading message="Analisando suas respostas..." />;
  }

  if (etapaQuestionario === 'contexto') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <FormularioContexto
          onConcluido={() => {
            setEtapaQuestionario('perguntas');
          }}
        />
      </motion.div>
    );
  }

  if (!questoes.length) {
    return <div>Carregando questões...</div>;
  }

  const questao = questoes[indiceQuestaoAtual];
  const progresso = ((indiceQuestaoAtual + 1) / questoes.length) * 100;
  const isPrimeira = indiceQuestaoAtual === 0;
  const isUltima = indiceQuestaoAtual === questoes.length - 1;

  const respostaAtual = questao ? obterRespostas()[questao.id]?.tipoAlternativaId || '' : '';

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Questao
        pergunta={questao.texto}
        complemento={''}
        tipo={questao.tipo}
        opcoes={
          questao.alternativas
            ? questao.alternativas.map((alt) => ({ valor: alt.id, texto: alt.texto }))
            : []
        }
        respostaSelecionada={respostaAtual}
        onResposta={handleResposta}
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
