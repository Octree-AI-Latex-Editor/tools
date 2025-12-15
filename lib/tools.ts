import {
  Image,
  Table,
  Workflow,
  Shapes,
  Eye,
  FileText,
  BookOpen,
  Calculator,
  Sparkles,
  Code,
  GitBranch,
  LineChart,
  ArrowRightLeft,
  Sigma,
  FileDown,
  type LucideIcon,
} from "lucide-react";

export interface Tool {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

export const tools: Tool[] = [
  {
    id: 1,
    title: "Image to LaTeX",
    description: "Convert images to LaTeX format",
    href: "/tools/math-to-latex",
    icon: Image,
  },
  {
    id: 2,
    title: "Excel to LaTeX",
    description: "Convert CSV, JSON, Excel to LaTeX tables",
    href: "/tools/table-to-latex",
    icon: Table,
  },
  {
    id: 3,
    title: "TikZ Generator",
    description: "Generate TikZ diagrams with AI",
    href: "/tools/tikz-generator",
    icon: Workflow,
  },
  {
    id: 4,
    title: "Image to TikZ",
    description: "Convert images to TikZ diagrams with AI",
    href: "/tools/image-to-tikz",
    icon: Shapes,
  },
  {
    id: 5,
    title: "LaTeX Preview",
    description: "Live LaTeX editor with PDF preview",
    href: "/tools/latex-preview",
    icon: Eye,
  },
  {
    id: 6,
    title: "Markdown to LaTeX",
    description: "Convert Markdown documents to LaTeX format",
    href: "/tools/markdown-to-latex",
    icon: FileText,
  },
  {
    id: 7,
    title: "Citation Generator",
    description: "Generate BibTeX citations from DOIs or article details",
    href: "/tools/citation-generator",
    icon: BookOpen,
  },
  {
    id: 8,
    title: "MathML to LaTeX",
    description: "Convert MathML markup to LaTeX format",
    href: "/tools/mathml-to-latex",
    icon: Calculator,
  },
  {
    id: 9,
    title: "AI LaTeX Generator",
    description: "Generate LaTeX code from text descriptions",
    href: "/tools/ai-latex-generator",
    icon: Sparkles,
  },
  {
    id: 10,
    title: "HTML to LaTeX",
    description: "Convert HTML markup to LaTeX format",
    href: "/tools/html-to-latex",
    icon: Code,
  },
  {
    id: 11,
    title: "Mermaid to LaTeX",
    description: "Convert Mermaid diagrams to LaTeX format",
    href: "/tools/mermaid-to-latex",
    icon: GitBranch,
  },
  {
    id: 12,
    title: "Pgfplots Generator",
    description: "Generate pgfplots graphs and charts with AI",
    href: "/tools/pgfplots-generator",
    icon: LineChart,
  },
  {
    id: 13,
    title: "LaTeX to Markdown",
    description: "Convert LaTeX documents or snippets to Markdown",
    href: "/tools/latex-to-markdown",
    icon: ArrowRightLeft,
  },
  {
    id: 14,
    title: "Equation to LaTeX",
    description: "Convert math equations from text or images to LaTeX",
    href: "/tools/equation-to-latex",
    icon: Sigma,
  },
  {
    id: 15,
    title: "ArXiv to LaTeX",
    description: "Import arXiv papers directly into Octree",
    href: "/tools/arxiv-to-latex",
    icon: FileDown,
  },
];

// Type for dictionary with tool translations
type ToolDictionary = {
  toolsSpecific?: Record<string, { title: string; description: string }>;
  toolsList?: Record<string, { title: string; description: string }>;
};

/**
 * Get localized tools based on dictionary
 * Falls back to English if translation is missing
 */
export function getLocalizedTools(dict?: ToolDictionary): Tool[] {
  // Use toolsSpecific if available (existing structure), otherwise use toolsList
  const translations = dict?.toolsSpecific || dict?.toolsList;
  
  if (!translations) {
    return tools;
  }

  // Map href to dictionary key
  const hrefToKey: Record<string, string> = {
    '/tools/math-to-latex': 'imageToLatex',
    '/tools/table-to-latex': 'tableToLatex',
    '/tools/tikz-generator': 'tikzGenerator',
    '/tools/image-to-tikz': 'imageToTikz',
    '/tools/latex-preview': 'latexPreview',
    '/tools/markdown-to-latex': 'markdownToLatex',
    '/tools/citation-generator': 'citationGenerator',
    '/tools/mathml-to-latex': 'mathmlToLatex',
    '/tools/ai-latex-generator': 'aiLatexGenerator',
    '/tools/html-to-latex': 'htmlToLatex',
    '/tools/mermaid-to-latex': 'mermaidToLatex',
    '/tools/pgfplots-generator': 'pgfplotsGenerator',
    '/tools/latex-to-markdown': 'latexToMarkdown',
    '/tools/equation-to-latex': 'equationToLatex',
    '/tools/arxiv-to-latex': 'pdfToLatex', // Fallback for arxiv
  };

  return tools.map((tool) => {
    const key = hrefToKey[tool.href];
    const translation = key ? translations[key] : undefined;

    return {
      ...tool,
      title: translation?.title || tool.title,
      description: translation?.description || tool.description,
    };
  });
}
