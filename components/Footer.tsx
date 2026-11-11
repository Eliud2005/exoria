// components/Footer.tsx
import { FileText, HelpCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-800/80 py-10 px-6 text-xs text-zinc-400 bg-black/80 backdrop-blur-md">
      
        <section className="flex flex-wrap items-center gap-4 pt-6 border-t border-zinc-800/80 text-xs font-medium text-zinc-300">
          <Link href="/reglas" className="hover:text-white transition-colors flex items-center gap-1.5"><ShieldCheck className="w-4 h-4"/> Reglas</Link>
          <span>•</span>
          <Link href="/faq" className="hover:text-white transition-colors flex items-center gap-1.5"><HelpCircle className="w-4 h-4"/> Preguntas Frecuentes</Link>
          <Link href="/portal/sugerencias" className="hover:text-white transition-colors flex items-center gap-1.5"><HelpCircle className="w-4 h-4"/> Sugerencias</Link>
          <span>•</span>
          <Link href="/portal/aviso-privacidad" className="hover:text-white transition-colors flex items-center gap-1.5"><FileText className="w-4 h-4"/> Aviso de Privacidad y Menores</Link>
        <p>© Exoria.</p>

        </section>
    </footer>
  );
}