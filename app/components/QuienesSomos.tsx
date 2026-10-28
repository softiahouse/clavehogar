"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: "📱",
    title: "Un solo contacto",
    desc: "Paulo coordina cada trabajo de principio a fin. No tienes que hablar con cinco personas distintas.",
  },
  {
    icon: "💎",
    title: "Transparencia",
    desc: "Presupuesto cerrado antes de empezar y fotos del trabajo terminado por WhatsApp.",
  },
  {
    icon: "⏰",
    title: "Puntualidad",
    desc: "Llegamos cuando decimos. Sabemos que en el alquiler vacacional cada día cuenta.",
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
                Una familia trabajando{" "}
                <span className="text-sky-500">por tu vivienda</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                Somos una familia que se instaló en Torrevieja en 2026. Paulo
                coordina cada trabajo y es tu único contacto; nuestro equipo se
                encarga de hacerlo bien.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Paulo lleva más de 30 años creando empresas de servicios, entre
                ellas una de mantenimiento para comunidades de vecinos. Sabemos
                que tu tranquilidad depende de que aparezcamos cuando decimos.
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
