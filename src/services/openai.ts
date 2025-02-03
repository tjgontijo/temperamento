import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function analisarCasal(
  nomeAutor: string,
  nomePretendente: string,
  temperamentoPrincipalPretendente: string,
  temperamentoSecundarioPretendente: string,
  linguagemPrincipalPretendente: string,
  linguagemSecundariaPretendente: string,
  temperamentoPrincipalAutor: string,
  temperamentoSecundarioAutor: string,
  linguagemPrincipalAutor: string,
  linguagemSecundariaAutor: string,
  historiaRelacionamento: string
) {
  const prompt = `
    Você é um especialista em relacionamentos com profunda experiência em análise de compatibilidade e desenvolvimento de relacionamentos duradouros.
    Sua missão é revelar o potencial extraordinário deste relacionamento, mas também sutilmente indicar que conhecimentos específicos serão necessários
    para transformar esse potencial em realidade.

    Analise estas informações valiosas que obtivemos através de nosso questionário especializado:

    ${nomeAutor} revelou um perfil fascinante:
    - Temperamento principal: ${temperamentoPrincipalAutor} (Personalidade dominante)
    - Temperamento secundário: ${temperamentoSecundarioAutor} (Influência secundária)
    - Linguagem do amor principal: ${linguagemPrincipalAutor} (Como melhor expressa amor)
    - Linguagem do amor secundária: ${linguagemSecundariaAutor} (Forma secundária de expressão)

    E descobrimos estas características intrigantes sobre ${nomePretendente}:
    - Temperamento principal: ${temperamentoPrincipalPretendente} (Personalidade dominante)
    - Temperamento secundário: ${temperamentoSecundarioPretendente} (Influência secundária)
    - Linguagem do amor principal: ${linguagemPrincipalPretendente} (Como melhor recebe amor)
    - Linguagem do amor secundária: ${linguagemSecundariaPretendente} (Forma secundária de recepção)

    História do Relacionamento:
    ${historiaRelacionamento}

    Diretrizes para a análise:
    1. Foque nos temperamentos e linguagens do amor
    2. Comece destacando o potencial único e especial desta combinação de temperamentos, incorporando insights da história do relacionamento, se disponível
    3. Revele insights sobre como as linguagens do amor podem criar momentos mágicos, com base em eventos específicos da história, se disponível
    4. Sutilmente indique que existem técnicas específicas que ${nomeAutor} precisará dominar, considerando os desafios mencionados na história, se disponível
    5. Sugira que há níveis mais profundos de conexão possíveis com o conhecimento adequado, utilizando exemplos da história, se disponível

    Pontos cruciais a abordar:
    - Mostre o potencial extraordinário do relacionamento usando os temperamentos específicos e como eles se manifestaram na história, se disponível
    - Destaque como as linguagens do amor de cada um podem se complementar, com base em interações descritas na história, se disponível
    - Indique sutilmente que há desafios que precisarão ser navegados com sabedoria, referenciando eventos específicos da história, se disponível
    - Sugira que há técnicas e conhecimentos específicos que podem transformar a dinâmica do relacionamento, com base nos padrões observados na história, se disponível
    - Desperte curiosidade sobre como alcançar esse potencial, utilizando exemplos concretos da história, se disponível
    - Só utilize os nomes dos personagens se você validar que o nome realmente existe. Alguns colocam texto como: "asdsa" para apenas preencher o input.

    Estruture a resposta em exatamente 4 parágrafos, cada um com um propósito específico:

    Parágrafo 1 - O Potencial Único:
    - Destaque a combinação específica dos temperamentos (${temperamentoPrincipalPretendente} com ${temperamentoPrincipalAutor})
    - Mostre como essa combinação é rara e valiosa, com base em eventos da história, se disponível
    - Crie uma visão inspiradora do que é possível, utilizando exemplos da história, se disponível
    - Foque nas características complementares que foram evidenciadas na história, se disponível

    Parágrafo 2 - A Magia das Linguagens do Amor:
    - Explore como as linguagens específicas (${linguagemPrincipalPretendente} e ${linguagemPrincipalAutor}) se entrelaçam, com base em interações descritas na história, se disponível
    - Mostre momentos mágicos que podem surgir dessa combinação, utilizando exemplos da história, se disponível
    - Sugira possibilidades inexploradas, com base em padrões observados na história, se disponível
    - Deixe claro que há técnicas específicas para maximizar essa conexão, com base nos desafios mencionados na história, se disponível

    Parágrafo 3 - Os Desafios e Mistérios:
    - Mencione sutilmente os desafios naturais dessa combinação específica, referenciando eventos da história, se disponível
    - Sugira que há conhecimentos específicos necessários, com base nos desafios mencionados na história, se disponível
    - Indique que ${nomeAutor} precisará de certas habilidades, com base em padrões observados na história, se disponível
    - Desperte curiosidade sobre como desenvolver essas habilidades, utilizando exemplos da história, se disponível

    Parágrafo 4 - O Chamado à Ação Sutil:
    - Reforce o potencial extraordinário desta combinação específica, com base em eventos da história, se disponível
    - Sugira que há níveis mais profundos a serem descobertos, utilizando exemplos da história, se disponível
    - Deixe questões estratégicas em aberto, com base nos padrões observados na história, se disponível
    - Crie um senso de urgência sutil para buscar mais conhecimento, utilizando exemplos da história, se disponível

    Tom da mensagem:
    - Extremamente otimista sobre o potencial
    - Levemente misterioso sobre os caminhos para o sucesso
    - Sugestivo sobre a necessidade de conhecimento específico
    - Inspirador e motivador
    - Evite mencionar produtos ou serviços diretamente
    - Use os nomes dos temperamentos e linguagens, nunca números

    IMPORTANTE: Retorne apenas o objeto JSON sem formatação ou caracteres extras. Use exatamente esta estrutura:
    {"titulo":"título aqui","subtitulo":"subtítulo aqui","paragrafos":["parágrafo 1","parágrafo 2","parágrafo 3","parágrafo 4"]}
  `;

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ 
        role: "system", 
        content: "Você é um assistente que SEMPRE retorna apenas JSON válido, sem formatação ou caracteres extras. Nunca inclua ```json ou ``` no início ou fim da resposta. Seu objetivo é criar esperança e desejo de conhecimento mais profundo, sem vender diretamente."
      },
      { 
        role: "user", 
        content: prompt 
      }],
      model: "gpt-4o-mini-2024-07-18",
      temperature: 0.4,
      max_tokens: 1000,
    });

    const content = completion.choices[0].message.content?.trim() || '';
    
    try {
      return JSON.parse(content);
    } catch (error) {
      console.error('Erro ao fazer parse do JSON:', error);
      console.error('Conteúdo recebido:', content);
      return {
        titulo: "Análise de Compatibilidade",
        subtitulo: "Descobrindo o potencial desta conexão",
        paragrafos: ["Não foi possível gerar a análise neste momento. Por favor, tente novamente."]
      };
    }
  } catch (error) {
    console.error('Erro ao gerar análise:', error);
    return {
      titulo: "Análise de Compatibilidade",
      subtitulo: "Erro ao gerar análise",
      paragrafos: ["Desculpe, não foi possível gerar a análise neste momento."]
    };
  }
}
