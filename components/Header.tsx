'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { OctreeLogo } from '@/components/icons/octree-logo';
import { cn } from '@/lib/utils';

const locales = ['en', 'fr', 'cn', 'es', 'pt', 'ar'];
const defaultLocale = 'en';

export default function Header() {
  const pathname = usePathname();
  
  // Extract locale from pathname
  let locale = defaultLocale;
  if (pathname) {
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];
    if (firstSegment && locales.includes(firstSegment)) {
      locale = firstSegment;
    }
  }

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex h-14 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="https://tools.useoctree.com" className="flex items-center space-x-2">
              <OctreeLogo className="h-7 w-7" />
              <span
                className="text-lg font-medium tracking-tight text-neutral-900"
              >
                Octree
              </span>
            </Link>
          </div>
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
            <Link href={`/${locale}`} className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Tools
            </Link>
            <Link href={`/${locale}/templates`} className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Templates
            </Link>
            <Link href={`/${locale}/symbols`} className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Symbols
            </Link>
          </div>
          <div />
        </div>
      </div>
    </nav>
  );
} 