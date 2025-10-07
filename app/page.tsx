'use client';

import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";

const tools = [
  {
    id: 1,
    title: "Image to LaTeX",
    description: "Convert images to LaTeX format",
    href: "/tools/math-to-latex",
    icon: "🖼️",
  },
  // {
  //   id: 2,
  //   title: "PDF to LaTeX",
  //   description: "Convert PDF documents to LaTeX format",
  //   href: "/tools/pdf-to-latex",
  //   icon: "📄",
  // },
  {
    id: 3,
    title: "Excel to LaTeX",
    description: "Convert CSV, JSON, Excel to LaTeX tables",
    href: "/tools/table-to-latex",
    icon: "📊",
  },
  {
    id: 4,
    title: "TikZ Generator",
    description: "Generate TikZ diagrams with AI",
    href: "/tools/tikz-generator",
    icon: "🎨",
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
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = tools.filter((tool) =>
    tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-light text-gray-900">Free LaTeX Tools</h1>
              <p className="text-sm text-gray-500 mt-1">
                Convert handwritten math equations, formulas, and expressions to LaTeX code instantly
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search tools..."
            />
          </div>
        </div>

        {/* Tools Grid */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {filteredTools.map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className="block hover:bg-gray-50 transition-colors"
              >
                <div className="px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{tool.icon}</div>
                      <div>
                        <h3 className="text-base font-normal text-gray-900">
                          {tool.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
