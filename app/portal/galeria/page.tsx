// app/portal/galeria/page.tsx
import Image from "next/image";
import { Compass, Eye, MapPin, Calendar } from "lucide-react";

const fotos = [
  {
    src: "",
    alt: "Nebulosa y Vía Láctea",
    categoria: "Espacio Profundo",
    titulo: "El Brazo de la Vía Láctea sobre Valles Centrales",
    descripcion:
      "Captura de larga exposición realizada durante la jornada de campo comunitaria.",
    ubicacion: "Oaxaca, Méx.",
    anio: "2026",
  },
  {
    src: "",
    alt: "Nebulosa de emisión",
    categoria: "Astrofotografía",
    titulo: "Estudio de Nebulosas Estelares",
    descripcion:
      "Pruebas de apilamiento de imágenes con telescopios de aficionado en la base comunitaria.",
    ubicacion: "Taller Oaxaca",
    anio: "2026",
  },
  {
    src: "",
    alt: "Cielo estrellado y horizonte",
    categoria: "Observación Local",
    titulo: "Noche de Constelaciones Boreales",
    descripcion:
      "Sesión práctica guiada para la identificación de cuerpos celestes a simple vista.",
    ubicacion: "Oaxaca, Méx.",
    anio: "2026",
  },
];

export default function GaleriaPage() {
  return (
    <>
      {/* FONDO ATMOSFÉRICO CÓSMICO */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:40px_40px] opacity-15" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="relative z-10 flex-1 max-w-5xl mx-auto w-full px-6 py-16 flex flex-col gap-12">
        {/* ENCABEZADO DE LA PÁGINA */}
        <section className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] bg-gradient-to-r from-white via-amber-100 to-zinc-400 bg-clip-text text-transparent">
            Galería
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
            Registro visual de nuestras jornadas de observación, astrofotografía
            planetaria y de espacio profundo lograda por los jóvenes
            observadores en distintas regiones de Oaxaca.
          </p>
        </section>

        {/* REJILLA DE FOTOGRAFÍAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fotos.map((foto, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col"
            >
              <div className="relative h-60 w-full overflow-hidden bg-zinc-950">
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-zinc-800">
                  {foto.categoria}
                </div>
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1 justify-between bg-zinc-900/40 backdrop-blur-md">
                <div className="flex flex-col gap-1">
                  <h2 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {foto.titulo}
                  </h2>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {foto.descripcion}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />{" "}
                    {foto.ubicacion}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-zinc-500" /> {foto.anio}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}