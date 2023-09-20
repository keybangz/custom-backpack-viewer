import './globals.css'
import { getServerSession } from 'next-auth'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from './session'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '[TF2] Custom Backpack Viewer',
  description: 'Custom Backpack Viewer client for SourceMod plugin [TF2] Custom Backpack Manager',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
