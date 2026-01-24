import createMiddleware from 'next-intl/middleware';
import { routing } from '@/src/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - api routes
  // - _next (Next.js internals)
  // - static files (with extensions)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
