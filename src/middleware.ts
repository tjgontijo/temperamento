import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const host = request.headers.get('host')
  const protocol = request.headers.get('x-forwarded-proto') || 'https'

  // Redireciona de http para https
  if (protocol !== 'https') {
    return NextResponse.redirect(`https://${host}${url.pathname}${url.search}`)
  }

  // Remove barras finais em URLs
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    return NextResponse.redirect(new URL(url.pathname.slice(0, -1), request.url))
  }

  return NextResponse.next()
}
