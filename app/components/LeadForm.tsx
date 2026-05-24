"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const servicios = [
  "Limpieza de cambio de huésped",
  "Gestión integral de Airbnb",
  "Lavandería y planchado",
  "Manitas del hogar (Handyman)",
  "Portes y mudanzas pequeñas",
  "Recepción y entrega de llaves",
  "Paquete Propietario Tranquilo",
  "Otro / Consulta general",
];

type Estado = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado("loading");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setEstado("success");
        setForm({ nome: "", email: "", telefone: "", servico: "", mensagem: "" });
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
  };

  return (
    <section id="formulario" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-amber-500 uppercase tracking-widest mb-3">
            Solicitud gratuita
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Pide tu presupuesto
          </h2>
          <p className="text-slate-600 text-lg">
            Rellena el formulario y te respondemos en{" "}
            <strong className="text-amber-500">menos de 1 hora</strong> por
            WhatsApp o email.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-8 shadow-xl border border-white/60"
        >
          <AnimatePresence mode="wait">
            {estado === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  ¡Solicitud enviada!
                </h3>
                <p className="text-slate-600 mb-6">
                  Hemos recibido tu mensaje. Te contactaremos en menos de 1 hora
                  por WhatsApp o email.
                </p>
                <button
                  onClick={() => setEstado("idle")}
                  className="text-sm text-amber-500 hover:text-amber-600 font-medium underline"
                >
                  Enviar otra solicitud
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Nome */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nombre completo <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-slate-800 placeholder-slate-400 transition-all"
                  />
                </div>

                {/* Email + Telefone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-slate-800 placeholder-slate-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Teléfono / WhatsApp <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={form.telefone}
                      onChange={handleChange}
                      required
                      placeholder="+34 600 000 000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-slate-800 placeholder-slate-400 transition-all"
                    />
                  </div>
                </div>

                {/* Serviço */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    ¿Qué servicio necesitas? <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="servico"
                    value={form.servico}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-slate-800 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Selecciona un servicio...</option>
                    {servicios.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Mensaje{" "}
                    <span className="text-slate-400 font-normal">(opcional)</span>
                  </label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Cuéntanos más sobre tu propiedad o necesidad..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-slate-800 placeholder-slate-400 transition-all resize-none"
                  />
                </div>

                {/* Error */}
                {estado === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm">
                    ❌ Error al enviar. Por favor, contáctanos directamente por
                    WhatsApp.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={estado === "loading"}
                  className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 text-base"
                >
                  {estado === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    "📨 Solicitar presupuesto gratis"
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  🔒 Tus datos son confidenciales. Solo los usamos para
                  responderte.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Alternative WhatsApp */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-6"
        >
          <p className="text-slate-500 text-sm mb-3">
            ¿Prefieres hablar directamente?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/34693976311"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-green-500 transition-colors shadow-md"
            >
              💬 Gilson — +34 693 976 311
            </a>
            <a
              href="https://wa.me/34612266321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-green-500 transition-colors shadow-md"
            >
              💬 Paul — +34 612 266 321
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
