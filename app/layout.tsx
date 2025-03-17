import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tec-MIT FrED Factory Summit',
  description: 'Week-long summit celebrating the FrED Factory project',
  generator: 'Adan Flores',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
