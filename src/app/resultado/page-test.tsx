'use client';

import { useState, useEffect } from 'react';
import { obterDadosContexto, obterRespostas, obterResultadosQuestionario, obterAnalise, obterTiposQuestionario } from '@/utils/storage';

export default function Resultado() {
  const [dadosLocalStorage, setDadosLocalStorage] = useState({
    contexto: null,
    respostas: null,
    resultados: null,
    analise: null,
    tipos: null
  });

  useEffect(() => {
    const carregarDados = () => {
      const contexto = obterDadosContexto();
      const respostas = obterRespostas();
      const resultados = obterResultadosQuestionario();
      const analise = obterAnalise();
      const tipos = obterTiposQuestionario();

      setDadosLocalStorage({
        contexto,
        respostas,
        resultados,
        analise,
        tipos
      });
    };

    carregarDados();
  }, []);

  const renderizarDados = (dados: any) => {
    if (!dados) return <p>Sem dados</p>;
    return (
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
        {JSON.stringify(dados, null, 2)}
      </pre>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Dados do Questionário</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">Contexto</h2>
          {renderizarDados(dadosLocalStorage.contexto)}
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-3">Respostas</h2>
          {renderizarDados(dadosLocalStorage.respostas)}
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-3">Resultados do Questionário</h2>
          {renderizarDados(dadosLocalStorage.resultados)}
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-3">Tipos do Questionário</h2>
          {renderizarDados(dadosLocalStorage.tipos)}
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-3">Análise</h2>
          {renderizarDados(dadosLocalStorage.analise)}
        </div>
      </div>
    </div>
  );
}
