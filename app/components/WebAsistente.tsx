export default function WebAsistente() {
  return (
    <section id="web" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-sky-50 p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl flex-shrink-0">
            🤖
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              ¿Pierdes mensajes de huéspedes o clientes?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              También creamos webs y asistentes de WhatsApp con inteligencia
              artificial que responden las 24 horas.
            </p>
          </div>
          <a
            href="https://softiahouse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white font-semibold text-sm shadow-md transition-all whitespace-nowrap"
          >
            Más información →
          </a>
        </div>
      </div>
    </section>
  );
}
