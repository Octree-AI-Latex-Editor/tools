"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Code, FileText } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { templates, getLocalizedTemplates } from "@/lib/templates";
import { openInOctree } from "@/lib/open-in-octree";
import { getTemplateJsonLd } from "@/lib/json-ld";
import type { Locale } from "../../dictionaries";
import { OctreeCTA } from "@/components/OctreeCTA";
import { Button } from "@/components/ui/button";

type Dictionary = Awaited<ReturnType<typeof import('../../dictionaries').getDictionary>>;

interface TemplatePageClientProps {
  dict: Dictionary;
  lang: Locale;
  slug: string;
}

const PDFPreview = dynamic(() => import("@/components/PDFPreview"), {
  ssr: false,
});

const abstracts: Record<string, string> = {
  "research-paper":
    "IEEE-style research paper template with two-column layout, abstract section, and bibliography support. Perfect for conference and journal submissions.",
  "beamer-presentation":
    "Professional Beamer presentation template with Madrid theme. Includes title slide, table of contents, and section formatting for academic presentations.",
  "academic-cv":
    "Comprehensive academic curriculum vitae template with sections for education, publications, research experience, teaching, and awards.",
  resume:
    "Modern one-page resume template with clean formatting. Ideal for job applications in tech, engineering, and professional fields.",
  thesis:
    "Complete PhD/Master's thesis template with multi-chapter structure, automatic table of contents, list of figures, bibliography, and appendices.",
  "lab-report":
    "Scientific lab report template with sections for abstract, introduction, methodology, results, discussion, and references.",
  "cover-letter":
    "Professional cover letter template with formal letterhead, recipient information, and signature block.",
};

function getTags(title: string, category: string) {
  const tags = [category];
  const t = title.toLowerCase();

  if (t.includes("paper")) tags.push("Research");
  if (t.includes("presentation") || t.includes("beamer")) tags.push("Slides");
  if (t.includes("cv") || t.includes("resume")) tags.push("Career");
  if (t.includes("math") || t.includes("formula")) tags.push("Mathematics");
  if (t.includes("report")) tags.push("Documentation");
  if (t.includes("letter")) tags.push("Correspondence");
  if (t.includes("thesis") || t.includes("dissertation")) tags.push("Graduate");

  return tags;
}

export default function TemplatePageClient({ dict, lang, slug }: TemplatePageClientProps) {
  const [mounted, setMounted] = useState(false);
  const [showSource, setShowSource] = useState(false);
  
  // Get localized templates
  const localizedTemplates = getLocalizedTemplates({
    templatesList: (dict as Record<string, unknown>).templatesList as Record<string, { title: string; description: string }> | undefined,
    categories: (dict as Record<string, unknown>).categories as Record<string, string> | undefined,
    templateCode: (dict as Record<string, unknown>).templateCode as { placeholders?: Record<string, string> } | undefined,
  });
  const template = localizedTemplates.find((t) => t.slug === slug);
  const t = dict.templates as Record<string, string>;

  useEffect(() => setMounted(true), []);

  if (!template) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t.templateNotFound}
          </h1>
          <Link
            href={`/${lang}/templates`}
            className="text-blue-600 hover:text-blue-700 underline"
          >
            {t.backToTemplates}
          </Link>
        </div>
      </div>
    );
  }

  const tags = getTags(template.title, template.category);
  const abstract = abstracts[slug] || template.description;

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href={`/${lang}/templates`}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToAllTemplates}
          </Link>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {template.title}
              </h1>

              <div className="flex flex-wrap gap-3 mb-8">
                <Button
                  variant="gradient"
                  onClick={() =>
                    openInOctree({
                      latex: template.code,
                      title: template.title,
                      source: "tools:templates",
                    })
                  }
                >
                  {t.openAsTemplate}
                </Button>
                <button
                  onClick={() => setShowSource(!showSource)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <Code className="h-4 w-4" />
                  {showSource ? t.hideSource : t.viewSource}
                </button>
                <Link
                  href={template.previewUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  {t.viewPdf}
                </Link>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex">
                  <span className="w-32 text-gray-500 text-sm">{t.category}:</span>
                  <span className="text-gray-900 text-sm">{template.category}</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-gray-500 text-sm">{t.license}:</span>
                  <span className="text-gray-900 text-sm">{t.freeToUse}</span>
                </div>
                <div className="flex flex-col">
                  <span className="w-32 text-gray-500 text-sm mb-1">{t.abstract}:</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{abstract}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-gray-500 text-sm mr-2">{t.tags}:</span>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {showSource && (
                <div className="mt-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    {t.latexSourceCode}
                  </h2>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                    <pre className="p-4 text-sm text-gray-800 overflow-x-auto max-h-96">
                      <code>{template.code}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:w-1/2">
              <div className="sticky top-8">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  {mounted ? (
                    <PDFPreview pdfUrl={template.previewUrl} width={500} />
                  ) : (
                    <div className="flex items-center justify-center h-[600px] bg-gray-50">
                      <span className="text-gray-400">{t.loadingPreview}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <OctreeCTA source={`templates:${slug}`} />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getTemplateJsonLd(template.title, template.description)
          ),
        }}
      />
    </>
  );
}
