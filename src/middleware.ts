import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const url = request.nextUrl;

    /*    const access = request.cookies.get('access')?.value;

    const itsLogin = url.pathname.startsWith('/login');

    const hasAccess = request.cookies.get('access')?.value;

    if (!itsLogin) {
        if (!hasAccess) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }*/
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
