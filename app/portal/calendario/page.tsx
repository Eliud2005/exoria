// app/portal/calendario/page.tsx
import {
  Sparkles,
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  Bell,
} from "lucide-react";

export default function CalendarioPage() {
  return (
    <>
      {/* FONDO ATMOSFÉRICO CÓSMICO */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:40px_40px] opacity-15" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="relative z-10 flex-1 max-w-4xl mx-auto w-full px-6 py-16 flex flex-col gap-12">
        {/* ENCABEZADO DE LA PÁGINA */}
        <section className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] bg-gradient-to-r from-white via-amber-100 to-zinc-400 bg-clip-text text-transparent">
            Calendario de Eventos
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
            Consulta las fechas de nuestras noches de observación astronómica,
            talleres virtuales de introducción al cosmos y charlas magistrales
            abiertas para jóvenes en Oaxaca.
          </p>
        </section>

        {/* LISTA DE EVENTOS */}
        <div className="flex flex-col gap-6">
          {/* EVENTO 1 */}
          <div className="group p-6 sm:p-7 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/80 hover:border-amber-500/40 hover:bg-zinc-900/85 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex flex-col items-center justify-center min-w-[70px]">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-300">
                  OCT
                </span>
                <span className="text-xl font-bold text-white">18</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-800/80 text-amber-300 w-fit">
                  Observación Presencial
                </span>
                <h2 className="text-base sm:text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
                  Jornada de Exploración Lunar y Cúmulos Estelares
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> 19:30 -
                    22:00 hrs
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" /> Valles
                    Centrales, Oaxaca
                  </span>
                </div>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-xs font-medium text-zinc-200 transition-all w-full sm:w-auto justify-center">
              <Bell className="w-3.5 h-3.5" />
              <span>Apartar lugar</span>
            </button>
          </div>

          {/* EVENTO 2 */}
          <div className="group p-6 sm:p-7 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/80 hover:border-amber-500/40 hover:bg-zinc-900/85 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex flex-col items-center justify-center min-w-[70px]">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-300">
                  OCT
                </span>
                <span className="text-xl font-bold text-white">25</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-800/80 text-indigo-300 w-fit">
                  Taller en Línea
                </span>
                <h2 className="text-base sm:text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  Introducción a la Astrofotografía con Celular y Adaptadores
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" /> 18:00 hrs
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />{" "}
                    Transmisión Virtual
                  </span>
                </div>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-indigo-500 hover:text-white text-xs font-medium text-zinc-200 transition-all w-full sm:w-auto justify-center">
              <Bell className="w-3.5 h-3.5" />
              <span>Registrarse</span>
            </button>
          </div>

          {/* EVENTO 3 */}
          <div className="group p-6 sm:p-7 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/80 hover:border-amber-500/40 hover:bg-zinc-900/85 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex flex-col items-center justify-center min-w-[70px]">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-300">
                  NOV
                </span>
                <span className="text-xl font-bold text-white">08</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-800/80 text-amber-300 w-fit">
                  Conferencia Magistral
                </span>
                <h2 className="text-base sm:text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
                  Astronomía Prehispánica: El Cielo de los Antiguos Zapotecos
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> 17:00 hrs
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" /> Oaxaca
                    (Híbrido)
                  </span>
                </div>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-xs font-medium text-zinc-200 transition-all w-full sm:w-auto justify-center">
              <Bell className="w-3.5 h-3.5" />
              <span>Apartar lugar</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}