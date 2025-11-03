'use client';

import { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { templates } from "@/lib/templates";
import { openInOctree } from "@/lib/open-in-octree";
import { OctreeLogo } from "@/components/icons/octree-logo";

const PDFPreview = dynamic(() => import("@/components/PDFPreview"), { ssr: false });

// Templates now imported from shared source of truth (@/lib/templates.ts)
// This eliminates duplication and makes maintenance easier!

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTemplates = templates.filter((template) =>
    template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Free LaTeX Templates",
    "description": "Professional LaTeX templates for research papers, presentations, CVs, and more",
    "url": "https://tools.useoctree.com/templates",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": templates.map((template, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "SoftwareSourceCode",
          "name": template.title,
          "description": template.description,
          "codeSampleType": "full",
          "programmingLanguage": "LaTeX",
          "author": {
            "@type": "Organization",
            "name": "Octree"
          }
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header with back button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-4 transition-colors text-sm"
            >
              ← Back to Home
            </Link>
            <h1 className="text-2xl font-light text-gray-900">
              Free LaTeX Templates
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Professional templates for research papers, presentations, CVs, and more
            </p>
          </div>

          {/* Search bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Templates grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all flex flex-col"
              >
                {/* PDF Preview - fixed height */}
                <div className="relative h-64 bg-gray-50 overflow-hidden">
                  <PDFPreview
                    pdfUrl={template.previewUrl}
                    width={280}
                    compact
                    firstPageOnly
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm">
                    <span className="text-xl">{template.icon}</span>
                  </div>
                </div>

                {/* Template info */}
                <div className="p-5">
                  <h3 className="text-base font-normal text-gray-900 mb-1">
                    {template.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {template.description}
                  </p>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <Link
                      href={`/templates/${template.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-gray-900 text-sm font-normal rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Template
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        openInOctree({
                          latex: template.code,
                          title: template.title,
                          source: 'tools:templates',
                        });
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-gray-900 text-sm font-normal rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      <OctreeLogo className="h-4 w-4" />
                      Open in Octree
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No templates found matching &quot;{searchQuery}&quot;
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
