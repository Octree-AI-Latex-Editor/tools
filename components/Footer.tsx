'use client';

import Link from "next/link";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';
import { tools } from "@/lib/tools";
import { siteConfig } from "@/lib/site-config";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Company Info */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span
                className={cn(
                  "text-xl font-medium tracking-tight text-neutral-900",
                  dmSans.className
                )}
              >
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('menu')}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {tNav('tools')}
                </Link>
              </li>
              {siteConfig.cta?.primary?.url && (
                <li>
                  <a
                    href={siteConfig.cta.primary.url}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {siteConfig.cta.primary.text}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('tools')}</h3>
            <ul className="mt-4 space-y-3">
              {tools.slice(0, 6).map((tool) => (
                <li key={tool.id}>
                  <Link
                    href={tool.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {tool.title}
                  </Link>
                </li>
              ))}
              {tools.length > 6 && (
                <li>
                  <Link
                    href="/"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    {t('viewAllTools')}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('socials')}</h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.social?.twitter && (
                <li>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    X / Twitter
                  </a>
                </li>
              )}
              {siteConfig.social?.linkedin && (
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              {siteConfig.social?.github && (
                <li>
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
