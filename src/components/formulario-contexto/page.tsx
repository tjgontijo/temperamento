'use client';

import { useState } from 'react';
import { InputContexto } from './input-contexto';
import { Introducao } from '@/components/questionario/introducao';
import { salvarDadosContexto } from '@/utils/storage';

interface FormularioContextoProps {
  onConcluido?: () => void;
}

const questoesContexto = [
  {
    id: 'nome_autor',
    tipo: 'input' as const,
    pergunta: 'Qual é o seu nome?',
    descricao: 'Por favor, insira seu nome completo'
  },
  {
    id: 'nome_pretendente',
    tipo: 'input' as const,
    pergunta: 'Qual o nome do pretendente?',
    descricao: 'Por favor, insira o nome completo do pretendente'
  },
  {
    id: 'historia_relacionamento',
    tipo: 'textarea' as const,
    pergunta: 'Conte um pouco sobre a história do relacionamento',
    descricao: 'Como se conheceram? Há quanto tempo estão juntos? Compartilhe um pouco dessa história.'
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
    } else {
      try {
        // Salvamos as respostas
        await salvarDadosContexto({
          nome_autor: respostas.nome_autor,
          nome_pretendente: respostas.nome_pretendente,
          historia_relacionamento: respostas.historia_relacionamento
        });
        
        // Notifica o componente pai que o formulário foi concluído
        if (onConcluido) {
          onConcluido();
        }
      } catch (error) {
        console.error('Erro ao salvar dados:', error);
      }
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
