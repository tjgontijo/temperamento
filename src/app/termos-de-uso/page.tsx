import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termos de Uso - Decifrando Corações',
  description: 'Termos e condições de uso da plataforma Decifrando Corações'
};

export default function TermosUsoPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-purple-900">Termos de Uso</h1>
      
      <section className="prose prose-purple max-w-none">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">1. Introdução</h2>
        <p>Bem-vindo ao <strong>Decifrando Corações</strong>! Ao acessar e utilizar nossa plataforma, você concorda em cumprir estes Termos de Uso. Caso não concorde com qualquer parte destes termos, recomendamos que não utilize nossos serviços.</p>
        <p>Nosso site oferece um questionário interativo e análises personalizadas para ajudar no entendimento dos relacionamentos, baseando-se em conceitos de <strong>Linguagens do Amor e Temperamentos</strong>.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">2. Descrição dos Serviços</h2>
        <p>A plataforma oferece:</p>
        <ul>
          <li>Um <strong>questionário personalizado</strong>, que coleta informações sobre o usuário e seu relacionamento.</li>
          <li><strong>Análises geradas por inteligência artificial</strong> (OpenAI ou Llama) para fornecer insights sobre a dinâmica emocional do casal.</li>
          <li>Um <strong>ebook pago</strong> que ensina como aplicar esses conhecimentos no relacionamento.</li>
          <li><strong>Conteúdos adicionais</strong>, como materiais de apoio, bônus e dicas exclusivas.</li>
        </ul>
        <p>Os serviços oferecidos são <strong>digitais</strong>, e o acesso ao material pode ser feito via <strong>plataforma Kwify</strong> ou outro meio indicado no momento da compra.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">3. Cadastro e Responsabilidades do Usuário</h2>
        <p>Para acessar algumas partes do serviço, pode ser necessário fornecer informações pessoais, como nome e e-mail. Ao se cadastrar, você concorda que:</p>
        <ul>
          <li>As informações fornecidas são <strong>verdadeiras, precisas e atualizadas</strong>.</li>
          <li>Não utilizará a plataforma para fins ilegais ou que violem estes Termos de Uso.</li>
          <li>É responsável pela <strong>confidencialidade dos seus dados de acesso</strong>, se aplicável.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">4. Uso das Informações Coletadas</h2>
        <p>As informações coletadas são utilizadas para:</p>
        <ul>
          <li>Personalizar a experiência do usuário e gerar análises específicas.</li>
          <li>Melhorar os serviços oferecidos e otimizar campanhas de marketing.</li>
          <li>Gerenciar transações, caso o usuário opte por adquirir o ebook ou outros conteúdos pagos.</li>
        </ul>
        <p>Para mais detalhes sobre como tratamos seus dados, consulte nossa <strong><Link href="/politica-privacidade">Política de Privacidade</Link></strong>.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">5. Direitos Autorais e Propriedade Intelectual</h2>
        <p>Todo o conteúdo disponível no site, incluindo textos, gráficos, análises geradas por IA e materiais pagos, <strong>é protegido por direitos autorais</strong>. O usuário <strong>não pode copiar, distribuir, modificar ou revender qualquer parte do conteúdo sem autorização expressa</strong>.</p>
        <p>A violação desses direitos pode resultar em <strong>suspensão do acesso</strong> e <strong>medidas legais cabíveis</strong>.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">6. Pagamentos e Reembolsos</h2>
        <ul>
          <li>O ebook e outros conteúdos pagos são adquiridos por meio de plataformas seguras, como <strong>Kwify</strong>.</li>
          <li>Oferecemos uma <strong>garantia de 7 dias</strong> conforme o Código de Defesa do Consumidor.</li>
          <li>O reembolso será processado dentro do prazo estipulado pela plataforma de pagamento.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">7. Limitação de Responsabilidade</h2>
        <p>Nosso serviço tem caráter <strong>informativo e educacional</strong> e <strong>não substitui aconselhamento profissional</strong>. As análises geradas por IA são baseadas nas respostas do usuário e <strong>não devem ser interpretadas como verdades absolutas ou previsões garantidas sobre relacionamentos</strong>.</p>
        <p>Não nos responsabilizamos por decisões tomadas com base nos conteúdos oferecidos.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">8. Alterações nos Termos de Uso</h2>
        <p>Estes Termos de Uso podem ser atualizados periodicamente. A versão mais recente estará sempre disponível em nosso site.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">9. Contato</h2>
        <p>Caso tenha dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail <strong>contato@decifrandocoracoes.com</strong>.</p>

        <p className="mt-8 text-sm text-gray-600">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </section>
    </div>
  );
}
