'use client';

import Link from "next/link";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useTranslations } from 'next-intl';
import { siteConfig } from "@/lib/site-config";

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
              href="/"
              className="flex items-center space-x-2"
            >
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span
                className={cn(
                  "text-lg font-medium tracking-tight text-neutral-900",
                  dmSans.className
                )}
              >
                {siteConfig.name}
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
          </div>
          {siteConfig.cta?.primary?.url && (
            <Button asChild size="lg" variant="gradient">
              <Link
                href={siteConfig.cta.primary.url}
                className="inline-flex h-10 items-center justify-center rounded-lg px-5 text-sm font-medium text-white transition-colors"
              >
                {siteConfig.cta?.primary?.text || t('getStarted')}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
