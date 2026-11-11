import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, UserCheck, MessageSquareCode, HeartHandshake } from "lucide-react";

export default function AvisoPrivacidadPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans antialiased selection:bg-zinc-800 selection:text-white">
      
      {/* HEADER DE NAVEGACIÓN */}
      <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-zinc-800/80 px-6 h-16 flex items-center">
        <div className="max-w-3xl mx-auto w-full flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
          <span className="font-semibold text-xs tracking-wider uppercase text-zinc-400">
            Marco Legal y Normas • Oaxaca
          </span>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16 flex flex-col gap-12">
        
        {/* ENCABEZADO DE LA PÁGINA */}
        <section className="flex flex-col gap-4">
          
          
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Aviso de Privacidad y Reglas de la Comunidad
          </h1>
          
          <p className="text-sm text-zinc-400 leading-relaxed">
            En la <strong className="text-zinc-200">Comunidad Juvenil de Astronomía, Oaxaca</strong>, fomentamos un espacio seguro, inclusivo y estrictamente enfocado en la divulgación de la ciencia. Este documento establece tanto el manejo de tus datos como los lineamientos de convivencia obligatorios para todos los participantes.
          </p>
        </section>

        {/* TARJETAS DE CONTENIDO LEGAL Y NORMAS */}
        <div className="flex flex-col gap-8 text-sm text-zinc-300">
          
          {/* SECCIÓN 1 */}
          <div className="p-6 rounded-2xl bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 shadow-xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white font-semibold">
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <h2>1. Identidad y Datos que Recabamos</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
              La comunidad opera como un espacio educativo y recreativo independiente con sede en el estado de Oaxaca, México. Para integrarte a nuestras actividades, misiones de ingreso o canales de comunicación, podemos solicitar datos básicos como: nombre o alias de observador, rango de edad, correo electrónico de contacto o de tutor (en caso de menores), y respuestas a cuestionarios de motivación científica.
            </p>
          </div>

          {/* SECCIÓN 2 */}
          <div className="p-6 rounded-2xl bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 shadow-xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Lock className="w-4 h-4 text-emerald-400" />
              <h2>2. Protección Especial de Menores de Edad (12 a 17 años)</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
              Dado que nuestra comunidad está dirigida a jóvenes desde los 12 años, implementamos estrictas medidas de seguridad:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-zinc-400 space-y-1.5 pl-1">
              <li>No comercializamos, rentamos ni cedemos información personal de ningún participante bajo ninguna circunstancia.</li>
              <li>Recomendamos el consentimiento y supervisión de padres, madres o tutores legales durante el registro de menores de edad.</li>
              <li>Los canales de interacción externa (como chats o plataformas comunitarias) cuentan con moderación activa para garantizar un entorno seguro y respetuoso.</li>
            </ul>
          </div>

          {/* SECCIÓN 3 */}
          <div className="p-6 rounded-2xl bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 shadow-xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Eye className="w-4 h-4 text-emerald-400" />
              <h2>3. Finalidad del Uso de la Información</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
              Los datos recopilados son utilizados exclusivamente para:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-zinc-400 space-y-1.5 pl-1">
              <li>Evaluar la misión de ingreso y asignar el rango correspondiente (Observador, Explorador o Investigador).</li>
              <li>Enviar notificaciones sobre convocatorias de observación astronómica, talleres o clases en directo.</li>
              <li>Mantener un registro interno de seguridad y control de la comunidad.</li>
            </ul>
          </div>

          {/* SECCIÓN 4 */}
          <div className="p-6 rounded-2xl bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 shadow-xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white font-semibold">
              <FileText className="w-4 h-4 text-emerald-400" />
              <h2>4. Derechos ARCO y Contacto</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
              En cualquier momento, tú o tu tutor legal pueden ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición (ARCO) sobre los datos proporcionados. Para ello, o para resolver cualquier duda relacionada con la privacidad de los menores, puedes ponerte en contacto directamente a través de nuestro correo asignado de soporte en Oaxaca.
            </p>
          </div>

          {/* SECCIÓN 5: REGLAS DE LA COMUNIDAD (NUEVO APARTADO) */}
          <div className="p-6 rounded-2xl bg-zinc-950/60 backdrop-blur-md border border-zinc-800/80 shadow-xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white font-semibold">
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
              <h2>5. Reglas de Convivencia y Código de Conducta Juvenil</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
              Para formar parte de las expediciones, talleres y canales de la comunidad, todo integrante se compromete a cumplir las siguientes normas básicas de respeto:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-zinc-400 space-y-2 pl-1">
              <li><strong className="text-zinc-200">Respeto Mutuo:</strong> Queda estrictamente prohibido cualquier tipo de acoso, discriminación, burla o falta de respeto hacia compañeros, instructores o moderadores por motivos de género, origen, ideología o nivel de conocimiento.</li>
              <li><strong className="text-zinc-200">Enfoque Académico y Constructivo:</strong> Los chats y espacios de diálogo deben mantenerse centrados en la astronomía, la ciencia, el intercambio cultural de Oaxaca y la colaboración mutua.</li>
              <li><strong className="text-zinc-200">Cuidado del Equipo Comunitario:</strong> Durante las sesiones de campo presenciales (manejo de telescopios, binoculares o mapas), se debe seguir rigurosamente el protocolo de cuidado de los instrumentos ópticos compartido por los guías.</li>
              <li><strong className="text-zinc-200">Cero Tolerancia a Contenido Inapropiado:</strong> Está prohibido compartir enlaces, imágenes o mensajes de índole ofensiva, spam o ajenos a los objetivos de divulgación de la comunidad.</li>
            </ul>
            <p className="text-zinc-500 text-xs mt-2 italic">
              El incumplimiento reiterado de estas normas podrá derivar en la suspensión temporal o definitiva del acceso a la plataforma y actividades de la comunidad.
            </p>
          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/80 py-10 px-6 text-xs text-zinc-500 bg-black/80 backdrop-blur-md">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© Comunidad Juvenil de Astronomía, Oaxaca, México.</p>
          <Link href="/" className="hover:text-zinc-300 transition-colors">Regresar al sitio principal</Link>
        </div>
      </footer>

    </div>
  );
}