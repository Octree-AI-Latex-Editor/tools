'use client';

import { useMemo } from 'react';
import katex from 'katex';

interface KatexPreviewProps {
  latex: string;
  displayMode?: boolean;
  className?: string;
}

function cleanLatex(latex: string): string {
  let cleaned = latex;

  // Remove common document structure commands
  const boilerplatePatterns = [
    /\\documentclass(\[.*?\])?\{.*?\}/g,
    /\\usepackage(\[.*?\])?\{.*?\}/g,
    /\\begin\{document\}/g,
    /\\end\{document\}/g,
    /\\title\{.*?\}/g,
    /\\author\{.*?\}/g,
    /\\date\{.*?\}/g,
    /\\maketitle/g,
    /\\section\*?\{.*?\}/g,
    /\\subsection\*?\{.*?\}/g,
    /\\paragraph\{.*?\}/g,
  ];

  for (const pattern of boilerplatePatterns) {
    cleaned = cleaned.replace(pattern, '');
  }

  // Extract content from display math delimiters
  const displayMathPatterns = [
    /\\\[([\s\S]*?)\\\]/g,
    /\$\$([\s\S]*?)\$\$/g,
    /\\begin\{equation\*?\}([\s\S]*?)\\end\{equation\*?\}/g,
    /\\begin\{align\*?\}([\s\S]*?)\\end\{align\*?\}/g,
    /\\begin\{gather\*?\}([\s\S]*?)\\end\{gather\*?\}/g,
    /\\begin\{multline\*?\}([\s\S]*?)\\end\{multline\*?\}/g,
  ];

  for (const pattern of displayMathPatterns) {
    const match = pattern.exec(cleaned);
    if (match && match[1]) {
      return match[1].trim();
    }
    pattern.lastIndex = 0;
  }

  const inlineMathMatch = /\$((?!\$)[\s\S]*?)\$/g.exec(cleaned);
  if (inlineMathMatch && inlineMathMatch[1]) {
    return inlineMathMatch[1].trim();
  }

  return cleaned.trim();
}

export default function KatexPreview({
  latex,
  displayMode = true,
  className = '',
}: KatexPreviewProps) {
  const { html, error } = useMemo(() => {
    if (!latex || !latex.trim()) {
      return { html: '', error: null };
    }

    try {
      const cleanedLatex = cleanLatex(latex);
      
      if (!cleanedLatex) {
        return { html: '', error: null };
      }

      const renderedHtml = katex.renderToString(cleanedLatex, {
        displayMode,
        throwOnError: false,
        errorColor: '#ef4444',
        trust: true,
        strict: false,
        macros: {
          '\\R': '\\mathbb{R}',
          '\\N': '\\mathbb{N}',
          '\\Z': '\\mathbb{Z}',
          '\\Q': '\\mathbb{Q}',
          '\\C': '\\mathbb{C}',
        },
      });

      return { html: renderedHtml, error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to render LaTeX';
      return { html: '', error: errorMessage };
    }
  }, [latex, displayMode]);

  if (error) {
    return (
      <div className={`rounded-lg bg-red-50 border border-red-200 p-4 ${className}`}>
        <p className="text-sm font-medium text-red-800 mb-1">LaTeX Rendering Error</p>
        <p className="text-sm text-red-600">{error}</p>
        <pre className="mt-2 text-xs bg-red-100 p-2 rounded overflow-auto">
          {latex}
        </pre>
      </div>
    );
  }

  if (!html) {
    return (
      <div className={`flex items-center justify-center h-full ${className}`}>
        <p className="text-gray-400">Enter an equation to see the preview</p>
      </div>
    );
  }

  return (
    <div
      className={`katex-preview overflow-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
