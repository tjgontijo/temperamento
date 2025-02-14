import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade - Decifrando Corações',
  description: 'Política de privacidade e tratamento de dados pessoais'
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-purple-900">Política de Privacidade</h1>
      
      <section className="prose prose-purple max-w-none">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">1. Introdução</h2>
        <p>A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações fornecidas pelos usuários ao acessarem nosso site e utilizarem nossos serviços.</p>
        <p>Ao utilizar nossa plataforma, você concorda com os termos desta Política de Privacidade.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">2. Informações Coletadas</h2>
        <p>Podemos coletar e processar as seguintes informações:</p>
        <ul>
          <li><strong>Dados fornecidos diretamente pelo usuário:</strong> Nome, e-mail, nome do parceiro(a), respostas ao questionário e outros dados inseridos voluntariamente.</li>
          <li><strong>Dados de navegação:</strong> Endereço IP, tipo de dispositivo, localização aproximada, páginas visitadas e tempo de permanência.</li>
          <li><strong>Cookies e tecnologias de rastreamento:</strong> Utilizamos cookies para melhorar a experiência do usuário e personalizar conteúdos e anúncios.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">3. Uso das Informações</h2>
        <p>As informações coletadas são utilizadas para:</p>
        <ul>
          <li>Fornecer análises personalizadas sobre relacionamentos.</li>
          <li>Melhorar a experiência do usuário na plataforma.</li>
          <li>Enviar conteúdos relevantes, ofertas e atualizações.</li>
          <li>Gerenciar compras e fornecer suporte ao cliente.</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>
        <p>A análise dos questionários pode ser realizada por <strong>inteligência artificial</strong>, incluindo <strong>OpenAI</strong> ou <strong>Llama</strong>, para fornecer um relatório personalizado com base nas respostas fornecidas.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">4. Compartilhamento de Dados</h2>
        <p>Suas informações <strong>não serão vendidas ou compartilhadas com terceiros</strong>, exceto nos seguintes casos:</p>
        <ul>
          <li><strong>Fornecedores de serviços:</strong> Podemos compartilhar dados com plataformas seguras de pagamento (ex.: Kwify) e ferramentas de análise (ex.: Google Analytics, Meta Ads).</li>
          <li><strong>Análise de IA:</strong> Alguns dados podem ser processados por ferramentas de inteligência artificial (ex.: OpenAI, Llama) para gerar insights personalizados.</li>
          <li><strong>Obrigação legal:</strong> Se exigido por lei ou ordem judicial.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">5. Armazenamento e Segurança</h2>
        <p>Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, perdas e uso indevido. No entanto, nenhum sistema é 100% seguro, e recomendamos que os usuários também adotem práticas de segurança, como senhas fortes.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">6. Direitos do Usuário</h2>
        <p>Você tem o direito de:</p>
        <ul>
          <li><strong>Acessar, corrigir ou excluir seus dados</strong> a qualquer momento.</li>
          <li><strong>Solicitar a interrupção do envio de comunicações</strong> (opt-out).</li>
          <li><strong>Revogar seu consentimento para o processamento de dados pessoais.</strong></li>
        </ul>
        <p>Para exercer esses direitos, entre em contato conosco pelo e-mail <strong>contato@decifrandocoracoes.com</strong>.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">7. Uso de Cookies</h2>
        <p>Utilizamos cookies para melhorar sua experiência no site. Você pode configurar seu navegador para bloquear cookies, mas isso pode impactar algumas funcionalidades da plataforma.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">8. Alterações na Política de Privacidade</h2>
        <p>Podemos atualizar esta Política de Privacidade periodicamente. Qualquer alteração será comunicada em nosso site.</p>

        <p className="mt-8 text-sm text-gray-600">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </section>
    </div>
  );
}
