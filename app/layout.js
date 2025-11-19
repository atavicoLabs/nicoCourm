import './globals.css'

export const metadata = {
  title: 'Your personal courma guide | Courmayeur Services',
  description: 'Your personal courma guide — scopri Courmayeur: autista privato, Courma Infopoint, aperitrekking in quota e attività sportive. Esperienze su misura nelle Alpi.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
