import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Ambil data user dari cookies (untuk middleware, lebih aman pakai cookies)
  // Simulasi pengecekan sederhana
  const authCookie = request.cookies.get('next-auth.session-token'); 
  
  // Jika mencoba masuk ke /admin tapi tidak ada "session"
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Cek keberadaan token di sini
    // Jika tidak ada, arahkan ke login
    // return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/checkout/:path*'],
};