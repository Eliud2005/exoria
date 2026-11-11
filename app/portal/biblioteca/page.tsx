// app/portal/biblioteca/page.tsx
import {
  BookOpen,
  Sparkles,
  Download,
  FileText,
  Compass,
  ExternalLink,
} from "lucide-react";

export default function BibliotecaPage() {
  return (
    <>
      {/* FONDO ATMOSFÉRICO DE BIBLIOTECA CÓSMICA */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Luz ámbar superior (simulando calidez de estudio/archivo) */}
        <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px]" />

        {/* Nebulosa azul medianoche */}
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[160px]" />

        {/* Destello inferior violeta sutil */}
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-indigo-900/20 rounded-full blur-[140px]" />

        {/* Patrón de archivo estelar */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:40px_40px] opacity-15" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="relative z-10 flex-1 max-w-4xl mx-auto w-full px-6 py-16 flex flex-col gap-12">
        {/* ENCABEZADO DE LA PÁGINA */}
        <section className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] bg-gradient-to-r from-white via-amber-100 to-zinc-400 bg-clip-text text-transparent">
            Biblioteca
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
            Manuales de astronomía práctica, mapas celestes adaptados para el
            horizonte de Oaxaca y documentos sobre la medición del tiempo y el
            cosmos recopilados para nuestra comunidad.
          </p>
        </section>

        {/* REJILLA DE RECURSOS / ARCHIVOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* RECURSO 1 */}
          <div className="group p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/80 hover:border-amber-500/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/25 transition-colors w-fit">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800/80 text-amber-300">
                  Guía Básica
                </span>
              </div>
              <h2 className="text-base font-semibold text-white group-hover:text-amber-300 transition-colors">
                Manual de Orientación Celeste en Valles Centrales
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Aprende a identificar constelaciones principales, estrellas guía
                y puntos cardinales tomando como referencia el horizonte
                nocturno de Oaxaca.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
              <span className="text-[11px] text-zinc-500 font-mono">
                PDF • 4.2 MB
              </span>
              <button className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-amber-300 transition-colors">
                <span>Descargar</span>
                <Download className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

          {/* RECURSO 2 */}
          <div className="group p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/80 hover:border-amber-500/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/25 transition-colors w-fit">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800/80 text-amber-300">
                  Historia & Ciencia
                </span>
              </div>
              <h2 className="text-base font-semibold text-white group-hover:text-amber-300 transition-colors">
                Astronomía Prehispánica y Arquitectura Estelar
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Análisis detallado sobre la alineación astronómica del Edificio
                J en Monte Albán y la concepción cósmica de las culturas
                oaxaqueñas.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
              <span className="text-[11px] text-zinc-500 font-mono">
                Lectura • 15 min
              </span>
              <button className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-amber-300 transition-colors">
                <span>Leer artículo</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

          {/* RECURSO 3 */}
          <div className="group p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/80 hover:border-amber-500/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/25 transition-colors w-fit">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800/80 text-amber-300">
                  Técnico
                </span>
              </div>
              <h2 className="text-base font-semibold text-white group-hover:text-amber-300 transition-colors">
                Primeros Pasos con Binoculares y Telescopios de Aficionado
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Guía paso a paso para calibrar ópticas, realizar observaciones
                lunares sin fatiga visual y cuidar el equipo en campo abierto.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
              <span className="text-[11px] text-zinc-500 font-mono">
                PDF • 2.8 MB
              </span>
              <button className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-amber-300 transition-colors">
                <span>Descargar</span>
                <Download className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

          {/* RECURSO 4 */}
          <div className="group p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/80 hover:border-amber-500/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/25 transition-colors w-fit">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-800/80 text-amber-300">
                  Comunidad
                </span>
              </div>
              <h2 className="text-base font-semibold text-white group-hover:text-amber-300 transition-colors">
                Bitácoras y Reportes de Observadores Juveniles
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Formato oficial en blanco para registrar tus propias sesiones de
                observación, condiciones atmosféricas y notas astronómicas
                personales.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
              <span className="text-[11px] text-zinc-500 font-mono">
                PDF Imprimible
              </span>
              <button className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-amber-300 transition-colors">
                <span>Descargar formato</span>
                <Download className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}