// middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// Tus pesos de roles (se mantienen igual)
const ROLE_WEIGHTS: Record<string, number> = {
  'visitante': 0,
  'miembro_observador': 1,
  'miembro_explorador': 2,
  'miembro_investigador': 3,
  'mentor': 4,
  'admin': 5,
}

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request,
  })

  // 1. Crear el cliente de Supabase con @supabase/ssr
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // 2. Obtener la sesión (esto refresca el token si es necesario)
  const { data: { user } } = await supabase.auth.getUser()

  const path = request.nextUrl.pathname

  // 3. Definir rutas protegidas
  const protectedRoutes: Record<string, string> = {
    '/dashboard': 'miembro_observador',
    '/mentor': 'mentor',
    '/admin': 'admin',
  }

  const matchedRoute = Object.keys(protectedRoutes).find(route => path.startsWith(route))

  if (matchedRoute) {
    const requiredRole = protectedRoutes[matchedRoute]

    // Si no hay usuario, redirigir al login
    if (!user) {
      return NextResponse.redirect(new URL(`/login?next=${path}`, request.url))
    }

    // Leer el rol desde el JWT (gracias al Auth Hook que configuraste en Supabase)
    // El rol puede estar en user.app_metadata o user.user_metadata
    const userRole = user.app_metadata?.user_role || user.user_metadata?.user_role

    const userWeight = ROLE_WEIGHTS[userRole] ?? -1
    const requiredWeight = ROLE_WEIGHTS[requiredRole]

    if (userWeight < requiredWeight) {
      return NextResponse.redirect(new URL('/unauthorized', request.url))
    }
  }

  return response
}

export const config = {
  matcher: ['/dashboard/:path*', '/mentor/:path*', '/admin/:path*'],
}