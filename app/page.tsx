// app/page.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════ */}
      {/* FONDO ATMOSFÉRICO (SOBRE EL GRIS DEL LAYOUT)           */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Nebulosa índigo superior */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-indigo-800/25 rounded-full blur-[180px]" />

        {/* Resplandor ámbar inferior derecho */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-800/10 rounded-full blur-[160px]" />

        {/* Nebulosa violeta inferior izquierdo */}
        <div className="absolute -bottom-40 -left-20 w-[700px] h-[700px] bg-purple-900/15 rounded-full blur-[200px]" />

        {/* Grid de estrellas muy tenue */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:50px_50px] opacity-[0.08]" />

        {/* Degradado vertical hacia el mismo gris del layout */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0c]/60" />
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* CONTENIDO PRINCIPAL                                    */}
      {/* ═══════════════════════════════════════════════════════ */}
      <main className="relative z-10 flex-1 max-w-4xl mx-auto w-full px-6 py-20 flex flex-col gap-24">
        {/* 1. HERO */}
        <section className="flex flex-col items-start gap-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Astronomía en Oaxaca
          </h1>

          <p className="text-base sm:text-lg text-zinc-200 max-w-2xl font-normal leading-relaxed">
            Bienvenido a Exoria, la comunidad de astronomía en Oaxaca. Explora
            nuestro calendario de eventos, galería de imágenes, biblioteca de
            recursos y encuentra respuestas a tus preguntas frecuentes sobre la
            participación en nuestra comunidad.
          </p>

          <div className="pt-2 w-full sm:w-auto">
            <Link
              href="/portal/mision"
              className="group inline-flex items-center justify-between sm:justify-center gap-4 w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-medium text-sm transition-all shadow-xl active:scale-[0.98]"
            >
              <span>Comienza tu misión de ingreso</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>

        {/* 2. MOMENTOS DESTACADOS */}
        <section className="flex flex-col gap-8 pt-10 border-t border-zinc-800/80">
          <div className="flex flex-col gap-1">
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
              Nuestro camino
            </h2>
            <p className="text-2xl font-semibold tracking-tight text-white">
              Momentos destacados
            </p>
            <p className="text-sm text-zinc-400 max-w-xl leading-relaxed mt-2">
              Exoria es un proyecto joven. Estos son algunos de los hitos que ya
              hemos alcanzado junto a nuestra primera generación de
              observadores.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop"
              alt="Observación astronómica comunitaria"
              className="w-full h-64 sm:h-80 object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 w-fit">
                Primera Jornada · Oaxaca 2025
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Nuestra primera noche de observación comunitaria
              </h3>
              <p className="text-xs sm:text-sm text-zinc-200 max-w-lg leading-relaxed">
                Con telescopios prestados y mucha curiosidad, dimos el primer
                paso como comunidad juvenil de astronomía en los Valles
                Centrales.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 shadow-xl">
              <span className="text-xs font-mono font-semibold text-amber-400">
                Reconocimiento
              </span>
              <h3 className="font-semibold text-sm text-white">
                Mención en la Feria de Ciencias Estatal
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Uno de nuestros jóvenes investigadores presentó su trabajo sobre
                arqueoastronomía zapoteca en la feria estatal de Oaxaca.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 shadow-xl">
              <span className="text-xs font-mono font-semibold text-amber-400">
                Comunidad
              </span>
              <h3 className="font-semibold text-sm text-white">
                Primeros talleres introductorios
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Más de 5 talleres virtuales y 2 jornadas presenciales
                completadas con la primera generación de observadores juveniles.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 shadow-xl">
              <span className="text-xs font-mono font-semibold text-amber-400">
                Colaboración
              </span>
              <h3 className="font-semibold text-sm text-white">
                Red de jóvenes divulgadores
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Alianza inicial con estudiantes y egresados de escuelas locales
                para impulsar la ciencia en la región.
              </p>
            </div>
          </div>
        </section>

        {/* 3. METODOLOGÍA */}
        <section className="flex flex-col gap-8 pt-10 border-t border-zinc-800/80">
          <div className="flex flex-col gap-1">
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
              Metodología
            </h2>
            <p className="text-2xl font-semibold tracking-tight text-white">
              Ruta de acceso a la comunidad
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 shadow-xl">
              <span className="text-xs font-mono font-semibold text-emerald-400">
                01
              </span>
              <h3 className="font-semibold text-sm text-white">
                Misión de ingreso
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Responde el cuestionario de nivel técnico y comparte tu
                motivación por la astronomía.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 shadow-xl">
              <span className="text-xs font-mono font-semibold text-emerald-400">
                02
              </span>
              <h3 className="font-semibold text-sm text-white">
                Asignación de rango
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Obtén tu categoría inicial: Observador, Explorador o
                Investigador según tu puntaje.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 shadow-xl">
              <span className="text-xs font-mono font-semibold text-emerald-400">
                03
              </span>
              <h3 className="font-semibold text-sm text-white">
                Comunidad viva
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Accede a clases en directo, recursos curados y espacios de
                diálogo externos.
              </p>
            </div>
          </div>
        </section>

        {/* 4. PREGUNTAS FRECUENTES */}
        <section className="flex flex-col gap-8 pt-10 border-t border-zinc-800/80">
          <div className="flex flex-col gap-1">
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
              Dudas comunes
            </h2>
            <p className="text-2xl font-semibold tracking-tight text-white">
              Preguntas frecuentes
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="p-5 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80">
              <h3 className="font-semibold text-sm text-white mb-1.5">
                ¿Quiénes pueden unirse a la comunidad?
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Jóvenes de{" "}
                <strong className="text-zinc-100">12 a 25 años</strong> con
                interés real por la astronomía, la ciencia o la divulgación, con
                enfoque en Oaxaca y el sur de México.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80">
              <h3 className="font-semibold text-sm text-white mb-1.5">
                ¿Tiene algún costo participar?
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                No. La plataforma, la biblioteca y las sesiones virtuales son{" "}
                <strong className="text-zinc-100">totalmente gratuitas</strong>{" "}
                para jóvenes registrados.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80">
              <h3 className="font-semibold text-sm text-white mb-1.5">
                ¿Necesito telescopio o conocimientos previos?
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                No. Puedes empezar con mapas celestes digitales o simplemente
                con tu curiosidad. La comunidad está diseñada para aprender
                desde cero.
              </p>
            </div>
          </div>

          <div className="flex justify-start">
            <Link
              href="/portal/faq"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/40 text-zinc-200 hover:text-amber-300 text-xs font-medium transition-all"
            >
              <span>Ver todas las preguntas frecuentes</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}