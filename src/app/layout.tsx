import type { Metadata } from 'next';
import { Inter, Poppins, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/components/language-provider';
import { GlobalBackground } from '@/components/three/global-background';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['600', '700', '800'] });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });

export const metadata: Metadata = {
  title: 'EstudosLSO | Seu Hub de Estudos Pessoal',
  description: 'Organize e acesse seus materiais de estudo dos cursos EAD de alto valor.',
  icons: {
    icon: 'src/app/favicon.ico',
    shortcut: 'src/app/favicon.ico',
    apple: 'src/app/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${robotoMono.variable} font-body antialiased`}>
        <ThemeProvider
          defaultTheme="dark"
          storageKey="estudoslso-theme"
        >
          <LanguageProvider>
            <GlobalBackground />
            <div className="relative z-10 flex min-h-screen flex-col">
              <Header />
              <main className="container flex-grow px-4 py-10 md:px-6 md:py-14">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
