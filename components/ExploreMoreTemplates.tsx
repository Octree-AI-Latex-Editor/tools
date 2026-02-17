'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { templates, type Template } from '@/lib/templates';
import { useTranslations } from 'next-intl';

interface ExploreMoreTemplatesProps {
  currentTemplateSlug?: string;
}

function getRandomTemplates(exclude?: string): Template[] {
  const filtered = exclude
    ? templates.filter((t) => t.slug !== exclude)
    : templates;
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
}

export function ExploreMoreTemplates({
  currentTemplateSlug,
}: ExploreMoreTemplatesProps) {
  const t = useTranslations('common');
  const [selectedTemplates] = useState(() =>
    getRandomTemplates(currentTemplateSlug)
  );

  return (
    <section className="mt-16 [font-family:var(--font-satoshi)]">
      <div className="mb-6 flex items-center gap-3">
        <span className="inline-flex items-center rounded-md bg-purple-50 px-3 py-1.5 text-sm font-medium text-purple-900 border border-purple-200">
          {t('templates')}
        </span>
        <h2 className="text-xl font-medium text-gray-900">{t('exploreMoreTemplates')}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {selectedTemplates.map((template) => (
          <Link
            key={template.id}
            href={`/templates/${template.slug}`}
            className="group flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 h-full"
          >
            <div className="flex items-start justify-between mb-4">
              <FileText className="size-6 text-gray-900" />
              <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-600">
                {template.category}
              </span>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              {template.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
              {template.description}
            </p>
            <span className="inline-flex items-center text-blue-600 text-sm font-medium transition-all w-fit">
              {t('view')}
              <span className="w-0 overflow-hidden transition-all duration-200 group-hover:w-6 group-hover:ml-1">
                <ArrowRight className="size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
