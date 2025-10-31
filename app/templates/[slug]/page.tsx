'use client';

import { useState, useEffect, use } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { openInOctree } from '@/lib/open-in-octree';
import { OctreeLogo } from '@/components/icons/octree-logo';
import { loader } from '@monaco-editor/react';
import {
  latexLanguageConfiguration,
  latexTokenProvider,
  registerLatexCompletions,
} from '@/lib/editor-config';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });
const PDFPreview = dynamic(() => import('@/components/PDFPreview'), { ssr: false });

const templates = [
  {
    id: 1,
    title: "Research Paper",
    description: "IEEE/ACM conference paper template with sections",
    icon: "📄",
    slug: "research-paper",
    code: `\\documentclass[conference]{IEEEtran}
\\usepackage{cite}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage{algorithmic}
\\usepackage{graphicx}
\\usepackage{textcomp}
\\usepackage{xcolor}

\\title{Your Paper Title Here}
\\author{\\IEEEauthorblockN{Author Name}
\\IEEEauthorblockA{\\textit{Department Name} \\\\
\\textit{University Name}\\\\
City, Country \\\\
email@example.com}}

\\begin{document}

\\maketitle

\\begin{abstract}
This is the abstract of your paper. It should provide a brief summary of the main contributions and findings.
\\end{abstract}

\\section{Introduction}
Your introduction goes here. Introduce the problem and your approach.

\\section{Related Work}
Discuss previous work in this area.

\\section{Methodology}
Describe your methods and approach.

\\section{Results}
Present your experimental results.

\\section{Conclusion}
Summarize your contributions and future work.

\\bibliographystyle{IEEEtran}
\\bibliography{references}

\\end{document}`,
  },
  {
    id: 2,
    title: "Presentation (Beamer)",
    description: "Professional slide deck template",
    icon: "📊",
    slug: "beamer-presentation",
    code: `\\documentclass{beamer}
\\usetheme{Madrid}
\\usecolortheme{default}

\\title{Presentation Title}
\\subtitle{Subtitle (if needed)}
\\author{Your Name}
\\institute{Your Institution}
\\date{\\today}

\\begin{document}

\\frame{\\titlepage}

\\begin{frame}
\\frametitle{Outline}
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
\\frametitle{Main Content}
Your main content goes here.
\\end{frame}

\\section{Conclusion}
\\begin{frame}
\\frametitle{Conclusion}
Summary of key points.
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
    slug: "academic-cv",
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
    slug: "mathematical-document",
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
Since $a | b$, there exists an integer $k$ such that $b = ak$. 
Similarly, since $b | c$, there exists an integer $m$ such that $c = bm$.
Therefore, $c = (ak)m = a(km)$, which shows that $a | c$.
\\end{proof}

\\section{Equations}

Display equations:
\\begin{equation}
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
\\end{equation}

Matrix example:
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
    description: "Scientific lab report template",
    icon: "🔬",
    slug: "lab-report",
    code: `\\documentclass[12pt]{article}
\\usepackage{graphicx}
\\usepackage{amsmath}
\\usepackage{cite}

\\title{Lab Report: [Experiment Name]}
\\author{Your Name\\\\Student ID: 123456}
\\date{\\today}

\\begin{document}

\\maketitle

\\section{Objective}
State the purpose and objectives of the experiment.

\\section{Theory}
Provide the theoretical background and relevant equations.

\\section{Apparatus and Materials}
List all equipment and materials used.

\\section{Procedure}
Describe the experimental procedure step by step.

\\section{Results and Observations}
Present your data, tables, and graphs here.

\\begin{table}[h]
\\centering
\\begin{tabular}{|c|c|}
\\hline
Parameter & Value \\\\
\\hline
X & 10.5 \\\\
Y & 20.3 \\\\
\\hline
\\end{tabular}
\\caption{Experimental Data}
\\end{table}

\\section{Discussion}
Analyze and interpret your results.

\\section{Conclusion}
Summarize findings and their significance.

\\section{References}
List all references used.

\\end{document}`,
  },
  {
    id: 6,
    title: "Book Chapter",
    description: "Book or thesis chapter template",
    icon: "📖",
    slug: "book-chapter",
    code: `\\documentclass[12pt]{book}
\\usepackage[utf8]{inputenc}
\\usepackage{graphicx}
\\usepackage{amsmath}

\\title{Book Title}
\\author{Author Name}
\\date{\\today}

\\begin{document}

\\frontmatter
\\maketitle
\\tableofcontents

\\mainmatter

\\chapter{Introduction}
This is the introduction chapter.

\\section{Background}
Background information goes here.

\\section{Motivation}
Explain the motivation for this work.

\\chapter{Main Content}

\\section{First Section}
Content of first section.

\\subsection{Subsection}
Detailed content here.

\\section{Second Section}
More content here.

\\chapter{Conclusion}
Final thoughts and future directions.

\\backmatter

\\bibliographystyle{plain}
\\bibliography{references}

\\end{document}`,
  },
  {
    id: 7,
    title: "Resume",
    description: "Professional resume template (Jake's format)",
    icon: "📝",
    slug: "resume",
    code: `\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\input{glyphtounicode}

\\pagestyle{fancy}
\\fancyhf{}
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

\\pdfgentounicode=1

\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & #2 \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

\\begin{document}

\\begin{center}
    \\textbf{\\Huge \\scshape Jake Ryan} \\\\ \\vspace{1pt}
    \\small 123-456-7890 $|$ \\href{mailto:jake@su.edu}{\\underline{jake@su.edu}} $|$ 
    \\href{https://linkedin.com/in/jake}{\\underline{linkedin.com/in/jake}} $|$
    \\href{https://github.com/jake}{\\underline{github.com/jake}}
\\end{center}

\\section{Education}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {Southwestern University}{Georgetown, TX}
      {Bachelor of Arts in Computer Science, Minor in Business}{Aug. 2018 -- May 2021}
    \\resumeSubheading
      {Blinn College}{Bryan, TX}
      {Associate's in Liberal Arts}{Aug. 2014 -- May 2018}
  \\resumeSubHeadingListEnd

\\section{Experience}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {Undergraduate Research Assistant}{June 2020 -- Present}
      {Texas A\\&M University}{College Station, TX}
      \\resumeItemListStart
        \\resumeItem{Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems}
        \\resumeItem{Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data}
        \\resumeItem{Explored ways to visualize GitHub collaboration in a classroom setting}
      \\resumeItemListEnd
    \\resumeSubheading
      {Information Technology Support Specialist}{Sep. 2018 -- Present}
      {Southwestern University}{Georgetown, TX}
      \\resumeItemListStart
        \\resumeItem{Communicate with managers to set up campus computers used on campus}
        \\resumeItem{Assess and troubleshoot computer problems brought by students, faculty and staff}
        \\resumeItem{Maintain upkeep of computers, classroom equipment, and 200 printers across campus}
    \\resumeItemListEnd
    \\resumeSubheading
      {Artificial Intelligence Research Assistant}{May 2019 -- July 2019}
      {Southwestern University}{Georgetown, TX}
      \\resumeItemListStart
        \\resumeItem{Explored methods to generate video game dungeons based off of \\emph{The Legend of Zelda}}
        \\resumeItem{Developed a game in Java to test the generated dungeons}
        \\resumeItem{Contributed 50K+ lines of code to an established codebase via Git}
        \\resumeItem{Conducted a human subject study to determine which video game dungeon generation technique is enjoyable}
        \\resumeItem{Wrote an 8-page paper and gave multiple presentations on-campus}
        \\resumeItem{Presented virtually to the World Conference on Computational Intelligence}
      \\resumeItemListEnd
  \\resumeSubHeadingListEnd

\\section{Projects}
    \\resumeSubHeadingListStart
      \\resumeProjectHeading
          {\\textbf{Gitlytics} $|$ \\emph{Python, Flask, React, PostgreSQL, Docker}}{June 2020 -- Present}
          \\resumeItemListStart
            \\resumeItem{Developed a full-stack web application using with Flask serving a REST API with React as the frontend}
            \\resumeItem{Implemented GitHub OAuth to get data from user's repositories}
            \\resumeItem{Visualized GitHub data to show collaboration}
            \\resumeItem{Used Celery and Redis for asynchronous tasks}
          \\resumeItemListEnd
      \\resumeProjectHeading
          {\\textbf{Simple Paintball} $|$ \\emph{Spigot API, Java, Maven, TravisCI, Git}}{May 2018 -- May 2020}
          \\resumeItemListStart
            \\resumeItem{Developed a Minecraft server plugin to entertain kids during free time for a previous job}
            \\resumeItem{Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review}
            \\resumeItem{Implemented continuous delivery using TravisCI to build the plugin upon new a release}
            \\resumeItem{Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin}
          \\resumeItemListEnd
    \\resumeSubHeadingListEnd

\\section{Technical Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{Languages}{: Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R} \\\\
     \\textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI} \\\\
     \\textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse} \\\\
     \\textbf{Libraries}{: pandas, NumPy, Matplotlib}
    }}
 \\end{itemize}

\\end{document}`,
  },
  {
    id: 8,
    title: "Grading Rubric",
    description: "Assessment criteria and grading template",
    icon: "✓",
    slug: "grading-rubric",
    code: `\\documentclass[11pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[margin=0.75in]{geometry}
\\usepackage{array}
\\usepackage{xcolor}
\\usepackage{colortbl}

\\setlength{\\parindent}{0pt}

\\begin{document}

\\begin{center}
{\\Large \\textbf{Assignment Grading Rubric}}\\\\[0.3cm]
Course: CS 101 | Assignment: Final Project | Total Points: 100
\\end{center}

\\vspace{0.5cm}

\\textbf{Student Name:} \\underline{\\hspace{3in}} \\textbf{Score:} \\underline{\\hspace{0.5in}}/100

\\vspace{0.5cm}

\\begin{table}[h]
\\renewcommand{\\arraystretch}{1.5}
\\begin{tabular}{|p{2.5cm}|p{2.5cm}|p{2.5cm}|p{2.5cm}|p{2.5cm}|p{1.5cm}|}
\\hline
\\rowcolor{gray!30}
\\textbf{Criteria} & \\textbf{Excellent (4)} & \\textbf{Good (3)} & \\textbf{Fair (2)} & \\textbf{Poor (1)} & \\textbf{Score} \\\\
\\hline

\\textbf{Content \\& Accuracy} (20 pts) & 
All information accurate and comprehensive & 
Most information accurate and complete & 
Some inaccuracies or gaps & 
Major errors or missing content & 
\\underline{\\hspace{0.5cm}}/20 \\\\
\\hline

\\textbf{Organization} (15 pts) & 
Excellent structure, logical flow & 
Good structure, mostly clear & 
Some organization issues & 
Poorly organized & 
\\underline{\\hspace{0.5cm}}/15 \\\\
\\hline

\\textbf{Technical Implementation} (25 pts) & 
Code works perfectly, well-documented & 
Code works with minor issues & 
Code has significant bugs & 
Code doesn't work & 
\\underline{\\hspace{0.5cm}}/25 \\\\
\\hline

\\textbf{Analysis \\& Critical Thinking} (15 pts) & 
Deep analysis and insight & 
Good analysis & 
Basic analysis & 
Little to no analysis & 
\\underline{\\hspace{0.5cm}}/15 \\\\
\\hline

\\textbf{Presentation \\& Style} (10 pts) & 
Professional, clear, engaging & 
Well-presented & 
Adequate presentation & 
Poor presentation & 
\\underline{\\hspace{0.5cm}}/10 \\\\
\\hline

\\textbf{Citations \\& References} (10 pts) & 
All sources cited properly & 
Most sources cited & 
Some citations missing & 
Few or no citations & 
\\underline{\\hspace{0.5cm}}/10 \\\\
\\hline

\\textbf{Creativity \\& Innovation} (5 pts) & 
Highly creative approach & 
Some creativity shown & 
Limited creativity & 
No creativity & 
\\underline{\\hspace{0.5cm}}/5 \\\\
\\hline

\\end{tabular}
\\end{table}

\\vspace{0.5cm}

\\textbf{Deductions:}
\\begin{itemize}
\\item Late submission: \\underline{\\hspace{0.5cm}} points
\\item Formatting issues: \\underline{\\hspace{0.5cm}} points
\\item Other: \\underline{\\hspace{0.5cm}} points
\\end{itemize}

\\vspace{0.5cm}

\\textbf{Strengths:}\\\\
\\underline{\\hspace{\\textwidth}}\\\\
\\underline{\\hspace{\\textwidth}}\\\\
\\underline{\\hspace{\\textwidth}}

\\vspace{0.5cm}

\\textbf{Areas for Improvement:}\\\\
\\underline{\\hspace{\\textwidth}}\\\\
\\underline{\\hspace{\\textwidth}}\\\\
\\underline{\\hspace{\\textwidth}}

\\vspace{0.5cm}

\\textbf{Additional Comments:}\\\\
\\underline{\\hspace{\\textwidth}}\\\\
\\underline{\\hspace{\\textwidth}}\\\\
\\underline{\\hspace{\\textwidth}}

\\vspace{1cm}

\\textbf{Grader:} \\underline{\\hspace{2in}} \\textbf{Date:} \\underline{\\hspace{1.5in}}

\\end{document}`,
  },
  {
    id: 9,
    title: "Assignment",
    description: "Homework and assignment template",
    icon: "📚",
    slug: "assignment",
    code: `\\documentclass[12pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[margin=1in]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{fancyhdr}
\\usepackage{enumerate}

\\pagestyle{fancy}
\\fancyhf{}
\\lhead{Student Name}
\\chead{Assignment Title}
\\rhead{Due Date}
\\cfoot{\\thepage}

\\setlength{\\parindent}{0pt}
\\setlength{\\parskip}{10pt}

\\begin{document}

\\begin{center}
{\\Large \\textbf{Assignment 1: Introduction to Calculus}}\\\\[0.3cm]
Course: MATH 101 | Instructor: Dr. Smith | Due: October 20, 2025
\\end{center}

\\section*{Problem 1}
Find the derivative of $f(x) = 3x^2 + 5x - 2$.

\\textbf{Solution:}\\\\
Using the power rule:
\\begin{align*}
f'(x) &= \\frac{d}{dx}(3x^2 + 5x - 2)\\\\
&= 3 \\cdot 2x + 5 - 0\\\\
&= 6x + 5
\\end{align*}

\\section*{Problem 2}
Evaluate the following integral:
\\[
\\int (2x + 3) \\, dx
\\]

\\textbf{Solution:}\\\\
Using the power rule for integration:
\\[
\\int (2x + 3) \\, dx = x^2 + 3x + C
\\]
where $C$ is the constant of integration.

\\section*{Problem 3}
Solve the following limit:
\\[
\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}
\\]

\\textbf{Solution:}\\\\
We can factor the numerator:
\\begin{align*}
\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} &= \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2}\\\\
&= \\lim_{x \\to 2} (x + 2)\\\\
&= 4
\\end{align*}

\\section*{Problem 4}
Find the equation of the tangent line to $f(x) = x^3 - 2x$ at the point $(1, -1)$.

\\textbf{Solution:}\\\\
First, find the derivative: $f'(x) = 3x^2 - 2$

At $x = 1$: $f'(1) = 3(1)^2 - 2 = 1$

Using point-slope form:
\\begin{align*}
y - (-1) &= 1(x - 1)\\\\
y &= x - 2
\\end{align*}

\\end{document}`,
  },
  {
    id: 10,
    title: "Worksheet",
    description: "Practice problems and exercises template",
    icon: "✏️",
    slug: "worksheet",
    code: `\\documentclass[12pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[margin=1in]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{enumitem}

\\setlength{\\parindent}{0pt}

\\begin{document}

\\begin{center}
{\\Large \\textbf{Algebra Worksheet}}\\\\[0.2cm]
Name: \\underline{\\hspace{3in}} Date: \\underline{\\hspace{1.5in}}
\\end{center}

\\vspace{0.5cm}

\\textbf{Instructions:} Solve each problem. Show all work for full credit.

\\vspace{0.5cm}

\\section*{Part A: Linear Equations}

\\begin{enumerate}[leftmargin=*, itemsep=1.5cm]

\\item Solve for $x$: $2x + 5 = 13$

\\vspace{2cm}

\\item Solve for $y$: $3y - 7 = 2y + 4$

\\vspace{2cm}

\\item Solve for $x$: $\\frac{x}{4} + 2 = 7$

\\vspace{2cm}

\\end{enumerate}

\\section*{Part B: Quadratic Equations}

\\begin{enumerate}[leftmargin=*, itemsep=1.5cm, resume]

\\item Factor completely: $x^2 + 5x + 6$

\\vspace{2cm}

\\item Solve using the quadratic formula: $x^2 - 3x - 4 = 0$

\\vspace{3cm}

\\item Find the vertex of $f(x) = x^2 - 4x + 3$

\\vspace{2cm}

\\end{enumerate}

\\section*{Part C: Word Problems}

\\begin{enumerate}[leftmargin=*, itemsep=2cm, resume]

\\item A rectangle has a length that is 3 cm more than twice its width. If the perimeter is 48 cm, find the dimensions.

\\vspace{3cm}

\\item John is 5 years older than Mary. The sum of their ages is 35. How old is each person?

\\vspace{3cm}

\\end{enumerate}

\\section*{Part D: Challenge Problems}

\\begin{enumerate}[leftmargin=*, itemsep=2.5cm, resume]

\\item Solve the system of equations:
\\begin{align*}
2x + y &= 7\\\\
x - y &= 2
\\end{align*}

\\vspace{3cm}

\\item Simplify: $(x^2 - 9) \\div (x - 3)$

\\end{enumerate}

\\end{document}`,
  },
];

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
  const compileLatex = async (latex: string) => {
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
  };

  // Initial compile when template loads
  useEffect(() => {
    if (template?.code && mounted) {
      compileLatex(template.code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [template?.code, mounted]);

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

