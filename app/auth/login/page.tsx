'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const next = searchParams.get('next') ?? '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const supabase = createClient()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push(next)
    router.refresh()
  }

  async function handleGoogleLogin() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${next}`,
      },
    })
    if (error) setError(error.message)
  }

  return (
    <>
      {/* ═══════════════════════════════════════════════════════ */}
      {/* FONDO ATMOSFÉRICO (igual que el home)                  */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-indigo-800/25 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-800/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 -left-20 w-[700px] h-[700px] bg-purple-900/15 rounded-full blur-[200px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:50px_50px] opacity-[0.08]" />
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* CONTENIDO                                              */}
      {/* ═══════════════════════════════════════════════════════ */}
      <main className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Encabezado */}
          <div className="flex flex-col items-center gap-3 mb-8 text-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
              Acceso a la comunidad
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Iniciar sesión
            </h1>
            <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
              Continúa tu camino en Exoria y accede a tu portal de exploración.
            </p>
          </div>

          {/* Tarjeta */}
          <div className="rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 shadow-2xl p-6 sm:p-8">
            {error && (
              <div className="mb-5 p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs leading-relaxed">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/40 focus:ring-2 focus:ring-amber-500/10 transition"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/40 focus:ring-2 focus:ring-amber-500/10 transition"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-medium text-sm transition-all shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Ingresando...' : 'Ingresar'}
              </button>
            </form>

            {/* Divisor */}
            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-zinc-800" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">
                o
              </span>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>

            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="w-full px-6 py-3 rounded-xl bg-zinc-950/60 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-medium text-sm transition-all active:scale-[0.98]"
            >
              Continuar con Google
            </button>
          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-xs text-zinc-500">
            ¿No tienes cuenta?{' '}
            <Link href="/auth/register" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
              Regístrate
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}