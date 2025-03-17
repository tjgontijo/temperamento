'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className="w-full top-0 left-0 z-50 bg-gradient-to-r from-[#8BA888] to-[#5B7B7A] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 relative">
        {/* Logo com máscara redonda */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-20 h-20 overflow-hidden">
            <Image 
              src="/logo.png" 
              alt="Decifrando Corações" 
              width={96} 
              height={96} 
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link 
            href="#como-funciona" 
            className="text-[#F2E8DC] hover:text-white transition-colors scroll-smooth"
          >
            Como Funciona
          </Link>
          <Link 
            href="#beneficios" 
            className="text-[#F2E8DC] hover:text-white transition-colors scroll-smooth"
          >
            Benefícios
          </Link>
          <Link 
            href="#depoimentos" 
            className="text-[#F2E8DC] hover:text-white transition-colors scroll-smooth"
          >
            Depoimentos
          </Link>
        </nav>

        {/* Botão de Ação */}
        <div className="flex items-center space-x-4">
          <Link href="/questionario">
            <Button 
              className="hidden md:flex text-[#5B7B7A] bg-[#F2E8DC] hover:bg-white border-none shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Começar Minha Análise
            </Button>
          </Link>

          {/* Menu Mobile */}
          {isMobile && (
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-[#F2E8DC] hover:bg-white/20"
                onClick={toggleMobileMenu}
                aria-label="Toggle Mobile Menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  {isMobileMenuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </>
                  )}
                </svg>
              </Button>
            </div>
          )}
        </div>

        {/* Menu Mobile Dropdown */}
        {isMobile && isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMobileMenu}
          >
            <div 
              className="absolute top-20 left-4 right-4 bg-gradient-to-r from-[#8BA888] to-[#5B7B7A] rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col items-center space-y-4 py-6">
                <Link 
                  href="#como-funciona" 
                  className="text-[#F2E8DC] hover:text-white transition-colors"
                  onClick={closeMobileMenu}
                >
                  Como Funciona
                </Link>
                <Link 
                  href="#beneficios" 
                  className="text-[#F2E8DC] hover:text-white transition-colors"
                  onClick={closeMobileMenu}
                >
                  Benefícios
                </Link>
                <Link 
                  href="#depoimentos" 
                  className="text-[#F2E8DC] hover:text-white transition-colors"
                  onClick={closeMobileMenu}
                >
                  Depoimentos
                </Link>
                <Button 
                  className="w-3/4 bg-[#F2E8DC] text-[#5B7B7A] hover:bg-white whitespace-normal text-center hover:scale-105 transition-transform duration-300"
                >
                  <Link href="/questionario" onClick={closeMobileMenu}>
                    Começar Minha Análise
                  </Link>
                </Button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
