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

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{template.icon}</span>
              <div>
                <h1 className="text-2xl font-light text-gray-900">{template.title}</h1>
                <p className="text-sm text-gray-600">{template.description}</p>
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
                  <PDFPreview pdfUrl={previewUrl} width={500} compact />
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
  );
}
