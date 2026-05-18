"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: "🤝",
    title: "Confianza",
    desc: "Trabajamos con propietarios de toda Europa. Nuestra reputación es nuestra garantía.",
  },
  {
    icon: "💎",
    title: "Transparencia",
    desc: "Precios claros, sin sorpresas. Fotos del trabajo enviadas siempre por WhatsApp.",
  },
  {
    icon: "⏰",
    title: "Puntualidad",
    desc: "Llegamos cuando decimos. Tus huéspedes y tú podéis contar con nosotros.",
  },
];

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <FadeIn>
              <span className="inline-block text-sm font-semibold text-amber-500 uppercase tracking-widest mb-3">
                Quiénes somos
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                Nacidos en Torrevieja,{" "}
                <span className="text-sky-500">para Torrevieja</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                Somos una empresa local en Torrevieja especializada en servicios
                del hogar para propietarios de apartamentos vacacionales,
                residentes y expatriados.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Nacimos de la unión entre experiencia en gestión y conocimiento
                profundo de la comunidad local. Entendemos lo que significa
                tener una propiedad lejos de casa y te ayudamos a gestionarla
                con total tranquilidad.
              </p>
            </FadeIn>
          </div>

          {/* Values */}
          <div className="grid gap-5">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.15}>
                <div className="glass rounded-2xl p-6 flex gap-5 items-start shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg mb-1">
                      {v.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
