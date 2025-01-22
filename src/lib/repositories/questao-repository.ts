import { cache } from 'react'
import prisma from '@/lib/prisma'
import { 
  QuestaoCreateInput, 
  AlternativaCreateInput,
  QuestaoWithRelations
} from '@/types/prisma'
import { 
  createQuestao, 
  createQuestaoWithAlternativas 
} from '@/lib/actions/questao-actions'

export const QuestaoRepository = {
  findById: cache(async (id: string): Promise<QuestaoWithRelations | null> => {
    return prisma.questao.findUnique({
      where: { id },
      include: { 
        tipoQuestao: true,
        alternativas: {
          include: { tipoAlternativa: true }
        }
      }
    })
  }),

  findByTipo: cache(async (tipo: string): Promise<QuestaoWithRelations[]> => {
    return prisma.questao.findMany({
      where: { 
        tipoQuestao: { 
          nome: tipo 
        } 
      },
      include: { 
        tipoQuestao: true,
        alternativas: {
          include: { tipoAlternativa: true }
        }
      }
    })
  }),

  // Usa a server action importada
  create: createQuestao,

  // Usa a server action importada
  createWithAlternativas: createQuestaoWithAlternativas
}
