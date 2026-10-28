import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnersForm from "../components/PartnersForm";
import WhatsAppFAB from "../components/WhatsAppFAB";
import { waLink } from "@/lib/contacto";

export const metadata: Metadata = {
  title: "Mantenimiento para inmobiliarias y gestores | ClaveHogar Torrevieja",
  description:
    "Tu equipo de mantenimiento en Torrevieja sin contratar a nadie: urgencias antes del check-in, revisiones con fotos y una sola factura mensual.",
};

const BENEFICIOS = [
  {
    icon: "📱",
    title: "Un solo contacto",
    desc: "Para todo el mantenimiento de tus inmuebles. Nos escribes a nosotros y nosotros coordinamos al profesional.",
  },
  {
    icon: "⚡",
    title: "Urgencias antes del check-in",
    desc: "Grifo roto, persiana atascada, luz que no funciona: lo resolvemos antes de que llegue el siguiente huésped.",
  },
  {
    icon: "🔍",
    title: "Revisión periódica",
    desc: "Visitamos cada vivienda entre temporadas y te enviamos un informe con fotos.",
  },
  {
    icon: "🧾",
    title: "Una sola factura mensual",
    desc: "Todos los trabajos del mes en una factura, con el detalle de cada inmueble.",
  },
];

const SERVICIOS = [
  "Pequeñas reparaciones y manitas",
  "Jardinería y mantenimiento de exteriores",
  "Pintura entre temporadas",
  "Albañilería y pequeñas obras",
  "Electricidad y fontanería con colaboradores",
  "Revisión con informe y fotos",
];

const PASOS = [
  { n: "1", title: "Visita", desc: "Pasamos por tu oficina y vemos qué necesitas y en qué zonas." },
  { n: "2", title: "Propuesta", desc: "Te damos un precio por inmueble o por trabajo, por escrito." },
  { n: "3", title: "Prueba", desc: "Empezamos con unos pocos inmuebles. Si te convence, ampliamos." },
];

export default function InmobiliariasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-50 to-white py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              🏢 Para inmobiliarias y gestores de alquiler vacacional
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
              Tu equipo de mantenimiento,
              <br />
              <span className="text-amber-400">sin contratar a nadie.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto mb-8">
              Tú te ocupas de alquilar. Nosotros mantenemos tus viviendas a
              punto en Torrevieja y alrededores, con fotos de cada trabajo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#formulario"
                className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                Pide una visita sin compromiso
              </a>
              <a
                href={waLink("Hola Paulo! Gestiono inmuebles en Torrevieja y me interesa vuestro servicio de mantenimiento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-slate-800 font-semibold rounded-2xl shadow-md border border-slate-200 hover:shadow-lg transition-all"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
              Lo que ganas trabajando con ClaveHogar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BENEFICIOS.map((b) => (
                <div key={b.title} className="bg-slate-50 rounded-2xl p-6 text-center hover:shadow-md transition">
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="font-bold text-slate-800 mb-1">{b.title}</h3>
                  <p className="text-sm text-slate-500">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios + plan */}
        <section className="py-16 px-4 bg-sky-50">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Qué hacemos</h2>
              <ul className="space-y-3">
                {SERVICIOS.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold bg-sky-100 text-sky-600">
                      ✓
                    </span>
                    <span className="text-slate-700">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-white">
              <div className="text-sm font-semibold text-amber-500 uppercase tracking-widest mb-2">
                Plan mensual por inmueble
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Adaptado a tu cartera</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Revisión periódica, pequeñas reparaciones incluidas hasta un
                límite y prioridad en urgencias. El precio depende del número y
                tipo de inmuebles: te lo damos por escrito tras la visita.
              </p>
              <a
                href="#formulario"
                className="block w-full py-3.5 rounded-2xl font-semibold text-center bg-amber-400 hover:bg-amber-500 text-white transition-all shadow-md"
              >
                Pedir propuesta
              </a>
            </div>
          </div>
        </section>

        {/* Cómo empezamos */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Cómo empezamos</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {PASOS.map((p) => (
                <div key={p.n} className="text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-amber-400 text-amber-500 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {p.n}
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1">{p.title}</h3>
                  <p className="text-sm text-slate-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulario */}
        <section className="py-16 px-4 bg-slate-50" id="formulario">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Pide una visita sin compromiso</h2>
              <p className="text-slate-500">Déjanos tus datos y Paulo te contacta para acordar el día.</p>
            </div>
            <div className="bg-white border border-slate-100 shadow-xl rounded-3xl p-8">
              <PartnersForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
