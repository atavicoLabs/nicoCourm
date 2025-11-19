'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Autista Privato',
    description: 'Servizio professionale di autista privato su misura: trasferimenti aeroportuali e ferroviari, pick-up e drop-off, escursioni e percorsi personalizzati. Veicoli di categoria premium, autisti locali qualificati, assistenza bagagli e massima riservatezza. Puntualità, sicurezza e itinerari studiati per il massimo comfort durante tutto il viaggio.',
    icon: '🚗',
    features: ['Trasferimenti aeroportuali e stazioni', 'Itinerari personalizzati', 'Veicoli premium', 'Autisti locali qualificati']
  },
  {
    title: 'Aperitrekking in Quota',
    description: 'Scegli il tuo mezzo tra mountain bike, e-bike o classico trekking e goditi aperitivi in quota: degustazioni di prodotti locali al tramonto, accompagnamento di guide esperte e logistica completa per un’esperienza sicura e indimenticabile.',
    icon: '🚵‍♀️',
    features: ['Scelta mezzo: mtb / e-bike / trekking', 'Degustazioni locali', 'Guide alpine', 'Logistica e sicurezza']
  },
  {
    title: 'Courma Infopoint',
    description: 'Scopri tutte le attività di Courmayeur, dal relax dei centri termali alle avventure in natura. Informazioni pratiche, suggerimenti su itinerari e eventi, e un PDF riassuntivo scaricabile con tutto quello che serve per organizzare al meglio la tua visita.',
    icon: '🗺️',
    features: ['Informazioni su attività e servizi', 'Suggerimenti su itinerari', 'Eventi e wellness', 'PDF informativo scaricabile']
  },
  {
    title: 'Courma Active',
    description: 'Attività sportive su misura: arrampicata, canyoning, mountain bike, sci e corsi per tutti i livelli. Proponiamo pacchetti dinamici per chi ama l’avventura e lo sport in montagna.',
    icon: '⛷️',
    features: ['Sport per tutti i livelli', 'Attrezzatura e guide', 'Pacchetti giornalieri', 'Sicurezza certificata']
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl 
                         transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full"
            >
              {/* Icon/Image Area */}
              <div className="h-48 bg-gradient-to-br from-forest-green to-stone-gray 
                            flex items-center justify-center text-7xl group-hover:scale-110 
                            transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
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
                {service.title === 'Courma Infopoint' ? (
                  <a
                    href="/courma-infopoint.pdf"
                    download
                    className="mt-auto inline-block w-full text-center bg-forest-green text-white py-3 rounded-lg 
                                 hover:bg-forest-green/90 transition-colors duration-300 
                                 font-semibold"
                  >
                    Scarica il PDF informativo
                  </a>
                ) : (
                  <button className="mt-auto w-full bg-forest-green text-white py-3 rounded-lg 
                                   hover:bg-forest-green/90 transition-colors duration-300 
                                   font-semibold">
                    Scopri di più
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
