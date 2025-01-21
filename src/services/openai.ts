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
  linguagemSecundariaAutor: string
) {
  const prompt = `
    Você é um especialista em relacionamentos com profunda experiência em análise de compatibilidade e desenvolvimento de relacionamentos duradouros.
    Sua missão é revelar o potencial extraordinário deste relacionamento, mas também sutilmente indicar que conhecimentos específicos serão necessários
    para transformar esse potencial em realidade.

    Analise estas informações valiosas que obtivemos através de nosso questionário especializado:

    ${nomeAutor} revelou um perfil fascinante:
    - Temperamento principal: ${temperamentoPrincipalAutor}
    - Temperamento secundário: ${temperamentoSecundarioAutor}
    - Linguagem do amor principal: ${linguagemPrincipalAutor}
    - Linguagem do amor secundária: ${linguagemSecundariaAutor}

    E descobrimos estas características intrigantes sobre ${nomePretendente}:
    - Temperamento principal: ${temperamentoPrincipalPretendente}
    - Temperamento secundário: ${temperamentoSecundarioPretendente}
    - Linguagem do amor principal: ${linguagemPrincipalPretendente}
    - Linguagem do amor secundária: ${linguagemSecundariaPretendente}

    Diretrizes para a análise:
    1. Comece destacando o potencial único e especial desta combinação de temperamentos
    2. Revele insights sobre como as linguagens do amor podem criar momentos mágicos
    3. Sutilmente indique que existem técnicas específicas que ${nomeAutor} precisará dominar
    4. Sugira que há níveis mais profundos de conexão possíveis com o conhecimento adequado

    Pontos cruciais a abordar:
    - Mostre o potencial extraordinário do relacionamento
    - Destaque momentos e conexões especiais que são possíveis
    - Indique sutilmente que há desafios que precisarão ser navegados com sabedoria
    - Sugira que há técnicas e conhecimentos específicos que podem transformar a dinâmica do relacionamento
    - Desperte curiosidade sobre como alcançar esse potencial
    - Só utilize os nomes dos personagens se você validar que o nome realmente existe. Alguns colocam texto como: "asdsa" para apenas preencher o input.

    Estruture a resposta em exatamente 4 parágrafos, cada um com um propósito específico:

    Parágrafo 1 - O Potencial Único:
    - Destaque a combinação especial dos temperamentos
    - Mostre como essa combinação é rara e valiosa
    - Crie uma visão inspiradora do que é possível
    - Foque nas características complementares

    Parágrafo 2 - A Magia das Linguagens do Amor:
    - Explore como as linguagens do amor se entrelaçam
    - Mostre momentos mágicos que podem surgir
    - Sugira possibilidades inexploradas
    - Deixe claro que há técnicas específicas para maximizar essa conexão

    Parágrafo 3 - Os Desafios e Mistérios:
    - Mencione sutilmente os desafios naturais dessa combinação
    - Sugira que há conhecimentos específicos necessários
    - Indique que ${nomeAutor} precisará de certas habilidades
    - Desperte curiosidade sobre como desenvolver essas habilidades

    Parágrafo 4 - O Chamado à Ação Sutil:
    - Reforce o potencial extraordinário
    - Sugira que há níveis mais profundos a serem descobertos
    - Deixe questões estratégicas em aberto
    - Crie um senso de urgência sutil para buscar mais conhecimento

    Tom da mensagem:
    - Extremamente otimista sobre o potencial
    - Levemente misterioso sobre os caminhos para o sucesso
    - Sugestivo sobre a necessidade de conhecimento específico
    - Inspirador e motivador
    - Evite mencionar produtos ou serviços diretamente

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
      temperature: 0.3,
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
