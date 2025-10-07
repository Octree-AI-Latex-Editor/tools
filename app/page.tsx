'use client';

import Link from "next/link";
import { useState } from "react";
import { Search, FileText, Copy, Check } from "lucide-react";
import dynamic from 'next/dynamic';
import { openInOctree } from '@/lib/open-in-octree';
import { OctreeLogo } from '@/components/icons/octree-logo';

const PDFPreview = dynamic(() => import("@/components/PDFPreview"), { ssr: false });

type TabType = 'tools' | 'templates';

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

const templates = [
  {
    id: 1,
    title: "Research Paper",
    description: "IEEE/ACM conference paper template with sections",
    icon: "📄",
    previewUrl: "/templates/research-paper.pdf",
    code: `\\documentclass[conference]{IEEEtran}
\\usepackage{cite}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage{algorithmic}
\\usepackage{graphicx}
\\usepackage{textcomp}
\\usepackage{xcolor}

\\begin{document}

\\title{Your Paper Title Here}

\\author{\\IEEEauthorblockN{First Author}
\\IEEEauthorblockA{\\textit{dept. name} \\\\
\\textit{University Name}\\\\
City, Country \\\\
email@example.com}
\\and
\\IEEEauthorblockN{Second Author}
\\IEEEauthorblockA{\\textit{dept. name} \\\\
\\textit{University Name}\\\\
City, Country \\\\
email@example.com}
}

\\maketitle

\\begin{abstract}
This document is a model for an IEEE/ACM conference paper.
\\end{abstract}

\\begin{IEEEkeywords}
keyword, keyword, keyword
\\end{IEEEkeywords}

\\section{Introduction}
Your introduction text here.

\\section{Related Work}
Your related work here.

\\section{Methodology}
Your methodology here.

\\section{Results}
Your results here.

\\section{Conclusion}
Your conclusion here.

\\bibliographystyle{IEEEtran}
\\bibliography{references}

\\end{document}`,
  },
  {
    id: 2,
    title: "Beamer Presentation",
    description: "Modern presentation slides with themes",
    icon: "📊",
    previewUrl: "/templates/beamer-presentation.pdf",
    code: `\\documentclass{beamer}
\\usetheme{Madrid}
\\usecolortheme{default}

\\title{Presentation Title}
\\author{Your Name}
\\institute{Your Institution}
\\date{\\today}

\\begin{document}

\\frame{\\titlepage}

\\begin{frame}
\\frametitle{Table of Contents}
\\tableofcontents
\\end{frame}

\\section{Introduction}
\\begin{frame}
\\frametitle{Introduction}
\\begin{itemize}
    \\item First point
    \\item Second point
    \\item Third point
\\end{itemize}
\\end{frame}

\\section{Main Content}
\\begin{frame}
\\frametitle{Main Slide}
Your content here
\\end{frame}

\\section{Conclusion}
\\begin{frame}
\\frametitle{Conclusion}
Summary of key points
\\end{frame}

\\begin{frame}
\\frametitle{Questions?}
\\centering
Thank you for your attention!
\\end{frame}

\\end{document}`,
  },
  {
    id: 3,
    title: "Academic CV",
    description: "Professional curriculum vitae template",
    icon: "📋",
    previewUrl: "/templates/academic-cv.pdf",
    code: `\\documentclass[11pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage{geometry}
\\usepackage{enumitem}
\\usepackage{hyperref}

\\geometry{left=1in,right=1in,top=1in,bottom=1in}
\\setlength{\\parindent}{0pt}

\\begin{document}

\\begin{center}
{\\LARGE \\textbf{Your Name}}\\\\[0.2cm]
Email: your.email@example.com | Phone: (123) 456-7890\\\\
LinkedIn: linkedin.com/in/yourprofile | Website: yourwebsite.com
\\end{center}

\\section*{Education}
\\textbf{Ph.D. in Computer Science} \\hfill 2020 -- Present\\\\
University Name, City, Country

\\textbf{M.S. in Computer Science} \\hfill 2018 -- 2020\\\\
University Name, City, Country

\\section*{Research Interests}
Machine Learning, Natural Language Processing, Computer Vision

\\section*{Publications}
\\begin{enumerate}[leftmargin=*]
\\item Author1, Author2. "Paper Title." Conference Name, 2023.
\\item Author1, Author2. "Paper Title." Journal Name, 2022.
\\end{enumerate}

\\section*{Experience}
\\textbf{Research Assistant} \\hfill 2020 -- Present\\\\
University Name, City, Country
\\begin{itemize}[leftmargin=*]
\\item Conducted research on topic X
\\item Published Y papers
\\end{itemize}

\\section*{Skills}
\\textbf{Programming:} Python, C++, Java\\\\
\\textbf{Tools:} TensorFlow, PyTorch, Git

\\section*{Awards}
Best Paper Award, Conference Name, 2023

\\end{document}`,
  },
  {
    id: 4,
    title: "Mathematical Document",
    description: "Document with advanced math equations",
    icon: "∑",
    previewUrl: "/templates/mathematical-document.pdf",
    code: `\\documentclass{article}
\\usepackage{amsmath,amssymb,amsthm}
\\usepackage{mathtools}

\\newtheorem{theorem}{Theorem}
\\newtheorem{lemma}[theorem]{Lemma}
\\newtheorem{corollary}[theorem]{Corollary}
\\newtheorem{definition}{Definition}

\\title{Mathematical Document}
\\author{Your Name}
\\date{\\today}

\\begin{document}

\\maketitle

\\begin{abstract}
This document contains advanced mathematical notation.
\\end{abstract}

\\section{Introduction}
This is an example with inline math: $E = mc^2$.

\\section{Theorems and Proofs}

\\begin{theorem}
For any integers $a$ and $b$, if $a | b$ and $b | c$, then $a | c$.
\\end{theorem}

\\begin{proof}
Since $a | b$, there exists an integer $k$ such that $b = ka$.
Similarly, since $b | c$, there exists an integer $m$ such that $c = mb$.
Therefore, $c = m(ka) = (mk)a$, which shows $a | c$.
\\end{proof}

\\section{Equations}

Display equations:
\\begin{equation}
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
\\end{equation}

Aligned equations:
\\begin{align}
f(x) &= x^2 + 2x + 1 \\\\
     &= (x + 1)^2
\\end{align}

Matrix notation:
\\[
A = \\begin{pmatrix}
a_{11} & a_{12} \\\\
a_{21} & a_{22}
\\end{pmatrix}
\\]

\\end{document}`,
  },
  {
    id: 5,
    title: "Lab Report",
    description: "Scientific lab report with figures and tables",
    icon: "🔬",
    previewUrl: "/templates/lab-report.pdf",
    code: `\\documentclass[12pt]{article}
\\usepackage{graphicx}
\\usepackage{booktabs}
\\usepackage{caption}
\\usepackage{float}

\\title{Lab Report: Experiment Title}
\\author{Your Name\\\\Student ID: 12345}
\\date{\\today}

\\begin{document}

\\maketitle

\\section{Objective}
State the purpose of the experiment.

\\section{Theory}
Provide relevant background and equations.

\\section{Apparatus and Materials}
\\begin{itemize}
\\item Item 1
\\item Item 2
\\item Item 3
\\end{itemize}

\\section{Procedure}
\\begin{enumerate}
\\item Step 1
\\item Step 2
\\item Step 3
\\end{enumerate}

\\section{Results}

\\begin{table}[H]
\\centering
\\caption{Experimental Data}
\\begin{tabular}{@{}ccc@{}}
\\toprule
Trial & Measurement 1 & Measurement 2 \\\\
\\midrule
1 & 10.5 & 15.3 \\\\
2 & 11.2 & 16.1 \\\\
3 & 10.8 & 15.7 \\\\
\\bottomrule
\\end{tabular}
\\end{table}

\\section{Discussion}
Analyze the results and discuss any errors.

\\section{Conclusion}
Summarize the findings and state whether the objective was met.

\\end{document}`,
  },
  {
    id: 6,
    title: "Letter",
    description: "Formal letter template",
    icon: "✉️",
    previewUrl: "/templates/letter.pdf",
    code: `\\documentclass{letter}
\\usepackage[utf8]{inputenc}
\\usepackage{hyperref}

\\signature{Your Name}
\\address{Your Address \\\\ City, State ZIP \\\\ Email: your.email@example.com}

\\begin{document}

\\begin{letter}{Recipient Name \\\\ Recipient Title \\\\ Organization \\\\ Address \\\\ City, State ZIP}

\\opening{Dear Dr. Smith,}

I am writing to express my interest in the research position at your laboratory. 
With my background in computer science and three years of experience in machine 
learning research, I believe I would be a strong addition to your team.

In my current role as a research assistant at University Name, I have focused on 
natural language processing and deep learning. My work has resulted in two 
publications in top-tier conferences.

I am particularly excited about your recent work on neural architecture search. 
My experience with AutoML systems would allow me to contribute immediately to 
this project.

Thank you for considering my application. I look forward to the opportunity to 
discuss how my skills and experience align with your research goals.

\\closing{Sincerely,}

\\end{letter}

\\end{document}`,
  },
  {
    id: 7,
    title: "Book Chapter",
    description: "Book or thesis chapter with sections",
    icon: "📖",
    previewUrl: "/templates/book-chapter.pdf",
    code: `\\documentclass[12pt]{report}
\\usepackage{graphicx}
\\usepackage{amsmath}
\\usepackage{hyperref}

\\title{Chapter Title}
\\author{Your Name}

\\begin{document}

\\chapter{Introduction}

\\section{Background}
Provide context and background information for this chapter.

\\section{Motivation}
Explain why this topic is important.

\\subsection{Problem Statement}
Clearly define the problem being addressed.

\\subsection{Research Questions}
\\begin{enumerate}
\\item What is the first research question?
\\item What is the second research question?
\\end{enumerate}

\\section{Contributions}
This chapter makes the following contributions:
\\begin{itemize}
\\item First contribution
\\item Second contribution
\\item Third contribution
\\end{itemize}

\\section{Organization}
The rest of this chapter is organized as follows. 
Section~\\ref{sec:related} reviews related work.
Section~\\ref{sec:method} describes the methodology.
Section~\\ref{sec:results} presents the results.
Section~\\ref{sec:conclusion} concludes.

\\chapter{Related Work}
\\label{sec:related}

Review relevant literature and previous work.

\\chapter{Methodology}
\\label{sec:method}

Describe your approach and methods.

\\chapter{Results}
\\label{sec:results}

Present your findings.

\\chapter{Conclusion}
\\label{sec:conclusion}

Summarize and discuss future work.

\\end{document}`,
  },
  {
    id: 8,
    title: "Algorithm Pseudocode",
    description: "Computer science algorithm template",
    icon: "⚙️",
    previewUrl: "/templates/algorithm-pseudocode.pdf",
    code: `\\documentclass{article}
\\usepackage{algorithm}
\\usepackage{algpseudocode}
\\usepackage{amsmath}

\\title{Algorithm Examples}
\\author{Your Name}

\\begin{document}

\\maketitle

\\section{Introduction}
This document demonstrates algorithm pseudocode.

\\begin{algorithm}
\\caption{Binary Search}
\\begin{algorithmic}[1]
\\Procedure{BinarySearch}{$A, x, low, high$}
    \\If{$low > high$}
        \\State \\Return $-1$
    \\EndIf
    \\State $mid \\gets \\lfloor(low + high) / 2\\rfloor$
    \\If{$A[mid] = x$}
        \\State \\Return $mid$
    \\ElsIf{$A[mid] > x$}
        \\State \\Return \\Call{BinarySearch}{$A, x, low, mid-1$}
    \\Else
        \\State \\Return \\Call{BinarySearch}{$A, x, mid+1, high$}
    \\EndIf
\\EndProcedure
\\end{algorithmic}
\\end{algorithm}

\\begin{algorithm}
\\caption{Quick Sort}
\\begin{algorithmic}[1]
\\Procedure{QuickSort}{$A, p, r$}
    \\If{$p < r$}
        \\State $q \\gets$ \\Call{Partition}{$A, p, r$}
        \\State \\Call{QuickSort}{$A, p, q-1$}
        \\State \\Call{QuickSort}{$A, q+1, r$}
    \\EndIf
\\EndProcedure
\\end{algorithmic}
\\end{algorithm}

\\section{Complexity Analysis}
The time complexity is $O(n \\log n)$ on average.

\\end{document}`,
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<TabType>('tools');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredTools = tools.filter((tool) =>
    tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTemplates = templates.filter((template) =>
    template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const copyToClipboard = (code: string, templateId: number) => {
    navigator.clipboard.writeText(code);
    setCopiedId(templateId);
    setTimeout(() => setCopiedId(null), 2000);
  };

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

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('tools')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'tools'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Tools
              </button>
              <button
                onClick={() => setActiveTab('templates')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                  activeTab === 'templates'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FileText className="h-4 w-4" />
                Templates
              </button>
            </nav>
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
              placeholder={activeTab === 'tools' ? "Search tools..." : "Search templates..."}
            />
          </div>
        </div>

        {/* Content */}
        {activeTab === 'tools' ? (
          /* Tools Grid */
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
        ) : (
          /* Templates Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all"
              >
                {/* PDF Preview */}
                <div className="relative h-80 bg-gray-50 overflow-hidden">
                  <div className="w-full h-full">
                    <PDFPreview pdfUrl={template.previewUrl} width={350} compact={true} />
                  </div>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm z-10">
                    <span className="text-xl">{template.icon}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {template.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {template.description}
                  </p>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => copyToClipboard(template.code, template.id)}
                      className="p-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      title="Copy LaTeX code"
                    >
                      {copiedId === template.id ? (
                        <Check className="h-5 w-5 text-green-600" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                    <button
                      onClick={() => openInOctree({ 
                        latex: template.code, 
                        title: template.title,
                        source: 'tools:templates'
                      })}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-900 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      <OctreeLogo className="h-5 w-5" />
                      Open in Octree
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
