"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80"
          alt="Torrevieja mar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/90 via-blue-100/80 to-white/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="glass rounded-3xl px-6 py-4 flex items-center gap-3 shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🗝️</span>
            </div>
            <span className="text-2xl font-bold text-navy-900 tracking-tight">
              Clave<span className="text-amber-400">Hogar</span>
            </span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 leading-tight mb-6"
        >
          Tu hogar en{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
            buenas manos.
          </span>
          <br />
          <span className="text-amber-400">Siempre.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Servicios integrales para propietarios y viajeros en{" "}
          <strong className="text-slate-700">Torrevieja</strong>. Limpieza,
          gestión de Airbnb, lavandería, handyman y mucho más.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#servicios"
            className="px-8 py-4 bg-white/80 backdrop-blur-md text-slate-800 font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:bg-white transition-all border border-white/60 hover:scale-105"
          >
            Ver Servicios
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:from-amber-500 hover:to-amber-600"
          >
            Contactar Ahora
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: "⭐", text: "5 estrellas en Airbnb" },
            { icon: "⚡", text: "Respuesta en menos de 1h" },
            { icon: "🏠", text: "Equipo local de confianza" },
          ].map((badge) => (
            <div
              key={badge.text}
              className="glass rounded-2xl px-5 py-3 flex items-center gap-2 shadow-md"
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="text-sm font-medium text-slate-700">
                {badge.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-8 h-12 rounded-full border-2 border-slate-400/50 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-slate-400/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
