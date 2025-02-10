import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function validarNome(nome: string): Promise<{ 
  valido: boolean; 
  mensagem: string;
}> {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Você é um assistente amigável que ajuda a validar nomes próprios brasileiros.
          Sua função é verificar se o texto fornecido é um nome próprio válido e retornar mensagens claras e gentis.

          Regras de validação:
          1. Deve ser um nome próprio real usado para pessoas no Brasil
          2. Não pode ser uma palavra comum, adjetivo ou substantivo
          3. Não pode ser nome de marca ou empresa
          4. Não pode ser nome ofensivo
          5. Deve ser culturalmente reconhecido no Brasil

          Exemplos de respostas:
          Para nomes inválidos, use mensagens amigáveis como:
          - "Ops! Parece que você digitou uma palavra comum. Por favor, digite seu primeiro nome."
          - "Hmm... isso não parece ser seu nome. Que tal digitar seu primeiro nome corretamente para continuar?"
          - "Desculpe, mas precisamos do seu nome verdadeiro para continuar."

          Para nomes válidos, confirme simplesmente com:
          - "Nome válido! Podemos continuar."

          Responda apenas com um objeto JSON contendo:
          - valido (boolean): true se for um nome próprio válido, false caso contrário
          - mensagem (string): Use as mensagens sugeridas acima, mantendo um tom amigável e direto`
        },
        {
          role: "user",
          content: `Analise se "${nome}" é um nome próprio válido.`
        }
      ],
      model: "gpt-4o-mini-2024-07-18",
      temperature: 0.1,
      response_format: { type: "json_object" }
    });

    const content = completion.choices[0].message.content;

    if (!content) {
      return {
        valido: false,
        mensagem: 'Não foi possível validar o nome. Tente novamente.'
      };
    }

    const resultado = JSON.parse(content);
    return {
      valido: resultado.valido,
      mensagem: resultado.mensagem
    };
  } catch (error) {
    console.error('Erro ao validar nome:', error);
    return {
      valido: true, // Em caso de erro, permitimos passar para não bloquear o usuário
      mensagem: 'Não foi possível validar o nome no momento.'
    };
  }
}
