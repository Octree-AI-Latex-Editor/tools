'use client';

import Link from "next/link";
import { OctreeLogo } from "@/components/icons/octree-logo";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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

const templateLinks = [
  { key: "researchPaper", href: "/templates/research-paper" },
  { key: "phdThesis", href: "/templates/thesis" },
  { key: "beamerPresentation", href: "/templates/beamer-presentation" },
  { key: "academicCv", href: "/templates/academic-cv" },
  { key: "coverLetter", href: "/templates/cover-letter" },
  { key: "labReport", href: "/templates/lab-report" },
  { key: "neurips2026", href: "/templates/neurips-2026" },
  { key: "icml2026", href: "/templates/icml-2026" },
];

const symbolLinks = [
  { key: "greekLetters", href: "/symbols" },
  { key: "mathOperators", href: "/symbols" },
  { key: "arrows", href: "/symbols" },
  { key: "relations", href: "/symbols" },
  { key: "setTheory", href: "/symbols" },
  { key: "calculus", href: "/symbols" },
  { key: "logic", href: "/symbols" },
  { key: "linearAlgebra", href: "/symbols" },
];


export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Row 1: Logo, Menu, Learn, Tools, Templates */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Company Info */}
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
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('menu')}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://useoctree.com/learn"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Learn
                </a>
              </li>
              <li>
                <a
                  href="https://useoctree.com/about"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </a>
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
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {tNav('tools')}
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

          {/* Learn */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('learn')}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://useoctree.com/learn/latex"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t('learnLatex')}
                </a>
              </li>
              <li>
                <a
                  href="https://useoctree.com/learn/tikz"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t('learnTikz')}
                </a>
              </li>
              <li>
                <a
                  href="https://useoctree.com/learn/pgfplots"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t('learnPgfplots')}
                </a>
              </li>
              <li>
                <a
                  href="https://useoctree.com/learn"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {t('viewAllTutorials')}
                </a>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('tools')}</h3>
            <ul className="mt-4 space-y-3">
              {toolLinks.slice(0, 8).map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {t('viewAllTools')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Templates */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{tNav('templates')}</h3>
            <ul className="mt-4 space-y-3">
              {templateLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/templates"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {t('viewAllTemplates')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2: Symbols, Open Source, Socials */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 mt-10">
          {/* Empty spacer for logo column */}
          <div className="hidden lg:block"></div>

          {/* Symbols */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{tNav('symbols')}</h3>
            <ul className="mt-4 space-y-3">
              {symbolLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/symbols"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {t('browseAllCategories')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Open Source */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('openSource')}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://github.com/octree-labs/octree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t('octreeEditor')}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/octree-labs/tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t('toolsTemplates')}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/octree-labs/octree-marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t('marketingBlogs')}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/octree-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {t('viewAllRepositories')}
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('socials')}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://instagram.com/useoctree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t('instagram')}
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/useoctree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t('linkedin')}
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@useoctree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t('tiktok')}
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/useoctree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t('x')}
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/Octree/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t('reddit')}
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/H6X7rMzBak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t('discord')}
                </a>
              </li>
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
