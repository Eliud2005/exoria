// app/portal/mision/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
  RotateCcw,
  Award,
  Send,
  ShieldCheck,
} from "lucide-react";

// ... (todo el banco de preguntas `wordwallChallenges` y `interestCategories` igual)

export default function MisionCompletaPage() {
  // ... (todos los useState y handlers iguales)

  return (
    <>
      {/* FONDO ATMOSFÉRICO */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:40px_40px] opacity-15" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="relative z-10 flex-1 max-w-3xl mx-auto w-full px-6 py-12 flex flex-col justify-center">
        {/* ... TODO el contenido de los 3 pasos igual ... */}
      </main>
    </>
  );
}