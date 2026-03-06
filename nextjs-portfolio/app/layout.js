import './globals.css'

export const metadata = {
  title: 'Yatmanyu Rawat — Legal, Financial & Business Professional',
  description: 'Multidisciplinary professional bridging law, finance, and business — from the courts of Delhi to the boardrooms of Vancouver.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
