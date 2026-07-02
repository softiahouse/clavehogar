"use client";

import { useState } from "react";

const SERVICIOS = [
  "Gestión Airbnb / Vacacional",
  "Agencia Inmobiliaria",
  "Property Management",
  "Administración de Fincas",
  "Otro",
];

export default function PartnersForm() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    servicio: "",
    propiedades: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/parceiro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">¡Solicitud recibida!</h3>
        <p className="text-slate-500 mb-6">Nos pondremos en contacto contigo en menos de 24 horas.</p>
        <a
          href="https://wa.me/34693976311?text=Hola!%20Acabo%20de%20enviar%20una%20solicitud%20de%20partnership%20en%20vuestra%20web."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-all"
        >
          💬 Hablar por WhatsApp ahora
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Nombre *</label>
          <input
            name="nombre"
            value={form.nombre}
            onChange={handle}
            required
            placeholder="Tu nombre"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Empresa / Agencia *</label>
          <input
            name="empresa"
            value={form.empresa}
            onChange={handle}
            required
            placeholder="Nombre de tu empresa"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Teléfono *</label>
          <input
            name="telefono"
            value={form.telefono}
            onChange={handle}
            required
            type="tel"
            placeholder="+34 600 000 000"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
          <input
            name="email"
            value={form.email}
            onChange={handle}
            required
            type="email"
            placeholder="contacto@empresa.com"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Tipo de actividad *</label>
          <select
            name="servicio"
            value={form.servicio}
            onChange={handle}
            required
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 transition bg-white"
          >
            <option value="">Selecciona...</option>
            {SERVICIOS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Propiedades gestionadas</label>
          <input
            name="propiedades"
            value={form.propiedades}
            onChange={handle}
            placeholder="Ej: 15 apartamentos en Torrevieja"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">¿Qué necesitas? (opcional)</label>
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handle}
          rows={3}
          placeholder="Cuéntanos qué servicios necesitarías o cómo podemos colaborar..."
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 transition resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm text-center">Error al enviar. Inténtalo de nuevo o escríbenos por WhatsApp.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-amber-400 hover:bg-amber-500 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg text-sm"
      >
        {status === "loading" ? "Enviando..." : "Solicitar Partnership →"}
      </button>
    </form>
  );
}
