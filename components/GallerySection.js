'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const galleryImages = [
  { id: 1, alt: 'Monte Bianco al tramonto', caption: 'La maestosità del Monte Bianco' },
  { id: 2, alt: 'Centro storico Courmayeur', caption: 'Il cuore di Courmayeur' },
  { id: 3, alt: 'Escursione in montagna', caption: 'Sentieri panoramici' },
  { id: 4, alt: 'Aperitivo vista montagne', caption: 'Aperitivi con vista' },
  { id: 5, alt: 'Valle d\'Aosta inverno', caption: 'Paesaggi invernali' },
  { id: 6, alt: 'Rifugio alpino', caption: 'Rifugi autentici' },
]

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="gallery" className="py-20 px-4 bg-stone-gray/5" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-4">
            Courmayeur e Dintorni
          </h2>
          <p className="text-xl text-stone-gray max-w-2xl mx-auto">
            Scorci e panorami che renderanno indimenticabile la tua esperienza
          </p>
        </motion.div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg 
                       hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-forest-green via-stone-gray to-wood-beige">
                <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">
                  {image.alt}
                </div>
              </div>

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                className="absolute inset-0 bg-forest-green/80 flex items-center justify-center"
              >
                <div className="text-center text-white px-4">
                  <p className="text-xl font-semibold">{image.caption}</p>
                </div>
              </motion.div>

              {/* Border on hover */}
              <div className={`absolute inset-0 border-4 border-soft-gold transition-opacity duration-300 
                            ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
            </motion.div>
          ))}
        </div>

        {/* Optional: Parallax Background Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : {}}
          transition={{ duration: 1 }}
          className="absolute inset-0 -z-10"
        >
          <div className="w-full h-full bg-gradient-to-b from-transparent via-forest-green/5 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
