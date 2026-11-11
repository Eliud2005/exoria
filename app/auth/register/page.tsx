'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function RegisterPage() {
  const supabase = createClient()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }

    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres')
      return
    }

    setLoading(true)

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    // El rol "visitante" lo asigna automáticamente el trigger
    // on_auth_user_created en la base de datos.
    setSuccess(true)
    setLoading(false)
  }

  // ── Pantalla de éxito ──
  if (success) {
    return (
      <>
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-indigo-800/25 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-800/10 rounded-full blur-[160px]" />
          <div className="absolute -bottom-40 -left-20 w-[700px] h-[700px] bg-purple-900/15 rounded-full blur-[200px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:50px_50px] opacity-[0.08]" />
        </div>

        <main className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-md text-center">
            <div className="rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 shadow-2xl p-8">
              <div className="mx-auto w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-5">
                <span className="text-amber-400 text-xl">✉</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                Verifica tu correo
              </span>
              <h1 className="text-2xl font-bold text-white mt-2 mb-3">
                ¡Revisa tu correo!
              </h1>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Te enviamos un enlace de confirmación a{' '}
                <strong className="text-zinc-200">{email}</strong>. Haz clic en
                él para activar tu cuenta.
              </p>
              <Link
                href="/auth/login"
                className="inline-block w-full px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-medium text-sm transition-all shadow-xl active:scale-[0.98]"
              >
                Ir al login
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }

  // ── Formulario ──
  return (
    <>
      {/* Fondo atmosférico */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-indigo-800/25 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-800/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 -left-20 w-[700px] h-[700px] bg-purple-900/15 rounded-full blur-[200px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:50px_50px] opacity-[0.08]" />
      </div>

      {/* Contenido */}
      <main className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Encabezado */}
          <div className="flex flex-col items-center gap-3 mb-8 text-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
              Únete a la comunidad
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Crear cuenta
            </h1>
            <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
              Comienza tu camino en Exoria y explora el cosmos con nosotros.
            </p>
          </div>

          {/* Tarjeta */}
          <div className="rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 shadow-2xl p-6 sm:p-8">
            {error && (
              <div className="mb-5 p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs leading-relaxed">
                {error}
              </div>
            )}

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  Nombre completo
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/40 focus:ring-2 focus:ring-amber-500/10 transition"
                  placeholder="Juan Pérez"
                />
              </div>

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
                  placeholder="Mínimo 8 caracteres"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="confirmPassword" className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  Confirmar contraseña
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/60 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/40 focus:ring-2 focus:ring-amber-500/10 transition"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-medium text-sm transition-all shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {loading ? 'Creando cuenta...' : 'Crear cuenta'}
              </button>
            </form>
          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-xs text-zinc-500">
            ¿Ya tienes cuenta?{' '}
            <Link href="/auth/login" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
              Inicia sesión
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}