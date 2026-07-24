'use client';

import Link from "next/link";
import { OctreeLogo } from "@/components/icons/octree-logo";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useTranslations } from 'next-intl';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Header() {
  const t = useTranslations('nav');

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="https://tools.useoctree.com"
              className="flex items-center space-x-2"
            >
              <OctreeLogo className="h-7 w-7" />
              <span
                className={cn(
                  "text-xl font-medium tracking-[-0.02em] text-neutral-900",
                  spaceGrotesk.className
                )}
              >
                octree
              </span>
            </Link>
          </div>
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {t('tools')}
            </Link>
            <Link
              href="/templates"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {t('templates')}
            </Link>
            <Link
              href="/symbols"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {t('symbols')}
            </Link>
          </div>
          <Button asChild variant="gradient">
            <Link href="https://app.useoctree.com">
              {t('getStarted')}
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
