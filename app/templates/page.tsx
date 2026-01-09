"use client";

import { useState, useMemo } from "react";
import { Search, ExternalLink, Wrench, FileText, Sigma } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import type { Locale } from '@/lib/i18n/config';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  templates,
  templateCategories,
  type TemplateCategory,
} from "@/lib/templates";
import { openInOctree } from "@/lib/open-in-octree";
import { RedditIcon } from "@/components/icons/reddit";
import { DiscordIcon } from "@/components/icons/discord";
import { GitHubIcon } from "@/components/icons/github";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const PDFPreview = dynamic(() => import("@/components/PDFPreview"), {
  ssr: false,
});

const ITEMS_PER_PAGE = 10;

type CategoryFilter = TemplateCategory | "All Templates";

// Helper function to map category names to translation keys
const getCategoryTranslationKey = (category: TemplateCategory | "All Templates"): string => {
  const categoryMap: Record<string, string> = {
    "All Templates": "allTemplates",
    "Academic": "academic",
    "Presentations": "presentations",
    "Resume & CV": "resumeCv",
    "Math": "math",
    "Reports": "reports",
    "Business": "business",
    "Letters": "letters",
    "Education": "education",
    "Other": "other",
  };
  return categoryMap[category] || category;
};

export default function TemplatesPage() {
  const t = useTranslations('templates');
  const tCommon = useTranslations('common');
  const tCategories = useTranslations('categories');
  const locale = useLocale() as Locale;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("All Templates");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesSearch =
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All Templates" ||
        template.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredTemplates.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedTemplates = filteredTemplates.slice(startIndex, endIndex);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: CategoryFilter) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      "All Templates": templates.length,
    };
    templates.forEach((template) => {
      counts[template.category] = (counts[template.category] || 0) + 1;
    });
    return counts;
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free LaTeX Templates",
    description:
      "Professional LaTeX templates for research papers, presentations, CVs, and more",
    url: "https://tools.useoctree.com/templates",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: templates.map((template, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: template.title,
          description: template.description,
          codeSampleType: "full",
          programmingLanguage: "LaTeX",
          author: {
            "@type": "Organization",
            name: "Octree",
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
                title="Star on GitHub"
              >
                <GitHubIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.reddit.com/r/Octree/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
                title="Join us on Reddit"
              >
                <RedditIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://discord.gg/hGB7jnxB3m"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
                title="Join our Discord"
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
                  placeholder={tCommon('searchTemplates')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-56 flex-shrink-0">
              <div className="sticky top-8">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  {tCommon('categories')}
                </h3>
                <nav className="space-y-1">
                  {templateCategories.map((cat) => {
                    const count = categoryCounts[cat.name] || 0;
                    const isActive = selectedCategory === cat.name;
                    const categoryKey = getCategoryTranslationKey(cat.name);
                    const categoryLabel = cat.name === "All Templates" 
                      ? t('allTemplates')
                      : tCategories(categoryKey);
                    return (
                      <button
                        key={cat.name}
                        onClick={() => handleCategoryChange(cat.name)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${isActive
                          ? "bg-gray-100 text-gray-900 font-medium"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                      >
                        <span>{categoryLabel}</span>
                        <span
                          className={`text-xs ${isActive ? "text-gray-700" : "text-gray-400"
                            }`}
                        >
                          ({count})
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  {selectedCategory === "All Templates"
                    ? t('allTemplates')
                    : tCategories(getCategoryTranslationKey(selectedCategory))}
                </h2>
                <span className="text-sm text-gray-500">
                  {tCommon('templatesCount', { 
                    count: filteredTemplates.length,
                    plural: filteredTemplates.length !== 1 ? 's' : ''
                  })}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedTemplates.map((template) => (
                  <div
                    key={template.id}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-200 flex flex-col"
                  >
                    <div className="relative h-44 bg-gray-50 overflow-hidden">
                      <PDFPreview
                        pdfUrl={template.previewUrl}
                        width={280}
                        compact
                        firstPageOnly
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        {template.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                        {template.description}
                      </p>
                      <div className="flex gap-2 mt-auto">
                        <Link
                          href={`/templates/${template.slug}`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                        >
                          {tCommon('view')}
                        </Link>
                        <Button
                          variant="gradient"
                          onClick={() => {
                            openInOctree({
                              latex: template.code,
                              title: template.title,
                              source: "tools:templates",
                            });
                          }}
                        >
                          {tCommon('openInOctree')}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredTemplates.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    {t('noTemplatesFound')}
                  </p>
                </div>
              )}

              {filteredTemplates.length > 0 && totalPages > 1 && (
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
        </div>
      </div>
    </>
  );
}
