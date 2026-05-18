"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    icon: "📸",
    title: "Fotos del antes/después",
    desc: "Cada limpieza documentada con fotos enviadas directamente por WhatsApp. Siempre sabes en qué estado está tu propiedad.",
  },
  {
    icon: "⚡",
    title: "Respuesta en menos de 1h",
    desc: "¿Urgencia de último momento? Respondemos rápido. Sabemos que los plazos en el alquiler vacacional son críticos.",
  },
  {
    icon: "🏡",
    title: "Equipo local y de confianza",
    desc: "Somos de Torrevieja. Conocemos la zona, los proveedores y la comunidad. No somos una plataforma, somos vecinos.",
  },
  {
    icon: "💰",
    title: "Precio fijo sin sorpresas",
    desc: "Presupuesto acordado por adelantado. Sin costes ocultos ni extras inesperados. Tu tranquilidad también es económica.",
  },
];

export default function PorQueElegirnos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-gradient-to-br from-sky-500 to-blue-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-amber-300 uppercase tracking-widest mb-3">
            ¿Por qué nosotros?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Por qué elegirnos
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Más que un servicio, somos tu socio de confianza en Torrevieja.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-dark rounded-3xl p-7 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-5">{r.icon}</div>
              <h3 className="font-bold text-white text-base mb-3 leading-tight">
                {r.title}
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
