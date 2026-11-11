// app/portal/faq/page.tsx
const faqs = [
  {
    pregunta: "¿Quiénes pueden unirse a la Comunidad Juvenil de Astronomía?",
    respuesta: (
      <>
        La comunidad está abierta principalmente para jóvenes de{" "}
        <strong className="text-zinc-200">12 a 25 años</strong> que muestren
        interés real por la ciencia, la física del espacio, la divulgación o la
        observación astronómica, con especial enfoque en el estado de Oaxaca y
        el sur de México.
      </>
    ),
  },
  {
    pregunta: "¿Cómo funciona la misión de ingreso y los rangos?",
    respuesta: (
      <>
        Al hacer clic en &quot;Comienza tu misión de ingreso&quot;, accederás a
        un breve cuestionario técnico y de motivación. Según tus respuestas y
        puntaje, el sistema te asignará una categoría inicial (
        <strong className="text-zinc-200">
          Observador, Explorador o Investigador
        </strong>
        ), lo cual te otorga acceso a dinámicas y recursos específicos.
      </>
    ),
  },
  {
    pregunta: "¿Tiene algún costo participar en las actividades o talleres?",
    respuesta: (
      <>
        No. La gran mayoría de nuestras guías, el uso de la plataforma web, los
        archivos de la biblioteca y las sesiones virtuales introductorias son{" "}
        <strong className="text-zinc-200">totalmente gratuitos</strong> para
        los jóvenes registrados. Ciertas actividades presenciales especiales en
        Oaxaca se notifican con anticipación.
      </>
    ),
  },
  {
    pregunta:
      "¿Necesito tener telescopio o conocimientos previos avanzados?",
    respuesta: (
      <>
        Absolutamente no. Puedes empezar usando herramientas digitales, mapas
        celestes o simplemente tu curiosidad. La comunidad está diseñada para
        aprender desde cero o profundizar si ya tienes experiencia observando
        el cielo nocturno.
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <>
      {/* FONDO CÓSMICO VIVO */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[130px] animate-pulse duration-1000" />
        <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:36px_36px] opacity-20" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="relative z-10 flex-1 max-w-3xl mx-auto w-full px-6 py-16 flex flex-col gap-12">
        {/* ENCABEZADO */}
        <section className="flex flex-col gap-5 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Preguntas Frecuentes
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Todo lo que necesitas saber sobre las misiones de ingreso, los
            rangos de participación, las actividades en Oaxaca y el
            funcionamiento general de nuestra plataforma.
          </p>
        </section>

        {/* LISTADO DE PREGUNTAS (ACORDEÓN) */}
        <div className="flex flex-col gap-3 text-sm">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group p-5 sm:p-6 rounded-2xl bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <h2 className="font-semibold text-white text-sm sm:text-base">
                  {faq.pregunta}
                </h2>
                <span className="text-zinc-500 shrink-0 transition-transform duration-300 group-open:rotate-45 text-xl leading-none">
                  +
                </span>
              </summary>

              <p className="pt-3 mt-3 border-t border-zinc-800/60 text-zinc-400 leading-relaxed text-xs sm:text-sm">
                {faq.respuesta}
              </p>
            </details>
          ))}
        </div>
      </main>
    </>
  );
}