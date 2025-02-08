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
    Você é um especialista em relacionamentos e análise de compatibilidade, com anos de experiência ajudando casais a se entenderem melhor.  
  Sua missão é revelar **o potencial deste relacionamento**, validando os sentimentos de quem está fazendo o teste e fornecendo **insights práticos e profundos** para que ela possa fortalecer essa conexão de maneira realista.  

  ### **Informações da Análise**  

  A pessoa que está respondendo apresentou as seguintes características:  
  - **Temperamento Principal:** ${temperamentoPrincipalAutor}  
  - **Temperamento Secundário:** ${temperamentoSecundarioAutor}  
  - **Linguagem do Amor Principal:** ${linguagemPrincipalAutor}  
  - **Linguagem do Amor Secundária:** ${linguagemSecundariaAutor}  

  A pessoa pela qual ela está interessada possui:  
  - **Temperamento Principal:** ${temperamentoPrincipalPretendente}  
  - **Temperamento Secundário:** ${temperamentoSecundarioPretendente}  
  - **Linguagem do Amor Principal:** ${linguagemPrincipalPretendente}  
  - **Linguagem do Amor Secundária:** ${linguagemSecundariaPretendente}  

  ${historiaRelacionamento ? `História do Relacionamento: "${historiaRelacionamento}"` : ''}  

  ### **Diretrizes para a Análise**  

  - **Escreva de forma envolvente e direta**, como se estivesse conversando pessoalmente com quem está lendo.  
  - **Evite repetições desnecessárias de nomes**. Use "você" para manter a leitura fluida e mais natural.  
  - **Valide as experiências da pessoa**, mostrando que as percepções que ela já tem fazem sentido e explicando o que está por trás disso.  
  - **Dê exemplos concretos** do dia a dia que mostrem como essas dinâmicas emocionais podem estar se manifestando no relacionamento.  
  - **Mostre como ela pode aplicar esses insights hoje mesmo**, para que sinta que já tem um caminho prático a seguir.  

  ### **Estrutura da Resposta (Exatamente 4 Parágrafos)**  

  **O Potencial Único do Relacionamento**  
  - Mostre como essa **combinação de temperamentos** pode criar uma conexão especial.  
  - Valide algo que a pessoa pode já ter percebido sobre o relacionamento, conectando isso à história dela.  
  - Traga um exemplo prático para que ela se reconheça na análise: *"Talvez você já tenha notado que, quando vocês discutem, ele tende a..."*  

  **Como essa Conexão Pode se Fortalecer**  
  - Explique como as **linguagens do amor de ambos** se complementam ou entram em conflito.  
  - Mostre situações do dia a dia onde esses padrões podem estar se manifestando.  
  - Dê **uma dica prática** sobre como se comunicar melhor e fortalecer a relação.  

  **Os Desafios Naturais da Relação**  
  - Valide se a pessoa já percebeu certos desafios e explique **por que isso acontece**.  
  - Se possível, traga algo baseado na **história do relacionamento**.  
  - Mostre que **não é um problema insuperável**, e que algumas mudanças podem transformar a dinâmica entre eles.  

  **Um Novo Nível de Conexão**  
  - Indique que **há um caminho claro para fortalecer essa relação**, mas que **fazer isso sozinha pode ser mais desafiador**.  
  - Mostre empatia, reconhecendo que a pessoa já tentou melhorar a relação, mas talvez **não tenha encontrado as respostas certas ainda**.  
  - Reforce sutilmente que, embora entender o parceiro seja um grande passo, **aplicar esse conhecimento do jeito certo faz toda a diferença**.  
  - **Use exemplos do dia a dia** para que a pessoa se reconheça no texto, como momentos em que tentou demonstrar amor, mas não teve a resposta esperada.  
  - Finalize com uma reflexão estratégica que gere curiosidade e leve a pessoa a perceber que **seguir um caminho validado pode ser a chave para transformar a relação**.  

  **Exemplo de TOM a ser seguido:**  
  - "Existe um caminho para fortalecer essa relação e tornar a conexão entre vocês mais profunda e equilibrada. Mas, se fosse fácil, você já teria descoberto sozinha. A verdade é que, muitas vezes, mesmo com os melhores sentimentos, podemos acabar cometendo erros sem perceber. Você já tentou demonstrar amor de um jeito que parecia certo, mas ele não reagiu como esperava? Ou talvez tenha feito de tudo para manter a relação forte, mas ainda assim sente que algo está fora do lugar?"  
  - "A boa notícia é que entender como ele realmente pensa e sente já é um grande passo. Mas saber **o que fazer com essas informações** faz toda a diferença. Pequenos ajustes podem transformar completamente a dinâmica entre vocês, desde a forma como vocês conversam até a maneira como lidam com desafios juntos. **A questão é: você quer continuar tentando no escuro ou seguir um caminho que já foi testado e funciona?**"  
  
  ### **Regras**  

  - **NÃO mencione números, porcentagens ou estatísticas** na análise.  
  - **NÃO tente vender diretamente**, apenas gere curiosidade sobre como aprofundar a conexão.  
  - **Use um tom envolvente e empático**, como se estivesse conversando diretamente com a pessoa.  
  - **A análise deve ser altamente personalizada**, utilizando insights da **história do casal sempre que relevante**.  
  - **Evite respostas genéricas ou vagas.** A análise deve conter **exemplos práticos e situações reais** para que a pessoa se reconheça no texto.  
  - **NÃO inclua introduções ou explicações fora do formato especificado.**  
  
  - **IMPORTANTE**: Retorne apenas um objeto JSON válido, sem formatação extra, exatamente nesta estrutura:   
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
      temperature: 0.5,
      max_tokens: 2000,
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
