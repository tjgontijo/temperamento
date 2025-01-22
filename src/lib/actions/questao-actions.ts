'use server'

import prisma from '@/lib/prisma'
import { 
  QuestaoCreateInput, 
  AlternativaCreateInput,
  QuestaoWithRelations
} from '@/types/prisma'

export async function createQuestao(
  data: QuestaoCreateInput
): Promise<QuestaoWithRelations> {
  return prisma.questao.create({ 
    data: {
      ...data,
      tipoQuestao: {
        connect: { id: data.tipoQuestaoId }
      }
    },
    include: {
      tipoQuestao: true,
      alternativas: true
    }
  })
}

export async function createQuestaoWithAlternativas(
  questaoData: QuestaoCreateInput, 
  alternativas: AlternativaCreateInput[]
): Promise<QuestaoWithRelations> {
  return prisma.questao.create({ 
    data: {
      ...questaoData,
      tipoQuestao: {
        connect: { id: questaoData.tipoQuestaoId }
      },
      alternativas: {
        create: alternativas.map(alt => ({
          texto: alt.texto,
          tipoAlternativa: {
            connect: { id: alt.tipoAlternativaId }
          }
        }))
      }
    },
    include: {
      tipoQuestao: true,
      alternativas: {
        include: { tipoAlternativa: true }
      }
    }
  })
}
