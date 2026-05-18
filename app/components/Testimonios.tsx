"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    text: "Gilson y su equipo son increíbles. Mi apartamento siempre impecable y mis huéspedes encantados.",
    name: "Sarah M.",
    role: "Propietaria británica",
    avatar: "SM",
    color: "from-pink-400 to-rose-500",
    stars: 5,
  },
  {
    text: "Llevo 2 años con ClaveHogar. Nunca tuve un problema. Total tranquilidad desde el Reino Unido.",
    name: "James R.",
    role: "Inversor inmobiliario",
    avatar: "JR",
    color: "from-blue-400 to-indigo-500",
    stars: 5,
  },
  {
    text: "El servicio de llaves y limpieza es perfecto. Mis huéspedes siempre dejan 5 estrellas en Airbnb.",
    name: "Maria V.",
    role: "Propietaria local",
    avatar: "MV",
    color: "from-green-400 to-emerald-500",
    stars: 5,
  },
];

export default function Testimonios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-amber-500 uppercase tracking-widest mb-3">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Propietarios de toda Europa confían en ClaveHogar para gestionar sus
            inmuebles en Torrevieja.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-3xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/60"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} className="text-amber-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">
                    {t.name}
                  </p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
