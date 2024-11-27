import type { Metadata } from 'next'

import { Poppins } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyle } from '@/styles/global'
import { Sidebar } from '@/components/Sidebar'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Components',
  description: 'Components',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={poppins.className}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <div style={{ display: 'grid', gridTemplateColumns: '265px 1fr' }}>
            <Sidebar />
            {children}
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
