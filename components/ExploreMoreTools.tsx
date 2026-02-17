'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { tools, type Tool } from '@/lib/tools';
import { useTranslations } from 'next-intl';

interface ExploreMoreToolsProps {
  currentToolHref?: string;
}

function getRandomTools(exclude?: string): Tool[] {
  const filtered = exclude ? tools.filter((t) => t.href !== exclude) : tools;
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
}

export function ExploreMoreTools({ currentToolHref }: ExploreMoreToolsProps) {
  const t = useTranslations('common');
  const [selectedTools] = useState(() => getRandomTools(currentToolHref));

  return (
    <section className="mt-16 [font-family:var(--font-satoshi)]">
      <div className="mb-6 flex items-center gap-3">
        <span className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-900 border border-blue-200">
          {t('tools')}
        </span>
        <h2 className="text-xl font-medium text-gray-900">{t('exploreMoreTools')}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {selectedTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.id}
              href={tool.href}
              className="group flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <Icon className="size-6 text-gray-900" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
                {tool.description}
              </p>
              <span className="inline-flex items-center text-blue-600 text-sm font-medium transition-all w-fit">
                {t('tryNow')}
                <span className="w-0 overflow-hidden transition-all duration-200 group-hover:w-6 group-hover:ml-1">
                  <ArrowRight className="size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
