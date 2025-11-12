'use client';

import { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { templates } from "@/lib/templates";
import { openInOctree } from "@/lib/open-in-octree";
import { OctreeLogo } from "@/components/icons/octree-logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-4 transition-colors text-sm"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl text-gray-900 mb-4">
              57 Free LaTeX Templates - Download Ready-to-Use Code
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Professional LaTeX templates for academic papers, presentations, resumes, business reports, and more. Each template includes ready-to-use LaTeX code with live PDF preview. Perfect for students, researchers, and professionals.
            </p>
            
            {/* SEO-rich intro section */}
            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl text-gray-900 mb-4">Free Professional LaTeX Templates for Every Need</h2>
              <p className="text-gray-700 mb-4">
                Browse our collection of 57 free LaTeX templates designed for academics, students, and professionals. Whether you need a LaTeX resume template, LaTeX CV template, LaTeX beamer presentation template, or LaTeX thesis template, we have you covered. All templates are free to download and use, with instant PDF preview and editable LaTeX source code.
              </p>
              <p className="text-gray-700 mb-4">
                Our templates include popular formats like IEEE research paper templates, academic CV templates, lab report templates, homework templates, poster templates, business plan templates, and many more. Each LaTeX template is professionally designed and follows industry standards, making it easy to create beautiful documents without starting from scratch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg text-gray-900 mb-2">Academic Templates</h3>
                <p className="text-sm text-gray-600">Research papers, theses, dissertations, lab reports, homework assignments, and more.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg text-gray-900 mb-2">Professional Templates</h3>
                <p className="text-sm text-gray-600">Resumes, CVs, cover letters, business reports, proposals, invoices, and presentations.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg text-gray-900 mb-2">Creative Templates</h3>
                <p className="text-sm text-gray-600">Posters, flyers, business cards, calendars, newsletters, recipes, and manuscripts.</p>
              </div>
            </div>
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

          {/* How to Use Section - SEO Content */}
          <div className="mt-16 prose max-w-none">
            <h2 className="text-3xl text-gray-900 mb-6">How to Use Our Free LaTeX Templates</h2>
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li className="text-lg">Browse the collection: Explore our 57 free LaTeX templates organized by category - academic, professional, and creative templates.</li>
                <li className="text-lg">Preview the template: Click on any template to see the live PDF preview and view the complete LaTeX source code.</li>
                <li className="text-lg">Download or edit: Copy the LaTeX code directly or click &quot;Open in Octree&quot; to edit the template in our online LaTeX editor with real-time PDF compilation.</li>
                <li className="text-lg">Customize: Modify the template to match your needs - change text, colors, formatting, and structure.</li>
                <li className="text-lg">Compile and download: Generate your final PDF document and download it for submission or printing.</li>
              </ol>
            </div>

            <h2 className="text-3xl text-gray-900 mb-6 mt-12">Popular LaTeX Template Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl text-gray-900 mb-3">Academic LaTeX Templates</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• LaTeX Resume Template - Professional academic and industry resumes</li>
                  <li>• LaTeX CV Template - Comprehensive curriculum vitae for academics</li>
                  <li>• LaTeX Beamer Template - Presentation slides for conferences and lectures</li>
                  <li>• LaTeX Thesis Template - PhD and master&apos;s thesis with chapters and bibliography</li>
                  <li>• LaTeX Research Paper Template - IEEE, ACM, and journal article formats</li>
                  <li>• LaTeX Lab Report Template - Scientific experiment documentation</li>
                  <li>• LaTeX Homework Template - Assignment and problem set formatting</li>
                  <li>• LaTeX Poster Template - Academic conference posters</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-3">Professional LaTeX Templates</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• LaTeX Cover Letter Template - Job application letters</li>
                  <li>• LaTeX Business Report Template - Corporate reports and proposals</li>
                  <li>• LaTeX Invoice Template - Professional billing documents</li>
                  <li>• LaTeX Business Plan Template - Startup and business planning</li>
                  <li>• LaTeX Newsletter Template - Company newsletters and bulletins</li>
                  <li>• LaTeX Memo Template - Internal business communications</li>
                  <li>• LaTeX Flyer Template - Marketing and promotional materials</li>
                  <li>• LaTeX Calendar Template - Monthly and yearly planners</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl text-gray-900 mb-6">Frequently Asked Questions About LaTeX Templates</h2>
            <Accordion type="single" collapsible className="w-full mb-12" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg text-gray-900">What is a LaTeX template?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                  <p className="text-gray-900">
                    A LaTeX template is a pre-formatted document structure with predefined styles, layouts, and formatting. LaTeX templates save time by providing a professional starting point for your documents, whether it&apos;s a resume, research paper, presentation, or business report. Our free LaTeX templates include all necessary packages and configurations to generate beautiful PDFs.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg text-gray-900">How do I use a LaTeX template?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                  <p className="text-gray-900">
                    To use a LaTeX template, simply browse our collection, click on the template you want, and view the LaTeX source code. You can copy the code to your local LaTeX editor (like Overleaf, TeXShop, or TeXworks) or click &quot;Open in Octree&quot; to edit directly in our online editor. Replace the placeholder text with your content and compile to PDF.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg text-gray-900">Are these LaTeX templates really free?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                  <p className="text-gray-900">
                    Yes! All 57 LaTeX templates on this page are completely free to use for personal and commercial projects. No registration or payment required. You can download the LaTeX code, modify it as needed, and use it for any purpose including academic papers, job applications, business documents, and more.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg text-gray-900">Which LaTeX template is best for academic papers?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                  <p className="text-gray-900">
                    For academic papers, our most popular templates are the IEEE Research Paper Template, ACM Conference Template, and Journal Article Template. These LaTeX templates follow standard academic formatting guidelines and include proper citation support with BibTeX. For theses and dissertations, try our LaTeX Thesis Template with chapter support and table of contents.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg text-gray-900">Can I customize these LaTeX templates?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                  <p className="text-gray-900">
                    Absolutely! All our LaTeX templates are fully customizable. You can modify colors, fonts, spacing, section layouts, and any other aspect of the template. The LaTeX source code is provided in full, giving you complete control over the document appearance. Our templates serve as a professional starting point that you can adapt to your specific needs.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg text-gray-900">Do you have LaTeX resume templates?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                  <p className="text-gray-900">
                    Yes! We offer multiple LaTeX resume templates and LaTeX CV templates designed for different industries and career levels. Our academic CV template is perfect for researchers and professors, while our modern resume template works well for tech and creative professionals. All resume templates support multiple pages, custom sections, and professional formatting.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl text-gray-900 mb-4">Why Use LaTeX for Document Creation?</h2>
              <p className="text-gray-700 mb-4">
                LaTeX is the gold standard for creating professional documents, especially in academia and technical fields. Unlike word processors, LaTeX provides:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Professional typography: Beautiful mathematical equations, consistent formatting, and publication-quality output</li>
                <li>• Automatic numbering: Sections, figures, tables, and references are numbered automatically</li>
                <li>• Bibliography management: Easy citation handling with BibTeX integration</li>
                <li>• Version control: Plain text format works perfectly with Git and other version control systems</li>
                <li>• Cross-referencing: Automatic links between sections, figures, and citations</li>
                <li>• Consistent formatting: Separation of content and style ensures uniform appearance</li>
              </ul>
              <p className="text-gray-700">
                Our free LaTeX templates make it easy to harness the power of LaTeX without learning all the complex commands from scratch. Start with a professional template and customize it to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
