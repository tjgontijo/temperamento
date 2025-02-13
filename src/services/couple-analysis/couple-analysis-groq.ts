interface ResultadoAnalise {
  potencialRelacionamento: string;
  dinamicaInteracao: string;
  pontosCriticos: string;
  recomendacoesPersonalizadas: string;
}

export async function analisarCasalGroq(
  nomeAutor: string, 
  nomeParceiro: string, 
  historiaRelacionamento: string
): Promise<ResultadoAnalise> {
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        response_format: { type: 'json_object' },
        messages: [
          {
            role: "system",
            content: `Você é um especialista em relacionamentos e análise de compatibilidade.

            Sua missão é analisar o relacionamento de um casal de forma profunda e empática.

            Formato de resposta OBRIGATÓRIO:
            {
              "potencialRelacionamento": "texto descrevendo o potencial do relacionamento",
              "dinamicaInteracao": "texto explicando como o casal interage",
              "pontosCriticos": "texto destacando pontos críticos do relacionamento",
              "recomendacoesPersonalizadas": "texto com recomendações práticas para o casal"
            }`
          },
          {
            role: "user",
            content: `Realize análise de relacionamento para:
            - Nome do primeiro parceiro: ${nomeAutor}
            - Nome do segundo parceiro: ${nomeParceiro}
            - História do relacionamento: ${historiaRelacionamento || 'Não fornecido'}`
          }
        ]
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error('Falha na análise via Groq');
    }

    const resultado = JSON.parse(data.choices[0].message.content);
    return resultado;

  } catch (error) {
    console.error('Erro na análise de casal via Groq:', error);
    throw error;
  }
}
