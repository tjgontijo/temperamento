export interface WebhookPayload {
  resultados: {
    temperamento: {
      principal: string;
      secundario: string;
      totalPontos: number;
      quantidadePrincipal: number;
      quantidadeSecundario: number;
      percentualPrincipal: number;
      percentualSecundario: number;
    };
    linguagem: {
      principal: string;
      secundario: string;
      totalPontos: number;
      quantidadePrincipal: number;
      quantidadeSecundario: number;
      percentualPrincipal: number;
      percentualSecundario: number;
    };
    temperamentoAutor: {
      principal: string;
      secundario: string;
      totalPontos: number;
      quantidadePrincipal: number;
      quantidadeSecundario: number;
      percentualPrincipal: number;
      percentualSecundario: number;
    };
    linguagemAutor: {
      principal: string;
      secundario: string;
      totalPontos: number;
      quantidadePrincipal: number;
      quantidadeSecundario: number;
      percentualPrincipal: number;
      percentualSecundario: number;
    };
    timestamp: number;
  };
  contexto: {
    nome_autor: string;
    nome_parceiro: string;
    status_relacionamento: string;
    filhos: string;
  };
}

export class WebhookService {
  private webhookUrl: string;

  constructor() {
    this.webhookUrl = process.env.WEBHOOK_URL || 'https://webhook.elev8.com.br/webhook/c32b13b9-b317-49c3-96d2-e782612b71b4';
  }

  async enviarResultados(payload: WebhookPayload): Promise<boolean> {
    try {
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        console.error('Erro ao enviar para webhook:', response.status, response.statusText);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Erro ao enviar para webhook:', error);
      return false;
    }
  }
}

// Exportar uma instância singleton
export const webhookService = new WebhookService();
