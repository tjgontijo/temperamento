import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Decifrando Corações',
  description: 'Artigos e insights sobre relacionamentos, comunicação e autoconhecimento'
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <p>Conteúdos em desenvolvimento. Em breve, artigos e insights sobre relacionamentos.</p>
    </div>
  );
}
