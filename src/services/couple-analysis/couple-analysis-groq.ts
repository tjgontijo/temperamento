interface ResultadoAnalise {
  titulo: string;
  subtitulo: string;
  paragrafos: string[];
}

export async function analisarCasalGroq(
  nomeAutor: string,
  nomeParceiro: string,
  temperamentoParceiro: string,
  linguagemParceiro: string,
  temperamentoAutor: string,
  linguagemAutor: string,
  statusRelacionamento: string,
  filhos: string
): Promise<ResultadoAnalise> {
  try {
    const prompt = `
    ## Identidade  
    Você é um(a) especialista em copywriting persuasivo e vendas de produtos digitais, **combinando empatia e acolhimento ao abordar questões emocionais**, com experiência em criar narrativas envolventes que levam o leitor a uma decisão de compra natural e sem resistência.

    ## Objetivo  
      Seu objetivo é transformar as informações sobre o relacionamento de ${nomeAutor} e ${nomeParceiro} em uma **copy emocional e persuasiva**, mostrando para ${nomeAutor} a importância de agir agora para fortalecer sua conexão amorosa.

    ## Informações do casal
      - Temperamento do Parceiro = ${temperamentoParceiro}  
      - Linguagem do Parceiro = ${linguagemParceiro}  
      - Temperamento do Autor = ${temperamentoAutor}  
      - Linguagem do Autor = ${linguagemAutor}  
      - Status do Relacionamento = ${statusRelacionamento}
      - Filhos = ${filhos}

    ## Análise da Dor  
      - Foque nos desafios naturais da combinação de temperamentos e linguagem do amor, trazendo **exemplos de situações rotineiras** que podem ilustrar as diferenças.  
      - A copy deve ser construída de forma que ${nomeAutor} sinta que **essa análise foi feita exclusivamente para ela** e não é algo genérico.

    ## Análise de Temperamentos  
      - Analise a **combinação específica** dos temperamentos de ${nomeAutor} (${temperamentoAutor}) e ${nomeParceiro} (${temperamentoParceiro}).  
      - Identifique os **principais pontos de atrito** e também os **pontos de complementaridade**.  
      - Foque em exemplos práticos do dia a dia que ilustrem essas dinâmicas.

    ## Estrutura da Copy  

    ### 1 - Abertura Impactante (Dor & Conflito)  
      - Faça uma **pergunta ou provocação** baseada nas diferenças de temperamento e linguagem do amor, de modo que ${nomeAutor} se identifique.  
      - O objetivo é que ela pense: **"Isso é exatamente o que estou passando!"**

    ### 2 - Por Que Isso Acontece (Validação & Autoridade)  
      - Explique de forma **simples e direta** por que essas diferenças de temperamento e linguagem do amor causam esses desafios.  
      - Valide os sentimentos de ${nomeAutor}, mostrando que é **natural** ter essas dificuldades.  
      - Demonstre **autoridade técnica** ao explicar os conceitos, mas mantenha uma linguagem acessível.

    ### 3 - O Perigo de Não Mudar (Urgência & Consequências)  
      - Descreva o que pode acontecer se esse padrão continuar: **frustração crescente, desgaste emocional, distanciamento**.  
      - Use um tom de **urgência realista**, sem ser alarmista.  
      - Foque nas **consequências emocionais** e no impacto no relacionamento.

    ### 4 - A Solução Comprovada (Esperança & Possibilidade)  
      - Mostre que é possível transformar essas diferenças em **forças do relacionamento**.  
      - Dê **exemplos práticos** de como a compreensão dos temperamentos pode melhorar a comunicação.  
      - Crie uma **visão positiva** do futuro após essa transformação.

    ### 5 - A Escolha Final (Decisão & Ação)  
      - Reforce que ${nomeAutor} está diante de uma **escolha importante**.  
      - Contraste o **custo emocional** de não agir com os **benefícios** de buscar essa transformação.  
      - Termine com uma mensagem de **esperança e possibilidade**.

    ## Diretrizes Gerais  
      - Use uma linguagem **acolhedora e empática**, evitando um tom professoral ou crítico.  
      - Mantenha um **equilíbrio** entre validar as dificuldades e mostrar possibilidades de mudança.  
      - **NÃO** tente vender diretamente, apenas gere curiosidade sobre como aprofundar a conexão.  
      - **NÃO** inclua um call-to-action explícito. O texto deve levar naturalmente à decisão.  
      - **Use parágrafos curtos e diretos**, enfatizando o sentimento de identificação e urgência.
      - Obrigatório respontas com no mínimo 400 palavras.

    ## Formato de Saída  
    Retorne um **JSON válido** no seguinte formato:
    {
      "titulo": "Título impactante que gere identificação",
      "subtitulo": "Subtítulo que reforce a dor e sugira possibilidade de mudança",
      "paragrafos": ["Parágrafo 1", "Parágrafo 2", "Parágrafo 3", "Parágrafo 4", "Parágrafo 5"]
    }`;

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
            content: `Você é um assistente que SEMPRE retorna JSON válido. 
            Siga estas regras ESTRITAMENTE:
            1. Retorne um JSON com exatamente 3 chaves: "titulo", "subtitulo", "paragrafos"
            2. "paragrafos" deve ser um array com EXATAMENTE 5 strings
            3. Não use caracteres especiais que possam quebrar o JSON
            4. Mantenha o texto dentro das regras anteriores de análise de casal`
          },
          { 
            role: "user", 
            content: prompt 
          }
        ]
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error('Falha na análise via Groq');
    }

    // Validação adicional do JSON
    const parseJson = (jsonString: string) => {
      try {
        const parsed = JSON.parse(jsonString);
        
        // Validações extras
        if (!parsed.titulo || !parsed.subtitulo || !Array.isArray(parsed.paragrafos)) {
          throw new Error('Formato de resposta inválido');
        }
        
        if (parsed.paragrafos.length !== 5) {
          throw new Error('Deve haver exatamente 5 parágrafos');
        }
        
        return parsed;
      } catch (error) {
        console.error('Erro de parsing no Groq:', error);
        console.error('Conteúdo recebido:', jsonString);
        
        return {
          titulo: "Análise de Compatibilidade",
          subtitulo: "Erro na geração da análise",
          paragrafos: [
            "Não foi possível gerar a análise detalhada.",
            "Pedimos desculpas pelo inconveniente.",
            "Por favor, tente novamente mais tarde.",
            "Nosso time está trabalhando para resolver este problema.",
            "Aguarde mais informações."
          ]
        };
      }
    };

    return parseJson(data.choices[0].message.content);

  } catch (error) {
    console.error('Erro na análise de casal via Groq:', error);
    
    return {
      titulo: "Análise de Compatibilidade",
      subtitulo: "Erro ao gerar análise",
      paragrafos: [
        "Desculpe, não foi possível gerar a análise neste momento.",
        "Pedimos desculpas pelo inconveniente.",
        "Por favor, tente novamente mais tarde.",
        "Nosso time está trabalhando para resolver este problema.",
        "Aguarde mais informações."
      ]
    };
  }
}
