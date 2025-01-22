import { PrismaClient } from '@prisma/client'

export const seedTipoAlternativa = async (prisma: PrismaClient) => {
  const tiposAlternativa = [
    // Tipos de Linguagem do Amor
    {
      nome: 'PALAVRA_AFIRMACAO',
      descricao: 'Valoriza palavras de incentivo e reconhecimento',
      grupo: 'LINGUAGEM_AMOR'
    },
    {
      nome: 'TOQUE_FISICO',
      descricao: 'Valoriza demonstrações físicas de carinho',
      grupo: 'LINGUAGEM_AMOR'
    },
    {
      nome: 'TEMPO_QUALIDADE',
      descricao: 'Valoriza atenção e momentos dedicados',
      grupo: 'LINGUAGEM_AMOR'
    },
    {
      nome: 'ATOS_SERVICO',
      descricao: 'Valoriza ajuda prática e gestos de cuidado',
      grupo: 'LINGUAGEM_AMOR'
    },
    {
      nome: 'PRESENTES',
      descricao: 'Valoriza presentes significativos',
      grupo: 'LINGUAGEM_AMOR'
    },
    
    // Tipos de Temperamento
    {
      nome: 'SANGUINIO',
      descricao: 'Temperamento extrovertido e comunicativo',
      grupo: 'TEMPERAMENTO'
    },
    {
      nome: 'COLERICO',
      descricao: 'Temperamento assertivo e orientado a objetivos',
      grupo: 'TEMPERAMENTO'
    },
    {
      nome: 'MELANCOLICO',
      descricao: 'Temperamento analítico e perfeccionista',
      grupo: 'TEMPERAMENTO'
    },
    {
      nome: 'FLEUMATICO',
      descricao: 'Temperamento calmo e pacífico',
      grupo: 'TEMPERAMENTO'
    }
  ]

  for (const tipo of tiposAlternativa) {
    await prisma.tipoAlternativa.create({
      data: tipo
    })
  }
}
