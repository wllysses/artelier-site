import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '300', '400', '700'] })

export const metadata: Metadata = {
  title: 'Artelier - Artesanato Personalizado',
  description: 'Somos o Artelier, uma loja virtual pensada para transformar seus sonhos em arte.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
