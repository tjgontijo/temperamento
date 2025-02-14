import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo.png" 
                alt="Decifrando Corações" 
                width={250} 
                height={80}
                className="max-h-20 w-auto"
              />
            </Link>
            <p className="text-purple-200">
              Transformando relacionamentos através do autoconhecimento e compreensão mútua.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/politica-privacidade" className="text-purple-200 hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="text-purple-200 hover:text-white">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-200">
          <p> {new Date().getFullYear()} Decifrando Corações. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
