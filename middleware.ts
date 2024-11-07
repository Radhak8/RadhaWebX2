
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// In-memory store for rate limiting
const rateLimit = new Map()

// Rate limit window in seconds
const WINDOW_SIZE = 60
// Maximum number of requests per window
const MAX_REQUESTS = 100

export function middleware(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1'
  const now = Date.now()
  
  const windowStart = now - WINDOW_SIZE * 1000
  const requestCount = rateLimit.get(ip) || []
  const requestsInWindow = requestCount.filter(timestamp => timestamp > windowStart)

  if (requestsInWindow.length >= MAX_REQUESTS) {
    return new NextResponse('Too Many Requests', { status: 429 })
  }

  requestsInWindow.push(now)
  rateLimit.set(ip, requestsInWindow)

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
