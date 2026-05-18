"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "🏠",
    title: "Limpieza de Cambio de Huésped",
    desc: "Limpieza profesional antes y después de cada estancia. Fotos del resultado enviadas por WhatsApp.",
    color: "from-blue-50 to-sky-100",
  },
  {
    icon: "📋",
    title: "Gestión Integral de Alquiler Vacacional",
    desc: "Gestionamos tu Airbnb de principio a fin: anuncios, huéspedes, precios y coordinación. Tú solo recibes los ingresos.",
    color: "from-purple-50 to-indigo-100",
  },
  {
    icon: "👕",
    title: "Servicio de Lavandería y Planchado",
    desc: "Recogida y entrega de ropa de cama y toallas. Siempre impecable para cada nuevo huésped.",
    color: "from-green-50 to-emerald-100",
  },
  {
    icon: "🔧",
    title: "Manitas del Hogar (Handyman)",
    desc: "Pequeñas reparaciones, montaje de muebles, fontanería básica, electricidad menor. Tu marido de alquiler de confianza.",
    color: "from-orange-50 to-amber-100",
  },
  {
    icon: "📦",
    title: "Portes y Mudanzas Pequeñas",
    desc: "Transporte de muebles, electrodomésticos y cajas. Rápido, cuidadoso y a buen precio en toda la comarca.",
    color: "from-rose-50 to-pink-100",
  },
  {
    icon: "🗝️",
    title: "Recepción y Entrega de Llaves",
    desc: "Check-in y check-out presencial con tus huéspedes. Atención personalizada aunque tú estés lejos.",
    color: "from-yellow-50 to-amber-100",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
      className="group"
    >
      <div className="glass rounded-3xl p-7 h-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/60">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-5 shadow-sm group-hover:scale-110 transition-transform`}
        >
          {service.icon}
        </div>
        <h3 className="font-bold text-slate-800 text-lg mb-3 leading-tight">
          {service.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
        <div className="mt-5">
          <a
            href="https://wa.me/34693976311"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-amber-500 hover:text-amber-600 flex items-center gap-1 group/link"
          >
            Consultar precio
            <svg
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Servicios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-amber-500 uppercase tracking-widest mb-3">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Todo lo que necesita tu propiedad
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Un equipo completo a tu disposición en Torrevieja. Desde la limpieza
            hasta la gestión total de tu Airbnb.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
