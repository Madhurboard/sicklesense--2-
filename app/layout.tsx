import type { Metadata } from 'next'
import './globals.css'
import { PatientProvider } from '@/context/PatientContext'

export const metadata: Metadata = {
  title: 'SicklSense',
  description: '',
  generator: 'Next.js',
  applicationName: 'SicklSense',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <PatientProvider>
          {children}
        </PatientProvider>
      </body>
    </html>
  )
}
