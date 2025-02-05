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
    Você é um especialista em relacionamentos com experiência em análise de compatibilidade e desenvolvimento de conexões duradouras. 
    Seu objetivo é revelar o potencial desse relacionamento, criando entusiasmo e desejo de aprofundamento.

    Analise as seguintes informações:

    ${nomeAutor} apresentou as seguintes características:
    - Temperamento principal: ${temperamentoPrincipalAutor}
    - Temperamento secundário: ${temperamentoSecundarioAutor}
    - Linguagem do amor principal: ${linguagemPrincipalAutor}
    - Linguagem do amor secundária: ${linguagemSecundariaAutor}

    Já ${nomePretendente} possui as seguintes características:
    - Temperamento principal: ${temperamentoPrincipalPretendente}
    - Temperamento secundário: ${temperamentoSecundarioPretendente}
    - Linguagem do amor principal: ${linguagemPrincipalPretendente}
    - Linguagem do amor secundária: ${linguagemSecundariaPretendente}

    ${historiaRelacionamento ? `História do Relacionamento: ${historiaRelacionamento}` : ''}


     Diretrizes para sua análise:
    - Seja envolvente e direto, como se estivesse explicando para ${nomeAutor}.
    - Mostre como essa combinação pode criar uma conexão especial.
    - Destaque como as linguagens do amor se complementam e podem fortalecer a relação.
    - Identifique desafios naturais dessa combinação e como superá-los.
    - Reforce que há muito mais a ser descoberto sobre essa conexão e como aprofundá-la.

    Estrutura da Resposta (exatamente 4 parágrafos):
     1. O Potencial Único:  
       - Mostre como essa combinação específica de temperamentos pode criar uma conexão especial.  
       - Use um tom positivo e motivador, despertando esperança e empolgação.  

    2. Como essa Conexão Pode se Fortalecer:  
       - Explique como as linguagens do amor de ambos podem se complementar.  
       - Dê exemplos de como pequenas atitudes podem transformar o relacionamento.  

    3. Os Desafios Naturais:  
       - Mostre que toda relação tem desafios, mas que podem ser superados.  
       - Dê uma visão clara de quais são os principais pontos de atenção dessa combinação.  

    4. Um Novo Nível de Conexão:  
       - Indique que existe um caminho claro para aprofundar essa conexão.  
       - Finalize com uma reflexão estratégica:
         - "Como seria seu relacionamento se você soubesse exatamente como tocar o coração de ${nomePretendente}?"
         - "Imagine a diferença que faria se você tivesse um mapa claro para fortalecer essa relação."
         - "O próximo passo para transformar essa conexão já está ao seu alcance."
    
         Instruções importantes:  
    - NÃO mencione números ou porcentagens na análise.  
    - NÃO tente vender diretamente, apenas gere curiosidade sobre como aprofundar a conexão.  
    - IMPORTANTE: Retorne apenas o objeto JSON sem formatação ou caracteres extras. Use exatamente esta estrutura:
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
