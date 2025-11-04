'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Autista Privato',
    description: 'Trasferimenti comodi e sicuri da/per aeroporti, stazioni e località turistiche. Viaggia in totale relax con un servizio personalizzato e puntuale.',
    icon: '🚗',
    features: ['Trasferimenti aeroportuali', 'Tour personalizzati', 'Veicoli premium', 'Disponibilità 24/7']
  },
  {
    title: 'Aperitivi in Quota',
    description: 'Goditi aperitivi esclusivi con vista mozzafiato sul Monte Bianco. Esperienza culinaria unica tra le vette, con prodotti locali selezionati.',
    icon: '🏔️',
    features: ['Location esclusive', 'Prodotti valdostani', 'Vista panoramica', 'Organizzazione completa']
  },
  {
    title: 'Guida Turistica',
    description: 'Scopri i tesori nascosti di Courmayeur e della Valle d\'Aosta con un esperto locale. Itinerari su misura tra storia, natura e tradizioni.',
    icon: '🧭',
    features: ['Tour personalizzati', 'Conoscenza locale', 'Lingue multiple', 'Esperienze autentiche']
  }
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servizi" className="py-20 px-4 bg-gradient-to-b from-white to-snow-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-4">
            I Miei Servizi
          </h2>
          <p className="text-xl text-stone-gray max-w-2xl mx-auto">
            Esperienze premium pensate per rendere unico il tuo soggiorno a Courmayeur
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl 
                       transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon/Image Area */}
              <div className="h-48 bg-gradient-to-br from-forest-green to-stone-gray 
                            flex items-center justify-center text-7xl group-hover:scale-110 
                            transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-forest-green mb-3">
                  {service.title}
                </h3>
                <p className="text-stone-gray mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-stone-gray">
                      <span className="text-soft-gold mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="mt-6 w-full bg-forest-green text-white py-3 rounded-lg 
                                 hover:bg-forest-green/90 transition-colors duration-300 
                                 font-semibold">
                  Scopri di più
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
