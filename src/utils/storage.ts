import { QuestaoType } from '@/types/questionario';

interface ResultadoQuestionario {
  nome: string;
  pretendente: string;
  respostas: Record<string | number, string>;
  questoes: QuestaoType[];
}

const STORAGE_KEYS = {
  RESULTADO: 'questionario_resultado',
  VISUALIZADO: 'questionario_visualizado'
} as const;

export const salvarResultado = (resultado: ResultadoQuestionario) => {
  localStorage.setItem(STORAGE_KEYS.RESULTADO, JSON.stringify(resultado));
  localStorage.removeItem(STORAGE_KEYS.VISUALIZADO); // Reset visualizado quando salvar novo resultado
};

export const obterResultado = (): ResultadoQuestionario | null => {
  const resultado = localStorage.getItem(STORAGE_KEYS.RESULTADO);
  return resultado ? JSON.parse(resultado) : null;
};

export const marcarComoVisualizado = () => {
  localStorage.setItem(STORAGE_KEYS.VISUALIZADO, 'true');
};

export const foiVisualizado = () => {
  return localStorage.getItem(STORAGE_KEYS.VISUALIZADO) === 'true';
};

export const limparResultado = () => {
  localStorage.removeItem(STORAGE_KEYS.RESULTADO);
  localStorage.removeItem(STORAGE_KEYS.VISUALIZADO);
};
