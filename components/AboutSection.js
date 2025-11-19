'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="chi-sono" className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-forest-green to-wood-beige 
                          rounded-lg shadow-2xl">
              {/* Placeholder per foto personale */}
              <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">
                Foto profilo
              </div>
            </div>
            {/* Elemento decorativo nascosto su mobile per evitare overflow */}
            <div className="hidden md:block absolute md:-bottom-6 md:-right-6 w-32 h-32 bg-soft-gold/20 
                          rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
              Chi Sono
            </h2>
            <div className="space-y-4 text-stone-gray text-lg leading-relaxed">
              <p>
                Sono un professionista dell&apos;accoglienza con anni di esperienza nel 
                settore alberghiero e della ristorazione a Courmayeur, una delle 
                località alpine più prestigiose d&apos;Italia.
              </p>
              <p>
                La mia passione per le montagne e per l&apos;ospitalità mi ha portato 
                a creare servizi esclusivi per chi desidera vivere esperienze 
                autentiche e indimenticabili ai piedi del Monte Bianco.
              </p>
              <p>
                Conosco ogni angolo di questa meravigliosa valle e sono qui per
                rendere il vostro soggiorno unico, combinando comfort, eleganza
                e la genuina ospitalità.
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="h-1 w-20 bg-soft-gold" />
              <p className="text-forest-green font-semibold italic">
                &quot;La vita é un viaggio e chi viaggia vive due volte&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
