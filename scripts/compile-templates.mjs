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
  {
    id: 10,
    filename: 'assignment.pdf',
    code: String.raw`\documentclass[12pt]{article}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{fancyhdr}
\usepackage{enumerate}

\pagestyle{fancy}
\fancyhf{}
\lhead{Student Name}
\chead{Assignment Title}
\rhead{Due Date}
\cfoot{\thepage}

\setlength{\parindent}{0pt}
\setlength{\parskip}{10pt}

\begin{document}

\begin{center}
{\Large \textbf{Assignment 1: Introduction to Calculus}}\\[0.3cm]
Course: MATH 101 | Instructor: Dr. Smith | Due: October 20, 2025
\end{center}

\section*{Problem 1}
Find the derivative of $f(x) = 3x^2 + 5x - 2$.

\textbf{Solution:}\\
Using the power rule:
\begin{align*}
f'(x) &= \frac{d}{dx}(3x^2 + 5x - 2)\\
&= 3 \cdot 2x + 5 - 0\\
&= 6x + 5
\end{align*}

\section*{Problem 2}
Evaluate the following integral:
\[
\int (2x + 3) \, dx
\]

\textbf{Solution:}\\
Using the power rule for integration:
\[
\int (2x + 3) \, dx = x^2 + 3x + C
\]
where $C$ is the constant of integration.

\section*{Problem 3}
Solve the following limit:
\[
\lim_{x \to 2} \frac{x^2 - 4}{x - 2}
\]

\textbf{Solution:}\\
We can factor the numerator:
\begin{align*}
\lim_{x \to 2} \frac{x^2 - 4}{x - 2} &= \lim_{x \to 2} \frac{(x-2)(x+2)}{x - 2}\\
&= \lim_{x \to 2} (x + 2)\\
&= 4
\end{align*}

\section*{Problem 4}
Find the equation of the tangent line to $f(x) = x^3 - 2x$ at the point $(1, -1)$.

\textbf{Solution:}\\
First, find the derivative: $f'(x) = 3x^2 - 2$

At $x = 1$: $f'(1) = 3(1)^2 - 2 = 1$

Using point-slope form:
\begin{align*}
y - (-1) &= 1(x - 1)\\
y &= x - 2
\end{align*}

\end{document}`,
  },
  {
    id: 11,
    filename: 'worksheet.pdf',
    code: String.raw`\documentclass[12pt]{article}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{enumitem}

\setlength{\parindent}{0pt}

\begin{document}

\begin{center}
{\Large \textbf{Algebra Worksheet}}\\[0.2cm]
Name: \underline{\hspace{3in}} Date: \underline{\hspace{1.5in}}
\end{center}

\vspace{0.5cm}

\textbf{Instructions:} Solve each problem. Show all work for full credit.

\vspace{0.5cm}

\section*{Part A: Linear Equations}

\begin{enumerate}[leftmargin=*, itemsep=1.5cm]

\item Solve for $x$: $2x + 5 = 13$

\vspace{2cm}

\item Solve for $y$: $3y - 7 = 2y + 4$

\vspace{2cm}

\item Solve for $x$: $\frac{x}{4} + 2 = 7$

\vspace{2cm}

\end{enumerate}

\section*{Part B: Quadratic Equations}

\begin{enumerate}[leftmargin=*, itemsep=1.5cm, resume]

\item Factor completely: $x^2 + 5x + 6$

\vspace{2cm}

\item Solve using the quadratic formula: $x^2 - 3x - 4 = 0$

\vspace{3cm}

\item Find the vertex of $f(x) = x^2 - 4x + 3$

\vspace{2cm}

\end{enumerate}

\section*{Part C: Word Problems}

\begin{enumerate}[leftmargin=*, itemsep=2cm, resume]

\item A rectangle has a length that is 3 cm more than twice its width. If the perimeter is 48 cm, find the dimensions.

\vspace{3cm}

\item John is 5 years older than Mary. The sum of their ages is 35. How old is each person?

\vspace{3cm}

\end{enumerate}

\section*{Part D: Challenge Problems}

\begin{enumerate}[leftmargin=*, itemsep=2.5cm, resume]

\item Solve the system of equations:
\begin{align*}
2x + y &= 7\\
x - y &= 2
\end{align*}

\vspace{3cm}

\item Simplify: $(x^2 - 9) \div (x - 3)$

\end{enumerate}

\end{document}`,
  },
  {
    id: 12,
    filename: 'grading-rubric.pdf',
    code: String.raw`\documentclass[11pt]{article}
\usepackage[utf8]{inputenc}
\usepackage[margin=0.75in]{geometry}
\usepackage{array}
\usepackage{xcolor}
\usepackage{colortbl}

\setlength{\parindent}{0pt}

\begin{document}

\begin{center}
{\Large \textbf{Assignment Grading Rubric}}\\[0.3cm]
Course: CS 101 | Assignment: Final Project | Total Points: 100
\end{center}

\vspace{0.5cm}

\textbf{Student Name:} \underline{\hspace{3in}} \textbf{Score:} \underline{\hspace{0.5in}}/100

\vspace{0.5cm}

\begin{table}[h]
\renewcommand{\arraystretch}{1.5}
\begin{tabular}{|p{2.5cm}|p{2.5cm}|p{2.5cm}|p{2.5cm}|p{2.5cm}|p{1.5cm}|}
\hline
\rowcolor{gray!30}
\textbf{Criteria} & \textbf{Excellent (4)} & \textbf{Good (3)} & \textbf{Fair (2)} & \textbf{Poor (1)} & \textbf{Score} \\
\hline

\textbf{Content \& Accuracy} (20 pts) & 
All information accurate and comprehensive & 
Most information accurate and complete & 
Some inaccuracies or gaps & 
Major errors or missing content & 
\underline{\hspace{0.5cm}}/20 \\
\hline

\textbf{Organization} (15 pts) & 
Excellent structure, logical flow & 
Good structure, mostly clear & 
Some organization issues & 
Poorly organized & 
\underline{\hspace{0.5cm}}/15 \\
\hline

\textbf{Technical Implementation} (25 pts) & 
Code works perfectly, well-documented & 
Code works with minor issues & 
Code has significant bugs & 
Code doesn't work & 
\underline{\hspace{0.5cm}}/25 \\
\hline

\textbf{Analysis \& Critical Thinking} (15 pts) & 
Deep analysis and insight & 
Good analysis & 
Basic analysis & 
Little to no analysis & 
\underline{\hspace{0.5cm}}/15 \\
\hline

\textbf{Presentation \& Style} (10 pts) & 
Professional, clear, engaging & 
Well-presented & 
Adequate presentation & 
Poor presentation & 
\underline{\hspace{0.5cm}}/10 \\
\hline

\textbf{Citations \& References} (10 pts) & 
All sources cited properly & 
Most sources cited & 
Some citations missing & 
Few or no citations & 
\underline{\hspace{0.5cm}}/10 \\
\hline

\textbf{Creativity \& Innovation} (5 pts) & 
Highly creative approach & 
Some creativity shown & 
Limited creativity & 
No creativity & 
\underline{\hspace{0.5cm}}/5 \\
\hline

\end{tabular}
\end{table}

\vspace{0.5cm}

\textbf{Deductions:}
\begin{itemize}
\item Late submission: \underline{\hspace{0.5cm}} points
\item Formatting issues: \underline{\hspace{0.5cm}} points
\item Other: \underline{\hspace{0.5cm}} points
\end{itemize}

\vspace{0.5cm}

\textbf{Strengths:}\\
\underline{\hspace{\textwidth}}\\
\underline{\hspace{\textwidth}}\\
\underline{\hspace{\textwidth}}

\vspace{0.5cm}

\textbf{Areas for Improvement:}\\
\underline{\hspace{\textwidth}}\\
\underline{\hspace{\textwidth}}\\
\underline{\hspace{\textwidth}}

\vspace{0.5cm}

\textbf{Additional Comments:}\\
\underline{\hspace{\textwidth}}\\
\underline{\hspace{\textwidth}}\\
\underline{\hspace{\textwidth}}

\vspace{1cm}

\textbf{Grader:} \underline{\hspace{2in}} \textbf{Date:} \underline{\hspace{1.5in}}

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

