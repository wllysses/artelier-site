import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '300', '400', '700'] });

export const metadata: Metadata = {
  title: 'Artelier - Quadros & Personalizados',
  description: 'Somos o Artelier, uma loja virtual pensada para transformar seus sonhos em arte.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} position="top-center" autoClose={1000} />
        {children}
      </body>
    </html>
  );
}
