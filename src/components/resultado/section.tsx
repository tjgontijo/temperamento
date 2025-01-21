import { TemperamentoResultado, LinguagemResultado } from '@/types/questionario';
import { TEMPERAMENTOS, LINGUAGENS } from '@/data/constantes';

interface ResultadoSectionProps {
  titulo: string;
  nome: string;
  temperamento: TemperamentoResultado;
  linguagem: LinguagemResultado;
}

export function ResultadoSection({ titulo, nome, temperamento, linguagem }: ResultadoSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">{titulo}</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-medium mb-2">Temperamento</h3>
          <p className="text-gray-700">
            {nome}, identificamos que você possui um temperamento principal de {TEMPERAMENTOS[temperamento.valor]} e um temperamento secundário de {TEMPERAMENTOS[temperamento.segundo]}.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-2">Linguagem</h3>
          <p className="text-gray-700">
            {nome}, identificamos que você possui uma linguagem principal de {LINGUAGENS[linguagem.valor]} e uma linguagem secundária de {LINGUAGENS[linguagem.segundo]}.
          </p>
        </div>
      </div>
    </div>
  );
}
