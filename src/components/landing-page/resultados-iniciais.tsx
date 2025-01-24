'use client';

export function ResultadosIniciais({ 
  nome_pretendente, 
  temperamentoPrincipal, 
  temperamentoSecundario,
  linguagemPrincipal,
  linguagemSecundaria,
  analise
}: { 
  nome_pretendente: string;
  temperamentoPrincipal: string;
  temperamentoSecundario: string;
  linguagemPrincipal: string;
  linguagemSecundaria: string;
  analise: {
    titulo: string;
    subtitulo: string;
    paragrafos: string[];
  }
}) {
  if (!nome_pretendente) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Análise Personalizada
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-8">
          Revelando os Segredos do Coração de {nome_pretendente}
        </h3>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          Nossa análise avançada revelou aspectos únicos da personalidade dele que podem ser a chave para uma conexão profunda e duradoura.
        </p>

        {/* Perfil de Temperamento */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 text-left">
          <h4 className="text-2xl font-bold text-indigo-800 mb-6">
            Perfil de Temperamento
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-xl font-semibold text-gray-700 mb-4">
                Temperamento Principal
              </h5>
              <p className="text-lg text-gray-600">
                {temperamentoPrincipal}
              </p>
            </div>
            <div>
              <h5 className="text-xl font-semibold text-gray-700 mb-4">
                Influência Secundária
              </h5>
              <p className="text-lg text-gray-600">
                {temperamentoSecundario}
              </p>
            </div>
          </div>
        </div>

        {/* Linguagem do Amor */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 text-left">
          <h4 className="text-2xl font-bold text-indigo-800 mb-6">
            Linguagem do Amor
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-xl font-semibold text-gray-700 mb-4">
                Linguagem Principal
              </h5>
              <p className="text-lg text-gray-600">
                {linguagemPrincipal}
              </p>
            </div>
            <div>
              <h5 className="text-xl font-semibold text-gray-700 mb-4">
                Linguagem Secundária
              </h5>
              <p className="text-lg text-gray-600">
                {linguagemSecundaria}
              </p>
            </div>
          </div>
        </div>

        {/* Análise Detalhada */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-left">
          <h4 className="text-2xl font-bold text-indigo-800 mb-6">
            {analise.titulo}
          </h4>
          <h5 className="text-xl font-semibold text-gray-700 mb-6">
            {analise.subtitulo}
          </h5>
          <div className="space-y-4">
            {analise.paragrafos.map((paragrafo, index) => (
              <p key={index} className="text-lg text-gray-600 leading-relaxed">
                {paragrafo}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
