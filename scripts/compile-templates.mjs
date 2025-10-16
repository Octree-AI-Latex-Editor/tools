#!/usr/bin/env node

/**
 * Script to pre-compile LaTeX templates to PDFs
 * Run this script to generate static preview files for all templates
 * 
 * Usage: node scripts/compile-templates.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Template LaTeX code - synced from app/page.tsx templates array
const templates = [
  {
    id: 1,
    filename: 'research-paper.pdf',
    code: String.raw`\documentclass[conference]{IEEEtran}
\usepackage{cite}
\usepackage{amsmath,amssymb,amsfonts}
\usepackage{algorithmic}
\usepackage{graphicx}
\usepackage{textcomp}
\usepackage{xcolor}

\begin{document}

\title{Your Paper Title Here}

\author{\IEEEauthorblockN{First Author}
\IEEEauthorblockA{\textit{dept. name} \\
\textit{University Name}\\
City, Country \\
email@example.com}
\and
\IEEEauthorblockN{Second Author}
\IEEEauthorblockA{\textit{dept. name} \\
\textit{University Name}\\
City, Country \\
email@example.com}
}

\maketitle

\begin{abstract}
This document is a model for an IEEE/ACM conference paper.
\end{abstract}

\begin{IEEEkeywords}
keyword, keyword, keyword
\end{IEEEkeywords}

\section{Introduction}
Your introduction text here.

\section{Related Work}
Your related work here.

\section{Methodology}
Your methodology here.

\section{Results}
Your results here.

\section{Conclusion}
Your conclusion here.

\bibliographystyle{IEEEtran}
\bibliography{references}

\end{document}`,
  },
  {
    id: 2,
    filename: 'beamer-presentation.pdf',
    code: String.raw`\documentclass{beamer}
\usetheme{Madrid}
\usecolortheme{default}

\title{Presentation Title}
\author{Your Name}
\institute{Your Institution}
\date{\today}

\begin{document}

\frame{\titlepage}

\begin{frame}
\frametitle{Table of Contents}
\tableofcontents
\end{frame}

\section{Introduction}
\begin{frame}
\frametitle{Introduction}
\begin{itemize}
    \item First point
    \item Second point
    \item Third point
\end{itemize}
\end{frame}

\section{Main Content}
\begin{frame}
\frametitle{Main Slide}
Your content here
\end{frame}

\section{Conclusion}
\begin{frame}
\frametitle{Conclusion}
Summary of key points
\end{frame}

\begin{frame}
\frametitle{Questions?}
\centering
Thank you for your attention!
\end{frame}

\end{document}`,
  },
  {
    id: 3,
    filename: 'academic-cv.pdf',
    code: String.raw`\documentclass[11pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage{geometry}
\usepackage{enumitem}
\usepackage{hyperref}

\geometry{left=1in,right=1in,top=1in,bottom=1in}
\setlength{\parindent}{0pt}

\begin{document}

\begin{center}
{\LARGE \textbf{Your Name}}\\[0.2cm]
Email: your.email@example.com | Phone: (123) 456-7890\\
LinkedIn: linkedin.com/in/yourprofile | Website: yourwebsite.com
\end{center}

\section*{Education}
\textbf{Ph.D. in Computer Science} \hfill 2020 -- Present\\
University Name, City, Country

\textbf{M.S. in Computer Science} \hfill 2018 -- 2020\\
University Name, City, Country

\section*{Research Interests}
Machine Learning, Natural Language Processing, Computer Vision

\section*{Publications}
\begin{enumerate}[leftmargin=*]
\item Author1, Author2. "Paper Title." Conference Name, 2023.
\item Author1, Author2. "Paper Title." Journal Name, 2022.
\end{enumerate}

\section*{Experience}
\textbf{Research Assistant} \hfill 2020 -- Present\\
University Name, City, Country
\begin{itemize}[leftmargin=*]
\item Conducted research on topic X
\item Published Y papers
\end{itemize}

\section*{Skills}
\textbf{Programming:} Python, C++, Java\\
\textbf{Tools:} TensorFlow, PyTorch, Git

\section*{Awards}
Best Paper Award, Conference Name, 2023

\end{document}`,
  },
  {
    id: 4,
    filename: 'mathematical-document.pdf',
    code: String.raw`\documentclass{article}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{mathtools}

\newtheorem{theorem}{Theorem}
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{corollary}[theorem]{Corollary}
\newtheorem{definition}{Definition}

\title{Mathematical Document}
\author{Your Name}
\date{\today}

\begin{document}

\maketitle

\begin{abstract}
This document contains advanced mathematical notation.
\end{abstract}

\section{Introduction}
This is an example with inline math: $E = mc^2$.

\section{Theorems and Proofs}

\begin{theorem}
For any integers $a$ and $b$, if $a | b$ and $b | c$, then $a | c$.
\end{theorem}

\begin{proof}
Since $a | b$, there exists an integer $k$ such that $b = ka$.
Similarly, since $b | c$, there exists an integer $m$ such that $c = mb$.
Therefore, $c = m(ka) = (mk)a$, which shows $a | c$.
\end{proof}

\section{Equations}

Display equations:
\begin{equation}
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
\end{equation}

Aligned equations:
\begin{align}
f(x) &= x^2 + 2x + 1 \\
     &= (x + 1)^2
\end{align}

Matrix notation:
\[
A = \begin{pmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{pmatrix}
\]

\end{document}`,
  },
  {
    id: 5,
    filename: 'lab-report.pdf',
    code: String.raw`\documentclass[12pt]{article}
\usepackage{graphicx}
\usepackage{booktabs}
\usepackage{caption}
\usepackage{float}

\title{Lab Report: Experiment Title}
\author{Your Name\\Student ID: 12345}
\date{\today}

\begin{document}

\maketitle

\section{Objective}
State the purpose of the experiment.

\section{Theory}
Provide relevant background and equations.

\section{Apparatus and Materials}
\begin{itemize}
\item Item 1
\item Item 2
\item Item 3
\end{itemize}

\section{Procedure}
\begin{enumerate}
\item Step 1
\item Step 2
\item Step 3
\end{enumerate}

\section{Results}

\begin{table}[H]
\centering
\caption{Experimental Data}
\begin{tabular}{@{}ccc@{}}
\toprule
Trial & Measurement 1 & Measurement 2 \\
\midrule
1 & 10.5 & 15.3 \\
2 & 11.2 & 16.1 \\
3 & 10.8 & 15.7 \\
\bottomrule
\end{tabular}
\end{table}

\section{Discussion}
Analyze the results and discuss any errors.

\section{Conclusion}
Summarize the findings and state whether the objective was met.

\end{document}`,
  },
  {
    id: 6,
    filename: 'letter.pdf',
    code: String.raw`\documentclass{letter}
\usepackage[utf8]{inputenc}
\usepackage{hyperref}

\signature{Your Name}
\address{Your Address \\ City, State ZIP \\ Email: your.email@example.com}

\begin{document}

\begin{letter}{Recipient Name \\ Recipient Title \\ Organization \\ Address \\ City, State ZIP}

\opening{Dear Dr. Smith,}

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

\closing{Sincerely,}

\end{letter}

\end{document}`,
  },
  {
    id: 7,
    filename: 'book-chapter.pdf',
    code: String.raw`\documentclass[12pt]{report}
\usepackage{graphicx}
\usepackage{amsmath}
\usepackage{hyperref}

\title{Chapter Title}
\author{Your Name}

\begin{document}

\chapter{Introduction}

\section{Background}
Provide context and background information for this chapter.

\section{Motivation}
Explain why this topic is important.

\subsection{Problem Statement}
Clearly define the problem being addressed.

\subsection{Research Questions}
\begin{enumerate}
\item What is the first research question?
\item What is the second research question?
\end{enumerate}

\section{Contributions}
This chapter makes the following contributions:
\begin{itemize}
\item First contribution
\item Second contribution
\item Third contribution
\end{itemize}

\section{Organization}
The rest of this chapter is organized as follows. 
Section~\ref{sec:related} reviews related work.
Section~\ref{sec:method} describes the methodology.
Section~\ref{sec:results} presents the results.
Section~\ref{sec:conclusion} concludes.

\chapter{Related Work}
\label{sec:related}

Review relevant literature and previous work.

\chapter{Methodology}
\label{sec:method}

Describe your approach and methods.

\chapter{Results}
\label{sec:results}

Present your findings.

\chapter{Conclusion}
\label{sec:conclusion}

Summarize and discuss future work.

\end{document}`,
  },
  {
    id: 8,
    filename: 'algorithm-pseudocode.pdf',
    code: String.raw`\documentclass{article}
\usepackage{algorithm}
\usepackage{algpseudocode}
\usepackage{amsmath}

\title{Algorithm Examples}
\author{Your Name}

\begin{document}

\maketitle

\section{Introduction}
This document demonstrates algorithm pseudocode.

\begin{algorithm}
\caption{Binary Search}
\begin{algorithmic}[1]
\Procedure{BinarySearch}{$A, x, low, high$}
    \If{$low > high$}
        \State \Return $-1$
    \EndIf
    \State $mid \gets \lfloor(low + high) / 2\rfloor$
    \If{$A[mid] = x$}
        \State \Return $mid$
    \ElsIf{$A[mid] > x$}
        \State \Return \Call{BinarySearch}{$A, x, low, mid-1$}
    \Else
        \State \Return \Call{BinarySearch}{$A, x, mid+1, high$}
    \EndIf
\EndProcedure
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\caption{Quick Sort}
\begin{algorithmic}[1]
\Procedure{QuickSort}{$A, p, r$}
    \If{$p < r$}
        \State $q \gets$ \Call{Partition}{$A, p, r$}
        \State \Call{QuickSort}{$A, p, q-1$}
        \State \Call{QuickSort}{$A, q+1, r$}
    \EndIf
\EndProcedure
\end{algorithmic}
\end{algorithm}

\section{Complexity Analysis}
The time complexity is $O(n \log n)$ on average.

\end{document}`,
  },
  {
    id: 9,
    filename: 'resume.pdf',
    code: String.raw`\documentclass[letterpaper,11pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}

\pagestyle{fancy}
\fancyhf{}
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

\pdfgentounicode=1

\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeProjectHeading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & #2 \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

\begin{document}

\begin{center}
    \textbf{\Huge \scshape Jake Ryan} \\ \vspace{1pt}
    \small 123-456-7890 $|$ \href{mailto:jake@su.edu}{\underline{jake@su.edu}} $|$ 
    \href{https://linkedin.com/in/jake}{\underline{linkedin.com/in/jake}} $|$
    \href{https://github.com/jake}{\underline{github.com/jake}}
\end{center}

\section{Education}
  \resumeSubHeadingListStart
    \resumeSubheading
      {Southwestern University}{Georgetown, TX}
      {Bachelor of Arts in Computer Science, Minor in Business}{Aug. 2018 -- May 2021}
    \resumeSubheading
      {Blinn College}{Bryan, TX}
      {Associate's in Liberal Arts}{Aug. 2014 -- May 2018}
  \resumeSubHeadingListEnd

\section{Experience}
  \resumeSubHeadingListStart
    \resumeSubheading
      {Undergraduate Research Assistant}{June 2020 -- Present}
      {Texas A\&M University}{College Station, TX}
      \resumeItemListStart
        \resumeItem{Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems}
        \resumeItem{Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data}
        \resumeItem{Explored ways to visualize GitHub collaboration in a classroom setting}
      \resumeItemListEnd
    \resumeSubheading
      {Information Technology Support Specialist}{Sep. 2018 -- Present}
      {Southwestern University}{Georgetown, TX}
      \resumeItemListStart
        \resumeItem{Communicate with managers to set up campus computers used on campus}
        \resumeItem{Assess and troubleshoot computer problems brought by students, faculty and staff}
        \resumeItem{Maintain upkeep of computers, classroom equipment, and 200 printers across campus}
    \resumeItemListEnd
    \resumeSubheading
      {Artificial Intelligence Research Assistant}{May 2019 -- July 2019}
      {Southwestern University}{Georgetown, TX}
      \resumeItemListStart
        \resumeItem{Explored methods to generate video game dungeons based off of \emph{The Legend of Zelda}}
        \resumeItem{Developed a game in Java to test the generated dungeons}
        \resumeItem{Contributed 50K+ lines of code to an established codebase via Git}
        \resumeItem{Conducted a human subject study to determine which video game dungeon generation technique is enjoyable}
        \resumeItem{Wrote an 8-page paper and gave multiple presentations on-campus}
        \resumeItem{Presented virtually to the World Conference on Computational Intelligence}
      \resumeItemListEnd
  \resumeSubHeadingListEnd

\section{Projects}
    \resumeSubHeadingListStart
      \resumeProjectHeading
          {\textbf{Gitlytics} $|$ \emph{Python, Flask, React, PostgreSQL, Docker}}{June 2020 -- Present}
          \resumeItemListStart
            \resumeItem{Developed a full-stack web application using with Flask serving a REST API with React as the frontend}
            \resumeItem{Implemented GitHub OAuth to get data from user's repositories}
            \resumeItem{Visualized GitHub data to show collaboration}
            \resumeItem{Used Celery and Redis for asynchronous tasks}
          \resumeItemListEnd
      \resumeProjectHeading
          {\textbf{Simple Paintball} $|$ \emph{Spigot API, Java, Maven, TravisCI, Git}}{May 2018 -- May 2020}
          \resumeItemListStart
            \resumeItem{Developed a Minecraft server plugin to entertain kids during free time for a previous job}
            \resumeItem{Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review}
            \resumeItem{Implemented continuous delivery using TravisCI to build the plugin upon new a release}
            \resumeItem{Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin}
          \resumeItemListEnd
    \resumeSubHeadingListEnd

\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R} \\
     \textbf{Frameworks}{: React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI} \\
     \textbf{Developer Tools}{: Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse} \\
     \textbf{Libraries}{: pandas, NumPy, Matplotlib}
    }}
 \end{itemize}

\end{document}`,
  },
];

const COMPILE_SERVER_URL = 'http://142.93.195.236:3001/compile';
const OUTPUT_DIR = path.join(__dirname, '../public/templates');

async function compileTemplate(template) {
  console.log(`Compiling ${template.filename}...`);
  
  try {
    const response = await fetch(COMPILE_SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: template.code,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    // Response is the PDF buffer directly
    const pdfBuffer = await response.arrayBuffer();
    
    // Save to public/templates
    const outputPath = path.join(OUTPUT_DIR, template.filename);
    fs.writeFileSync(outputPath, Buffer.from(pdfBuffer));
    
    console.log(`✓ Saved ${template.filename}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to compile ${template.filename}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('Pre-compiling LaTeX templates...\n');
  
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let successCount = 0;
  let failCount = 0;

  for (const template of templates) {
    const success = await compileTemplate(template);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    
    // Add delay to avoid overwhelming the API
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log(`\n✓ Compiled ${successCount}/${templates.length} templates successfully`);
  if (failCount > 0) {
    console.log(`✗ ${failCount} template(s) failed to compile`);
    process.exit(1);
  }
}

main().catch(console.error);

