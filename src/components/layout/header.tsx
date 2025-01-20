import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-2xl text-purple-900">
            {process.env.NEXT_PUBLIC_SYSTEM_FULL_NAME}
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#beneficios" className="text-gray-600 hover:text-purple-600">
              Benefícios
            </Link>
            <Link href="#como-funciona" className="text-gray-600 hover:text-purple-600">
              Como Funciona
            </Link>
            <Link href="#depoimentos" className="text-gray-600 hover:text-purple-600">
              Depoimentos
            </Link>
          </nav>

          <Link href="/questionario">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Começar Agora
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
