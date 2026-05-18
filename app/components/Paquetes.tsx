"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const packages = [
  {
    name: "Básico",
    badge: null,
    icon: "✨",
    tagline: "Para empezar",
    services: [
      "Limpieza de cambio de huésped",
      "Servicio de lavandería",
      "Fotos enviadas por WhatsApp",
      "Coordinación de entrada/salida",
    ],
    highlight: false,
  },
  {
    name: "Propietario Tranquilo",
    badge: "⭐ Más Popular",
    icon: "🏆",
    tagline: "Gestión completa sin preocupaciones",
    services: [
      "Gestión completa de Airbnb",
      "Limpieza de cambio de huésped",
      "Servicio de lavandería",
      "Check-in y check-out presencial",
      "Soporte 7 días a la semana",
      "Fotos y reportes por WhatsApp",
    ],
    highlight: true,
  },
  {
    name: "Hogar Plus",
    badge: null,
    icon: "💎",
    tagline: "Cobertura total mensual",
    services: [
      "Todo del plan Propietario Tranquilo",
      "Servicio de Manitas incluido",
      "Pequeñas reparaciones sin coste extra",
      "Prioridad en urgencias",
      "Revisión mensual del inmueble",
    ],
    highlight: false,
  },
];

export default function Paquetes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="paquetes" className="py-24 bg-sky-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-amber-500 uppercase tracking-widest mb-3">
            Paquetes y Precios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Elige tu plan ideal
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Precios adaptados a cada propietario. Contáctanos y te hacemos un
            presupuesto personalizado sin compromiso.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-3xl ${
                pkg.highlight
                  ? "bg-gradient-to-br from-sky-500 to-blue-600 shadow-2xl scale-105 text-white"
                  : "glass shadow-lg"
              } p-8 flex flex-col`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-400 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="text-4xl mb-4">{pkg.icon}</div>
              <h3
                className={`text-xl font-bold mb-1 ${
                  pkg.highlight ? "text-white" : "text-slate-800"
                }`}
              >
                {pkg.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  pkg.highlight ? "text-blue-100" : "text-slate-500"
                }`}
              >
                {pkg.tagline}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.services.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                        pkg.highlight
                          ? "bg-white/20 text-white"
                          : "bg-sky-100 text-sky-600"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={`text-sm ${
                        pkg.highlight ? "text-blue-50" : "text-slate-600"
                      }`}
                    >
                      {s}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/34693976311?text=Hola!%20Me%20interesa%20el%20paquete"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-2xl font-semibold text-center transition-all shadow-md hover:shadow-lg hover:scale-[1.02] ${
                  pkg.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-amber-400 hover:bg-amber-500 text-white"
                }`}
              >
                💬 Consultar precio
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
