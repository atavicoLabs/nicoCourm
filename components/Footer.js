'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest-green text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Courmayeur Services</h3>
            <p className="text-white/80 leading-relaxed">
              Esperienze autentiche e servizi premium nel cuore delle Alpi
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('chi-sono')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-soft-gold transition-colors"
                >
                  Chi Sono
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-soft-gold transition-colors"
                >
                  Servizi
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-soft-gold transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-soft-gold transition-colors"
                >
                  Contatti
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-white/80">
              <li>📧 info@courmayeur-services.com</li>
              <li>📱 +39 340 123 4567</li>
              <li>📍 Courmayeur, Valle d'Aosta</li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-2xl hover:text-soft-gold transition-colors">📘</a>
              <a href="#" className="text-2xl hover:text-soft-gold transition-colors">📷</a>
              <a href="#" className="text-2xl hover:text-soft-gold transition-colors">🔗</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>© {currentYear} Courmayeur Services. Tutti i diritti riservati.</p>
          <p className="mt-2 text-sm">
            Realizzato con passione per le Alpi
          </p>
        </div>
      </div>
    </footer>
  )
}
