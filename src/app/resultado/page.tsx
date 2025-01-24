'use client';

// Types específicos
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

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Hero } from '@/components/landing-page/hero';
import { Introducao } from '@/components/landing-page/introducao';
import { ResultadosIniciais } from '@/components/landing-page/resultados-iniciais';
import {ApresentacaoGuia} from '@/components/landing-page/apresentacao-guia';
import { Beneficios } from '@/components/landing-page/beneficios';
import { Oferta } from '@/components/landing-page/oferta';
import { Urgencia } from '@/components/landing-page/urgencia';


export default function Resultado() {
  const router = useRouter();
  const [resultado, setResultado] = useState<ResultadoCalculadoType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const carregarResultados = () => {
      try {
        // Verificar se estamos no cliente
        if (typeof window === 'undefined') {
          return;
        }

        const resultadosString = localStorage.getItem('resultados_questionario');
        if (!resultadosString) {
          throw new Error('Nenhum resultado encontrado');
        }

        const resultadosCarregados = JSON.parse(resultadosString) as ResultadoCalculadoType;
        if (!resultadosCarregados.informacoes?.nome_pretendente) {
          throw new Error('Dados incompletos');
        }

        setResultado(resultadosCarregados);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao carregar resultados:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        setLoading(false);
        router.push('/questionario');
      }
    };

    carregarResultados();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !resultado || !resultado.informacoes) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Ops! Algo deu errado.
          </h1>
          <p className="text-gray-600 mb-8">
            {error || 'Não foi possível carregar os resultados.'}
          </p>
          <button
            onClick={() => router.push('/questionario')}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Voltar ao Questionário
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero 
        nome_autor={resultado.informacoes.nome_autor}
        nome_pretendente={resultado.informacoes.nome_pretendente}
      />
      
      <Introducao 
        nome_pretendente={resultado.informacoes.nome_pretendente}
      />
      
      <ResultadosIniciais
        nome_pretendente={resultado.informacoes.nome_pretendente}
        temperamentoPrincipal={resultado.temperamento.principal}
        temperamentoSecundario={resultado.temperamento.secundario}
        linguagemPrincipal={resultado.linguagemAutor.principal}
        linguagemSecundaria={resultado.linguagemAutor.secundario}
        analise={resultado.analise || {
          titulo: 'Análise Personalizada',
          subtitulo: 'Compreendendo Sua Dinâmica de Relacionamento',
          paragrafos: ['Não foi possível gerar a análise completa.']
        }}
      />
      
      <ApresentacaoGuia 
        nome_pretendente={resultado.informacoes.nome_pretendente}
      />
      
      <Beneficios 
        temperamentoPrincipal={resultado.temperamento.principal}
        linguagemPrincipal={resultado.linguagem.principal}
      />
      
      <Oferta 
        nome_pretendente={resultado.informacoes.nome_pretendente}
      />
      
      {/* Substituir a chamada do componente Urgencia */}
      <Urgencia nome_pretendente={resultado.informacoes.nome_pretendente} />
    </div>
  );
}
