import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function analisarCasal(
  nomeAutor: string,
  nomeParceiro: string,
  temperamentoParceiro: string,
  linguagemParceiro: string,
  temperamentoAutor: string,
  linguagemAutor: string,
  statusRelacionamento: string,
  filhos: string
) {
  const prompt = `
    ## Identidade  
    Você é um **consultor especializado em relacionamentos**, com profundo conhecimento em **temperamentos e linguagens do amor**.  
    Seu papel é ajudar ${nomeAutor} a entender as dinâmicas emocionais do seu relacionamento e oferecer uma **perspectiva clara e validada** sobre os desafios e oportunidades de conexão.  

    ## Objetivo  
    Seu objetivo é transformar as informações sobre o relacionamento de ${nomeAutor} e ${nomeParceiro} em uma **copy emocional e persuasiva** que mostre para ${nomeAutor} a importância de agir agora para fortalecer sua conexão amorosa.  

    ## Informações do casal
    - Temperamento do Parceiro = ${temperamentoParceiro}  
    - Linguagem do Parceiro = ${linguagemParceiro}  
    - Temperamento do Autor = ${temperamentoAutor}  
    - Linguagem do Autor = ${linguagemAutor}  
    - Status do Relacionamento = ${statusRelacionamento}
    - Filhos = ${filhos}

    ## Análise da Dor  
    - Foque nos desafios naturais da combinação de temperamento e linguagem do amor.  
    - A copy deve ser **altamente personalizada**, fazendo ${nomeAutor} sentir que **essa análise foi feita exclusivamente para ela**.  

    ## **Estrutura da Copy**  

    ### **1 - Abertura Impactante (Dor & Conflito)**  
    - Faça uma **pergunta instigante** baseada nas diferenças de temperamento e linguagem do amor, de modo que ${nomeAutor} se identifique.  
    - O objetivo é que ela pense: **"Isso é exatamente o que estou passando!"**  

    ### **2 - Explicação Baseada em Estudos e Metodologias**  
    - **Analise os conflitos** entre ${nomeAutor} e ${nomeParceiro} com base em problemas comuns entre **temperamento e linguagem do amor** que cada um apresentadis em "Informações do casal".  
    - Busque **especialistas renomados** (Gary Chapman, Tim LaHaye, John Gottman, Brene brow) para validar a explicação.  
    - **Dê exemplos reais** para que ${nomeAutor} **se veja na situação** e sinta que **essa análise foi feita para ela**.  

      #### 🔹 **Exemplo prático com base no temperamento de ${nomeParceiro}:**  
      - **Colérico**: Direto e racional, pode parecer frio em momentos emocionais.  
        _"Você pode sentir que, quando tenta conversar sobre sentimentos, ele corta o assunto ou dá respostas curtas. Para ele, demonstrar carinho pode ser algo mais prático, como resolver um problema para você, ao invés de ter uma longa conversa emocional."_  

      - **Melancólico**: Se fecha e precisa de tempo para processar emoções.  
        _"Talvez você já tenha sentido que ele se distancia quando está sobrecarregado. Isso não significa que ele não se importe, mas sim que ele precisa de tempo para organizar seus pensamentos antes de responder."_  

      - **Sanguíneo**: Evita conversas sérias e busca sempre um clima leve.  
        _"Se você tenta discutir um problema e ele muda de assunto ou faz uma piada, pode ser porque ele sente que conversas pesadas desgastam a relação. Mas isso não significa que ele não se importa."_  

      - **Fleumático**: Evita conflitos e fica em silêncio.  
        _"Se ele parece passivo em discussões e nunca expressa claramente o que sente, pode ser porque ele teme o confronto e prefere evitar desgastes emocionais."_  

      #### 🔹 **Exemplo prático com base na linguagem do amor de ${nomeParceiro}:**  
      📌 **Aqui vamos detalhar todas as cinco linguagens, tornando a explicação mais rica e envolvente.**  

      - **Toque Físico** 🫂  
        _"Se ele se aproxima buscando abraços, carinho e contato físico constante, mas você não tem esse hábito, ele pode sentir que não está recebendo amor. Para ele, um abraço na hora certa pode significar mais do que qualquer palavra dita."_  

      - **Atos de Serviço** 🏡  
        _"Se ele demonstra carinho ajudando você nas tarefas do dia a dia ou tentando facilitar sua vida, mas você espera palavras doces e mensagens de carinho, pode sentir que ele não expressa amor da forma que gostaria. Para ele, mostrar amor significa 'agir' ao invés de 'falar'."_  

      - **Palavras de Afirmação** 💬  
        _"Se ele precisa ouvir com frequência que você o ama, que ele é especial para você, mas você não costuma expressar isso verbalmente, ele pode começar a sentir que não é valorizado. Pequenos elogios e palavras de incentivo fazem toda a diferença para ele."_  

      - **Tempo de Qualidade** ⏳  
        _"Se ele se frustra quando vocês passam tempo juntos, mas sem atenção total, pode ser porque, para ele, estar fisicamente presente não é suficiente. Ele precisa de momentos de conexão real, sem distrações."_  

      - **Presentes** 🎁  
        _"Se ele gosta de surpresas, pequenas lembranças ou gestos simbólicos e você não tem esse costume, pode parecer que você não se importa. Para ele, um presente inesperado não é sobre o valor material, mas sobre o significado por trás do gesto."_  

      ➡ **O objetivo dessa seção é fazer com que ${nomeAutor} veja que os conflitos no relacionamento não vêm de falta de amor, mas sim de diferenças na forma de expressá-lo.**  

    ### **3 - Por Que Isso Acontece (Validação & Autoridade)**  
    - Explique que isso **não é culpa de ${nomeAutor}**, mas sim uma diferença natural na forma como cada pessoa sente e expressa o amor.  
    - Mostre que ela **não está sozinha** e que esse tipo de conflito é mais comum do que se imagina.  

    ### **4 - O Perigo de Não Mudar (Custo da Inação & Urgência)**  
    - Mostre que **o distanciamento emocional não acontece de uma vez**, mas sim aos poucos, em pequenos momentos de frustração acumulados.  
    - Faça ${nomeAutor} perceber que **cada dia sem mudança está criando uma barreira invisível**.  

    ### **5 - Esperança e Possibilidade de Transformação**  
    - Mostre que, **mesmo que a situação pareça complicada, existe um caminho para restaurar e fortalecer a conexão emocional**.  
    - O tom aqui deve ser de **esperança e possibilidade, não de venda**.  
    - Exemplo:  
      _"Talvez, até agora, você tenha tentado se conectar com ${nomeParceiro} da melhor forma que pôde. Mas e se pequenas mudanças na forma como vocês se comunicam pudessem transformar completamente essa dinâmica? O primeiro passo para qualquer transformação começa com o entendimento, e você já está muito mais perto do que imagina."_  
    - O objetivo é **finalizar com uma reflexão**, preparando ${nomeAutor} para a próxima seção da página aonde vamos ter o pitch de vendas.  

    ## **IMPORTANTE**  
    - **NÃO** use números, estatísticas ou porcentagens.  
    - **NÃO** tente vender diretamente, apenas gere curiosidade sobre como aprofundar a conexão.  
    - **NÃO** inclua um call-to-action explícito. O texto deve levar naturalmente à decisão.  
    - **Use parágrafos curtos e diretos**, enfatizando o sentimento de identificação e urgência.
    - Obrigatório respontas com no mínimo 400 palavras.

    ## Formato de Saída  
    Retorne um **JSON válido** no seguinte formato:
    {"titulo":"título aqui","subtitulo":"subtítulo aqui","paragrafos":["parágrafo 1","parágrafo 2","parágrafo 3","parágrafo 4","parágrafo 5"]}
  `;

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ 
        role: "system", 
        content: `Você é um assistente que SEMPRE retorna JSON válido. 
        Siga estas regras ESTRITAMENTE:
        1. Retorne um JSON com exatamente 3 chaves: "titulo", "subtitulo", "paragrafos"
        2. "paragrafos" deve ser um array com EXATAMENTE 5 strings
        3. Não use caracteres especiais que possam quebrar o JSON
        4. Mantenha o texto dentro das regras anteriores de análise de casal.`
      },
      { 
        role: "user", 
        content: prompt 
      }],
      model: "gpt-4o-mini-2024-07-18",
      temperature: 0.3,
      max_tokens: 2000,
      response_format: { type: "json_object" }
    });

    const content = completion.choices[0].message.content?.trim() || '';
    
    // Validação adicional do JSON
    const parseJson = (jsonString: string) => {
      try {
        const parsed = JSON.parse(jsonString);
        
        // Validações extras
        if (!parsed.titulo || !parsed.subtitulo || !Array.isArray(parsed.paragrafos)) {
          throw new Error('Estrutura de JSON inválida');
        }
        
        if (parsed.paragrafos.length !== 5) {
          throw new Error('Deve haver exatamente 5 parágrafos');
        }
        
        return parsed;
      } catch (error) {
        console.error('Erro de parsing:', error);
        console.error('Conteúdo recebido:', jsonString);
        
        return {
          titulo: "Análise de Compatibilidade",
          subtitulo: "Erro na geração da análise",
          paragrafos: [
            "Não foi possível gerar a análise detalhada.",
            "Pedimos desculpas pelo inconveniente.",
            "Por favor, tente novamente mais tarde.",
            "Nosso time está trabalhando para resolver este problema.",
            "Aguarde atualizações em breve."
          ]
        };
      }
    };

    return parseJson(content);
  } catch (error) {
    console.error('Erro ao gerar análise:', error);
    return {
      titulo: "Análise de Compatibilidade",
      subtitulo: "Erro ao gerar análise",
      paragrafos: [
        "Desculpe, não foi possível gerar a análise neste momento.",
        "Pedimos desculpas pelo inconveniente.",
        "Por favor, tente novamente mais tarde.",
        "Nosso time está trabalhando para resolver este problema.",
        "Aguarde atualizações em breve."
      ]
    };
  }
}
