import type { Metadata } from 'next'
import { arimo, playfairDisplay } from '@/fonts/fonts'
import '../styles/styles.min.css'

export const metadata: Metadata = {
  title: 'Deseo Mágico',
  description: 'Deseo Mágico - Cursos 100% online.',
  applicationName: 'Deseo Mágico',
  icons: '/icon.png',
  themeColor: '#efc7c5',
  appleWebApp: { title: 'Deseo Mágico' },
  twitter: { title: 'Deseo Mágico - Cursos 100% online.', card: 'summary_large_image', site: 'Deseo Mágico', creator: '@florenciawilh', images: '/icon.png', description: 'Deseo Mágico - Cursos 100% online.' },
  openGraph: { title: 'Deseo Mágico - Cursos 100% online.', type: 'website', images: [{ url: '/icon.png' }], url: 'https://deseo-magico.vercel.app/', description: 'Deseo Mágico - Cursos 100% online.', locale: 'es_ES', siteName: 'Deseo Mágico' }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${arimo.variable} ${playfairDisplay.variable}`}>
        {children}
      </body>
    </html>
  )
}
