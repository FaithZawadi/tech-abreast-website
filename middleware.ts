import { NextResponse, type NextRequest } from 'next/server'

// One canonical address for search engines: https://tech-abreast.com.
// www.tech-abreast.com and the unhyphenated techabreast.com redirect here
// permanently, so ranking signals are not split across duplicate hosts.
const CANONICAL_HOST = 'tech-abreast.com'
const ALIASES = new Set(['www.tech-abreast.com', 'techabreast.com', 'www.techabreast.com'])

export function middleware(req: NextRequest) {
  // Behind the gateway the public host arrives in X-Forwarded-Host
  const host = (req.headers.get('x-forwarded-host') || req.headers.get('host') || '').split(',')[0].trim().toLowerCase().replace(/:\d+$/, '')
  if (ALIASES.has(host)) {
    const url = new URL(req.nextUrl.pathname + req.nextUrl.search, `https://${CANONICAL_HOST}`)
    return NextResponse.redirect(url, 301)
  }
  return NextResponse.next()
}

export const config = {
  // Skip Next.js internals and static files
  matcher: ['/((?!_next/|favicon.ico|icon.png|apple-icon.png).*)'],
}
