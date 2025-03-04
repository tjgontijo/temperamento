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
      "opcoes": ["Casual", "Namorados", "Noivos", "Casados", "Pretendente", "Relacionamento Indefinido"],
      "descricao": "Escolha a opção que mais se aproxima do momento atual entre vocês."
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
      ],
      "descricao": "Se tiverem filhos, indique quantos e se são deste relacionamento."
    },
    {
      "id": "historia_relacionamento",
      "tipo": "textarea",
      "pergunta": "Poderia contar um pouco sobre a história de vocês dois e o que mais te incomoda ou preocupa no relacionamento atualmente?",
      "descricao": "Esta pergunta é opcional, porém quanto mais detalhes você se sentir à vontade em compartilhar, melhor poderemos entender sua situação."
    },
    {
      "id": "whatsapp",
      "tipo": "input_whatsapp",
      "pergunta": "Quer receber seu resultado também via WhatsApp?",
      "descricao": "Para sua comodidade, também podemos enviar o resultado via Whatsapp"
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

    // Última questão
    const validarCampo = (campo: string) => {
      if (!campo || campo.trim() === '') {
        return false;
      }
      return true;
    };

    const nomeAutorValido = validarCampo(respostas.nome_autor);
    const whatsappValido = validarCampo(respostas.whatsapp);
    const nomeParceiroValido = validarCampo(respostas.nome_parceiro);
    const statusValido = validarCampo(respostas.status_relacionamento);
    const filhosValido = validarCampo(respostas.filhos);

    if (!nomeAutorValido || !whatsappValido || !nomeParceiroValido || !statusValido || !filhosValido) {
      return;
    }

    // Preparar dados para salvar
    const dadosContexto = {
      nome_autor: respostas.nome_autor.trim(),
      whatsapp: respostas.whatsapp.trim(),
      nome_parceiro: respostas.nome_parceiro.trim(),
      status_relacionamento: respostas.status_relacionamento,
      filhos: respostas.filhos,
      historia_relacionamento: (respostas.historia_relacionamento || '').trim()
    };

    try {
      // Salvamos as respostas
      await salvarDadosContexto(dadosContexto);
      
      // Verificar se os dados foram realmente salvos
      const dadosSalvos = obterDadosContexto();
      
      // Verificação adicional
      if (!dadosSalvos) {
        return;
      }

      // Notifica o componente pai que o formulário foi concluído
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
