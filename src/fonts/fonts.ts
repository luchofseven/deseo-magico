import { Arimo, Playfair_Display } from 'next/font/google'

export const arimo = Arimo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-arimo'
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-playfairDisplay'
})
