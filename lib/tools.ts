export interface Tool {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: string;
  badge?: string;
}

export const tools: Tool[] = [
  {
    id: 1,
    title: "Image to LaTeX",
    description: "Convert images to LaTeX format",
    href: "/tools/math-to-latex",
    icon: "🖼️",
  },
  {
    id: 2,
    title: "Excel to LaTeX",
    description: "Convert CSV, JSON, Excel to LaTeX tables",
    href: "/tools/table-to-latex",
    icon: "📊",
  },
  {
    id: 3,
    title: "TikZ Generator",
    description: "Generate TikZ diagrams with AI",
    href: "/tools/tikz-generator",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Image to TikZ",
    description: "Convert images to TikZ diagrams with AI",
    href: "/tools/image-to-tikz",
    icon: "📐",
  },
  {
    id: 5,
    title: "LaTeX Preview",
    description: "Live LaTeX editor with PDF preview",
    href: "/tools/latex-preview",
    icon: "👁️",
  },
  {
    id: 6,
    title: "Markdown to LaTeX",
    description: "Convert Markdown documents to LaTeX format",
    href: "/tools/markdown-to-latex",
    icon: "📝",
  },
  {
    id: 7,
    title: "Citation Generator",
    description: "Generate BibTeX citations from DOIs or article details",
    href: "/tools/citation-generator",
    icon: "📚",
  },
  {
    id: 8,
    title: "MathML to LaTeX",
    description: "Convert MathML markup to LaTeX format",
    href: "/tools/mathml-to-latex",
    icon: "🔤",
  },
  {
    id: 9,
    title: "AI LaTeX Generator",
    description: "Generate LaTeX code from text descriptions",
    href: "/tools/ai-latex-generator",
    icon: "✨",
  },
  {
    id: 10,
    title: "HTML to LaTeX",
    description: "Convert HTML markup to LaTeX format",
    href: "/tools/html-to-latex",
    icon: "🌐",
  },
  {
    id: 11,
    title: "Mermaid to LaTeX",
    description: "Convert Mermaid diagrams to LaTeX format",
    href: "/tools/mermaid-to-latex",
    icon: "🔷",
  },
  {
    id: 12,
    title: "Pgfplots Generator",
    description: "Generate pgfplots graphs and charts with AI",
    href: "/tools/pgfplots-generator",
    icon: "📈",
  },
  {
    id: 13,
    title: "LaTeX to Markdown",
    description: "Convert LaTeX documents or snippets to Markdown",
    href: "/tools/latex-to-markdown",
    icon: "🔁",
  },
  {
    id: 14,
    title: "Equation to LaTeX",
    description: "Convert math equations from text or images to LaTeX",
    href: "/tools/equation-to-latex",
    icon: "🔢",
  },
  {
    id: 15,
    title: "ArXiv to LaTeX",
    description: "Import arXiv papers directly into Octree",
    href: "/tools/arxiv-to-latex",
    icon: "📄",
  },
];
