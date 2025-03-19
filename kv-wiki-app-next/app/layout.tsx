import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import LoadingScreen from '@/components/LoadingScreen'

export const metadata: Metadata = {
  title: 'Kurtlar Vadisi Wiki',
  description: 'Explore the world of Kurtlar Vadisi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="antialiased bg-[url('/üsküdarbank.jpg')] bg-cover bg-center bg-fixed bg-no-repeat min-h-screen">
        <LoadingScreen />
        <Navbar />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}

