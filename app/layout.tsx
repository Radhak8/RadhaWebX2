
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Personal Website',
  description: 'Welcome to my personal website showcasing my work and thoughts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Security Headers */}
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()" />
        {/* HTTPS Enforcement */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
