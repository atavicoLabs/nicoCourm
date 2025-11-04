import './globals.css'

export const metadata = {
  title: 'Servizi di Accoglienza Courmayeur | Autista Privato & Guida Turistica',
  description: 'Servizi premium di accoglienza a Courmayeur: autista privato, guida turistica locale e aperitivi in quota. Esperienze autentiche nelle Alpi.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
