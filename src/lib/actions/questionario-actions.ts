'use server'

import prisma from '@/lib/prisma'
import { QuestaoType } from '@/types/questionario'
import { randomBytes } from 'crypto'

type TipoQuestao = 'temperamento' | 'linguagem' | 'temperamento_autor' | 'linguagem_autor'

export async function buscarQuestoesPorTipo(
  tipos: TipoQuestao[], 
  quantidadePorTipo: number
): Promise<QuestaoType[]> {
  const questoesPromises = tipos.map(async (tipo) => {
    const questoes = await prisma.questao.findMany({
      where: { 
        tipoQuestao: { 
          nome: tipo.toUpperCase() 
        } 
      },
      include: { 
        tipoQuestao: true,
        alternativas: {
          include: { tipoAlternativa: true }
        }
      }
    })
    
    // Embaralhar e pegar a quantidade desejada
    const questoesSelecionadas = questoes
      .sort(() => 0.5 - Math.random())
      .slice(0, quantidadePorTipo)
    
    // Transformar para o formato QuestaoType
    return questoesSelecionadas.map(questao => ({
      id: questao.id,
      tipo: questao.tipoQuestao.nome.toLowerCase(),
      pergunta: questao.pergunta.replace('{nome}', ''),
      complemento: questao.complemento,
      respostas: Object.fromEntries(
        questao.alternativas.map((alt, index) => [
          index + 1, 
          { 
            texto: alt.texto, 
            categoria: alt.tipoAlternativa.nome.toLowerCase() 
          }
        ])
      )
    }))
  })

  // Achatar o array de questões
  const todasQuestoes = (await Promise.all(questoesPromises)).flat()
  
  // Adicionar questão de input para nome
  const questaoNome: QuestaoType = {
    id: randomBytes(16).toString('hex'),
    tipo: 'input',
    pergunta: 'Qual o nome do pretendente?',
    complemento: 'Por favor, insira o nome completo'
  }

  // Retornar questões misturadas
  return [questaoNome, ...todasQuestoes].sort(() => 0.5 - Math.random())
}
