// components/Navbar.tsx
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function Navbar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userName = user?.user_metadata?.full_name ?? user?.email;

  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-zinc-800/80 px-6 h-16 flex items-center">
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href={user ? "/portal" : "/"}>
            <span className="font-semibold text-xs tracking-wider uppercase text-zinc-300">
              Exoria
            </span>
          </Link>
        </div>

        {/* Links de navegación (solo desktop) */}
        <nav className="hidden sm:flex items-center gap-6 text-xs font-medium text-zinc-400">
          <Link href="/portal/calendario" className="hover:text-white transition-colors">
            Calendario
          </Link>
          <Link href="/portal/galeria" className="hover:text-white transition-colors">
            Galería
          </Link>
          <Link href="/portal/biblioteca" className="hover:text-white transition-colors">
            Biblioteca
          </Link>
        </nav>

        {/* Acciones de sesión */}
        <div className="flex items-center gap-2">
          {!user ? (
            <>
              <Link
                href="/auth/login"
                className="px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
              >
                Iniciar sesión
              </Link>
              <Link
                href="/auth/register"
                className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-medium transition-all shadow-lg active:scale-[0.98]"
              >
                Registrarse
              </Link>
            </>
          ) : (
            <>
              <span className="hidden md:inline text-xs text-zinc-400 max-w-[160px] truncate">
                Hola, {userName}
              </span>
              <form action="/auth/signout" method="post">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-medium transition-all"
                >
                  Cerrar sesión
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </header>
  );
}