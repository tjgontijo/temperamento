import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#5B7B7A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            <p className="text-[#F2E8DC]">
              Transformando relacionamentos através do autoconhecimento e compreensão mútua.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#D2A878]">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#beneficios" className="text-[#F2E8DC] hover:text-white">
                  Benefícios
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="text-[#F2E8DC] hover:text-white">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-[#F2E8DC] hover:text-white">
                  Depoimentos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#D2A878]">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#F2E8DC] hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#F2E8DC] hover:text-white">
                  E-books
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#F2E8DC] hover:text-white">
                  Cursos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#D2A878]">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#F2E8DC] hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#F2E8DC] hover:text-white">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#8BA888] mt-8 pt-8 text-center text-[#F2E8DC]">
          <p>{new Date().getFullYear()} Decifrando Corações. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
