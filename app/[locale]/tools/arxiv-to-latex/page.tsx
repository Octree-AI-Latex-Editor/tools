'use client';

import { ArrowLeft, Construction, FileDown } from 'lucide-react';
import { DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { OctreeCTA } from '@/components/OctreeCTA';
import { ExploreMoreTools } from '@/components/ExploreMoreTools';
import { ExploreMoreTemplates } from '@/components/ExploreMoreTemplates';
import { useTranslations } from 'next-intl';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function ArxivToLatex() {
  const tCommon = useTranslations('common');

  return (
    <div className={cn("min-h-screen bg-gray-50", dmSans.className)}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12">
          <div className="relative flex items-start justify-center mb-3">
            <Link href="/" className="absolute left-0 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">{tCommon('backToTools')}</span>
            </Link>
            <h1 className="text-4xl font-light text-gray-900">ArXiv to LaTeX</h1>
          </div>
          <p className="text-lg text-gray-600 text-center">Import arXiv papers directly into Octree</p>
        </div>

        {/* Coming Soon Section */}
        <div className="flex flex-col items-center justify-center py-24">
          <div className="bg-white border border-gray-200 rounded-2xl p-12 max-w-xl w-full text-center shadow-sm">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-50 border border-amber-200 mb-6">
              <Construction className="h-10 w-10 text-amber-600" />
            </div>
            
            <h2 className="text-2xl font-medium text-gray-900 mb-3">
              Under Development
            </h2>
            
            <p className="text-gray-600 mb-6">
              This tool is currently being built. Soon you&apos;ll be able to import arXiv papers directly into Octree and edit the LaTeX source files.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-800 rounded-lg text-sm font-medium border border-amber-200">
              <FileDown className="h-4 w-4" />
              Coming Soon
            </div>
          </div>
        </div>

        <ExploreMoreTools currentToolHref="/tools/arxiv-to-latex" />
        <ExploreMoreTemplates />

        {/* Call to Action */}
        <div className="mt-8">
          <OctreeCTA source="tools:arxiv-to-latex" />
        </div>
      </div>
    </div>
  );
}
