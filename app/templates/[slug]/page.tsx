'use client';

import { use, useState, useEffect, useCallback } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { templates } from "@/lib/templates";
import { openInOctree } from "@/lib/open-in-octree";
import { OctreeLogo } from "@/components/icons/octree-logo";
import { Editor } from "@monaco-editor/react";
import loader from "@monaco-editor/loader";
import { latexLanguageConfiguration, latexTokenProvider, registerLatexCompletions } from "@/lib/editor-config";

const PDFPreview = dynamic(() => import("@/components/PDFPreview"), { ssr: false });

// Templates now imported from shared source of truth (@/lib/templates.ts)
// No more duplication!

export default function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const [mounted, setMounted] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isCompiling, setIsCompiling] = useState(false);
  const { slug } = use(params);
  
  const template = templates.find((t) => t.slug === slug);

  // Initialize Monaco with LaTeX syntax highlighting
  useEffect(() => {
    setMounted(true);
    loader.init().then((monaco) => {
      monaco.languages.register({ id: 'latex' });
      monaco.languages.setLanguageConfiguration(
        'latex',
        latexLanguageConfiguration
      );
      monaco.languages.setMonarchTokensProvider('latex', latexTokenProvider);
      registerLatexCompletions(monaco);
    });
  }, []);

  // Compile LaTeX to PDF
  const compileLatex = useCallback(async (latex: string) => {
    if (!latex.trim()) return;
    
    setIsCompiling(true);
    try {
      const response = await fetch('/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latex }),
      });

      if (response.ok) {
        const data = await response.json();
        setPreviewUrl(data.previewUrl || data.pdfUrl || '');
      }
    } catch (err) {
      console.error('Compilation error:', err);
    } finally {
      setIsCompiling(false);
    }
  }, []);

  // Initial compile when template loads
  useEffect(() => {
    if (template?.code && mounted) {
      compileLatex(template.code);
    }
  }, [template?.code, mounted, compileLatex]);

  if (!template) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Template Not Found</h1>
          <Link
            href="/templates"
            className="text-blue-600 hover:text-blue-700 underline"
          >
            Back to Templates
          </Link>
        </div>
      </div>
    );
  }

  // Get template-specific SEO content
  const getTemplateContent = (slug: string) => {
    const content: Record<string, { usage: string; features: string[] }> = {
      'academic-cv': {
        usage: 'Perfect for academics, researchers, and professors. This LaTeX CV template includes sections for education, publications, research experience, teaching, awards, and grants.',
        features: ['Multiple page support', 'Publication list formatting', 'Research experience section', 'Teaching experience', 'Awards and honors', 'Professional formatting']
      },
      'beamer-presentation': {
        usage: 'Professional LaTeX Beamer presentation template for academic conferences, lectures, and seminars. Create beautiful slides with consistent formatting and mathematical equations.',
        features: ['Title slide with author info', 'Section slides', 'Bullet points and lists', 'Mathematical equation support', 'Custom themes', 'Table of contents']
      },
      'lab-report': {
        usage: 'LaTeX lab report template for science and engineering students. Document experiments with objectives, procedures, results, and conclusions in a professional format.',
        features: ['Abstract section', 'Introduction and objectives', 'Materials and methods', 'Results with tables and figures', 'Discussion and conclusion', 'References']
      },
      'resume': {
        usage: 'Modern LaTeX resume template for job applications. Clean, professional design perfect for tech, engineering, and academic positions.',
        features: ['Contact information header', 'Education section', 'Work experience', 'Skills and competencies', 'Projects and achievements', 'One-page format']
      },
      'research-paper': {
        usage: 'IEEE-style LaTeX research paper template for conference and journal submissions. Includes abstract, introduction, methodology, results, and bibliography.',
        features: ['IEEE conference format', 'Two-column layout', 'Abstract and keywords', 'Bibliography support', 'Figure and table placement', 'Professional typography']
      },
      'thesis': {
        usage: 'Comprehensive LaTeX thesis template for PhD and Master\'s dissertations. Includes chapters, table of contents, bibliography, and appendices.',
        features: ['Multi-chapter structure', 'Automatic table of contents', 'List of figures and tables', 'Bibliography with BibTeX', 'Appendices support', 'Professional formatting']
      },
      'cover-letter': {
        usage: 'Professional LaTeX cover letter template for job applications. Matching design with resume templates for consistent branding.',
        features: ['Professional letterhead', 'Date and recipient info', 'Formal greeting', 'Body paragraphs', 'Closing and signature', 'Customizable layout']
      }
    };
    return content[slug] || { usage: `Professional ${template.title} template with clean formatting and easy customization.`, features: ['Professional design', 'Easy to customize', 'PDF output', 'Free to use'] };
  };

  const templateContent = getTemplateContent(slug);

  return (
    <>
      {/* JSON-LD for individual template page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareSourceCode',
            name: `${template.title} LaTeX Template`,
            description: template.description,
            programmingLanguage: 'LaTeX',
            codeRepository: 'https://tools.useoctree.com/templates',
            author: {
              '@type': 'Organization',
              name: 'Octree'
            }
          })
        }}
      />
      
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="flex-none px-4 sm:px-6 lg:px-8 py-4">
          {/* Header with back button */}
          <div className="max-w-7xl mx-auto">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-3 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Templates
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{template.title} - Free LaTeX Template</h1>
                <p className="text-base text-gray-700 mb-3">{template.description}</p>
                <p className="text-sm text-gray-600 mb-4">{templateContent.usage}</p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Template Features</h2>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {templateContent.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>

      {/* Two-column layout: Editor + Preview - fills remaining space */}
      <div className="flex-1 overflow-hidden px-4 sm:px-6 lg:px-8 py-4">
        <div className="h-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
            {/* Editor Container */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="h-full w-full">
                {mounted ? (
                  <Editor
                    height="100%"
                    language="latex"
                    value={template.code}
                    theme="vs-light"
                    options={{
                      readOnly: true,
                      minimap: { enabled: false },
                      scrollBeyondLastLine: false,
                      fontSize: 13,
                      lineNumbers: 'on',
                      wordWrap: 'on',
                      padding: { top: 12, bottom: 12 },
                      renderLineHighlight: 'none',
                      cursorStyle: 'line',
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
                  </div>
                )}
              </div>
            </div>

            {/* PDF Preview Container */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="h-full w-full">
                {isCompiling && !previewUrl ? (
                  <div className="flex items-center justify-center h-full">
                    <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
                  </div>
                ) : previewUrl ? (
                  <PDFPreview pdfUrl={previewUrl} width={500} compact firstPageOnly />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="flex-none px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div></div>
            <div>
              <button
                onClick={() =>
                  openInOctree({
                    latex: template.code,
                    title: template.title,
                    source: 'tools:templates',
                  })
                }
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 text-base font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors w-full"
              >
                <OctreeLogo className="h-5 w-5" />
                Open in Octree
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
