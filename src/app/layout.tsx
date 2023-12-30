import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Mea_Culpa } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const meaculpa = Mea_Culpa({
  subsets: ['latin'],
  variable: '--font-mea-culpa',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Paradise Eventos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${meaculpa.variable}`}>
      <body>
        <div className="grid min-h-screen bg-paradise-green-200">
          <Header />
          <main className="text-paradise-zinc-900 overflow-x-hidden font-sans">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
