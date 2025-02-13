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
    console.log('🔍 handleNext chamado');
    console.log('Questão atual:', questaoAtual);
    console.log('Total de questões:', questoesContexto.length);
    console.log('Respostas atuais:', JSON.stringify(respostas));

    if (questaoAtual < questoesContexto.length - 1) {
      console.log('🚶 Avançando para próxima questão');
      setQuestaoAtual(prev => prev + 1);
      return;
    }

    // Última questão
    console.log('🏁 Última questão alcançada');

    // Validações rigorosas
    const validarCampo = (campo: string, nomeCampo: string) => {
      if (!campo || campo.trim() === '') {
        console.error(`❌ Campo obrigatório não preenchido: ${nomeCampo}`);
        return false;
      }
      return true;
    };

    const nomeAutorValido = validarCampo(respostas.nome_autor, 'Nome do Autor');
    const nomeParceiroValido = validarCampo(respostas.nome_parceiro, 'Nome do Parceiro');

    if (!nomeAutorValido || !nomeParceiroValido) {
      console.error('❌ Validação de campos falhou');
      return;
    }

    // Preparar dados para salvar
    const dadosContexto = {
      nome_autor: respostas.nome_autor.trim(),
      nome_parceiro: respostas.nome_parceiro.trim(),
      historia_relacionamento: (respostas.historia_relacionamento || '').trim()
    };

    console.log('📦 Dados preparados para salvar:', JSON.stringify(dadosContexto));

    try {
      // Salvamos as respostas
      await salvarDadosContexto(dadosContexto);
      
      console.log('💾 Dados salvos com sucesso');
      
      // Verificar se os dados foram realmente salvos
      const dadosSalvos = obterDadosContexto();
      console.log('🔍 Dados recuperados do localStorage:', JSON.stringify(dadosSalvos));
      
      // Verificação adicional
      if (!dadosSalvos) {
        console.error('❌ Falha ao recuperar dados salvos');
        return;
      }

      // Notifica o componente pai que o formulário foi concluído
      if (onConcluido) {
        console.log('✅ Chamando onConcluido');
        onConcluido();
      }
    } catch (error) {
      console.error('❌ Erro crítico ao salvar dados:', error);
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
