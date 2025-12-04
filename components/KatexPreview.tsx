'use client';

import { useMemo } from 'react';
import katex from 'katex';

interface KatexPreviewProps {
  latex: string;
  displayMode?: boolean;
  className?: string;
}

function cleanLatex(latex: string): string[] {
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

  // Extract all content from display math delimiters
  const equations: string[] = [];
  
  const displayMathPatterns = [
    /\\\[([\s\S]*?)\\\]/g,
    /\$\$([\s\S]*?)\$\$/g,
    /\\begin\{equation\*?\}([\s\S]*?)\\end\{equation\*?\}/g,
    /\\begin\{align\*?\}([\s\S]*?)\\end\{align\*?\}/g,
    /\\begin\{gather\*?\}([\s\S]*?)\\end\{gather\*?\}/g,
    /\\begin\{multline\*?\}([\s\S]*?)\\end\{multline\*?\}/g,
  ];

  for (const pattern of displayMathPatterns) {
    let match;
    while ((match = pattern.exec(cleaned)) !== null) {
      if (match[1]?.trim()) {
        equations.push(match[1].trim());
      }
    }
  }

  if (equations.length > 0) {
    return equations;
  }

  // Try inline math as fallback
  const inlineMathPattern = /\$((?!\$)[\s\S]*?)\$/g;
  let match;
  while ((match = inlineMathPattern.exec(cleaned)) !== null) {
    if (match[1]?.trim()) {
      equations.push(match[1].trim());
    }
  }

  if (equations.length > 0) {
    return equations;
  }

  // Return the cleaned text as a single item if no math delimiters found
  const trimmed = cleaned.trim();
  return trimmed ? [trimmed] : [];
}

export default function KatexPreview({
  latex,
  displayMode = true,
  className = '',
}: KatexPreviewProps) {
  const { htmlParts, error } = useMemo(() => {
    if (!latex || !latex.trim()) {
      return { htmlParts: [], error: null };
    }

    try {
      const equations = cleanLatex(latex);
      
      if (equations.length === 0) {
        return { htmlParts: [], error: null };
      }

      const renderedParts = equations.map((eq) =>
        katex.renderToString(eq, {
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
        })
      );

      return { htmlParts: renderedParts, error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to render LaTeX';
      return { htmlParts: [], error: errorMessage };
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

  if (htmlParts.length === 0) {
    return (
      <div className={`flex items-center justify-center h-full ${className}`}>
        <p className="text-gray-400">Enter an equation to see the preview</p>
      </div>
    );
  }

  return (
    <div
      className={`katex-preview overflow-auto text-gray-900 ${className}`}
      style={{ color: '#111827' }}
    >
      {htmlParts.map((html, index) => (
        <div
          key={index}
          className="my-4 first:mt-0 last:mb-0"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ))}
    </div>
  );
}
