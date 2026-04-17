import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, JwtPayload } from '@/lib/auth';

function getRequiredRole(pathname: string): JwtPayload['role'] | null {
  if (pathname.startsWith('/admin')) return 'ADMIN';
  if (pathname.startsWith('/instructor')) return 'INSTRUCTOR';
  if (pathname.startsWith('/student')) return 'STUDENT';
  return null;
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const requiredRole = getRequiredRole(pathname);

  if (!requiredRole) {
    return NextResponse.next();
  }

  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const decoded = await verifyToken(token);

  if (!decoded || !decoded.role) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (decoded.role !== requiredRole) {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/instructor/:path*', '/student/:path*'],
};
