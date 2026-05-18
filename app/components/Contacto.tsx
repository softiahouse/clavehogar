"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const contacts = [
  {
    name: "Gilson",
    phone: "+34 693 976 311",
    wa: "https://wa.me/34693976311",
    emoji: "👨‍💼",
    color: "from-sky-400 to-blue-500",
    message: "Hola Gilson! Me interesa conocer más sobre vuestros servicios.",
  },
  {
    name: "Paul",
    phone: "+34 612 266 321",
    wa: "https://wa.me/34612266321",
    emoji: "👨‍🔧",
    color: "from-amber-400 to-orange-500",
    message: "Hola Paul! Me interesa conocer más sobre vuestros servicios.",
  },
];

export default function Contacto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-amber-500 uppercase tracking-widest mb-3">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            ¿Hablamos?
          </h2>
          <p className="text-slate-600 text-lg">
            Estamos en{" "}
            <strong className="text-slate-700">Torrevieja</strong> y respondemos
            rápido
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {contacts.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              <a
                href={`${c.wa}?text=${encodeURIComponent(c.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/60 group"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-3xl mb-5 shadow-md group-hover:scale-110 transition-transform`}
                >
                  {c.emoji}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {c.name}
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">💬</span>
                  <span className="text-lg font-semibold text-slate-700">
                    {c.phone}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold text-sm group-hover:bg-green-500 transition-colors shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.527 5.845L.057 23.484l5.797-1.519A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 01-5.001-1.373l-.358-.213-3.442.902.918-3.356-.234-.375A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                  </svg>
                  Escribir por WhatsApp
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="glass rounded-2xl px-8 py-5 inline-block shadow-md">
            <p className="text-slate-600">
              <span className="text-amber-500 font-semibold">⏱ Respondemos</span>{" "}
              en menos de 1 hora. También puedes escribirnos y te llamamos nosotros.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
