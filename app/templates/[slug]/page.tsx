"use client";

import { use, useState, useEffect, useCallback } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { templates } from "@/lib/templates";
import { openInOctree } from "@/lib/open-in-octree";
import { OctreeLogo } from "@/components/icons/octree-logo";
import { getTemplateContent } from "@/lib/template-content";
import { getTemplateJsonLd } from "@/lib/json-ld";
import { Editor } from "@monaco-editor/react";
import loader from "@monaco-editor/loader";
import {
  latexLanguageConfiguration,
  latexTokenProvider,
  registerLatexCompletions,
} from "@/lib/editor-config";

const PDFPreview = dynamic(() => import("@/components/PDFPreview"), {
  ssr: false,
});

export default function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [mounted, setMounted] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isCompiling, setIsCompiling] = useState(false);
  const { slug } = use(params);

  const template = templates.find((t) => t.slug === slug);

  useEffect(() => {
    setMounted(true);
    loader.init().then((monaco) => {
      monaco.languages.register({ id: "latex" });
      monaco.languages.setLanguageConfiguration(
        "latex",
        latexLanguageConfiguration
      );
      monaco.languages.setMonarchTokensProvider("latex", latexTokenProvider);
      registerLatexCompletions(monaco);
    });
  }, []);

  const compileLatex = useCallback(async (latex: string) => {
    if (!latex.trim()) return;

    setIsCompiling(true);
    try {
      const response = await fetch("/api/compile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ latex }),
      });

      if (response.ok) {
        const data = await response.json();
        setPreviewUrl(data.previewUrl || data.pdfUrl || "");
      }
    } catch (err) {
      console.error("Compilation error:", err);
    } finally {
      setIsCompiling(false);
    }
  }, []);

  useEffect(() => {
    if (template?.code && mounted) {
      compileLatex(template.code);
    }
  }, [template?.code, mounted, compileLatex]);

  if (!template) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Template Not Found
          </h1>
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

  const templateContent = getTemplateContent(slug, template.title);

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="flex-none px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-3 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Templates
            </Link>

            <div className="flex flex-col lg:flex-row gap-8 mb-6">
              <div className="flex-2">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {template.title} - Free LaTeX Template
                </h1>
                <p className="text-base text-gray-700 mb-3">
                  {template.description}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {templateContent.usage}
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Template Features
                  </h2>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {templateContent.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-4 sm:px-6 lg:px-8 py-4">
          <div className="h-full max-w-7xl mx-auto flex flex-col">
            <div className="flex justify-end mb-4">
              <button
                onClick={() =>
                  openInOctree({
                    latex: template.code,
                    title: template.title,
                    source: "tools:templates",
                  })
                }
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <OctreeLogo className="h-4 w-4" />
                Open in Octree
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 min-h-0">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-[600px] w-full">
                  {mounted ? (
                    <Editor
                      height="600px"
                      language="latex"
                      value={template.code}
                      theme="vs-light"
                      options={{
                        readOnly: true,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        fontSize: 13,
                        lineNumbers: "on",
                        wordWrap: "on",
                        padding: { top: 12, bottom: 12 },
                        renderLineHighlight: "none",
                        cursorStyle: "line",
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="h-full w-full">
                  {isCompiling && !previewUrl ? (
                    <div className="flex items-center justify-center h-full">
                      <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
                    </div>
                  ) : previewUrl ? (
                    <PDFPreview
                      pdfUrl={previewUrl}
                      width={500}
                      compact
                      firstPageOnly
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
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
