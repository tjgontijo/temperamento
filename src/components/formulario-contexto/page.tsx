'use client';

import { useState } from 'react';
import { InputContexto } from './input-contexto';
import { Introducao } from '@/components/questionario/introducao';
import { salvarDadosContexto } from '@/utils/storage';

interface FormularioContextoProps {
  onConcluido?: () => void;
}

const questoesContexto: Array<{
  id: string;
  tipo: 'input' | 'textarea';
  pergunta: string;
  descricao?: string;
}> = [
  {
    "id": "nome_autor",
    "tipo": "input",
    "pergunta": "Qual é o seu Primeiro Nome?",    
    "descricao": "Precisamos do seu nome exato para garantir que a análise seja precisa."
  },
  {
    "id": "nome_parceiro",
    "tipo": "input",
    "pergunta": "Qual o Primeiro Nome da pessoa que você quer analisar?",    
    "descricao": "O nome é essencial para calcular a compatibilidade entre vocês."
  },
  {
    "id": "historia_relacionamento",
    "tipo": "textarea",
    "pergunta": "Conte um pouco sobre a história de vocês dois",    
    "descricao": "Este campo é opcional, porém, quanto mais detalhes você compartilhar sobre como se conheceram e como é a relação de vocês, mais precisa será a análise."
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
          nome_parceiro: respostas.nome_parceiro,
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
