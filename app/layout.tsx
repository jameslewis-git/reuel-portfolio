import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reuel Lobo | Cloud Architect',
  description: 'Designing Scalable Cloud Infrastructures with Security at the Core',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  },
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
