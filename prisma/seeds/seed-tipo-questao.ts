import { PrismaClient } from '@prisma/client'

export const seedTipoQuestao = async (prisma: PrismaClient) => {
  const tiposQuestao = [
    {
      nome: 'TEMPERAMENTO',
      descricao: 'Questões relacionadas ao temperamento'
    },
    {
      nome: 'LINGUAGEM',
      descricao: 'Questões sobre linguagem do amor'
    },
    {
      nome: 'TEMPERAMENTO_AUTOR',
      descricao: 'Questões sobre o temperamento do autor'
    },
    {
      nome: 'LINGUAGEM_AUTOR',
      descricao: 'Questões sobre a linguagem do amor do autor'
    }
  ]

  for (const tipo of tiposQuestao) {
    await prisma.tipoQuestao.create({
      data: tipo
    })
  }
}
