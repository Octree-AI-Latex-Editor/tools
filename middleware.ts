import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'fr', 'cn', 'es', 'pt', 'ar'];
const defaultLocale = 'en';

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): string {
  // Check if locale is already in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return pathname.split('/')[1];
  }

  // Get Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || undefined;
  
  // Use Negotiator to parse Accept-Language header
  const headers = { 'accept-language': acceptLanguage || '' };
  const languages = new Negotiator({ headers }).languages();
  
  // Use @formatjs/intl-localematcher to match the preferred locale
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/fonts/') ||
    pathname.includes('.') || // Skip files with extensions (e.g., .pdf, .jpg, .png, .svg, etc.)
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap')
  ) {
    return NextResponse.next();
  }
  
  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // If pathname is exactly /{locale}, ensure it has a trailing slash or is handled correctly
    // Next.js will handle /fr -> /fr/ automatically, but we can be explicit
    if (pathname.match(/^\/[a-z]{2}$/)) {
      // Path is exactly /{locale}, let it through - Next.js will match app/[lang]/page.tsx
      return NextResponse.next();
    }
    return NextResponse.next();
  }

  // Redirect if there is no locale
  const locale = getLocale(request);
  // If pathname is root, redirect to /{locale}
  if (pathname === '/') {
    request.nextUrl.pathname = `/${locale}`;
  } else {
    request.nextUrl.pathname = `/${locale}${pathname}`;
  }
  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next (Next.js internals)
     * - favicon.ico, robots.txt, sitemap (SEO files)
     * Static files with extensions are handled in the middleware function
     */
    '/((?!api|_next|favicon.ico|robots.txt|sitemap).*)',
  ],
};

