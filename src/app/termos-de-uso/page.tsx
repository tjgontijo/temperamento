import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso - Decifrando Corações',
  description: 'Termos e condições de uso da plataforma Decifrando Corações'
};

export default function TermosUsoPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-purple-900">Termos de Uso</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">1. Aceitação dos Termos</h2>
        <p className="mb-4">
          Ao acessar e utilizar o site Decifrando Corações, você concorda integralmente com estes Termos de Uso. 
          Caso não concorde com algum dos termos, por favor, não utilize nossa plataforma.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">2. Uso do Serviço</h2>
        <p className="mb-4">
          O Decifrando Corações oferece um serviço de teste de temperamento e linguagem do amor para auxiliar 
          no entendimento de relacionamentos. O uso do serviço é destinado apenas para maiores de 18 anos.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>O serviço destina-se a uso pessoal e não comercial</li>
          <li>É proibido compartilhar resultados de forma fraudulenta</li>
          <li>Todos os direitos de conteúdo são reservados à Decifrando Corações</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">3. Responsabilidades do Usuário</h2>
        <p className="mb-4">
          Ao utilizar nosso serviço, você se compromete a:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Fornecer informações verdadeiras e precisas</li>
          <li>Manter a confidencialidade de suas credenciais de acesso</li>
          <li>Não utilizar o serviço para fins ilegais ou prejudiciais</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">4. Limitação de Responsabilidade</h2>
        <p className="mb-4">
          O Decifrando Corações não se responsabiliza por decisões tomadas exclusivamente 
          com base nos resultados do teste. Os resultados são apenas um guia de autoconhecimento 
          e não substituem aconselhamento profissional.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">5. Modificações dos Termos</h2>
        <p className="mb-4">
          Reservamos o direito de modificar estes Termos de Uso a qualquer momento. 
          Alterações serão publicadas nesta página e entrarão em vigor imediatamente.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">6. Contato</h2>
        <p>
          Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco pelo 
          e-mail: contato@decifrandocoracoes.com
        </p>
      </section>

      <p className="mt-8 text-sm text-gray-600">
        Última atualização: {new Date().toLocaleDateString('pt-BR')}
      </p>
    </div>
  );
}
