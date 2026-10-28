"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { waLink } from "@/lib/contacto";

const packages = [
  {
    name: "Por trabajo",
    badge: null,
    icon: "🛠️",
    tagline: "Cuando lo necesites",
    services: [
      "Presupuesto cerrado antes de empezar",
      "Reparaciones, pintura, jardín y pequeñas obras",
      "Fotos del trabajo terminado por WhatsApp",
      "Sin compromiso ni permanencia",
    ],
    highlight: false,
    href: "Hola Paulo! Quería pedir presupuesto para un trabajo.",
    cta: "💬 Pedir presupuesto",
  },
  {
    name: "Propietario Tranquilo",
    badge: "Plan mensual",
    icon: "🏆",
    tagline: "Tu vivienda siempre a punto",
    services: [
      "Revisión mensual de la vivienda",
      "Informe con fotos por WhatsApp",
      "Mantenimiento del jardín",
      "Pequeñas reparaciones incluidas",
      "Prioridad en urgencias",
    ],
    highlight: true,
    href: "Hola Paulo! Me interesa el plan Propietario Tranquilo.",
    cta: "💬 Consultar precio",
  },
  {
    name: "Inmobiliarias",
    badge: null,
    icon: "🏢",
    tagline: "Para carteras de varios inmuebles",
    services: [
      "Un solo contacto para todos tus inmuebles",
      "Urgencias antes del próximo check-in",
      "Una sola factura mensual",
      "Precio por inmueble según tu cartera",
    ],
    highlight: false,
    href: null,
    cta: "Ver más →",
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
            Planes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Elige cómo trabajamos juntos
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            El precio depende de la vivienda. Te hacemos un presupuesto
            personalizado sin compromiso.
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
                href={pkg.href ? waLink(pkg.href) : "/inmobiliarias"}
                {...(pkg.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`w-full py-3.5 rounded-2xl font-semibold text-center transition-all shadow-md hover:shadow-lg hover:scale-[1.02] ${
                  pkg.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-amber-400 hover:bg-amber-500 text-white"
                }`}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
