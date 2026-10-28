"use client";

import { useState } from "react";

const OFICIOS = [
  "Electricista",
  "Fontanero",
  "Pintor",
  "Jardinero",
  "Albañil",
  "Limpieza",
  "Manitas",
  "Otro",
];

const ZONAS = [
  "Torrevieja",
  "Orihuela Costa",
  "Guardamar del Segura",
  "Rojales / Ciudad Quesada",
  "Pilar de la Horadada",
  "Otra zona",
];

const input =
  "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 transition bg-white";
const label = "block text-sm font-medium text-slate-700 mb-1.5";

export default function ColaboradorForm() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    oficio: "",
    zona: "",
    autonomo: "",
    experiencia: "",
    disponibilidad: "",
    enlace: "",
    mensaje: "",
    website: "",
  });
  const [consentimiento, setConsentimiento] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentimiento) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/colaborador", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, consentimiento }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
          ✅
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">¡Gracias por registrarte!</h3>
        <p className="text-slate-500 max-w-sm mx-auto">
          Guardamos tus datos y te llamaremos cuando haya trabajo de tu oficio en tu zona.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      {/* Campo-armadilha anti-spam (invisível para pessoas) */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handle}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={label}>Nombre *</label>
          <input name="nombre" value={form.nombre} onChange={handle} required placeholder="Tu nombre" className={input} />
        </div>
        <div>
          <label className={label}>WhatsApp *</label>
          <input name="telefono" value={form.telefono} onChange={handle} required type="tel" placeholder="+34 600 000 000" className={input} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={label}>Oficio *</label>
          <select name="oficio" value={form.oficio} onChange={handle} required className={input}>
            <option value="">Selecciona...</option>
            {OFICIOS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label}>Zona donde trabajas *</label>
          <select name="zona" value={form.zona} onChange={handle} required className={input}>
            <option value="">Selecciona...</option>
            {ZONAS.map((z) => (
              <option key={z} value={z}>{z}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={label}>¿Eres autónomo o tienes empresa?</label>
          <select name="autonomo" value={form.autonomo} onChange={handle} className={input}>
            <option value="">Selecciona...</option>
            <option value="Autónomo">Sí, autónomo</option>
            <option value="Empresa">Sí, tengo empresa</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label className={label}>Años de experiencia</label>
          <select name="experiencia" value={form.experiencia} onChange={handle} className={input}>
            <option value="">Selecciona...</option>
            <option value="Menos de 2 años">Menos de 2 años</option>
            <option value="2 a 5 años">2 a 5 años</option>
            <option value="Más de 5 años">Más de 5 años</option>
          </select>
        </div>
      </div>

      <div>
        <label className={label}>Disponibilidad</label>
        <input name="disponibilidad" value={form.disponibilidad} onChange={handle} placeholder="Ej: mañanas, fines de semana, urgencias..." className={input} />
      </div>

      <div>
        <label className={label}>Fotos de tus trabajos (opcional)</label>
        <input name="enlace" value={form.enlace} onChange={handle} placeholder="Enlace a Instagram, Google Fotos o web" className={input} />
        <p className="text-xs text-slate-400 mt-1">Si no tienes enlace, te pediremos fotos por WhatsApp.</p>
      </div>

      <div>
        <label className={label}>Algo más que quieras contarnos (opcional)</label>
        <textarea name="mensaje" value={form.mensaje} onChange={handle} rows={3} className={`${input} resize-none`} />
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-600 cursor-pointer">
        <input
          type="checkbox"
          checked={consentimiento}
          onChange={(e) => setConsentimiento(e.target.checked)}
          required
          className="mt-1 w-4 h-4 accent-emerald-500"
        />
        <span>
          Acepto que ClaveHogar guarde mis datos para contactarme sobre trabajos.
          No los compartimos con nadie y puedes pedir que los borremos cuando quieras
          escribiéndonos por WhatsApp. *
        </span>
      </label>

      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Error al enviar. Inténtalo de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading" || !consentimiento}
        className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg text-sm"
      >
        {status === "loading" ? "Enviando..." : "Registrarme como colaborador →"}
      </button>
    </form>
  );
}
