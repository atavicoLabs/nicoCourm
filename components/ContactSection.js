'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Qui andrà la logica per inviare il form
    console.log('Form submitted:', formData)
    alert('Grazie per il tuo messaggio! Ti risponderò al più presto.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const whatsappNumber = '393401234567' // Placeholder
  const whatsappMessage = encodeURIComponent('Ciao! Vorrei avere informazioni sui tuoi servizi a Courmayeur.')

  return (
    <section id="contatti" className="py-20 px-4 bg-gradient-to-b from-snow-white to-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-4">
            Contattami
          </h2>
          <p className="text-xl text-stone-gray max-w-2xl mx-auto">
            Hai domande o vuoi prenotare un servizio? Scrivimi, sarò felice di aiutarti
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-forest-green font-semibold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-stone-gray/30 rounded-lg 
                           focus:border-soft-gold focus:outline-none transition-colors"
                  placeholder="Il tuo nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-forest-green font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-stone-gray/30 rounded-lg 
                           focus:border-soft-gold focus:outline-none transition-colors"
                  placeholder="tua@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-forest-green font-semibold mb-2">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-stone-gray/30 rounded-lg 
                           focus:border-soft-gold focus:outline-none transition-colors resize-none"
                  placeholder="Come posso aiutarti?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-forest-green text-white py-4 rounded-lg 
                         hover:bg-forest-green/90 transition-all duration-300 
                         font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Invia Messaggio
              </button>
            </form>
          </motion.div>

          {/* Contact Info & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-forest-green to-forest-green/80 
                          text-white p-8 rounded-xl shadow-xl">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3">Contattami su WhatsApp</h3>
              <p className="mb-6 text-white/90">
                Per una risposta rapida, scrivimi direttamente su WhatsApp
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-forest-green px-6 py-3 rounded-lg 
                         font-semibold hover:bg-soft-gold hover:text-white 
                         transition-all duration-300 shadow-lg"
              >
                Apri WhatsApp
              </a>
            </div>

            {/* Contact Details */}
            <div className="bg-white p-8 rounded-xl shadow-lg space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📧</span>
                <div>
                  <h4 className="font-semibold text-forest-green mb-1">Email</h4>
                  <a href="mailto:info@courmayeur-services.com" 
                     className="text-stone-gray hover:text-soft-gold transition-colors">
                    info@courmayeur-services.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-2xl">📱</span>
                <div>
                  <h4 className="font-semibold text-forest-green mb-1">Telefono</h4>
                  <a href="tel:+393401234567" 
                     className="text-stone-gray hover:text-soft-gold transition-colors">
                    +39 340 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h4 className="font-semibold text-forest-green mb-1">Località</h4>
                  <p className="text-stone-gray">
                    Courmayeur, Valle d'Aosta
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-forest-green hover:text-soft-gold transition-colors text-3xl">
                📘
              </a>
              <a href="#" className="text-forest-green hover:text-soft-gold transition-colors text-3xl">
                📷
              </a>
              <a href="#" className="text-forest-green hover:text-soft-gold transition-colors text-3xl">
                🔗
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
