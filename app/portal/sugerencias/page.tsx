// app/portal/sugerencias/page.tsx
"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function SuggestionForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    category: "general",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Simulación de envío a base de datos o API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setFormData({ name: "", contact: "", category: "general", message: "" });
    } catch (error) {
      console.error("Error enviando propuesta a Exoria:", error);
      setStatus("error");
    }
  };

  return (
    <>
      {/* FONDO ATMOSFÉRICO CÓSMICO */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:40px_40px] opacity-15" />
      </div>

      {/* CONTENIDO PRINCIPAL CENTRADO */}
      <main className="relative z-10 flex-1 max-w-xl mx-auto w-full px-6 py-12 flex flex-col items-center justify-center">
        <div className="w-full p-8 sm:p-10 rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 shadow-2xl flex flex-col gap-6 relative overflow-hidden">
          {/* LÍNEA DE ACENTO SUPERIOR */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-indigo-500" />

          {/* ENCABEZADO DEL FORMULARIO */}
          <div className="flex flex-col gap-2 text-center items-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-1">
              Propuestas y Sugerencias
            </h1>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
              Ayúdanos a mejorar Exoria.
            </p>
          </div>

          {/* MENSAJES DE ESTADO */}
          {status === "success" && (
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-center gap-3 animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                ¡Transmisión recibida con éxito! Agradecemos tu contribución al
                proyecto Exoria.
              </span>
            </div>
          )}

          {status === "error" && (
            <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 text-rose-200 text-xs sm:text-sm flex items-center gap-3 animate-fade-in">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
              <span>
                Error al enviar el mensaje. Por favor revisa tu conexión e
                inténtalo de nuevo.
              </span>
            </div>
          )}

          {/* FORMULARIO */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-2">
            {/* NOMBRE O ALIAS */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-[11px] font-mono uppercase tracking-wider text-amber-300"
              >
                Nombre o Alias de Observador (Opcional)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej. Orion_Oax"
                className="w-full px-4 py-3 text-xs sm:text-sm text-white bg-zinc-950/80 border border-zinc-800/80 rounded-xl focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition placeholder:text-zinc-600"
              />
            </div>

            {/* CORREO / CONTACTO */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact"
                className="text-[11px] font-mono uppercase tracking-wider text-amber-300"
              >
                Correo o WhatsApp (Opcional)
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Para darte seguimiento en la comunidad"
                className="w-full px-4 py-3 text-xs sm:text-sm text-white bg-zinc-950/80 border border-zinc-800/80 rounded-xl focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition placeholder:text-zinc-600"
              />
            </div>

            {/* TIPO DE SUGERENCIA */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="category"
                className="text-[11px] font-mono uppercase tracking-wider text-amber-300"
              >
                Área de la Sugerencia
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 text-xs sm:text-sm text-zinc-200 bg-zinc-950 border border-zinc-800/80 rounded-xl focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition cursor-pointer"
              >
                <option value="general">
                  Sugerencia General para Exoria
                </option>
                <option value="events">
                  Propuesta de Noches de Observación / Talleres
                </option>
                <option value="content">
                  Sugerir temas para la Biblioteca Cósmica
                </option>
                <option value="mision">
                  Ideas para nuevas Misiones e Interacciones
                </option>
                <option value="bug">
                  Reportar un error técnico en el sitio web
                </option>
              </select>
            </div>

            {/* MENSAJE */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-[11px] font-mono uppercase tracking-wider text-amber-300"
              >
                Tu Propuesta *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe tu idea, crítica constructiva o sugerencia para la comunidad..."
                className="w-full p-4 text-xs sm:text-sm text-white bg-zinc-950/80 border border-zinc-800/80 rounded-xl focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition resize-none placeholder:text-zinc-600 leading-relaxed"
              />
            </div>

            {/* BOTÓN DE ENVÍO */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-zinc-950 bg-amber-500 hover:bg-amber-400 active:scale-[0.99] rounded-xl shadow-lg shadow-amber-950/30 transition-all duration-200 disabled:opacity-50 inline-flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>
                {status === "loading"
                  ? "Transmitiendo..."
                  : "Enviar propuesta a Exoria"}
              </span>
            </button>
          </form>
        </div>
      </main>
    </>
  );
}