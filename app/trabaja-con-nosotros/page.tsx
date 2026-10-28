import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ColaboradorForm from "../components/ColaboradorForm";

export const metadata: Metadata = {
  title: "Trabaja con nosotros | ClaveHogar Torrevieja",
  description:
    "¿Eres electricista, fontanero, pintor, jardinero o albañil en Torrevieja? Regístrate en la red de colaboradores de ClaveHogar.",
};

const OFICIOS = ["⚡ Electricistas", "🚿 Fontaneros", "🎨 Pintores", "🌿 Jardineros", "🧱 Albañiles", "🧹 Limpieza"];

export default function TrabajaConNosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-gradient-to-br from-emerald-50 to-white py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              🛠️ Red de colaboradores
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
              ¿Eres profesional en Torrevieja
              <br />
              <span className="text-emerald-500">o alrededores?</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Estamos formando una red de colaboradores de confianza. Déjanos tus
              datos y te llamaremos cuando haya trabajo en tu zona.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {OFICIOS.map((o) => (
                <span key={o} className="bg-white border border-slate-200 text-slate-600 text-sm px-3 py-1.5 rounded-full">
                  {o}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white" id="formulario">
          <div className="max-w-2xl mx-auto">
            <div className="bg-amber-50 border border-amber-100 rounded-2xl px-5 py-4 text-sm text-amber-800 mb-8 text-center">
              <strong>No es una oferta de empleo:</strong> es un registro de
              colaboradores. Te contactamos cuando surge un trabajo de tu oficio.
            </div>
            <div className="bg-white border border-slate-100 shadow-xl rounded-3xl p-8">
              <ColaboradorForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
