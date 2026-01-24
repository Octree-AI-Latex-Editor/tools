'use client';

import Link from "next/link";
import { OctreeLogo } from "@/components/icons/octree-logo";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useTranslations } from 'next-intl';

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Header() {
  const t = useTranslations('nav');

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex h-14 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="https://tools.useoctree.com"
              className="flex items-center space-x-2"
            >
              <OctreeLogo className="h-7 w-7" />
              <span
                className={cn(
                  "text-lg font-medium tracking-tight text-neutral-900",
                  dmSans.className
                )}
              >
                Octree
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
          <Button asChild size="lg" variant="gradient">
            <Link
              href="https://app.useoctree.com"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[#5B8DEF] px-5 text-sm font-medium text-white transition-colors hover:bg-[#4a7de0]"
            >
              {t('getStarted')}
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
