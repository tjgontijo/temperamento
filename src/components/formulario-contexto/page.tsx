'use client';

import { useState } from 'react';
import { InputContexto } from './input-contexto';
import { Introducao } from '@/components/questionario/introducao';
import { salvarDadosContexto, obterDadosContexto } from '@/utils/storage';

interface FormularioContextoProps {
  onConcluido?: () => void;
}

const questoesContexto: Array<{
  id: string;
  tipo: 'input' | 'textarea' | 'select' | 'input_whatsapp';
  pergunta: string;
  descricao?: string;
  opcoes?: string[];
}> = [
  {
    "id": "nome_autor",
    "tipo": "input",
    "pergunta": "Qual é o seu primeiro nome?"
  },
  {
    "id": "nome_parceiro",
    "tipo": "input",
    "pergunta": "Qual é o primeiro nome do seu parceiro?"
  },
  {
    "id": "status_relacionamento",
    "tipo": "select",
    "pergunta": "Qual dessas opções melhor descreve o relacionamento de vocês?",
    "opcoes": ["Namorados", "Noivos", "Casados", "Relacionamento Indefinido"]
  },
  {
    "id": "filhos",
    "tipo": "select",
    "pergunta": "Você têm filhos?",
    "opcoes": [
      "Não temos filhos",
      "Sim, temos filho juntos",
      "Sim, de outro relacionamento",
      "Sim, filhos juntos e de outro relacionamento"
    ]
  }
];

export function FormularioContexto({ onConcluido }: FormularioContextoProps) {
  const [mostrarIntroducao, setMostrarIntroducao] = useState(true);
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});

  const handleResposta = (valor: string) => {
    const questao = questoesContexto[questaoAtual];
    const novasRespostas = { ...respostas, [questao.id]: valor };
    setRespostas(novasRespostas);
  };

  const handleNext = async () => {
    if (questaoAtual < questoesContexto.length - 1) {
      setQuestaoAtual(prev => prev + 1);
      return;
    }

    const validarCampo = (campo: string) => {
      if (!campo || campo.trim() === '') {
        return false;
      }
      return true;
    };

    const nomeAutorValido = validarCampo(respostas.nome_autor);
    const nomeParceiroValido = validarCampo(respostas.nome_parceiro);
    const statusValido = validarCampo(respostas.status_relacionamento);
    const filhosValido = validarCampo(respostas.filhos);

    if (!nomeAutorValido || !nomeParceiroValido || !statusValido || !filhosValido) {
      return;
    }

    const dadosContexto = {
      nome_autor: respostas.nome_autor.trim(),
      nome_parceiro: respostas.nome_parceiro.trim(),
      status_relacionamento: respostas.status_relacionamento,
      filhos: respostas.filhos
    };

    try {
      await salvarDadosContexto(dadosContexto);
      
      const dadosSalvos = obterDadosContexto();
      
      if (!dadosSalvos) {
        return;
      }

      if (onConcluido) {
        onConcluido();
      }
    } catch {
      // Silenciosamente lida com erros de salvamento
    }
  };

  const handleBack = () => {
    if (questaoAtual > 0) {
      setQuestaoAtual(prev => prev - 1);
    }
  };

  if (mostrarIntroducao) {
    return <Introducao onStart={() => setMostrarIntroducao(false)} />;
  }

  const questao = questoesContexto[questaoAtual];
  const progresso = ((questaoAtual + 1) / questoesContexto.length) * 100;

  return (
    <InputContexto
      pergunta={questao.pergunta}
      descricao={questao.descricao}
      tipo={questao.tipo}
      opcoes={questao.opcoes}
      valor={respostas[questao.id] || ''}
      onChange={handleResposta}
      onNext={handleNext}
      onBack={handleBack}
      progresso={progresso}
      isUltima={questaoAtual === questoesContexto.length - 1}
      isPrimeira={questaoAtual === 0}
    />
  );
}
