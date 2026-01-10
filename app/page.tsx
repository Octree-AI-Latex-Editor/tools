"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Search, ArrowRight } from "lucide-react";
import { tools } from "@/lib/tools";
import { useTranslations, useLocale } from 'next-intl';
import type { Locale } from '@/lib/i18n/config';
import LanguageSwitcher from '@/components/LanguageSwitcher';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { RedditIcon } from "@/components/icons/reddit";
import { DiscordIcon } from "@/components/icons/discord";
import { GitHubIcon } from "@/components/icons/github";

const ITEMS_PER_PAGE = 10;

// Helper function to map tool titles to translation keys
const getToolTranslationKey = (title: string): string => {
  const titleToKey: Record<string, string> = {
    "Image to LaTeX": "imageToLatex",
    "Excel to LaTeX": "tableToLatex",
    "TikZ Generator": "tikzGenerator",
    "Image to TikZ": "imageToTikz",
    "LaTeX Preview": "latexPreview",
    "Markdown to LaTeX": "markdownToLatex",
    "Citation Generator": "citationGenerator",
    "MathML to LaTeX": "mathmlToLatex",
    "AI LaTeX Generator": "aiLatexGenerator",
    "HTML to LaTeX": "htmlToLatex",
    "Mermaid to LaTeX": "mermaidToLatex",
    "Pgfplots Generator": "pgfplotsGenerator",
    "LaTeX to Markdown": "latexToMarkdown",
    "Equation to LaTeX": "equationToLatex",
    "PDF to LaTeX": "pdfToLatex",
    "LaTeX Word Counter": "latexWordCounter",
    "ArXiv to LaTeX": "arxivToLatex",
  };
  return titleToKey[title] || "";
};

export default function Home() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');
  const tTools = useTranslations('toolsList');
  const locale = useLocale() as Locale;

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Get translated tools
  const translatedTools = useMemo(() => {
    // Helper function to safely get translation with fallback
    const safeTranslate = (key: string, fallback: string): string => {
      try {
        return tTools(key);
      } catch {
        // Translation key doesn't exist, use fallback
        return fallback;
      }
    };

    return tools.map((tool) => {
      const translationKey = getToolTranslationKey(tool.title);
      
      // Get translated title and description with fallbacks
      const translatedTitle = translationKey
        ? safeTranslate(`${translationKey}.title`, tool.title)
        : tool.title;
      
      const translatedDescription = translationKey
        ? safeTranslate(`${translationKey}.description`, tool.description)
        : tool.description;
      
      return {
        ...tool,
        title: translatedTitle,
        description: translatedDescription,
      };
    });
  }, [tTools]);

  const filteredTools = useMemo(() => {
    return translatedTools.filter(
      (tool) =>
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [translatedTools, searchQuery]);

  const totalPages = Math.ceil(filteredTools.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedTools = filteredTools.slice(startIndex, endIndex);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <LanguageSwitcher currentLocale={locale} />
      </div>
      <div className="bg-gradient-to-b from-gray-100 to-gray-50 pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Link
              href="https://github.com/octree-labs/octree"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
              title={tCommon('starOnGitHub')}
            >
              <GitHubIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.reddit.com/r/Octree/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
              title={tCommon('joinUsOnReddit')}
            >
              <RedditIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://discord.gg/hGB7jnxB3m"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
              title={tCommon('joinOurDiscord')}
            >
              <DiscordIcon className="h-5 w-5" />
            </Link>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('description')}
          </p>



          <div className="max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                placeholder={tCommon('searchTools')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedTools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="group flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <tool.icon className="size-6 text-gray-900" />
                {tool.badge && (
                  <span className="text-xs font-medium px-2 py-1 rounded bg-blue-100 text-blue-700 border border-blue-200">
                    {tool.badge}
                  </span>
                )}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
                {tool.description}
              </p>
              <span className="inline-flex items-center text-blue-600 text-sm font-medium transition-all w-fit">
                {tCommon('tryNow')}
                <span className="w-0 overflow-hidden transition-all duration-200 group-hover:w-6 group-hover:ml-1">
                  <ArrowRight className="size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </span>
              </span>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              {t('noToolsFound')}
            </p>
          </div>
        )}

        {filteredTools.length > 0 && totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      currentPage > 1 && setCurrentPage(currentPage - 1)
                    }
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      onClick={() => setCurrentPage(i + 1)}
                      isActive={currentPage === i + 1}
                      className="cursor-pointer"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      currentPage < totalPages &&
                      setCurrentPage(currentPage + 1)
                    }
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
}
