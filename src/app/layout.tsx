import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JsonLdScript } from "@/components/scripts/JsonLd";
import { HeadScripts } from '@/components/scripts/HeadScripts';
import { BodyScripts } from '@/components/scripts/BodyScripts';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://decifrandocoracoes.com'),
  title: {
    default: "Descubra Como Criar uma Conexão Irresistível com Ele",
    template: `%s | ${process.env.NEXT_PUBLIC_SYSTEM_FULL_NAME || 'Decifrando Corações'}`,
  },
  description: "Aprenda a entender o que realmente conquista um homem e transforme sua relação. Descubra o caminho mais rápido para criar uma conexão emocional forte e duradoura.",
  keywords: [
    "como conquistar um homem",
    "como entender um homem",
    "como saber se ele gosta de mim",
    "como fazer um homem se apaixonar",
    "como deixar um homem interessado",
    "como ter um relacionamento saudável",
    "como melhorar a comunicação no relacionamento",
    "como saber se ele é o amor da minha vida",
    "linguagens do amor como aplicar",
    "como usar a psicologia para conquistar alguém",
    "guia de conquista",
    "método para conquistar",
    "curso de sedução",
    "inteligência emocional no amor"
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://decifrandocoracoes.com',
    title: process.env.NEXT_PUBLIC_SYSTEM_FULL_NAME || 'Decifrando Corações',
    description: "Aprenda a entender o que realmente conquista um homem e transforme sua relação. Descubra o caminho mais rápido para criar uma conexão emocional forte e duradoura.",
    siteName: process.env.NEXT_PUBLIC_SYSTEM_FULL_NAME || 'Decifrando Corações',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Decifrando Corações - Descubra seu temperamento'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: process.env.NEXT_PUBLIC_SYSTEM_FULL_NAME || 'Decifrando Corações',
    description: "Aprenda a entender o que realmente conquista um homem e transforme sua relação. Descubra o caminho mais rápido para criar uma conexão emocional forte e duradoura.",
    images: ['/images/og-image.png']
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    // Adicione outras verificações de sites aqui
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadScripts />
      </head>
      <body className={inter.className}>
        {/* Componente para scripts adicionais */}
        <BodyScripts />
        
        <JsonLdScript />
        {children}
      </body>
    </html>
  );
}
