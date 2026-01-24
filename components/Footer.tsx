'use client';

import Link from "next/link";
import { OctreeLogo } from "@/components/icons/octree-logo";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { RedditIcon } from "@/components/icons/reddit";
import { DiscordIcon } from "@/components/icons/discord";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/octree-app",
    icon: LinkedInIcon,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/r/octree",
    icon: RedditIcon,
  },
  {
    name: "Discord",
    href: "https://discord.gg/octree",
    icon: DiscordIcon,
  },
];

const toolLinks = [
  { key: "imageToLatex", href: "/tools/math-to-latex" },
  { key: "excelToLatex", href: "/tools/table-to-latex" },
  { key: "tikzGenerator", href: "/tools/tikz-generator" },
  { key: "imageToTikz", href: "/tools/image-to-tikz" },
  { key: "latexPreview", href: "/tools/latex-preview" },
  { key: "markdownToLatex", href: "/tools/markdown-to-latex" },
  { key: "citationGenerator", href: "/tools/citation-generator" },
  { key: "aiLatexGenerator", href: "/tools/ai-latex-generator" },
];

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <OctreeLogo className="h-8 w-8" />
              <span
                className={cn(
                  "text-xl font-medium tracking-tight text-neutral-900",
                  dmSans.className
                )}
              >
                Octree
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              {t('tagline')}
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

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
              <li>
                <Link
                  href="/templates"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {tNav('templates')}
                </Link>
              </li>
              <li>
                <Link
                  href="/symbols"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {tNav('symbols')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2">
            <h3 className="text-sm font-semibold text-gray-900">{t('tools')}</h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {toolLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Octree. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
