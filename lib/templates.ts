// Single source of truth for all LaTeX templates
// Used by both frontend and compilation script

export type TemplateCategory =
  | "Academic"
  | "Presentations"
  | "Resume & CV"
  | "Math"
  | "Reports"
  | "Business"
  | "Letters"
  | "Education"
  | "Other";

export interface Template {
  id: number;
  title: string;
  description: string;
  slug: string;
  previewUrl: string;
  code: string;
  category: TemplateCategory;
}

export const templateCategories: { name: TemplateCategory | "All Templates"; count?: number }[] = [
  { name: "All Templates" },
  { name: "Academic" },
  { name: "Presentations" },
  { name: "Resume & CV" },
  { name: "Math" },
  { name: "Reports" },
  { name: "Business" },
  { name: "Letters" },
  { name: "Education" },
  { name: "Other" },
];

export const templates: Template[] = [
  {
    id: 1,
    title: "Research Paper",
    description: "IEEE-style research paper template",
    slug: "research-paper",
    previewUrl: "/templates/research-paper.pdf",
    category: "Academic",
    code: String.raw`\documentclass[conference]{IEEEtran}
\usepackage{amsmath,amssymb}
\usepackage{graphicx}
\usepackage{cite}

\title{Research Paper Title}
\author{\IEEEauthorblockN{Author Name}
\IEEEauthorblockA{Department\\
University Name\\
Email: author@university.edu}}

\begin{document}

\maketitle

\begin{abstract}
This paper presents a novel approach to [research topic]. Our method achieves significant improvements over existing techniques.
\end{abstract}

\section{Introduction}
Research in [field] has shown that [context].

\section{Related Work}
Previous studies have explored [related work].

\section{Methodology}
Our approach consists of [methodology].

\section{Results}
\begin{figure}[h]
\centering
\caption{Results visualization}
\end{figure}

\section{Conclusion}
We have demonstrated [conclusion].

\begin{thebibliography}{9}
\bibitem{ref1} Author, A. (2023). Title. \textit{Journal}, 1(1), 1-10.
\end{thebibliography}

\end{document}`,
  },
  {
    id: 2,
    title: "Beamer Presentation",
    description: "Academic presentation slides",
    slug: "beamer-presentation",
    previewUrl: "/templates/beamer-presentation.pdf",
    category: "Presentations",
    code: String.raw`\documentclass{beamer}
\usetheme{Madrid}
\usecolortheme{default}

\title{Presentation Title}
\author{Your Name}
\institute{University Name}
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
\item Point 1
\item Point 2
\item Point 3
\end{itemize}
\end{frame}

\section{Main Content}
\begin{frame}
\frametitle{Main Topic}
Content goes here.
\end{frame}

\section{Conclusion}
\begin{frame}
\frametitle{Conclusion}
Summary of key points.
\end{frame}

\end{document}`,
  },
  {
    id: 3,
    title: "Academic CV",
    description: "Professional academic curriculum vitae",
    slug: "academic-cv",
    previewUrl: "/templates/academic-cv.pdf",
    category: "Resume & CV",
    code: String.raw`\documentclass[11pt,a4paper]{article}
\usepackage[margin=1in]{geometry}
\usepackage{enumitem}
\usepackage{hyperref}

\begin{document}

\begin{center}
{\LARGE \textbf{Your Name}}\\[2mm]
Department | University | Email | Website
\end{center}

\section*{Education}
\begin{itemize}[leftmargin=*]
\item \textbf{Ph.D. in Computer Science}, University Name, 2020
\item \textbf{M.S. in Computer Science}, University Name, 2016
\item \textbf{B.S. in Computer Science}, University Name, 2014
\end{itemize}

\section*{Research Interests}
Machine Learning, Artificial Intelligence, Computer Vision

\section*{Publications}
\begin{enumerate}
\item Author, A. (2023). Paper Title. \textit{Conference/Journal}.
\end{enumerate}

\section*{Teaching Experience}
\textbf{Course Name} - University Name (Year)

\section*{Awards}
\begin{itemize}
\item Award Name, Year
\end{itemize}

\end{document}`,
  },
  {
    id: 4,
    title: "Mathematical Document",
    description: "Math-heavy document with theorems",
    slug: "mathematical-document",
    previewUrl: "/templates/mathematical-document.pdf",
    category: "Math",
    code: String.raw`\documentclass{article}
\usepackage{amsmath,amsthm,amssymb}
\usepackage[margin=1in]{geometry}

\newtheorem{theorem}{Theorem}
\newtheorem{lemma}{Lemma}
\newtheorem{definition}{Definition}

\title{Mathematical Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\begin{abstract}
This document presents mathematical results.
\end{abstract}

\section{Introduction}
Let $f: \mathbb{R} \to \mathbb{R}$ be a function.

\begin{definition}
A function $f$ is continuous if...
\end{definition}

\begin{theorem}
For all $x \in \mathbb{R}$, we have:
\[ \int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2} \]
\end{theorem}

\begin{proof}
The proof follows from...
\end{proof}

\section{Main Results}
Consider the equation:
\begin{equation}
\frac{dy}{dx} = f(x,y)
\end{equation}

\end{document}`,
  },
  {
    id: 5,
    title: "Lab Report",
    description: "Scientific lab report template",
    slug: "lab-report",
    previewUrl: "/templates/lab-report.pdf",
    category: "Reports",
    code: String.raw`\documentclass[12pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{graphicx}
\usepackage{amsmath}

\title{Lab Report: Experiment Title}
\author{Student Name\\Lab Partner: Partner Name}
\date{\today}

\begin{document}
\maketitle

\section{Objective}
The purpose of this experiment is to...

\section{Theory}
The theoretical background includes...

\section{Materials and Methods}
\subsection{Materials}
\begin{itemize}
\item Item 1
\item Item 2
\end{itemize}

\subsection{Procedure}
\begin{enumerate}
\item Step 1
\item Step 2
\end{enumerate}

\section{Results}
\begin{table}[h]
\centering
\caption{Experimental Data}
\begin{tabular}{|c|c|}
\hline
Trial & Result \\
\hline
1 & Value \\
2 & Value \\
\hline
\end{tabular}
\end{table}

\section{Discussion}
The results indicate...

\section{Conclusion}
In conclusion...

\end{document}`,
  },
  {
    id: 6,
    title: "Book Chapter",
    description: "Book or thesis chapter template",
    slug: "book-chapter",
    previewUrl: "/templates/book-chapter.pdf",
    category: "Academic",
    code: String.raw`\documentclass[12pt]{report}
\usepackage[margin=1in]{geometry}
\usepackage{graphicx}

\title{Book Title}
\author{Author Name}

\begin{document}

\chapter{Chapter Title}

\section{Introduction}
This chapter discusses...

\section{Background}
Previous research has shown...

\subsection{Subsection Title}
More detailed information...

\section{Main Content}
The key concepts include:
\begin{itemize}
\item Point 1
\item Point 2
\end{itemize}

\section{Conclusion}
This chapter has presented...

\end{document}`,
  },
  {
    id: 7,
    title: "Resume",
    description: "Professional resume template",
    slug: "resume",
    previewUrl: "/templates/resume.pdf",
    category: "Resume & CV",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=0.75in]{geometry}
\usepackage{enumitem}
\usepackage{hyperref}

\pagestyle{empty}

\begin{document}

\begin{center}
{\LARGE \textbf{Your Name}}\\[2mm]
Phone | Email | LinkedIn | GitHub
\end{center}

\section*{Experience}
\textbf{Job Title} \hfill Company Name | City, State | Dates\\
\begin{itemize}[noitemsep]
\item Achieved X by doing Y
\item Led team of Z people
\end{itemize}

\section*{Education}
\textbf{Degree} \hfill University Name | Graduation Date\\
Major, GPA: X.XX

\section*{Skills}
\textbf{Programming:} Python, Java, C++\\
\textbf{Tools:} Git, Docker, AWS

\section*{Projects}
\textbf{Project Name}\\
Description of project and technologies used.

\end{document}`,
  },
  {
    id: 8,
    title: "Grading Rubric",
    description: "Assessment criteria and grading template",
    slug: "grading-rubric",
    previewUrl: "/templates/grading-rubric.pdf",
    category: "Education",
    code: String.raw`\documentclass{article}
\usepackage[margin=1in]{geometry}
\usepackage{array}
\usepackage{xcolor}

\title{Assignment Grading Rubric}
\author{Course Name}
\date{}

\begin{document}
\maketitle

\section*{Grading Criteria}

\begin{table}[h]
\centering
\begin{tabular}{|p{3cm}|p{2cm}|p{8cm}|}
\hline
\textbf{Criterion} & \textbf{Points} & \textbf{Description} \\
\hline
Content & 40 & Demonstrates understanding of concepts \\
\hline
Organization & 20 & Well-structured and logical flow \\
\hline
Writing Quality & 20 & Clear, concise, proper grammar \\
\hline
Citations & 10 & Proper citation format \\
\hline
Formatting & 10 & Follows assignment guidelines \\
\hline
\textbf{Total} & \textbf{100} & \\
\hline
\end{tabular}
\end{table}

\section*{Grading Scale}
\begin{itemize}
\item A: 90-100
\item B: 80-89
\item C: 70-79
\item D: 60-69
\item F: Below 60
\end{itemize}

\end{document}`,
  },
  {
    id: 9,
    title: "Assignment",
    description: "Homework and assignment template",
    slug: "assignment",
    previewUrl: "/templates/assignment.pdf",
    category: "Education",
    code: String.raw`\documentclass{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath}
\usepackage{enumitem}

\title{Assignment Title}
\author{Course Name}
\date{Due Date}

\begin{document}
\maketitle

\section{Instructions}
Complete all problems. Show your work for full credit.

\section{Problems}

\subsection*{Problem 1}
Question text here.

\textbf{Solution:}

\subsection*{Problem 2}
Another question.

\textbf{Solution:}

\subsection*{Problem 3}
Mathematical problem:
\[ \int_0^1 x^2 dx = ? \]

\textbf{Solution:}

\section{Submission Guidelines}
Submit via course portal by due date.

\end{document}`,
  },
  {
    id: 10,
    title: "Worksheet",
    description: "Practice problems and exercises template",
    slug: "worksheet",
    previewUrl: "/templates/worksheet.pdf",
    category: "Education",
    code: String.raw`\documentclass{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath}
\usepackage{multicol}

\title{Practice Worksheet}
\author{Topic Name}
\date{}

\begin{document}
\maketitle

\section{Practice Problems}

\begin{enumerate}
\item Solve for $x$: $2x + 5 = 13$

\vspace{2cm}

\item Simplify: $(x^2 + 3x - 4)/(x - 1)$

\vspace{2cm}

\item Calculate: $\int_0^{\pi} \sin(x) dx$

\vspace{2cm}

\item Find the derivative of $f(x) = x^3 + 2x^2 - 5x + 1$

\vspace{2cm}

\item Solve the system:
\begin{align*}
2x + y &= 5\\
x - y &= 1
\end{align*}

\vspace{2cm}

\end{enumerate}

\end{document}`,
  },
  {
    id: 11,
    title: "Homework Template",
    description: "Structured homework assignment",
    slug: "homework",
    previewUrl: "/templates/homework.pdf",
    category: "Education",
    code: String.raw`\documentclass[12pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{fancyhdr}
\usepackage{enumitem}

\pagestyle{fancy}
\fancyhf{}
\lhead{Course Number}
\chead{Homework X}
\rhead{Due Date}
\cfoot{\thepage}

\title{Homework Assignment X}
\author{Student Name\\Student ID}
\date{\today}

\begin{document}

\maketitle

\section*{Problem 1}
\textbf{Question:} Solve the following equation for $x$:
\[ 3x^2 - 7x + 2 = 0 \]

\textbf{Solution:}
Using the quadratic formula:
\[ x = \frac{7 \pm \sqrt{49 - 24}}{6} = \frac{7 \pm 5}{6} \]

Therefore, $x = 2$ or $x = \frac{1}{3}$.

\section*{Problem 2}
\textbf{Question:} Prove that $\sqrt{2}$ is irrational.

\textbf{Solution:}
Assume $\sqrt{2}$ is rational. Then $\sqrt{2} = \frac{p}{q}$ where $p,q$ are integers...

\section*{Problem 3}
\textbf{Question:} Calculate the following integral:
\[ \int_0^{\pi/2} \cos(x) dx \]

\textbf{Solution:}
\[ \int_0^{\pi/2} \cos(x) dx = [\sin(x)]_0^{\pi/2} = 1 - 0 = 1 \]

\end{document}`,
  },
  {
    id: 12,
    title: "Research Poster",
    description: "Academic conference poster template",
    slug: "poster",
    previewUrl: "/templates/poster.pdf",
    category: "Presentations",
    code: String.raw`\documentclass[25pt,a0paper,portrait]{tikzposter}
\usepackage{amsmath}

\title{Research Title}
\author{Author Names}
\institute{University Name}

\begin{document}

\maketitle

\block{Abstract}{
This research investigates [topic]. Our findings show [results].
}

\begin{columns}
\column{0.5}
\block{Introduction}{
Background information and motivation for the research.
}

\block{Methods}{
\begin{itemize}
\item Method 1
\item Method 2
\item Method 3
\end{itemize}
}

\column{0.5}
\block{Results}{
Key findings and data visualization.
}

\block{Conclusion}{
Summary of contributions and future work.
}
\end{columns}

\block{References}{
[1] Author et al. (2023). Paper title. Journal.
}

\end{document}`,
  },
  {
    id: 13,
    title: "PhD Thesis",
    description: "Comprehensive thesis template with chapters",
    slug: "thesis",
    previewUrl: "/templates/thesis.pdf",
    category: "Academic",
    code: String.raw`\documentclass[12pt,oneside]{book}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amsthm,amssymb}
\usepackage{graphicx}
\usepackage{setspace}
\doublespacing

\title{Thesis Title}
\author{Your Name}
\date{Month Year}

\begin{document}

\frontmatter
\maketitle

\chapter*{Abstract}
This thesis presents...

\tableofcontents

\mainmatter

\chapter{Introduction}
\section{Background}
The field of [subject] has...

\section{Research Questions}
This thesis addresses:
\begin{enumerate}
\item Question 1
\item Question 2
\end{enumerate}

\chapter{Literature Review}
Previous work has shown...

\chapter{Methodology}
Our approach consists of...

\chapter{Results}
The findings indicate...

\chapter{Discussion}
These results suggest...

\chapter{Conclusion}
In conclusion...

\backmatter
\begin{thebibliography}{99}
\bibitem{ref1} Author, A. (2023). Title. Journal.
\end{thebibliography}

\end{document}`,
  },
  {
    id: 14,
    title: "Formal Letter",
    description: "Professional business letter template",
    slug: "letter",
    previewUrl: "/templates/letter.pdf",
    category: "Letters",
    code: String.raw`\documentclass[11pt]{letter}
\usepackage[margin=1in]{geometry}

\signature{Your Name}
\address{Your Address\\City, State ZIP}

\begin{document}

\begin{letter}{Recipient Name\\Company/Organization\\Address\\City, State ZIP}

\opening{Dear Recipient Name,}

I am writing to [purpose of letter]. This letter serves to [main point].

In the first paragraph, provide context and introduction to your purpose.

In the second paragraph, provide supporting details, evidence, or explanation.

In the final paragraph, restate your main point and indicate next steps or call to action.

\closing{Sincerely,}

\end{letter}

\end{document}`,
  },
  {
    id: 15,
    title: "Algorithm Pseudocode",
    description: "Algorithm documentation with pseudocode",
    slug: "algorithm",
    previewUrl: "/templates/algorithm.pdf",
    category: "Math",
    code: String.raw`\documentclass[12pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{algorithm}
\usepackage{algpseudocode}
\usepackage{listings}
\usepackage{xcolor}

\title{Algorithm Documentation: \\
{[}Algorithm Name{]}}
\author{Your Name}
\date{\today}

\begin{document}

\maketitle

\section{Overview}
This document presents the [Algorithm Name] algorithm for solving [problem].

\section{Algorithm Description}

\begin{algorithm}
\caption{Algorithm Name}
\begin{algorithmic}[1]
\Procedure{AlgorithmName}{$input$}
    \State $result \gets 0$
    \State $n \gets \text{length}(input)$
    \For{$i \gets 1$ \textbf{to} $n$}
        \If{$condition$}
            \State $result \gets result + input[i]$
        \Else
            \State $result \gets result - input[i]$
        \EndIf
    \EndFor
    \State \Return $result$
\EndProcedure
\end{algorithmic}
\end{algorithm}

\subsection{Complexity Analysis}
\begin{itemize}
\item \textbf{Time Complexity:} $O(n)$ where $n$ is the size of input
\item \textbf{Space Complexity:} $O(1)$ constant extra space
\end{itemize}

\section{Example}
\subsection{Input}
\texttt{input = [1, 2, 3, 4, 5]}

\subsection{Output}
\texttt{result = 15}

\end{document}`,
  },
  {
    id: 16,
    title: "Cover Letter",
    description: "Professional academic and job application cover letter",
    slug: "cover-letter",
    previewUrl: "/templates/cover-letter.pdf",
    category: "Resume & CV",
    code: String.raw`\documentclass[11pt]{letter}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}

\signature{Your Name}
\address{Your Address\\City, State ZIP\\Phone: (555) 123-4567\\Email: your.email@example.com}

\begin{document}

\begin{letter}{Hiring Manager\\Company Name\\Company Address\\City, State ZIP}

\opening{Dear Hiring Manager,}

I am writing to express my strong interest in the [Position Title] position at [Company Name]. With my background in [field] and [X] years of experience in [relevant area], I am confident I would make a valuable contribution to your team.

In my current role at [Current Company], I have successfully [achievement 1], [achievement 2], and [achievement 3]. These experiences have equipped me with [relevant skills] that directly align with the requirements of this position.

I am particularly drawn to [Company Name] because of [specific reason about company]. I am excited about the opportunity to [what you hope to contribute].

I would welcome the opportunity to discuss how my background, skills, and enthusiasm can contribute to [Company Name]'s continued success. Thank you for considering my application.

\closing{Sincerely,}

\end{letter}

\end{document}`,
  },
  {
    id: 17,
    title: "Journal Article",
    description: "Academic journal article template with sections",
    slug: "journal-article",
    previewUrl: "/templates/journal-article.pdf",
    category: "Academic",
    code: String.raw`\documentclass[12pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx}
\usepackage{natbib}
\usepackage{authblk}

\title{Article Title: An Investigation of [Topic]}
\author[1]{First Author}
\author[2]{Second Author}
\affil[1]{Department, University Name}
\affil[2]{Department, University Name}

\begin{document}

\maketitle

\begin{abstract}
This study examines [research question]. Our findings reveal [main result] with implications for [field].
\end{abstract}

\textbf{Keywords:} keyword1, keyword2, keyword3

\section{Introduction}
Research in [field] has demonstrated [background]. However, questions remain about [gap].

\section{Literature Review}
Previous studies have investigated [related work] \citep{citation}.

\section{Methodology}
\subsection{Participants}
The study included N participants.

\subsection{Procedure}
Data was collected using [method].

\section{Results}
Our analysis revealed [findings].

\section{Discussion}
These results suggest [interpretation].

\section{Conclusion}
This research contributes [contribution] to the field.

\bibliographystyle{apalike}
\bibliography{references}

\end{document}`,
  },
  {
    id: 18,
    title: "Course Syllabus",
    description: "Comprehensive course syllabus template",
    slug: "syllabus",
    previewUrl: "/templates/syllabus.pdf",
    category: "Education",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}
\usepackage{array}
\usepackage{xcolor}

\definecolor{headercolor}{RGB}{0,51,102}

\title{\textbf{Course Name: Course Number}}
\author{Instructor Name\\Department\\Email: instructor@university.edu}
\date{Semester Year}

\begin{document}

\maketitle

\section*{Course Information}
\textbf{Time:} Monday/Wednesday 10:00-11:30 AM\\
\textbf{Location:} Room 123\\
\textbf{Office Hours:} Tuesday 2-4 PM or by appointment

\section*{Course Description}
This course provides an introduction to [subject]. Students will learn [objectives].

\section*{Learning Objectives}
By the end of this course, students will be able to:
\begin{enumerate}
\item Objective 1
\item Objective 2
\item Objective 3
\end{enumerate}

\section*{Required Materials}
\begin{itemize}
\item Textbook: Title by Author
\item Additional readings provided online
\end{itemize}

\section*{Grading}
\begin{tabular}{lr}
Homework (weekly) & 30\% \\
Midterm Exam & 25\% \\
Final Exam & 25\% \\
Project & 20\% \\
\end{tabular}

\section*{Course Schedule}
\begin{center}
\begin{tabular}{|l|l|l|}
\hline
\textbf{Week} & \textbf{Topic} & \textbf{Assignment} \\
\hline
1 & Introduction & Reading Chapter 1 \\
2 & Topic 2 & HW 1 Due \\
\hline
\end{tabular}
\end{center}

\section*{Course Policies}
\textbf{Attendance:} Regular attendance is expected.\\
\textbf{Late Work:} 10\% deduction per day late.\\
\textbf{Academic Integrity:} All work must be your own.

\end{document}`,
  },
  {
    id: 19,
    title: "Research Proposal",
    description: "Grant and research proposal template",
    slug: "research-proposal",
    previewUrl: "/templates/research-proposal.pdf",
    category: "Academic",
    code: String.raw`\documentclass[12pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath}
\usepackage{graphicx}
\usepackage{natbib}

\title{Research Proposal:\\
{[}Project Title{]}}
\author{Principal Investigator: Your Name\\
Department, University\\
Email: your.email@university.edu}
\date{\today}

\begin{document}

\maketitle

\section{Abstract}
This proposal seeks funding for [project]. The research will [objectives] with expected outcomes of [results].

\section{Background and Significance}
The field of [area] faces challenges in [problem]. This research is significant because [importance].

\section{Specific Aims}
\textbf{Aim 1:} [First aim]\\
\textbf{Aim 2:} [Second aim]\\
\textbf{Aim 3:} [Third aim]

\section{Research Design and Methods}
\subsection{Approach}
We will employ [methodology] to [objective].

\subsection{Data Collection}
Data will be collected through [methods].

\subsection{Analysis Plan}
We will analyze data using [statistical methods].

\section{Expected Outcomes}
This research will produce [deliverables] and contribute [impact].

\section{Timeline}
\begin{itemize}
\item Year 1: [Activities]
\item Year 2: [Activities]
\item Year 3: [Activities]
\end{itemize}

\section{Budget}
\begin{tabular}{lr}
Personnel & \$XXX,XXX \\
Equipment & \$XX,XXX \\
Travel & \$X,XXX \\
\textbf{Total} & \$XXX,XXX \\
\end{tabular}

\bibliographystyle{plain}
\bibliography{references}

\end{document}`,
  },
  {
    id: 20,
    title: "Academic Essay",
    description: "Structured essay with argument and analysis",
    slug: "essay",
    previewUrl: "/templates/essay.pdf",
    category: "Academic",
    code: String.raw`\documentclass[12pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{setspace}
\usepackage{natbib}
\doublespacing

\title{Essay Title: An Analysis of [Topic]}
\author{Student Name\\Course Name\\Professor Name}
\date{\today}

\begin{document}

\maketitle

\section*{Introduction}

The question of [topic] has been a subject of considerable debate in [field]. While some scholars argue [position A], others contend [position B]. This essay argues that [thesis statement]. Through examination of [evidence], this analysis will demonstrate [main argument].

The significance of this topic extends beyond [narrow context] to [broader implications]. Understanding [topic] is essential because [importance].

\section*{First Main Point}

To begin, [first argument]. As \citet{author} argues, "[quote]" (p. XX). This perspective is supported by [evidence].

Moreover, [supporting point]. The relationship between [concept A] and [concept B] reveals [insight].

\section*{Second Main Point}

Furthermore, [second argument]. Research by \citet{author2} demonstrates [finding].

\section*{Counterarguments}

While the evidence strongly supports the thesis, it is important to consider opposing viewpoints. Some scholars argue [counterargument] \citep{citationcounter}.

However, this critique overlooks [response]. When these limitations are considered, [how your argument remains stronger].

\section*{Conclusion}

In conclusion, this essay has demonstrated that [restate thesis]. Through examination of [summary], it is clear that [conclusion].

Ultimately, [final thought]. As \citet{author} reminds us, "[quote]" (p. XX).

\bibliographystyle{apalike}
\bibliography{references}

\end{document}`,
  },
  {
    id: 21,
    title: "Research Statement",
    description: "Academic research statement for job applications",
    slug: "research-statement",
    previewUrl: "/templates/research-statement.pdf",
    category: "Academic",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx}
\usepackage{hyperref}
\usepackage{titlesec}

\titleformat{\section}{\large\bfseries}{}{0em}{}
\titleformat{\subsection}{\normalsize\bfseries}{}{0em}{}

\title{\textbf{Research Statement}}
\author{Your Name\\
Department of Computer Science\\
University Name\\
your.email@university.edu}
\date{}

\begin{document}

\maketitle

\section{Overview}

My research focuses on machine learning with particular emphasis on neural networks. Over the past 5 years, I have developed expertise in deep learning, contributing 15 publications to leading journals and conferences. My work addresses fundamental questions about model interpretability, with applications in healthcare and autonomous systems.

The central theme unifying my research is developing trustworthy AI systems. This work has been supported by NSF and NIH grants and has led to collaborations with researchers at MIT and Stanford.

\section{Research Background and Motivation}

The field of artificial intelligence has seen remarkable advances in recent years. My research is motivated by the observation that current AI systems lack transparency and explainability.

\section{Past Research}

My doctoral dissertation examined interpretable machine learning methods. The key contribution was developing a novel approach to neural network visualization that improved model understanding by 40\%.

\section{Current Research}

My current research program consists of three interconnected projects investigating robust AI, fair machine learning, and explainable AI systems.

\section{Future Research Directions}

Looking ahead 3-5 years, I plan to pursue research in trustworthy AI, focusing on safety, fairness, and interpretability.

\section{Conclusion}

My research program addresses fundamental questions in AI while maintaining strong connections to real-world applications in healthcare and autonomous systems.

\section*{Selected Publications}

\begin{enumerate}
\item Author, A. (2023). Novel Approaches to Neural Network Interpretability. \textit{Journal of Machine Learning Research}, 24(1), 1-25.
\item Author, A., \& Collaborator, B. (2022). Trustworthy AI Systems. \textit{Conference on Neural Information Processing Systems}.
\end{enumerate}

\end{document}`,
  },
  {
    id: 22,
    title: "Dissertation",
    description: "Complete PhD dissertation template",
    slug: "dissertation",
    previewUrl: "/templates/dissertation.pdf",
    category: "Academic",
    code: String.raw`\documentclass[12pt,oneside]{book}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{graphicx}
\usepackage[hidelinks]{hyperref}
\usepackage{setspace}
\usepackage{tocbibind}

\doublespacing

\title{Advances in Machine Learning}
\author{Your Full Name}
\date{May 2025}

\begin{document}

\frontmatter

\begin{titlepage}
\begin{center}
\vspace*{1cm}

{\Large \textbf{ADVANCES IN MACHINE LEARNING:\\
A COMPREHENSIVE INVESTIGATION}}

\vspace{1.5cm}

by

\vspace{0.5cm}

{\large Your Full Name}

\vfill

A dissertation submitted in partial fulfillment\\
of the requirements for the degree of

\vspace{0.5cm}

Doctor of Philosophy

\vspace{0.5cm}

in

\vspace{0.5cm}

Computer Science

\vspace{1cm}

{\large University Name}

{\large May 2025}

\end{center}
\end{titlepage}

\chapter*{Acknowledgments}

I would like to express my deepest gratitude to my advisor, Dr. Smith, for their guidance and support throughout this journey.

\chapter*{Abstract}

This dissertation investigates novel approaches to deep learning. The primary objective is to develop more efficient and interpretable neural network architectures.

\tableofcontents

\mainmatter

\chapter{Introduction}

\section{Background and Motivation}

The field of machine learning has undergone significant transformation in recent years with the rise of deep learning.

\chapter{Literature Review}

\section{Theoretical Frameworks}

This chapter reviews existing work in neural network theory and optimization.

\chapter{Methodology}

\section{Research Design}

This dissertation employs a mixed-methods approach combining theoretical analysis and empirical evaluation.

\chapter{Results}

\section{Findings}

Our experiments demonstrate significant improvements in model accuracy and efficiency.

\chapter{Discussion}

\section{Implications}

These findings have important implications for both theory and practice in machine learning.

\chapter{Conclusion}

\section{Summary}

This dissertation has presented novel approaches to neural network design that achieve state-of-the-art results.

\backmatter

\begin{thebibliography}{9}
\bibitem{example} Author, A. (2023). Example Paper. \textit{Journal}, 1(1), 1-10.
\end{thebibliography}

\end{document}`,
  },
  {
    id: 23,
    title: "White Paper",
    description: "Professional white paper template",
    slug: "white-paper",
    previewUrl: "/templates/white-paper.pdf",
    category: "Academic",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{graphicx}
\usepackage{xcolor}
\usepackage{titlesec}
\usepackage{hyperref}
\usepackage{tcolorbox}

\definecolor{primarycolor}{RGB}{0,51,102}

\titleformat{\section}{\Large\bfseries\color{primarycolor}}{\thesection}{1em}{}

\setlength{\parindent}{0pt}

\begin{document}

\begin{titlepage}
\begin{center}
\vspace*{2cm}

{\Huge \textbf{\color{primarycolor} AI-Powered Solutions:\\
Transform Your Business}}

\vspace{1cm}

{\Large \textit{A Comprehensive Guide to Modern AI}}

\vspace{2cm}

{\large TechCorp Industries}

\vspace{0.5cm}

{\large November 2025}

\vfill

\begin{tcolorbox}[colback=gray!10,colframe=primarycolor,width=0.8\textwidth]
\textbf{Executive Summary}\\[0.2cm]
This white paper examines how artificial intelligence is transforming business operations and presents practical solutions for implementation.
\end{tcolorbox}

\end{center}
\end{titlepage}

\section{Executive Summary}

In today's rapidly evolving technology landscape, organizations face mounting pressure to adopt AI and automation. This white paper explores practical AI solutions and demonstrates how they can drive business value.

\section{The Challenge}

Organizations today struggle with increasing data volumes, competitive pressure, and the need for faster decision-making.

\section{The Solution}

Our AI platform addresses these challenges through intelligent automation, predictive analytics, and real-time insights.

\section{Benefits}

Organizations implementing our solution can expect:
\begin{itemize}
\item 40\% reduction in operational costs
\item 60\% improvement in decision-making speed
\item 25\% increase in customer satisfaction
\end{itemize}

\section{Case Study}

Company XYZ implemented our solution and achieved \$5M in annual savings within the first year.

\section{Conclusion}

The AI landscape is changing rapidly. Organizations that take action now will be well-positioned for future success.

\end{document}`,
  },
  {
    id: 24,
    title: "Leaflet/Brochure",
    description: "Professional marketing leaflet template",
    slug: "leaflet",
    previewUrl: "/templates/leaflet.pdf",
    category: "Business",
    code: String.raw`\documentclass[a4paper,12pt]{article}
\usepackage[margin=0.5in]{geometry}
\usepackage{multicol}
\usepackage{graphicx}
\usepackage{xcolor}
\usepackage{tcolorbox}

\definecolor{maincolor}{RGB}{0,102,204}

\setlength{\parindent}{0pt}

\pagestyle{empty}

\begin{document}

\begin{center}
{\Huge \textbf{\color{maincolor} TECHSOLUTIONS}}\\[0.3cm]
{\Large \textit{Your Partner in Digital Transformation}}
\end{center}

\vspace{0.5cm}

\begin{multicols}{2}

\section*{\color{maincolor} What We Do}

We help businesses leverage technology to achieve their goals through custom software development, cloud solutions, and AI consulting.

We specialize in:
\begin{itemize}
\item Custom Software Development
\item Cloud Migration \& Management
\item AI \& Machine Learning Solutions
\item Digital Transformation Consulting
\end{itemize}

\columnbreak

\section*{\color{maincolor} Contact Us}

Ready to transform your business?

\textbf{Phone:} (555) 123-4567\\
\textbf{Email:} info@techsolutions.com\\
\textbf{Website:} www.techsolutions.com\\
\textbf{Address:} 123 Tech Street\\
San Francisco, CA 94102

\end{multicols}

\vspace{0.5cm}

\begin{center}
\begin{tcolorbox}[colback=maincolor,colframe=maincolor,colupper=white,width=0.8\textwidth]
\centering
\textbf{\Large Special Offer: 20\% Off First Project!}\\[0.2cm]
{\Huge Call Now: (555) 123-4567}\\[0.2cm]
Limited time - Book your free consultation today
\end{tcolorbox}
\end{center}

\vspace{0.3cm}

\section*{\color{maincolor} Why Choose Us?}

\begin{multicols}{3}
\textbf{Experience}\\
15+ years serving Fortune 500 companies

\columnbreak

\textbf{Quality}\\
ISO 9001 certified with 99\% satisfaction

\columnbreak

\textbf{Support}\\
24/7 dedicated customer support team
\end{multicols}

\end{document}`,
  },
  {
    id: 25,
    title: "Technical Report",
    description: "Technical research report template",
    slug: "technical-report",
    previewUrl: "/templates/technical-report.pdf",
    category: "Reports",
    code: String.raw`\documentclass[11pt]{report}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx}
\usepackage{booktabs}
\usepackage{listings}
\usepackage{xcolor}
\usepackage{hyperref}

\definecolor{codegreen}{rgb}{0,0.6,0}

\lstdefinestyle{codestyle}{
    backgroundcolor=\color{gray!10},   
    basicstyle=\ttfamily\footnotesize,
    breaklines=true,
    numbers=left
}

\lstset{style=codestyle}

\begin{document}

\begin{titlepage}
\begin{center}

\vspace*{2cm}

{\Large \textbf{TECHNICAL REPORT}}

\vspace{1cm}

{\Huge \textbf{System Architecture Analysis:\\
Cloud-Native Platform}}

\vspace{1.5cm}

{\large Report No.: TR-2025-001}

\vspace{1cm}

{\large Prepared by:\\
Engineering Team}

\vspace{1cm}

{\large November 2025}

\vfill

\textbf{Classification:} Internal\\
\textbf{Project Code:} CN-2025-Q4

\end{center}
\end{titlepage}

\tableofcontents

\chapter{Executive Summary}

This technical report describes the architecture and implementation of our cloud-native platform.

\textbf{Key Findings:}
\begin{itemize}
\item Achieved 99.9\% uptime across all services
\item Reduced latency by 45\% through optimization
\item Successfully scaled to handle 10M requests/day
\end{itemize}

\chapter{Introduction}

\section{Background}

Our organization needed a scalable, reliable platform to support growing user demand.

\section{Objectives}

The primary objectives are:
\begin{enumerate}
\item Design highly available microservices architecture
\item Implement automated deployment pipeline
\item Ensure security and compliance standards
\end{enumerate}

\chapter{System Architecture}

\section{Overview}

The system consists of multiple microservices deployed on Kubernetes, with Redis caching and PostgreSQL databases.

\chapter{Implementation}

\section{Technology Stack}

\begin{itemize}
\item Backend: Node.js, Python
\item Frontend: React, Next.js
\item Infrastructure: AWS, Kubernetes
\item Monitoring: Prometheus, Grafana
\end{itemize}

\chapter{Results}

\section{Performance Metrics}

\begin{table}[h]
\centering
\caption{System Performance}
\begin{tabular}{@{}lcc@{}}
\toprule
\textbf{Metric} & \textbf{Target} & \textbf{Actual} \\
\midrule
Uptime & 99.9\% & 99.95\% \\
Latency & <100ms & 65ms \\
Throughput & 10M/day & 12M/day \\
\bottomrule
\end{tabular}
\end{table}

\chapter{Conclusion}

\section{Summary}

This report presented our cloud-native architecture which successfully met all performance and reliability targets.

\begin{thebibliography}{9}
\bibitem{k8s} Kubernetes Documentation. (2025). \textit{kubernetes.io}
\end{thebibliography}

\end{document}`,
  },
  {
    id: 26,
    title: "Math Exercises",
    description: "Practice problems and exercises for mathematics",
    slug: "math-exercises",
    previewUrl: "/templates/math-exercises.pdf",
    category: "Math",
    code: String.raw`\documentclass[12pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{enumitem}

\title{Math Exercises}
\author{Course Name}
\date{}

\newtheorem{exercise}{Exercise}

\begin{document}
\maketitle

\section{Algebra}

\begin{exercise}
Solve for $x$: $2x^2 - 5x + 3 = 0$
\end{exercise}

\vspace{1cm}

\begin{exercise}
Simplify: $\frac{x^2 - 4}{x^2 + 4x + 4}$
\end{exercise}

\vspace{1cm}

\section{Calculus}

\begin{exercise}
Find the derivative of $f(x) = \sin(x^2) \cdot e^x$
\end{exercise}

\vspace{1cm}

\begin{exercise}
Evaluate: $\int_0^{\pi} \sin^2(x) dx$
\end{exercise}

\vspace{1cm}

\section{Linear Algebra}

\begin{exercise}
Find the eigenvalues of the matrix:
\[
A = \begin{pmatrix}
2 & 1 \\
1 & 2
\end{pmatrix}
\]
\end{exercise}

\vspace{1cm}

\begin{exercise}
Determine if the following vectors are linearly independent:
\[
\mathbf{v}_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \quad
\mathbf{v}_2 = \begin{pmatrix} 2 \\ 4 \\ 5 \end{pmatrix}
\]
\end{exercise}

\end{document}`,
  },
  {
    id: 27,
    title: "Math Notes",
    description: "Structured lecture notes for mathematics courses",
    slug: "math-notes",
    previewUrl: "/templates/math-notes.pdf",
    category: "Math",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{fancyhdr}
\usepackage{xcolor}

\pagestyle{fancy}
\fancyhf{}
\lhead{Math Course}
\chead{Lecture Notes}
\rhead{Date}
\cfoot{\thepage}

\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{proposition}[theorem]{Proposition}
\newtheorem{corollary}[theorem]{Corollary}

\theoremstyle{definition}
\newtheorem{definition}[theorem]{Definition}
\newtheorem{example}[theorem]{Example}

\theoremstyle{remark}
\newtheorem{remark}[theorem]{Remark}
\newtheorem{note}[theorem]{Note}

\title{Lecture X: Topic Name}
\author{Professor Name}
\date{Lecture Date}

\begin{document}
\maketitle

\section{Introduction}

Today we will study [topic]. The main goal is to understand [objective].

\section{Main Concepts}

\begin{definition}
A function $f: X \to Y$ is called \textbf{continuous} if for every open set $V \subseteq Y$, the preimage $f^{-1}(V)$ is open in $X$.
\end{definition}

\begin{theorem}
Every continuous function from a compact space to a Hausdorff space is closed.
\end{theorem}

\begin{proof}
Let $f: X \to Y$ be continuous where $X$ is compact and $Y$ is Hausdorff...
\end{proof}

\begin{example}
Consider the function $f(x) = x^2$ on $\mathbb{R}$. This function is continuous because...
\end{example}

\begin{remark}
The converse of the theorem is not always true.
\end{remark}

\section{Important Results}

\begin{lemma}
If $f$ is continuous and $K$ is compact, then $f(K)$ is compact.
\end{lemma}

\section{Exercises}

\begin{enumerate}
\item Prove that composition of continuous functions is continuous.
\item Show that $f(x) = \sin(x)$ is uniformly continuous on $\mathbb{R}$.
\end{enumerate}

\end{document}`,
  },
  {
    id: 28,
    title: "Math Exam",
    description: "Formal mathematics examination template",
    slug: "math-exam",
    previewUrl: "/templates/math-exam.pdf",
    category: "Math",
    code: String.raw`\documentclass[12pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{fancyhdr}

\pagestyle{fancy}
\fancyhf{}
\lhead{Math 101}
\chead{Final Exam}
\rhead{Fall 2025}
\cfoot{\thepage}

\renewcommand{\headrulewidth}{0.4pt}

\begin{document}

\begin{center}
{\Large \textbf{Mathematics 101 - Final Examination}}\\[0.3cm]
{\large Fall Semester 2025}\\[0.5cm]
\end{center}

\noindent
\textbf{Name:} \underline{\hspace{8cm}}\\[0.3cm]
\textbf{Student ID:} \underline{\hspace{8cm}}\\[0.5cm]

\noindent
\textbf{Instructions:}
\begin{itemize}
\item This exam has 5 problems worth 100 points total.
\item Show all work for full credit.
\item You have 120 minutes to complete this exam.
\item No calculators or notes allowed.
\end{itemize}

\vspace{0.5cm}

\begin{center}
\begin{tabular}{|c|c|c|}
\hline
\textbf{Problem} & \textbf{Points} & \textbf{Score} \\
\hline
1 & 20 & \\
\hline
2 & 20 & \\
\hline
3 & 20 & \\
\hline
4 & 20 & \\
\hline
5 & 20 & \\
\hline
\textbf{Total} & \textbf{100} & \\
\hline
\end{tabular}
\end{center}

\vspace{1cm}

\noindent
\textbf{Problem 1.} (20 points) Solve the following equation for $x$:
\[
3x^2 - 7x + 2 = 0
\]

\vspace{4cm}

\noindent
\textbf{Problem 2.} (20 points) Find the derivative of:
\[
f(x) = \frac{\sin(x)}{x^2 + 1}
\]

\vspace{4cm}

\noindent
\textbf{Problem 3.} (20 points) Evaluate the integral:
\[
\int_0^1 x e^{x^2} dx
\]

\newpage

\noindent
\textbf{Problem 4.} (20 points) Prove that if $a$ and $b$ are even integers, then $a + b$ is even.

\vspace{6cm}

\noindent
\textbf{Problem 5.} (20 points) Find the limit:
\[
\lim_{x \to 0} \frac{\sin(3x)}{2x}
\]

\end{document}`,
  },
  {
    id: 29,
    title: "Math Problem Set",
    description: "Weekly problem set assignments for mathematics",
    slug: "math-problem-set",
    previewUrl: "/templates/math-problem-set.pdf",
    category: "Math",
    code: String.raw`\documentclass[12pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{enumitem}

\title{Problem Set X}
\author{Math Course\\Due: Date}
\date{}

\begin{document}
\maketitle

\section*{Instructions}
\begin{itemize}
\item Write your solutions clearly and legibly.
\item Show all work for full credit.
\item Collaboration is allowed, but write your own solutions.
\item Due at the beginning of class on the due date.
\end{itemize}

\section*{Problems}

\begin{enumerate}[leftmargin=*]
\item \textbf{(10 points)} 
Let $f(x) = x^3 - 3x^2 + 2x - 1$. Find all critical points and determine their nature (local maximum, local minimum, or neither).

\item \textbf{(15 points)}
Prove that for all $n \geq 1$:
\[
1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}
\]

\item \textbf{(15 points)}
Let $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$. Find $A^{-1}$ and verify your answer.

\item \textbf{(20 points)}
Determine whether the series converges or diverges:
\[
\sum_{n=1}^{\infty} \frac{n^2}{n^3 + 1}
\]
Justify your answer.

\item \textbf{(20 points)}
Let $f: \mathbb{R} \to \mathbb{R}$ be defined by $f(x) = x^2$.
\begin{enumerate}[label=(\alph*)]
\item Show that $f$ is continuous at every point.
\item Is $f$ uniformly continuous on $\mathbb{R}$? Prove or give a counterexample.
\end{enumerate}

\item \textbf{(20 points)}
Evaluate the following integral:
\[
\int_0^{\pi/2} \frac{\sin(x)}{1 + \cos^2(x)} dx
\]

\end{enumerate}

\section*{Bonus Problem (Optional)}

\textbf{(10 points)} Prove or disprove: If $f$ and $g$ are uniformly continuous functions on $\mathbb{R}$, then $f \cdot g$ is uniformly continuous on $\mathbb{R}$.

\end{document}`,
  },
  {
    id: 30,
    title: "Math Cheat Sheet",
    description: "Compact reference sheet for formulas and theorems",
    slug: "math-cheat-sheet",
    previewUrl: "/templates/math-cheat-sheet.pdf",
    category: "Math",
    code: String.raw`\documentclass[10pt,landscape]{article}
\usepackage[margin=0.5in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{multicol}
\usepackage{xcolor}

\setlength{\parindent}{0pt}
\setlength{\columnseprule}{0.4pt}

\begin{document}

\begin{center}
{\Large \textbf{Mathematics Cheat Sheet}}
\end{center}

\begin{multicols}{3}

\section*{Algebra}

\textbf{Quadratic Formula:}
\[
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\textbf{Binomial Theorem:}
\[
(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^{n-k} b^k
\]

\textbf{Logarithm Laws:}
\begin{align*}
\log(xy) &= \log x + \log y\\
\log(x/y) &= \log x - \log y\\
\log(x^n) &= n \log x
\end{align*}

\section*{Trigonometry}

\textbf{Basic Identities:}
\begin{align*}
\sin^2\theta + \cos^2\theta &= 1\\
1 + \tan^2\theta &= \sec^2\theta\\
1 + \cot^2\theta &= \csc^2\theta
\end{align*}

\textbf{Angle Sum:}
\begin{align*}
\sin(\alpha \pm \beta) &= \sin\alpha\cos\beta \pm \cos\alpha\sin\beta\\
\cos(\alpha \pm \beta) &= \cos\alpha\cos\beta \mp \sin\alpha\sin\beta
\end{align*}

\textbf{Double Angle:}
\begin{align*}
\sin(2\theta) &= 2\sin\theta\cos\theta\\
\cos(2\theta) &= \cos^2\theta - \sin^2\theta
\end{align*}

\section*{Calculus}

\textbf{Derivatives:}
\begin{align*}
\frac{d}{dx}x^n &= nx^{n-1}\\
\frac{d}{dx}e^x &= e^x\\
\frac{d}{dx}\ln x &= \frac{1}{x}\\
\frac{d}{dx}\sin x &= \cos x\\
\frac{d}{dx}\cos x &= -\sin x
\end{align*}

\textbf{Product Rule:}
\[
(fg)' = f'g + fg'
\]

\textbf{Quotient Rule:}
\[
\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}
\]

\textbf{Chain Rule:}
\[
\frac{d}{dx}f(g(x)) = f'(g(x)) \cdot g'(x)
\]

\textbf{Integration:}
\begin{align*}
\int x^n dx &= \frac{x^{n+1}}{n+1} + C\\
\int e^x dx &= e^x + C\\
\int \frac{1}{x} dx &= \ln|x| + C\\
\int \sin x dx &= -\cos x + C\\
\int \cos x dx &= \sin x + C
\end{align*}

\textbf{Integration by Parts:}
\[
\int u\, dv = uv - \int v\, du
\]

\section*{Series}

\textbf{Geometric Series:}
\[
\sum_{n=0}^{\infty} ar^n = \frac{a}{1-r}, \quad |r| < 1
\]

\textbf{Taylor Series:}
\[
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n
\]

\textbf{Common Series:}
\begin{align*}
e^x &= \sum_{n=0}^{\infty} \frac{x^n}{n!}\\
\sin x &= \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}\\
\cos x &= \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}
\end{align*}

\section*{Linear Algebra}

\textbf{Matrix Multiplication:}\\
$(AB)_{ij} = \sum_k A_{ik}B_{kj}$

\textbf{Determinant (2×2):}
\[
\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc
\]

\textbf{Inverse (2×2):}
\[
A^{-1} = \frac{1}{\det A}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
\]

\section*{Probability}

\textbf{Conditional Probability:}
\[
P(A|B) = \frac{P(A \cap B)}{P(B)}
\]

\textbf{Bayes' Theorem:}
\[
P(A|B) = \frac{P(B|A)P(A)}{P(B)}
\]

\textbf{Expected Value:}
\[
E[X] = \sum_i x_i P(X = x_i)
\]

\end{multicols}

\end{document}`,
  },
  {
    id: 31,
    title: "Lecture Notes",
    description: "Clean academic lecture notes template",
    slug: "lecture-notes",
    previewUrl: "/templates/lecture-notes.pdf",
    category: "Education",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{fancyhdr}
\usepackage{graphicx}

\pagestyle{fancy}
\fancyhf{}
\lhead{Course Code}
\chead{Lecture Notes}
\rhead{\today}
\cfoot{\thepage}

\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{example}{Example}[section]

\title{Lecture X: Topic Name}
\author{Instructor: Professor Name}
\date{Date}

\begin{document}
\maketitle

\section{Overview}

In this lecture, we will cover [main topics]. The key learning objectives are:
\begin{itemize}
\item Objective 1
\item Objective 2
\item Objective 3
\end{itemize}

\section{Introduction}

The field of [subject] has evolved significantly. We begin by reviewing fundamental concepts.

\begin{definition}
A [concept] is defined as...
\end{definition}

\begin{example}
Consider the case where...
\end{example}

\section{Main Content}

\subsection{First Topic}

The relationship between [concept A] and [concept B] can be expressed as:
\[
f(x) = \int_0^x g(t) dt
\]

\begin{theorem}
Under the conditions [conditions], we have [result].
\end{theorem}

\begin{proof}
To prove this, we first observe that...
\end{proof}

\subsection{Second Topic}

Building on the previous section, we now examine...

\section{Applications}

These concepts have important applications in:
\begin{enumerate}
\item Application 1
\item Application 2
\item Application 3
\end{enumerate}

\section{Summary}

Key takeaways from today's lecture:
\begin{itemize}
\item Point 1
\item Point 2
\item Point 3
\end{itemize}

\section{Further Reading}

\begin{itemize}
\item Textbook Chapter X
\item Research paper by Author (Year)
\end{itemize}

\end{document}`,
  },
  {
    id: 32,
    title: "Quiz Template",
    description: "Short quiz or test template",
    slug: "quiz-template",
    previewUrl: "/templates/quiz-template.pdf",
    category: "Education",
    code: String.raw`\documentclass[12pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath}
\usepackage{enumitem}

\begin{document}

\begin{center}
{\Large \textbf{Quiz - Topic Name}}\\[0.2cm]
{\large Course Name}\\[0.5cm]
\end{center}

\noindent
\textbf{Name:} \underline{\hspace{8cm}}\\[0.3cm]
\textbf{Date:} \underline{\hspace{8cm}}\\[0.5cm]

\noindent
\textbf{Instructions:} Answer all questions. Show your work for full credit. Time limit: 20 minutes.

\vspace{0.5cm}

\begin{enumerate}[leftmargin=*]

\item \textbf{(5 points)} Multiple Choice: What is $2 + 2$?
\begin{enumerate}[label=(\alph*)]
\item 3
\item 4
\item 5
\item 6
\end{enumerate}

\vspace{1cm}

\item \textbf{(10 points)} True or False: The derivative of $x^2$ is $2x$.

\vspace{2cm}

\item \textbf{(15 points)} Short Answer: Solve for $x$:
\[
3x + 7 = 22
\]

\vspace{3cm}

\item \textbf{(20 points)} Show your work: Evaluate the integral:
\[
\int_0^1 2x dx
\]

\vspace{4cm}

\item \textbf{(10 points)} Explain in one sentence: What is the Pythagorean theorem?

\vspace{2cm}

\end{enumerate}

\end{document}`,
  },
  {
    id: 33,
    title: "Formula Sheet",
    description: "Reference sheet for important formulas",
    slug: "formula-sheet",
    previewUrl: "/templates/formula-sheet.pdf",
    category: "Math",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=0.75in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{multicol}

\setlength{\parindent}{0pt}

\begin{document}

\begin{center}
{\Large \textbf{Formula Sheet}}\\[0.2cm]
{\large Course Name - Exam}
\end{center}

\vspace{0.3cm}

\begin{multicols}{2}

\section*{Calculus}

\textbf{Derivatives:}
\begin{align*}
\frac{d}{dx}[x^n] &= nx^{n-1}\\
\frac{d}{dx}[e^x] &= e^x\\
\frac{d}{dx}[\ln x] &= \frac{1}{x}\\
\frac{d}{dx}[\sin x] &= \cos x\\
\frac{d}{dx}[\cos x] &= -\sin x\\
\frac{d}{dx}[\tan x] &= \sec^2 x
\end{align*}

\textbf{Rules:}
\begin{align*}
(f \pm g)' &= f' \pm g'\\
(fg)' &= f'g + fg'\\
\left(\frac{f}{g}\right)' &= \frac{f'g - fg'}{g^2}\\
\frac{d}{dx}[f(g(x))] &= f'(g(x)) \cdot g'(x)
\end{align*}

\textbf{Integrals:}
\begin{align*}
\int x^n dx &= \frac{x^{n+1}}{n+1} + C, \, n \neq -1\\
\int e^x dx &= e^x + C\\
\int \frac{1}{x} dx &= \ln|x| + C\\
\int \sin x dx &= -\cos x + C\\
\int \cos x dx &= \sin x + C\\
\int \sec^2 x dx &= \tan x + C
\end{align*}

\textbf{Fundamental Theorem:}
\[
\int_a^b f(x) dx = F(b) - F(a)
\]

\section*{Trigonometry}

\textbf{Pythagorean Identity:}
\[
\sin^2\theta + \cos^2\theta = 1
\]

\textbf{Angle Sum Formulas:}
\begin{align*}
\sin(\alpha + \beta) &= \sin\alpha\cos\beta + \cos\alpha\sin\beta\\
\cos(\alpha + \beta) &= \cos\alpha\cos\beta - \sin\alpha\sin\beta
\end{align*}

\textbf{Double Angle Formulas:}
\begin{align*}
\sin(2\theta) &= 2\sin\theta\cos\theta\\
\cos(2\theta) &= \cos^2\theta - \sin^2\theta\\
&= 2\cos^2\theta - 1\\
&= 1 - 2\sin^2\theta
\end{align*}

\section*{Algebra}

\textbf{Quadratic Formula:}
\[
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\textbf{Exponent Rules:}
\begin{align*}
a^m \cdot a^n &= a^{m+n}\\
\frac{a^m}{a^n} &= a^{m-n}\\
(a^m)^n &= a^{mn}\\
(ab)^n &= a^n b^n
\end{align*}

\textbf{Logarithm Rules:}
\begin{align*}
\log(xy) &= \log x + \log y\\
\log(x/y) &= \log x - \log y\\
\log(x^n) &= n\log x\\
\log_a a &= 1
\end{align*}

\section*{Geometry}

\textbf{Area Formulas:}
\begin{align*}
\text{Circle:} \quad A &= \pi r^2\\
\text{Triangle:} \quad A &= \frac{1}{2}bh\\
\text{Rectangle:} \quad A &= lw
\end{align*}

\textbf{Volume Formulas:}
\begin{align*}
\text{Sphere:} \quad V &= \frac{4}{3}\pi r^3\\
\text{Cylinder:} \quad V &= \pi r^2 h\\
\text{Cone:} \quad V &= \frac{1}{3}\pi r^2 h
\end{align*}

\section*{Statistics}

\textbf{Mean:}
\[
\bar{x} = \frac{1}{n}\sum_{i=1}^n x_i
\]

\textbf{Variance:}
\[
s^2 = \frac{1}{n-1}\sum_{i=1}^n (x_i - \bar{x})^2
\]

\textbf{Standard Deviation:}
\[
s = \sqrt{s^2}
\]

\end{multicols}

\end{document}`,
  },
  {
    id: 34,
    title: "Project Report",
    description: "Professional project report with chapters and sections",
    slug: "project-report",
    previewUrl: "/templates/project-report.pdf",
    category: "Reports",
    code: String.raw`\documentclass[12pt]{report}
\usepackage[margin=1in]{geometry}
\usepackage{graphicx}
\usepackage{hyperref}
\usepackage{fancyhdr}

\pagestyle{fancy}
\fancyhf{}
\lhead{\leftmark}
\rhead{Page \thepage}
\renewcommand{\headrulewidth}{0.4pt}

\begin{document}

\begin{titlepage}
\begin{center}
\vspace*{2cm}

{\Huge \textbf{Project Title}}\\[1cm]

{\Large Project Report}\\[1.5cm]

{\large Submitted by}\\[0.5cm]
{\Large \textbf{Student Name}}\\[0.3cm]
{\large Student ID: 12345}\\[2cm]

{\large in partial fulfillment of the requirements for}\\[0.5cm]
{\Large Course Name}\\[2cm]

{\large Department Name\\
University Name}\\[1cm]

{\large \today}

\end{center}
\end{titlepage}

\tableofcontents

\chapter{Introduction}

\section{Background}
This project addresses the problem of [problem statement].

\section{Objectives}
The main objectives of this project are:
\begin{enumerate}
\item Objective 1
\item Objective 2
\item Objective 3
\end{enumerate}

\section{Scope}
The scope of this project includes [scope description].

\chapter{Literature Review}

\section{Related Work}
Previous research in this area has focused on [related work].

\section{Theoretical Framework}
The theoretical foundation of this project is based on [theory].

\chapter{Methodology}

\section{System Design}
The system architecture consists of [design description].

\section{Implementation}
We implemented the solution using [technologies and tools].

\chapter{Results and Analysis}

\section{Experimental Setup}
The experiments were conducted using [setup description].

\section{Results}
Our implementation achieved [results].

\chapter{Conclusion}

\section{Summary}
This project successfully [accomplishments].

\section{Future Work}
Future enhancements could include [future work].

\begin{thebibliography}{9}
\bibitem{ref1} Author, A. (2023). Title. \textit{Journal}, 1(1), 1-10.
\end{thebibliography}

\end{document}`,
  },
  {
    id: 35,
    title: "Article Template",
    description: "Scientific article with abstract and sections",
    slug: "article-template",
    previewUrl: "/templates/article-template.pdf",
    category: "Academic",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx}
\usepackage{cite}
\usepackage{authblk}

\title{Article Title: A Study of [Topic]}
\author[1]{First Author}
\author[2]{Second Author}
\affil[1]{Department, Institution}
\affil[2]{Department, Institution}
\date{\today}

\begin{document}

\maketitle

\begin{abstract}
This article investigates [research question]. We present [methodology] and demonstrate [findings]. Our results show [conclusion] with implications for [field].
\end{abstract}

\textbf{Keywords:} keyword1, keyword2, keyword3, keyword4

\section{Introduction}

The study of [topic] has gained significant attention in recent years. This article addresses [research gap] by [contribution].

\section{Background}

\subsection{Historical Context}
Previous work in this area includes [background].

\subsection{Current State}
The current understanding of [topic] is characterized by [state].

\section{Methods}

\subsection{Data Collection}
We collected data using [methods].

\subsection{Analysis Approach}
Our analysis employed [techniques].

\section{Results}

\subsection{Main Findings}
The primary results indicate [findings].

\begin{figure}[h]
\centering
\caption{Results visualization}
\label{fig:results}
\end{figure}

\subsection{Statistical Analysis}
Statistical tests revealed [statistics].

\section{Discussion}

\subsection{Interpretation}
These findings suggest [interpretation].

\subsection{Limitations}
This study has several limitations including [limitations].

\section{Conclusion}

In conclusion, this work has demonstrated [conclusion]. Future research should explore [future directions].

\section*{Acknowledgments}
The authors thank [acknowledgments].

\bibliographystyle{plain}
\bibliography{references}

\end{document}`,
  },
  {
    id: 36,
    title: "Statement of Purpose",
    description: "Graduate school application statement template",
    slug: "statement-of-purpose",
    previewUrl: "/templates/statement-of-purpose.pdf",
    category: "Resume & CV",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{setspace}
\onehalfspacing

\begin{document}

\begin{center}
{\Large \textbf{Statement of Purpose}}\\[0.3cm]
{\large Your Name}\\[0.2cm]
Application for Program Name\\
University Name
\end{center}

\vspace{0.5cm}

My passion for [field] began when [opening story or experience]. This experience shaped my academic trajectory and solidified my desire to pursue graduate studies in [field] at [University Name].

\section*{Academic Background}

I completed my Bachelor's degree in [Major] at [University] in [Year], where I developed a strong foundation in [subjects]. During my undergraduate years, I maintained a [GPA] GPA and was particularly drawn to courses in [relevant courses]. My senior thesis on [thesis topic] allowed me to explore [research area] and sparked my interest in [specific interest].

\section*{Research Experience}

My research experience includes [describe research experience]. Working with Professor [Name], I contributed to [project description]. This experience taught me [skills/lessons learned] and resulted in [outcomes such as publications, presentations].

Additionally, I worked as a research assistant in [lab/project] where I [responsibilities and accomplishments]. These experiences have prepared me to conduct independent research and contribute meaningfully to [field].

\section*{Professional Experience}

Beyond academia, I have gained valuable industry experience at [Company] as a [Position]. In this role, I [responsibilities and achievements]. This professional experience complemented my academic pursuits by [connection to academic goals].

\section*{Research Interests}

My primary research interests lie at the intersection of [topic A] and [topic B]. Specifically, I am fascinated by [specific research questions]. I am particularly interested in [Professor Name]'s work on [their research] and would be honored to contribute to ongoing projects in [lab/group name].

I envision my graduate research exploring [research direction]. My long-term goal is to [career goals].

\section*{Why [University Name]}

[University Name] is uniquely positioned to support my academic goals. The program's strength in [specific strengths] aligns perfectly with my interests. The opportunity to work with faculty members such as [Professor Names] whose research in [their work] directly relates to my interests would be invaluable.

Furthermore, [University]'s collaborative environment, resources such as [specific resources], and location in [location benefits] make it the ideal place for my graduate studies.

\section*{Conclusion}

I am confident that my academic background, research experience, and passion for [field] make me a strong candidate for the [Program] at [University]. I am eager to contribute to the intellectual community and advance the field through rigorous research and collaboration.

Thank you for considering my application.

\end{document}`,
  },
  {
    id: 37,
    title: "Literature Review",
    description: "Academic literature review with citations",
    slug: "literature-review",
    previewUrl: "/templates/literature-review.pdf",
    category: "Academic",
    code: String.raw`\documentclass[12pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{setspace}
\usepackage{natbib}
\doublespacing

\title{Literature Review:\\
{[}Topic Name{]}}
\author{Your Name}
\date{\today}

\begin{document}

\maketitle

\section{Introduction}

This literature review examines the current state of research on [topic]. The review synthesizes findings from [time period] and identifies key themes, methodologies, and gaps in the literature.

\subsection{Purpose and Scope}

The purpose of this review is to [purpose]. This review covers [scope] and focuses on [specific aspects].

\section{Methodology}

\subsection{Search Strategy}

A systematic search was conducted using databases including [databases]. Search terms included: [keywords]. The initial search yielded [N] papers, which were reduced to [M] after applying inclusion criteria.

\subsection{Inclusion Criteria}

Papers were included if they: (1) [criterion 1]; (2) [criterion 2]; (3) [criterion 3].

\section{Theoretical Framework}

\subsection{Key Concepts}

The literature on [topic] is grounded in several theoretical frameworks \citep{author2020}. The dominant paradigm suggests that [theoretical perspective].

\subsection{Evolution of the Field}

Early work by \citet{pioneer1990} established the foundation by [contribution]. This was extended by \citet{developer2000} who demonstrated [advancement].

\section{Major Themes}

\subsection{Theme 1: [Theme Name]}

Research on [theme 1] has shown that [findings]. \citet{author2019} found that [specific finding], while \citet{author2021} argued that [contrasting view].

Key findings include:
\begin{itemize}
\item Finding 1 \citep{ref1}
\item Finding 2 \citep{ref2}
\item Finding 3 \citep{ref3}
\end{itemize}

\subsection{Theme 2: [Theme Name]}

Another significant area of research focuses on [theme 2]. Studies have demonstrated \citep{author2018,author2020} that [findings].

\subsection{Theme 3: [Theme Name]}

Recent investigations into [theme 3] reveal [findings]. However, \citet{critic2022} cautions that [limitation or critique].

\section{Methodological Approaches}

\subsection{Quantitative Studies}

Quantitative research employing [methods] has been predominant \citep{author2017}. These studies typically [characteristics].

\subsection{Qualitative Studies}

Qualitative approaches, including [methods], have provided rich insights into [aspects] \citep{author2019}.

\subsection{Mixed Methods}

Recent work has increasingly adopted mixed methods approaches \citep{author2021} to capture [advantages].

\section{Gaps and Future Directions}

\subsection{Identified Gaps}

Despite extensive research, several gaps remain:
\begin{enumerate}
\item Limited research on [gap 1]
\item Insufficient attention to [gap 2]
\item Need for [gap 3]
\end{enumerate}

\subsection{Recommendations for Future Research}

Future research should:
\begin{itemize}
\item Address [recommendation 1]
\item Investigate [recommendation 2]
\item Develop [recommendation 3]
\end{itemize}

\section{Conclusion}

This literature review has synthesized current knowledge on [topic]. The review reveals that [summary of findings]. Moving forward, research should address identified gaps and explore [future directions].

\bibliographystyle{apalike}
\bibliography{references}

\end{document}`,
  },
  {
    id: 38,
    title: "Meeting Minutes",
    description: "Professional meeting minutes and notes template",
    slug: "meeting-minutes",
    previewUrl: "/templates/meeting-minutes.pdf",
    category: "Business",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{enumitem}
\usepackage{booktabs}

\begin{document}

\begin{center}
{\Large \textbf{Meeting Minutes}}\\[0.3cm]
{\large [Organization/Department Name]}
\end{center}

\vspace{0.5cm}

\noindent
\begin{tabular}{ll}
\textbf{Date:} & [Meeting Date] \\
\textbf{Time:} & [Start Time] - [End Time] \\
\textbf{Location:} & [Location/Virtual] \\
\textbf{Facilitator:} & [Name] \\
\textbf{Note Taker:} & [Name] \\
\end{tabular}

\section*{Attendees}

\textbf{Present:}
\begin{itemize}[noitemsep]
\item Name 1 - Title
\item Name 2 - Title
\item Name 3 - Title
\end{itemize}

\textbf{Absent:}
\begin{itemize}[noitemsep]
\item Name 4 - Title (excused)
\end{itemize}

\section*{Agenda}

\begin{enumerate}
\item Review of previous meeting minutes
\item Project status updates
\item New business
\item Action items
\item Next meeting
\end{enumerate}

\section*{Discussion}

\subsection*{1. Review of Previous Meeting Minutes}

The minutes from the [previous date] meeting were reviewed and approved without changes.

\subsection*{2. Project Status Updates}

\textbf{Project A:}
\begin{itemize}
\item Current status: [status]
\item Progress: [progress description]
\item Challenges: [any issues]
\end{itemize}

\textbf{Project B:}
\begin{itemize}
\item Current status: [status]
\item Progress: [progress description]
\item Next steps: [upcoming tasks]
\end{itemize}

\subsection*{3. New Business}

\textbf{Topic 1:}
[Discussion summary]. Decision: [decision made].

\textbf{Topic 2:}
[Discussion summary]. Action required: [action needed].

\section*{Decisions Made}

\begin{enumerate}
\item Decision 1: [description]
\item Decision 2: [description]
\item Decision 3: [description]
\end{enumerate}

\section*{Action Items}

\begin{center}
\begin{tabular}{|p{5cm}|p{3cm}|p{2.5cm}|}
\hline
\textbf{Action Item} & \textbf{Responsible} & \textbf{Due Date} \\
\hline
Complete project proposal & John Smith & 2025-01-15 \\
\hline
Review budget document & Jane Doe & 2025-01-20 \\
\hline
Schedule follow-up meeting & Sarah Johnson & 2025-01-10 \\
\hline
\end{tabular}
\end{center}

\section*{Next Meeting}

\begin{tabular}{ll}
\textbf{Date:} & [Next Meeting Date] \\
\textbf{Time:} & [Time] \\
\textbf{Location:} & [Location] \\
\textbf{Agenda Items:} & [Preview of topics] \\
\end{tabular}

\vspace{1cm}

\noindent
\textbf{Minutes prepared by:} [Name]\\
\textbf{Date:} [Date]\\
\textbf{Approved by:} [Name, Title]

\end{document}`,
  },
  {
    id: 39,
    title: "Certificate",
    description: "Award or completion certificate template",
    slug: "certificate",
    previewUrl: "/templates/certificate.pdf",
    category: "Business",
    code: String.raw`\documentclass[landscape]{article}
\usepackage[margin=0.5in]{geometry}
\usepackage{graphicx}
\usepackage{xcolor}

\definecolor{certgold}{RGB}{218,165,32}
\definecolor{certblue}{RGB}{0,51,102}

\pagestyle{empty}

\begin{document}

\begin{center}

\vspace*{1.5cm}

% Decorative border
{\color{certgold}\rule{\linewidth}{3pt}}\\[0.2cm]
{\color{certblue}\rule{\linewidth}{1pt}}

\vspace{1cm}

{\Huge \textsc{Certificate of Achievement}}

\vspace{0.5cm}

{\color{certgold}\rule{10cm}{2pt}}

\vspace{1cm}

{\Large \textit{This is to certify that}}

\vspace{0.5cm}

{\Huge \textbf{[Recipient Name]}}

\vspace{0.5cm}

{\Large \textit{has successfully completed}}

\vspace{0.5cm}

{\LARGE \textbf{[Course/Program Name]}}

\vspace{0.3cm}

{\large with distinction}

\vspace{1cm}

{\large Awarded on: \textbf{[Date]}}

\vspace{1.5cm}

\begin{minipage}{0.4\textwidth}
\centering
\rule{6cm}{0.5pt}\\
{\small Instructor Name}\\
{\small \textit{Title}}
\end{minipage}
\hfill
\begin{minipage}{0.4\textwidth}
\centering
\rule{6cm}{0.5pt}\\
{\small Director Name}\\
{\small \textit{Title}}
\end{minipage}

\vspace{0.5cm}

{\color{certblue}\rule{\linewidth}{1pt}}\\[0.1cm]
{\color{certgold}\rule{\linewidth}{3pt}}

\vspace{0.5cm}

{\small \textit{[Organization Name] | [Website] | [Date]}}

\end{center}

\end{document}`,
  },
  {
    id: 40,
    title: "Invoice",
    description: "Professional invoice for services or products",
    slug: "invoice",
    previewUrl: "/templates/invoice.pdf",
    category: "Business",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=0.75in]{geometry}
\usepackage{graphicx}
\usepackage{booktabs}
\usepackage{xcolor}

\definecolor{headerblue}{RGB}{0,71,171}

\pagestyle{empty}

\begin{document}

\begin{minipage}[t]{0.5\textwidth}
{\Large \textbf{INVOICE}}\\[0.3cm]
{\color{headerblue}\rule{5cm}{2pt}}
\end{minipage}
\begin{minipage}[t]{0.5\textwidth}
\raggedleft
{\large \textbf{Your Company Name}}\\
123 Business Street\\
City, State 12345\\
Phone: (555) 123-4567\\
Email: info@company.com
\end{minipage}

\vspace{1cm}

\noindent
\begin{minipage}[t]{0.5\textwidth}
\textbf{Bill To:}\\
Client Name\\
Company Name\\
456 Client Avenue\\
City, State 67890
\end{minipage}
\begin{minipage}[t]{0.5\textwidth}
\raggedleft
\begin{tabular}{rl}
\textbf{Invoice \#:} & INV-2025-001 \\
\textbf{Date:} & January 15, 2025 \\
\textbf{Due Date:} & February 14, 2025 \\
\textbf{Terms:} & Net 30 \\
\end{tabular}
\end{minipage}

\vspace{1cm}

\begin{center}
\begin{tabular}{p{6cm}ccc}
\toprule
\textbf{Description} & \textbf{Quantity} & \textbf{Rate} & \textbf{Amount} \\
\midrule
Consulting Services - January & 40 hrs & \$150.00 & \$6,000.00 \\
Project Development & 1 & \$2,500.00 & \$2,500.00 \\
Research and Analysis & 20 hrs & \$125.00 & \$2,500.00 \\
\\
\midrule
& & \textbf{Subtotal:} & \$11,000.00 \\
& & \textbf{Tax (8\%):} & \$880.00 \\
\midrule
& & \textbf{Total Due:} & \textbf{\$11,880.00} \\
\bottomrule
\end{tabular}
\end{center}

\vspace{1cm}

\noindent
\textbf{Payment Information:}

\begin{tabular}{ll}
Bank Name: & ABC Bank \\
Account Number: & 1234567890 \\
Routing Number: & 987654321 \\
SWIFT Code: & ABCDEFGH \\
\end{tabular}

\vspace{0.5cm}

\noindent
\textbf{Notes:}
\begin{itemize}
\item Payment is due within 30 days of invoice date
\item Please include invoice number with payment
\item Late payments subject to 1.5\% monthly interest charge
\end{itemize}

\vspace{1cm}

\begin{center}
\textit{Thank you for your business!}\\[0.3cm]
{\color{headerblue}\rule{10cm}{1pt}}
\end{center}

\end{document}`,
  },
  {
    id: 41,
    title: "Grant Proposal",
    description: "Research grant proposal template",
    slug: "grant-proposal",
    previewUrl: "/templates/grant-proposal.pdf",
    category: "Academic",
    code: String.raw`\documentclass[12pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath}
\usepackage{graphicx}
\usepackage{natbib}

\title{Grant Proposal:\\
Project Title}
\author{Principal Investigator: Your Name\\
Co-Investigators: Names\\
Department of Department Name\\
University Name}
\date{\today}

\begin{document}

\maketitle

\section{Project Summary}

This proposal requests \$[amount] over [duration] to investigate [research question]. The project will [brief description of what will be done] and is expected to [impact].

\textbf{Keywords:} keyword1, keyword2, keyword3

\section{Background and Significance}

\subsection{Context}

The problem of [problem] represents a significant challenge in [field]. Current approaches are limited by [limitations].

\subsection{Significance}

This research is significant because:
\begin{enumerate}
\item It addresses [importance 1]
\item It will contribute [importance 2]
\item It has potential to [importance 3]
\end{enumerate}

\section{Specific Aims}

\textbf{Aim 1:} [Title of Aim 1]

We will [what you will do]. Expected outcome: [outcome].

\textbf{Aim 2:} [Title of Aim 2]

We will [what you will do]. Expected outcome: [outcome].

\textbf{Aim 3:} [Title of Aim 3]

We will [what you will do]. Expected outcome: [outcome].

\section{Research Design and Methods}

\subsection{Overall Approach}

Our approach integrates [methods] to address [research question].

\subsection{Aim 1 Methods}

We will employ [specific methods]. Data will be collected through [procedures].

\textbf{Analysis Plan:} We will analyze data using [statistical methods].

\subsection{Aim 2 Methods}

[Detailed methodology for second aim]

\subsection{Aim 3 Methods}

[Detailed methodology for third aim]

\subsection{Anticipated Challenges}

Potential challenges include [challenges]. We will mitigate these by [mitigation strategies].

\section{Expected Outcomes and Impact}

\subsection{Expected Results}

This project will produce:
\begin{itemize}
\item [Deliverable 1]
\item [Deliverable 2]
\item [Deliverable 3]
\end{itemize}

\subsection{Broader Impact}

The findings will impact [field] by [impact description]. Potential applications include [applications].

\section{Timeline}

\begin{center}
\begin{tabular}{|l|l|}
\hline
\textbf{Period} & \textbf{Activities} \\
\hline
Year 1, Q1-Q2 & Literature review, preliminary studies \\
\hline
Year 1, Q3-Q4 & Aim 1 experiments and data collection \\
\hline
Year 2, Q1-Q2 & Aim 2 experiments and analysis \\
\hline
Year 2, Q3-Q4 & Aim 3 and manuscript preparation \\
\hline
\end{tabular}
\end{center}

\section{Budget}

\subsection{Budget Summary}

\begin{tabular}{lr}
\textbf{Category} & \textbf{Amount} \\
\hline
Personnel & \$[amount] \\
Equipment & \$[amount] \\
Supplies & \$[amount] \\
Travel & \$[amount] \\
Other & \$[amount] \\
\hline
\textbf{Total Direct Costs} & \$[amount] \\
Indirect Costs (XX\%) & \$[amount] \\
\hline
\textbf{Total} & \$[amount] \\
\end{tabular}

\subsection{Budget Justification}

\textbf{Personnel:} [Justification for personnel costs]

\textbf{Equipment:} [Justification for equipment]

\textbf{Supplies:} [Justification for supplies]

\section{Qualifications}

The PI has extensive experience in [area] with [number] publications and \$[amount] in prior funding. The research team includes experts in [areas].

\bibliographystyle{plain}
\bibliography{references}

\end{document}`,
  },
  {
    id: 42,
    title: "Letter of Recommendation",
    description: "Professional recommendation letter template",
    slug: "letter-of-recommendation",
    previewUrl: "/templates/letter-of-recommendation.pdf",
    category: "Letters",
    code: String.raw`\documentclass[11pt]{letter}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}

\signature{Professor Name\\Title\\Department}
\address{Department Name\\University Name\\Address\\City, State ZIP\\Email: professor@university.edu}

\begin{document}

\begin{letter}{Admissions Committee\\Graduate Program Name\\University Name\\Address\\City, State ZIP}

\opening{Dear Members of the Admissions Committee,}

I am writing to enthusiastically recommend Student Name for admission to your Program Name at University Name. I have known Student Name for duration in my capacity as their professor/advisor/supervisor at Institution, and I can state with confidence that he/she/they is one of the most outstanding students I have encountered in my X years of teaching.

\textbf{Academic Excellence}

Student Name was a student in my Course Name course during semester/year, where he/she/they consistently demonstrated exceptional intellectual curiosity and analytical abilities. His/Her/Their performance in the class was exemplary, earning grade/recognition. What particularly impressed me was specific example of academic achievement or insight.

Beyond raw academic talent, Student Name possesses the rare ability to specific strength. For example, concrete example demonstrating this strength.

\textbf{Research Capabilities}

I had the privilege of supervising Student Name's research on topic. His/Her/Their work demonstrated qualities such as methodological rigor, creativity, and independence. The resulting thesis/paper/project made significant contributions to field/area, and outcome: published, presented, etc.

Student Name's research skills include specific skills. He/She/They showed particular aptitude for specific research methods or approaches.

\textbf{Personal Qualities}

Beyond academic credentials, Student Name is mature, responsible, and collaborative. He/She/They worked effectively with peers, demonstrated leadership in context, and showed commitment to relevant activities or values.

Specific examples of these qualities include concrete examples.

\textbf{Recommendation}

In summary, I give Student Name my highest recommendation without reservation. He/She/They has the intellectual capability, research skills, work ethic, and personal qualities to excel in your program and make significant contributions to field.

I am confident that Student Name will be an outstanding addition to your program. If you require any additional information, please do not hesitate to contact me at email or phone.

\closing{Sincerely,}

\end{letter}

\end{document}`,
  },
  {
    id: 43,
    title: "Motivation Letter",
    description: "Academic or professional motivation letter template",
    slug: "motivation-letter",
    previewUrl: "/templates/motivation-letter.pdf",
    category: "Resume & CV",
    code: String.raw`\documentclass[11pt]{letter}
\usepackage[margin=1in]{geometry}

\signature{Your Name}
\address{Your Address\\City, State ZIP\\Email: your.email@example.com\\Phone: +1 (555) 123-4567}

\begin{document}

\begin{letter}{Admissions Committee\\Program Name\\University Name\\Address\\City, Country}

\opening{Dear Members of the Selection Committee,}

I am writing to express my strong interest in the Program Name at University Name. With my background in field and passion for specific interest, I am confident that this program aligns perfectly with my academic and professional goals.

\textbf{Academic Background and Motivation}

My interest in field began when/how. During my undergraduate studies in major at university, I developed a strong foundation in relevant areas. I was particularly drawn to specific aspect and achieved relevant accomplishments.

What motivates me to pursue graduate studies is specific motivation. I am fascinated by research area/topic and believe that University Name's program offers the ideal environment to explore these interests.

\textbf{Relevant Experience}

My experience includes relevant experience 1, where I accomplishments and learnings. This opportunity allowed me to skills developed.

Additionally, I have relevant experience 2, which involved description. Through this work, I gained expertise in specific skills/knowledge and developed qualities.

These experiences have prepared me to contribute meaningfully to program/research area and have confirmed my commitment to career goal/field.

\textbf{Why This Program}

I am particularly attracted to University Name because of specific reasons: faculty, research opportunities, facilities, location, etc. The opportunity to work with Professor Name on their research would be invaluable to my development.

Furthermore, Program Name's emphasis on program features aligns with my goal to career objective. The program's specific resources or opportunities would enable me to how you would benefit.

\textbf{Future Goals}

My long-term goal is to career objective. I envision myself future plans. I believe that Program Name at University Name is the ideal stepping stone toward achieving these goals because reasons.

\textbf{Conclusion}

I am highly motivated, dedicated, and prepared to contribute to the academic community at University Name. I am excited about the prospect of joining Program Name and am confident that I would be a valuable addition to your program.

Thank you for considering my application. I look forward to the opportunity to discuss my qualifications further.

\closing{Sincerely,}

\end{letter}

\end{document}`,
  },
  {
    id: 44,
    title: "Business Plan",
    description: "Professional business plan template",
    slug: "business-plan",
    previewUrl: "/templates/business-plan.pdf",
    category: "Business",
    code: String.raw`\documentclass[12pt]{report}
\usepackage[margin=1in]{geometry}
\usepackage{graphicx}
\usepackage{booktabs}
\usepackage{hyperref}
\usepackage{xcolor}

\definecolor{businessblue}{RGB}{0,71,171}

\begin{document}

\begin{titlepage}
\begin{center}
\vspace*{2cm}

{\Huge \textbf{Business Plan}}\\[0.5cm]
{\LARGE \color{businessblue} Company Name}\\[1.5cm]

{\large Prepared by}\\[0.3cm]
{\Large Founder Name}\\
{\large Title}\\[2cm]

{\large \today}\\[1cm]

\textbf{Confidential}

\end{center}
\end{titlepage}

\tableofcontents

\chapter{Executive Summary}

\section{Business Concept}
[Company Name] is a [type of business] focused on [mission/purpose]. We provide [products/services] to [target market].

\section{Key Success Factors}
\begin{itemize}
\item Factor 1: [Description]
\item Factor 2: [Description]
\item Factor 3: [Description]
\end{itemize}

\section{Financial Highlights}
\begin{itemize}
\item Projected Year 1 Revenue: \$[amount]
\item Break-even: Month [X]
\item Funding Required: \$[amount]
\end{itemize}

\chapter{Company Description}

\section{Company Overview}
[Company Name] was founded in [year] to address [problem/opportunity]. Our vision is to [vision statement].

\section{Mission Statement}
[Mission statement]

\section{Legal Structure}
[Company Name] is registered as a [LLC/Corporation/etc.] in [location].

\section{Location and Facilities}
Our headquarters are located at [address]. The facility includes [description].

\chapter{Products and Services}

\section{Product/Service Description}
We offer the following products and services:

\subsection{Product/Service 1}
[Description, features, benefits]

\subsection{Product/Service 2}
[Description, features, benefits]

\section{Competitive Advantage}
Our competitive advantages include:
\begin{itemize}
\item [Advantage 1]
\item [Advantage 2]
\item [Advantage 3]
\end{itemize}

\chapter{Market Analysis}

\section{Industry Overview}
The [industry] market is valued at \$[amount] and growing at [X]\% annually.

\section{Target Market}
Our target customers are [description]. This market segment represents [size/characteristics].

\section{Market Needs}
Key customer needs include:
\begin{enumerate}
\item [Need 1]
\item [Need 2]
\item [Need 3]
\end{enumerate}

\chapter{Competitive Analysis}

\section{Competitors}
\begin{center}
\begin{tabular}{|p{3cm}|p{4cm}|p{4cm}|}
\hline
\textbf{Competitor} & \textbf{Strengths} & \textbf{Weaknesses} \\
\hline
Competitor A & [Strengths] & [Weaknesses] \\
\hline
Competitor B & [Strengths] & [Weaknesses] \\
\hline
\end{tabular}
\end{center}

\chapter{Marketing Strategy}

\section{Marketing Objectives}
\begin{itemize}
\item Acquire [X] customers in Year 1
\item Achieve [X]\% market share by Year 3
\item Build brand awareness to [metric]
\end{itemize}

\section{Pricing Strategy}
[Pricing model and rationale]

\section{Distribution Channels}
[How products/services will reach customers]

\section{Promotion Strategy}
[Marketing and promotional activities]

\chapter{Operations Plan}

\section{Production/Service Delivery}
[How products will be produced or services delivered]

\section{Suppliers}
[Key suppliers and partnerships]

\section{Technology}
[Technology infrastructure and systems]

\chapter{Management Team}

\section{Organizational Structure}
[Description of organizational structure]

\section{Key Personnel}
\textbf{Name, Title}\\
Background and qualifications

\chapter{Financial Projections}

\section{Sales Forecast}
\begin{center}
\begin{tabular}{|l|r|r|r|}
\hline
\textbf{Year} & \textbf{Year 1} & \textbf{Year 2} & \textbf{Year 3} \\
\hline
Revenue & \$[amount] & \$[amount] & \$[amount] \\
\hline
\end{tabular}
\end{center}

\section{Funding Requirements}
We are seeking \$[amount] in funding to [purpose].

\section{Use of Funds}
\begin{itemize}
\item Product Development: \$[amount]
\item Marketing: \$[amount]
\item Operations: \$[amount]
\item Working Capital: \$[amount]
\end{itemize}

\chapter{Appendix}

\section{Supporting Documents}
[Additional documentation and exhibits]

\end{document}`,
  },
  {
    id: 45,
    title: "Business Report",
    description: "Corporate business report template",
    slug: "business-report",
    previewUrl: "/templates/business-report.pdf",
    category: "Business",
    code: String.raw`\documentclass[11pt]{report}
\usepackage[margin=1in]{geometry}
\usepackage{graphicx}
\usepackage{booktabs}
\usepackage{fancyhdr}
\usepackage{xcolor}

\definecolor{corpblue}{RGB}{0,51,102}

\pagestyle{fancy}
\fancyhf{}
\lhead{\color{corpblue}\textbf{Business Report}}
\rhead{\color{corpblue}\today}
\cfoot{\thepage}

\begin{document}

\begin{titlepage}
\begin{center}
\vspace*{2cm}

{\color{corpblue}\rule{\linewidth}{2pt}}\\[0.5cm]
{\Huge \textbf{Business Report}}\\[0.3cm]
{\Large Report Title}\\[0.3cm]
{\color{corpblue}\rule{\linewidth}{2pt}}\\[1.5cm]

{\large Prepared for}\\[0.3cm]
{\Large Company Name}\\[2cm]

{\large Prepared by}\\[0.3cm]
{\Large Author Name}\\
{\large Department/Team}\\[2cm]

{\large \today}

\end{center}
\end{titlepage}

\chapter*{Executive Summary}
\addcontentsline{toc}{chapter}{Executive Summary}

This report presents [brief overview of report content]. Key findings include [summary of main findings]. Based on this analysis, we recommend [primary recommendations].

\textbf{Key Findings:}
\begin{itemize}
\item Finding 1
\item Finding 2
\item Finding 3
\end{itemize}

\textbf{Recommendations:}
\begin{itemize}
\item Recommendation 1
\item Recommendation 2
\item Recommendation 3
\end{itemize}

\tableofcontents

\chapter{Introduction}

\section{Purpose}
The purpose of this report is to [objective].

\section{Scope}
This report covers [scope description] for the period of [time period].

\section{Methodology}
Data was collected through [methods]. Analysis included [analytical approaches].

\chapter{Background}

\section{Context}
[Relevant background information and context]

\section{Current Situation}
[Description of current state]

\chapter{Analysis}

\section{Findings}

\subsection{Finding 1: [Title]}
[Detailed description of finding]

\begin{table}[h]
\centering
\caption{Supporting Data}
\begin{tabular}{@{}lcc@{}}
\toprule
\textbf{Metric} & \textbf{Current} & \textbf{Target} \\
\midrule
Metric 1 & Value & Value \\
Metric 2 & Value & Value \\
Metric 3 & Value & Value \\
\bottomrule
\end{tabular}
\end{table}

\subsection{Finding 2: [Title]}
[Detailed description]

\subsection{Finding 3: [Title]}
[Detailed description]

\section{Implications}
The findings have the following implications:
\begin{enumerate}
\item Implication 1
\item Implication 2
\item Implication 3
\end{enumerate}

\chapter{Recommendations}

\section{Recommendation 1: [Title]}
\textbf{Description:} [What should be done]

\textbf{Rationale:} [Why this recommendation is being made]

\textbf{Implementation:} [How to implement]

\textbf{Timeline:} [Expected timeline]

\textbf{Resources Required:} [What is needed]

\section{Recommendation 2: [Title]}
[Same structure as above]

\section{Recommendation 3: [Title]}
[Same structure as above]

\chapter{Conclusion}

\section{Summary}
This report has examined [topic] and identified [key findings]. The analysis reveals [insights].

\section{Next Steps}
Immediate next steps include:
\begin{enumerate}
\item Action 1 - Timeline
\item Action 2 - Timeline
\item Action 3 - Timeline
\end{enumerate}

\chapter*{Appendices}
\addcontentsline{toc}{chapter}{Appendices}

\section*{Appendix A: Data Sources}
[List of data sources]

\section*{Appendix B: Detailed Calculations}
[Supporting calculations]

\end{document}`,
  },
  {
    id: 46,
    title: "Scientific Report",
    description: "Scientific research report template",
    slug: "scientific-report",
    previewUrl: "/templates/scientific-report.pdf",
    category: "Academic",
    code: String.raw`\documentclass[12pt]{report}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx}
\usepackage{cite}
\usepackage{abstract}

\begin{document}

\begin{titlepage}
\begin{center}
\vspace*{2cm}

{\Large \textbf{Scientific Report}}\\[1cm]
{\Huge \textbf{Report Title}}\\[1.5cm]

{\large Author Name$^1$, Co-Author Name$^2$}\\[0.5cm]
{\normalsize $^1$Department, Institution}\\
{\normalsize $^2$Department, Institution}\\[2cm]

{\large \today}

\end{center}
\end{titlepage}

\begin{abstract}
This report presents findings from research on [topic]. We investigated [research question] using [methodology]. Results indicate [main findings]. These findings have implications for [field/application].
\end{abstract}

\tableofcontents

\chapter{Introduction}

\section{Background}
The field of [topic] has seen significant advances in [context]. However, questions remain about [gap in knowledge].

\section{Objectives}
The objectives of this research were to:
\begin{enumerate}
\item Objective 1
\item Objective 2
\item Objective 3
\end{enumerate}

\section{Significance}
This research is significant because [importance].

\chapter{Literature Review}

\section{Theoretical Framework}
Previous work by [citations] established that [background]. Recent studies have demonstrated [recent findings].

\section{Research Gap}
Despite these advances, [gap that this research addresses].

\chapter{Methodology}

\section{Experimental Design}
We employed a [type of study] design to investigate [question].

\section{Materials}
Materials included:
\begin{itemize}
\item Material 1
\item Material 2
\item Material 3
\end{itemize}

\section{Procedures}
\subsection{Data Collection}
Data was collected through [methods]. Measurements included [parameters].

\subsection{Data Analysis}
Statistical analysis was performed using [software/methods]. Significance was determined using [statistical tests] with $\alpha = 0.05$.

\section{Ethical Considerations}
This research was approved by [ethics board]. All participants provided [informed consent/ethical approval details].

\chapter{Results}

\section{Primary Findings}

\subsection{Result 1}
[Description of first major result]

\begin{figure}[h]
\centering
\caption{Results visualization}
\label{fig:results1}
\end{figure}

Statistical analysis revealed [statistical findings] ($p < 0.05$).

\subsection{Result 2}
[Description of second major result]

\subsection{Result 3}
[Description of third major result]

\section{Secondary Findings}
Additional observations included [secondary findings].

\chapter{Discussion}

\section{Interpretation of Results}
The findings support [interpretation]. This is consistent with [theory/previous work].

\subsection{Comparison with Previous Studies}
Our results are similar to [previous work] in that [similarity]. However, we found [difference].

\section{Implications}
These findings have several implications:
\begin{enumerate}
\item Theoretical implication
\item Practical implication
\item Methodological implication
\end{enumerate}

\section{Limitations}
This study has several limitations:
\begin{itemize}
\item Limitation 1
\item Limitation 2
\item Limitation 3
\end{itemize}

\section{Future Research}
Future research should address [recommendations for future work].

\chapter{Conclusion}

This research investigated [topic] and found that [summary of main findings]. These results suggest [conclusions]. The findings contribute to [field] by [contribution].

\section{Recommendations}
Based on these findings, we recommend:
\begin{enumerate}
\item Recommendation 1
\item Recommendation 2
\item Recommendation 3
\end{enumerate}

\bibliographystyle{plain}
\bibliography{references}

\end{document}`,
  },
  {
    id: 47,
    title: "Internship Report",
    description: "Student internship report template",
    slug: "internship-report",
    previewUrl: "/templates/internship-report.pdf",
    category: "Reports",
    code: String.raw`\documentclass[12pt]{report}
\usepackage[margin=1in]{geometry}
\usepackage{graphicx}
\usepackage{hyperref}

\begin{document}

\begin{titlepage}
\begin{center}
\vspace*{2cm}

{\Large \textbf{Internship Report}}\\[1cm]
{\Huge \textbf{Report Title}}\\[1.5cm]

{\large Submitted by}\\[0.3cm]
{\Large Student Name}\\
{\large Student ID: 12345}\\[1cm]

{\large Internship at}\\[0.3cm]
{\Large Company Name}\\
{\large Department}\\[1cm]

{\large Duration: [Start Date] - [End Date]}\\[2cm]

{\large Submitted to}\\[0.3cm]
{\large Department of [Department]}\\
{\large University Name}\\[1cm]

{\large \today}

\end{center}
\end{titlepage}

\chapter*{Acknowledgments}
\addcontentsline{toc}{chapter}{Acknowledgments}

I would like to express my sincere gratitude to [Supervisor Name] for their guidance and support throughout my internship. I am also grateful to [other people] for [their contributions].

\chapter*{Abstract}
\addcontentsline{toc}{chapter}{Abstract}

This report documents my internship experience at [Company Name] in the [Department] from [dates]. During this period, I worked on [main projects/responsibilities]. The internship provided valuable experience in [skills/areas] and enhanced my understanding of [field/industry].

\tableofcontents

\chapter{Introduction}

\section{Background}
This internship was undertaken as part of the requirements for [degree/program] at [University Name].

\section{Objectives}
The main objectives of this internship were to:
\begin{enumerate}
\item Gain practical experience in [field]
\item Develop skills in [specific skills]
\item Apply theoretical knowledge to real-world problems
\item Explore career opportunities in [industry]
\end{enumerate}

\chapter{Company Overview}

\section{Company Profile}
[Company Name] is a [type of company] founded in [year]. The company specializes in [services/products] and serves [market/clients].

\section{Department Description}
I was assigned to the [Department Name] which is responsible for [department functions].

\section{Organizational Structure}
[Description of relevant organizational structure]

\chapter{Internship Activities}

\section{Week-by-Week Summary}

\subsection{Weeks 1-2: Orientation and Initial Training}
During the first two weeks, I underwent orientation and training in [areas]. This included [specific activities].

\subsection{Weeks 3-6: Main Project Work}
The main phase of my internship involved [description of main work]. My responsibilities included:
\begin{itemize}
\item Task 1
\item Task 2
\item Task 3
\end{itemize}

\subsection{Weeks 7-8: Project Completion}
The final weeks focused on [final activities and wrap-up].

\section{Major Projects}

\subsection{Project 1: [Title]}
\textbf{Description:} [What the project was about]

\textbf{My Role:} [What you did]

\textbf{Skills Used:} [Technical and soft skills applied]

\textbf{Outcome:} [Results and impact]

\subsection{Project 2: [Title]}
[Same structure as above]

\section{Daily Responsibilities}
My regular responsibilities included [daily tasks].

\chapter{Skills and Learning Outcomes}

\section{Technical Skills Acquired}
\begin{itemize}
\item Skill 1: [Description and proficiency level]
\item Skill 2: [Description and proficiency level]
\item Skill 3: [Description and proficiency level]
\end{itemize}

\section{Professional Skills Developed}
\begin{itemize}
\item Communication skills
\item Teamwork and collaboration
\item Time management
\item Problem-solving
\end{itemize}

\section{Application of Academic Knowledge}
I was able to apply knowledge from [specific courses] to [practical situations]. For example, [specific example].

\chapter{Challenges and Solutions}

\section{Challenges Encountered}
During my internship, I faced several challenges:

\subsection{Challenge 1}
[Description of challenge and how it was addressed]

\subsection{Challenge 2}
[Description of challenge and how it was addressed]

\section{Problem-Solving Approaches}
I learned to approach problems by [methodology].

\chapter{Conclusions and Recommendations}

\section{Overall Experience}
My internship at [Company Name] was extremely valuable. I gained [key takeaways].

\section{Connection to Academic Studies}
The internship reinforced concepts from [courses] and provided practical context for [theories/concepts].

\section{Career Insights}
This experience has clarified my career goals. I now understand that [insights about career path].

\section{Recommendations}
\subsection{For the Company}
[Suggestions for the company, if appropriate]

\subsection{For Future Interns}
I would recommend that future interns:
\begin{itemize}
\item Recommendation 1
\item Recommendation 2
\item Recommendation 3
\end{itemize}

\chapter*{Appendices}
\addcontentsline{toc}{chapter}{Appendices}

\section*{Appendix A: Work Samples}
[Description or inclusion of work samples, if appropriate]

\section*{Appendix B: Photos/Documentation}
[Any relevant documentation]

\end{document}`,
  },
  {
    id: 48,
    title: "Newsletter",
    description: "Professional newsletter template",
    slug: "newsletter",
    previewUrl: "/templates/newsletter.pdf",
    category: "Business",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=0.75in]{geometry}
\usepackage{multicol}
\usepackage{graphicx}
\usepackage{xcolor}
\usepackage{tcolorbox}

\definecolor{headerblue}{RGB}{0,102,204}
\definecolor{lightgray}{RGB}{240,240,240}

\pagestyle{empty}

\begin{document}

% Header
\begin{center}
{\color{headerblue}\rule{\linewidth}{3pt}}\\[0.2cm]
{\Huge \textbf{Organization Newsletter}}\\[0.2cm]
{\Large Month Year | Volume X, Issue X}\\[0.2cm]
{\color{headerblue}\rule{\linewidth}{3pt}}
\end{center}

\vspace{0.3cm}

% Main Story
\begin{tcolorbox}[colback=lightgray,colframe=headerblue,title=\textbf{Feature Story}]
{\Large \textbf{Headline Goes Here}}

\vspace{0.2cm}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This is the main feature article that highlights the most important news or announcement.

Key points include:
\begin{itemize}
\item Important point 1
\item Important point 2
\item Important point 3
\end{itemize}
\end{tcolorbox}

\vspace{0.5cm}

\begin{multicols}{2}

\section*{{\color{headerblue}News \& Updates}}

\subsection*{Update Title 1}
Brief description of this update or news item. Include relevant details and any action items for readers.

\subsection*{Update Title 2}
Another important update for the community. This could be an event announcement, policy change, or achievement.

\subsection*{Update Title 3}
Additional news item with relevant information for the audience.

\columnbreak

\section*{{\color{headerblue}Upcoming Events}}

\textbf{Event Name 1}\\
Date: January 15, 2025\\
Time: 2:00 PM - 4:00 PM\\
Location: Main Hall\\
Description: Brief event description.

\vspace{0.3cm}

\textbf{Event Name 2}\\
Date: January 22, 2025\\
Time: 10:00 AM - 12:00 PM\\
Location: Conference Room\\
Description: Brief event description.

\end{multicols}

\vspace{0.3cm}

\begin{center}
{\color{headerblue}\rule{\linewidth}{1pt}}
\end{center}

\begin{multicols}{2}

\section*{{\color{headerblue}Spotlight}}

\textbf{Member/Employee Spotlight}

This month we recognize [Name] for [achievement or contribution]. [Brief description of their work and impact].

''Quote from the person being featured about their experience or perspective.''

\columnbreak

\section*{{\color{headerblue}Tips \& Resources}}

\begin{itemize}
\item \textbf{Tip 1:} Helpful advice or resource
\item \textbf{Tip 2:} Another useful tip
\item \textbf{Tip 3:} Additional resource
\item \textbf{Tip 4:} More helpful information
\end{itemize}

\end{multicols}

\vspace{0.3cm}

\begin{center}
{\color{headerblue}\rule{\linewidth}{1pt}}
\end{center}

\vspace{0.3cm}

\section*{{\color{headerblue}Did You Know?}}

\begin{tcolorbox}[colback=white,colframe=headerblue]
Interesting fact or statistic related to your organization or field. This section can be used to educate or engage readers with surprising or useful information.
\end{tcolorbox}

\vspace{0.3cm}

\begin{multicols}{3}

\section*{{\color{headerblue}Quick Links}}

\begin{itemize}
\item Website
\item Portal
\item Resources
\item Contact
\end{itemize}

\columnbreak

\section*{{\color{headerblue}Contact Info}}

Email: info@org.com\\
Phone: (555) 123-4567\\
Address: 123 Main St

\columnbreak

\section*{{\color{headerblue}Follow Us}}

\begin{itemize}
\item Twitter
\item LinkedIn
\item Facebook
\item Instagram
\end{itemize}

\end{multicols}

\vspace{0.3cm}

\begin{center}
{\color{headerblue}\rule{\linewidth}{3pt}}\\[0.1cm]
{\small \textit{Organization Name | www.organization.com | info@organization.com}}
\end{center}

\end{document}`,
  },
  {
    id: 49,
    title: "Questionnaire",
    description: "Research survey and questionnaire template",
    slug: "questionnaire",
    previewUrl: "/templates/questionnaire.pdf",
    category: "Other",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{enumitem}
\usepackage{amsmath}
\usepackage{amssymb}

\begin{document}

\begin{center}
{\Large \textbf{Research Questionnaire}}\\[0.3cm]
{\large Study Title}\\[0.5cm]
\end{center}

\section*{Participant Information}

\noindent
Thank you for participating in this study. This questionnaire should take approximately [X] minutes to complete. Your responses will be kept confidential and used only for research purposes.

\vspace{0.3cm}

\noindent
\textbf{Participant ID:} \underline{\hspace{5cm}}\\
\textbf{Date:} \underline{\hspace{5cm}}

\section*{Instructions}

Please answer all questions honestly. There are no right or wrong answers. For multiple choice questions, select the option that best represents your view. For open-ended questions, please provide detailed responses.

\section*{Part 1: Demographic Information}

\begin{enumerate}[leftmargin=*]

\item Age: 
\begin{itemize}[label=$\square$]
\item 18-24
\item 25-34
\item 35-44
\item 45-54
\item 55-64
\item 65+
\end{itemize}

\item Gender:
\begin{itemize}[label=$\square$]
\item Male
\item Female
\item Non-binary
\item Prefer not to say
\item Other: \underline{\hspace{4cm}}
\end{itemize}

\item Education Level:
\begin{itemize}[label=$\square$]
\item High School
\item Some College
\item Bachelor's Degree
\item Master's Degree
\item Doctoral Degree
\item Other: \underline{\hspace{4cm}}
\end{itemize}

\item Occupation: \underline{\hspace{10cm}}

\end{enumerate}

\section*{Part 2: Main Questions}

\begin{enumerate}[leftmargin=*, resume]

\item On a scale of 1-5, how would you rate [topic]?\\
(1 = Very Poor, 5 = Excellent)

\begin{center}
\begin{tabular}{ccccc}
1 $\square$ & 2 $\square$ & 3 $\square$ & 4 $\square$ & 5 $\square$
\end{tabular}
\end{center}

\item How often do you [activity]?
\begin{itemize}[label=$\square$]
\item Daily
\item Several times a week
\item Once a week
\item Several times a month
\item Rarely
\item Never
\end{itemize}

\item Please indicate your level of agreement with the following statements:

\begin{center}
\begin{tabular}{|p{6cm}|c|c|c|c|c|}
\hline
\textbf{Statement} & \textbf{Strongly Disagree} & \textbf{Disagree} & \textbf{Neutral} & \textbf{Agree} & \textbf{Strongly Agree} \\
\hline
Statement 1 & $\square$ & $\square$ & $\square$ & $\square$ & $\square$ \\
\hline
Statement 2 & $\square$ & $\square$ & $\square$ & $\square$ & $\square$ \\
\hline
Statement 3 & $\square$ & $\square$ & $\square$ & $\square$ & $\square$ \\
\hline
\end{tabular}
\end{center}

\item Which of the following apply to you? (Select all that apply)
\begin{itemize}[label=$\square$]
\item Option A
\item Option B
\item Option C
\item Option D
\item None of the above
\end{itemize}

\item In your opinion, what is the most important factor regarding [topic]?

\vspace{3cm}

\item Please describe your experience with [topic]:

\vspace{3cm}

\item What improvements would you suggest?

\vspace{3cm}

\end{enumerate}

\section*{Part 3: Additional Comments}

\begin{enumerate}[leftmargin=*, resume]

\item Is there anything else you would like to share about [topic]?

\vspace{4cm}

\end{enumerate}

\vspace{1cm}

\begin{center}
\textbf{Thank you for your participation!}\\[0.3cm]
For questions about this study, please contact:\\
Researcher Name | Email | Phone
\end{center}

\end{document}`,
  },
  {
    id: 50,
    title: "Table Template",
    description: "Professional table layouts and formatting",
    slug: "table-template",
    previewUrl: "/templates/table-template.pdf",
    category: "Other",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{booktabs}
\usepackage{array}
\usepackage[table]{xcolor}
\usepackage{multirow}

\title{LaTeX Table Examples}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Basic Table}

\begin{table}[h]
\centering
\caption{Simple table example}
\begin{tabular}{|l|c|r|}
\hline
\textbf{Left} & \textbf{Center} & \textbf{Right} \\
\hline
Data 1 & Data 2 & Data 3 \\
Data 4 & Data 5 & Data 6 \\
Data 7 & Data 8 & Data 9 \\
\hline
\end{tabular}
\end{table}

\section{Professional Table with Booktabs}

\begin{table}[h]
\centering
\caption{Professional table with booktabs}
\begin{tabular}{@{}llr@{}}
\toprule
\textbf{Item} & \textbf{Description} & \textbf{Value} \\
\midrule
Item A & First item & 100 \\
Item B & Second item & 200 \\
Item C & Third item & 300 \\
\midrule
\textbf{Total} & & \textbf{600} \\
\bottomrule
\end{tabular}
\end{table}

\section{Table with Custom Column Widths}

\begin{table}[h]
\centering
\caption{Table with paragraph columns}
\begin{tabular}{|p{3cm}|p{5cm}|p{3cm}|}
\hline
\textbf{Name} & \textbf{Description} & \textbf{Status} \\
\hline
Project A & This is a longer description that will wrap within the column & Complete \\
\hline
Project B & Another description that demonstrates text wrapping & In Progress \\
\hline
Project C & Final project description & Pending \\
\hline
\end{tabular}
\end{table}

\section{Colored Table}

\begin{table}[h]
\centering
\caption{Table with colored rows}
\begin{tabular}{|l|c|c|c|}
\hline
\rowcolor{blue!20}
\textbf{Category} & \textbf{Q1} & \textbf{Q2} & \textbf{Q3} \\
\hline
Sales & \$10,000 & \$12,000 & \$15,000 \\
\rowcolor{gray!10}
Marketing & \$5,000 & \$6,000 & \$7,000 \\
Operations & \$8,000 & \$8,500 & \$9,000 \\
\rowcolor{gray!10}
R\&D & \$15,000 & \$16,000 & \$17,000 \\
\hline
\end{tabular}
\end{table}

\section{Table with Multirow and Multicolumn}

\begin{table}[h]
\centering
\caption{Complex table with merged cells}
\begin{tabular}{|l|c|c|c|}
\hline
\multirow{2}{*}{\textbf{Item}} & \multicolumn{3}{c|}{\textbf{Quarters}} \\
\cline{2-4}
& Q1 & Q2 & Q3 \\
\hline
Revenue & 100 & 120 & 150 \\
Costs & 60 & 70 & 80 \\
\hline
\textbf{Profit} & \textbf{40} & \textbf{50} & \textbf{70} \\
\hline
\end{tabular}
\end{table}

\section{Data Table}

\begin{table}[h]
\centering
\caption{Scientific data table}
\begin{tabular}{@{}lcccc@{}}
\toprule
\textbf{Experiment} & \textbf{Trial 1} & \textbf{Trial 2} & \textbf{Trial 3} & \textbf{Mean} \\
\midrule
Test A & 5.2 & 5.4 & 5.3 & 5.3 \\
Test B & 7.1 & 7.3 & 7.0 & 7.1 \\
Test C & 9.8 & 9.9 & 9.7 & 9.8 \\
\midrule
\textbf{Average} & \textbf{7.4} & \textbf{7.5} & \textbf{7.3} & \textbf{7.4} \\
\bottomrule
\end{tabular}
\end{table}

\section{Comparison Table}

\begin{table}[h]
\centering
\caption{Feature comparison}
\begin{tabular}{|l|c|c|c|}
\hline
\textbf{Feature} & \textbf{Plan A} & \textbf{Plan B} & \textbf{Plan C} \\
\hline
Storage & 10 GB & 100 GB & Unlimited \\
Users & 1 & 5 & Unlimited \\
Support & Email & Email + Chat & 24/7 Phone \\
Price & \$10/mo & \$50/mo & \$100/mo \\
\hline
\end{tabular}
\end{table}

\section{Schedule Table}

\begin{table}[h]
\centering
\caption{Weekly schedule}
\begin{tabular}{|l|p{2cm}|p{2cm}|p{2cm}|p{2cm}|}
\hline
\textbf{Time} & \textbf{Monday} & \textbf{Tuesday} & \textbf{Wednesday} & \textbf{Thursday} \\
\hline
9:00 AM & Meeting & Project Work & Meeting & Review \\
\hline
11:00 AM & Development & Development & Development & Testing \\
\hline
2:00 PM & Testing & Documentation & Client Call & Planning \\
\hline
4:00 PM & Email & Meetings & Code Review & Wrap-up \\
\hline
\end{tabular}
\end{table}

\end{document}`,
  },
  {
    id: 51,
    title: "Bibliography",
    description: "Standalone bibliography and references template",
    slug: "bibliography",
    previewUrl: "/templates/bibliography.pdf",
    category: "Academic",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{natbib}

\title{Bibliography and References Guide}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}

This document demonstrates various citation and bibliography styles in LaTeX. Below are examples of how to cite different types of sources and how they appear in the bibliography.

\section{Citation Examples}

\subsection{Books}
According to \citet{knuth1984}, typesetting is an art. The seminal work on algorithms \citep{cormen2009} provides comprehensive coverage.

\subsection{Journal Articles}
Recent research \citep{smith2020} has shown significant advances. Multiple studies \citep{jones2019,brown2021} support this conclusion.

\subsection{Conference Papers}
The methodology was first presented at a conference \citep{anderson2018}.

\subsection{Web Resources}
Online documentation \citep{latex2023} is available for reference.

\section{Different Citation Formats}

\begin{itemize}
\item Parenthetical: \citep{knuth1984}
\item Textual: \citet{knuth1984}
\item Author only: \citeauthor{knuth1984}
\item Year only: \citeyear{knuth1984}
\item Multiple citations: \citep{smith2020,jones2019}
\end{itemize}

\section{References Section}

The bibliography below is automatically generated from the citations in the document. Different bibliography styles (APA, IEEE, Chicago, etc.) can be used by changing the bibliographystyle command.

% Bibliography
\bibliographystyle{apalike}

\begin{thebibliography}{99}

\bibitem[Knuth, 1984]{knuth1984}
Knuth, D. E. (1984).
\textit{The TeXbook}.
Addison-Wesley Professional.

\bibitem[Cormen et al., 2009]{cormen2009}
Cormen, T. H., Leiserson, C. E., Rivest, R. L., and Stein, C. (2009).
\textit{Introduction to Algorithms}, 3rd edition.
MIT Press.

\bibitem[Smith, 2020]{smith2020}
Smith, J. (2020).
Recent advances in computational methods.
\textit{Journal of Computer Science}, 45(3), 123-145.

\bibitem[Jones, 2019]{jones2019}
Jones, M. (2019).
A survey of modern techniques.
\textit{ACM Computing Surveys}, 52(1), 1-35.

\bibitem[Brown and Davis, 2021]{brown2021}
Brown, R. and Davis, S. (2021).
New perspectives on machine learning.
\textit{IEEE Transactions on Pattern Analysis and Machine Intelligence}, 43(7), 2456-2470.

\bibitem[Anderson et al., 2018]{anderson2018}
Anderson, P., Wilson, K., and Lee, C. (2018).
Novel approaches to data analysis.
In \textit{Proceedings of the International Conference on Data Science}, pages 234-241.

\bibitem[LaTeX Project, 2023]{latex2023}
LaTeX Project (2023).
\textit{LaTeX Documentation}.
Available at: https://www.latex-project.org/help/documentation/
[Accessed: January 2023].

\bibitem[Miller, 2022]{miller2022}
Miller, T. (2022).
\textit{Advanced Topics in Computer Science}.
PhD thesis, University of Example.

\bibitem[Taylor and Clark, 2020]{taylor2020}
Taylor, A. and Clark, B. (2020).
Statistical methods in research.
Technical Report TR-2020-01, Research Institute.

\bibitem[White, 2019]{white2019}
White, E. (2019).
Introduction to LaTeX.
In Johnson, R., editor, \textit{Academic Writing Tools}, chapter 3, pages 45-78.
Academic Press.

\end{thebibliography}

\section{Notes on Bibliography Management}

For larger projects, consider using BibTeX or BibLaTeX with external .bib files. This allows for:

\begin{itemize}
\item Centralized reference management
\item Automatic formatting
\item Easy reuse across documents
\item Integration with reference managers (Zotero, Mendeley, etc.)
\end{itemize}

\subsection{Common Bibliography Styles}

\begin{itemize}
\item \texttt{plain}: Basic style, sorted alphabetically
\item \texttt{apalike}: APA-like style
\item \texttt{ieeetr}: IEEE Transaction style
\item \texttt{acm}: ACM style
\item \texttt{chicago}: Chicago Manual of Style
\end{itemize}

\end{document}`,
  },
  {
    id: 52,
    title: "Memo",
    description: "Professional business memo template",
    slug: "memo",
    previewUrl: "/templates/memo.pdf",
    category: "Business",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{graphicx}

\pagestyle{empty}

\begin{document}

\begin{center}
{\Large \textbf{MEMORANDUM}}
\end{center}

\vspace{0.5cm}

\noindent
\textbf{TO:} Recipients Name, Title\\
\textbf{FROM:} Your Name, Title\\
\textbf{DATE:} \today\\
\textbf{RE:} Subject of Memo

\vspace{0.5cm}

\noindent
\rule{\linewidth}{0.5pt}

\vspace{0.5cm}

\section*{Purpose}

This memo is to inform you about topic. The purpose of this communication is to briefly describe the main purpose or reason for the memo.

\section*{Background}

Provide relevant background information or context. Explain the situation or issue that prompted this memo. Include any necessary details that will help recipients understand the matter at hand.

\section*{Discussion}

Present the main points or details:

\begin{itemize}
\item \textbf{Point 1:} First key point or finding
\item \textbf{Point 2:} Second important consideration
\item \textbf{Point 3:} Additional relevant information
\item \textbf{Point 4:} Further details as needed
\end{itemize}

Additional analysis or explanation of the situation. Provide any data, evidence, or reasoning that supports your points.

\section*{Recommendation/Action Items}

Based on the discussion above, the following actions are recommended:

\begin{enumerate}
\item Action item 1 - Responsible party and deadline
\item Action item 2 - Responsible party and deadline
\item Action item 3 - Responsible party and deadline
\end{enumerate}

\section*{Conclusion}

Summarize the key takeaway or next steps. Provide any final thoughts or emphasize the importance of the matter.

\vspace{1cm}

\noindent
If you have any questions or need additional information, please contact me at email@company.com or extension 1234.

\end{document}`,
  },
  {
    id: 53,
    title: "Manuscript",
    description: "Book manuscript template for novels and non-fiction",
    slug: "manuscript",
    previewUrl: "/templates/manuscript.pdf",
    category: "Academic",
    code: String.raw`\documentclass[12pt]{book}
\usepackage[margin=1in]{geometry}
\usepackage{setspace}
\doublespacing
\usepackage{fancyhdr}

\pagestyle{fancy}
\fancyhf{}
\fancyhead[RO]{\thepage}
\fancyhead[LE]{\thepage}
\fancyhead[LO]{Author Last Name / BOOK TITLE}
\fancyhead[RE]{Author Last Name / BOOK TITLE}
\renewcommand{\headrulewidth}{0pt}

\begin{document}

\begin{titlepage}
\begin{flushleft}
Your Name\\
Street Address\\
City, State ZIP\\
Phone Number\\
Email Address\\
Word Count: Approximately XX,XXX words
\end{flushleft}

\vspace{3cm}

\begin{center}
{\Huge \textbf{BOOK TITLE}}\\[1cm]
{\Large by}\\[1cm]
{\LARGE Your Name}
\end{center}
\end{titlepage}

\frontmatter

\chapter*{Dedication}
To those who inspire us to write.

\chapter*{Acknowledgments}
I would like to thank individuals who helped bring this book to life.

\tableofcontents

\mainmatter

\chapter{Chapter One Title}

The opening paragraph of your first chapter should hook the reader immediately. It should establish the tone, introduce key elements, and draw the reader into your story or subject matter.

Continue with the narrative or exposition. Each paragraph should flow naturally into the next, building your story or argument systematically.

New scenes or major transitions can be indicated with extra spacing or section breaks.

\section*{}

When you need a scene break within a chapter, you can use a centered symbol or simply extra white space.

The story continues with the new scene. Maintain consistency in your narrative voice and style throughout.

\chapter{Chapter Two Title}

The second chapter continues the narrative, building on what was established in the first chapter. Character development, plot progression, and thematic elements should continue to unfold naturally.

Each chapter should have a clear purpose in advancing your story or argument. Consider pacing, tension, and reader engagement as you write.

\chapter{Chapter Three Title}

Continue building your narrative or exposition. Develop characters, advance plot points, or present your arguments and evidence systematically.

Remember to:
\begin{itemize}
\item Show, don't tell (for fiction)
\item Maintain consistent point of view
\item Develop compelling characters or clear arguments
\item Create engaging dialogue (for fiction)
\item Build appropriate pacing and tension
\end{itemize}

\chapter{Conclusion or Final Chapter}

Bring your narrative or argument to a satisfying conclusion. Resolve major plot points or synthesize your key arguments. Leave the reader with something meaningful to consider.

\backmatter

\chapter*{Author Bio}
Your Name is a writer who background and credentials. Previous publications or relevant experience.

\end{document}`,
  },
  {
    id: 54,
    title: "Recipe Book",
    description: "Cookbook and recipe collection template",
    slug: "recipe-book",
    previewUrl: "/templates/recipe-book.pdf",
    category: "Other",
    code: String.raw`\documentclass[11pt]{book}
\usepackage[margin=1in]{geometry}
\usepackage{graphicx}
\usepackage{enumitem}
\usepackage{multicol}
\usepackage{xcolor}

\definecolor{recipecolor}{RGB}{139,69,19}

\begin{document}

\begin{titlepage}
\begin{center}
\vspace*{2cm}

{\Huge \textbf{My Recipe Collection}}\\[1cm]
{\Large Delicious Recipes for Every Occasion}\\[2cm]

{\large Compiled by}\\[0.5cm]
{\Large Your Name}\\[3cm]

\today
\end{center}
\end{titlepage}

\tableofcontents

\chapter{Appetizers \& Starters}

\section*{Bruschetta}

\textbf{Servings:} 6 | \textbf{Prep Time:} 15 min | \textbf{Cook Time:} 5 min

\subsection*{Ingredients}

\begin{itemize}[leftmargin=*]
\item 1 French baguette, sliced
\item 4 ripe tomatoes, diced
\item 3 cloves garlic (1 whole, 2 minced)
\item 1/4 cup fresh basil, chopped
\item 2 tablespoons olive oil
\item 1 tablespoon balsamic vinegar
\item Salt and pepper to taste
\end{itemize}

\subsection*{Instructions}

\begin{enumerate}[leftmargin=*]
\item Preheat oven to 400°F (200°C).
\item Brush bread slices with olive oil and toast in oven until golden, about 5 minutes.
\item Mix tomatoes, minced garlic, basil, vinegar, salt, and pepper in a bowl.
\item Rub toasted bread with whole garlic clove.
\item Top with tomato mixture and serve immediately.
\end{enumerate}

\subsection*{Notes}

Best served fresh. Can prepare tomato mixture 1 hour ahead and refrigerate.

\chapter{Main Courses}

\section*{Classic Spaghetti Carbonara}

\textbf{Servings:} 4 | \textbf{Prep Time:} 10 min | \textbf{Cook Time:} 20 min

\subsection*{Ingredients}

\begin{itemize}[leftmargin=*]
\item 1 lb spaghetti
\item 6 oz pancetta or bacon, diced
\item 4 large eggs
\item 1 cup Parmesan cheese, grated
\item 2 cloves garlic, minced
\item Salt and black pepper to taste
\item Fresh parsley for garnish
\end{itemize}

\subsection*{Instructions}

\begin{enumerate}[leftmargin=*]
\item Bring large pot of salted water to boil. Cook spaghetti according to package directions.
\item Meanwhile, cook pancetta in large skillet over medium heat until crispy, about 8 minutes.
\item In bowl, whisk together eggs, Parmesan, and black pepper.
\item Reserve 1 cup pasta water, then drain pasta.
\item Add hot pasta to skillet with pancetta. Remove from heat.
\item Quickly stir in egg mixture, adding pasta water as needed to create creamy sauce.
\item Serve immediately with extra Parmesan and parsley.
\end{enumerate}

\subsection*{Tips}

The key is to work quickly and off heat when adding eggs to prevent scrambling.

\chapter{Desserts}

\section*{Chocolate Chip Cookies}

\textbf{Servings:} 24 cookies | \textbf{Prep Time:} 15 min | \textbf{Cook Time:} 12 min

\subsection*{Ingredients}

\begin{multicols}{2}
\begin{itemize}[leftmargin=*]
\item 2 1/4 cups all-purpose flour
\item 1 tsp baking soda
\item 1 tsp salt
\item 1 cup butter, softened
\item 3/4 cup granulated sugar
\item 3/4 cup brown sugar
\item 2 large eggs
\item 2 tsp vanilla extract
\item 2 cups chocolate chips
\end{itemize}
\end{multicols}

\subsection*{Instructions}

\begin{enumerate}[leftmargin=*]
\item Preheat oven to 375°F (190°C).
\item Mix flour, baking soda, and salt in bowl.
\item Beat butter and both sugars until creamy.
\item Add eggs and vanilla, beat well.
\item Gradually blend in flour mixture.
\item Stir in chocolate chips.
\item Drop rounded tablespoons onto ungreased cookie sheets.
\item Bake 9-11 minutes or until golden brown.
\item Cool on baking sheets for 2 minutes, then transfer to wire rack.
\end{enumerate}

\subsection*{Variations}

Try adding nuts, using different chocolate types, or substituting half the chocolate chips with M\&Ms.

\chapter{Index}

\begin{multicols}{2}
\textbf{A}\\
Appetizers, 1

\textbf{B}\\
Bruschetta, 1

\textbf{C}\\
Carbonara, 2\\
Chocolate Chip Cookies, 3

\textbf{D}\\
Desserts, 3

\textbf{M}\\
Main Courses, 2

\textbf{P}\\
Pasta, 2

\textbf{S}\\
Spaghetti, 2
\end{multicols}

\end{document}`,
  },
  {
    id: 55,
    title: "Flyer",
    description: "Marketing flyer and promotional one-page template",
    slug: "flyer",
    previewUrl: "/templates/flyer.pdf",
    category: "Business",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=0.5in]{geometry}
\usepackage{graphicx}
\usepackage{xcolor}
\usepackage{tikz}

\definecolor{primarycolor}{RGB}{33,150,243}
\definecolor{accentcolor}{RGB}{255,193,7}

\pagestyle{empty}

\begin{document}

\begin{center}

% Header
\colorbox{primarycolor}{%
\begin{minipage}{\dimexpr\textwidth-2\fboxsep}
\centering
\vspace{0.5cm}
{\Huge \textcolor{white}{\textbf{EVENT TITLE}}}\\[0.3cm]
{\Large \textcolor{white}{Catchy Subtitle or Tagline Here}}\\[0.5cm]
\end{minipage}
}

\vspace{1cm}

% Main content
\begin{minipage}{0.9\textwidth}

{\LARGE \textcolor{primarycolor}{\textbf{Join Us for an Amazing Experience!}}}

\vspace{0.8cm}

{\large
Don't miss this incredible opportunity to be part of something special. Whether you're a first-timer or a regular participant, this event promises to deliver excitement, learning, and unforgettable memories.
}

\vspace{1cm}

% Event details box
\colorbox{accentcolor!20}{%
\begin{minipage}{\dimexpr\textwidth-2\fboxsep}
\vspace{0.3cm}
\begin{center}

{\Large \textbf{EVENT DETAILS}}

\vspace{0.5cm}

\begin{tabular}{rl}
\textbf{Date:} & Saturday, March 15, 2025 \\[0.3cm]
\textbf{Time:} & 2:00 PM - 6:00 PM \\[0.3cm]
\textbf{Location:} & Main Event Center \\
& 123 Main Street \\
& City, State 12345 \\[0.3cm]
\textbf{Admission:} & Free (Registration Required) \\
\end{tabular}

\end{center}
\vspace{0.3cm}
\end{minipage}
}

\vspace{1cm}

% Features or highlights
{\Large \textcolor{primarycolor}{\textbf{What to Expect:}}}

\vspace{0.5cm}

\begin{itemize}
\item \textbf{Amazing Activities:} Hands-on workshops and interactive sessions
\item \textbf{Expert Speakers:} Learn from industry leaders and professionals
\item \textbf{Networking:} Connect with like-minded individuals
\item \textbf{Refreshments:} Complimentary food and beverages
\item \textbf{Prizes:} Exciting giveaways and competitions
\end{itemize}

\vspace{1cm}

% Call to action
\colorbox{primarycolor}{%
\begin{minipage}{\dimexpr\textwidth-2\fboxsep}
\begin{center}
\vspace{0.5cm}
{\Huge \textcolor{white}{\textbf{REGISTER NOW!}}}\\[0.3cm]
{\Large \textcolor{white}{Visit: www.eventwebsite.com}}\\
{\Large \textcolor{white}{Email: info@event.com}}\\
{\Large \textcolor{white}{Phone: (555) 123-4567}}\\[0.5cm]
\end{center}
\end{minipage}
}

\vspace{0.5cm}

{\footnotesize Limited spaces available. Early registration recommended.}

\end{minipage}

\end{center}

\end{document}`,
  },
  {
    id: 56,
    title: "Business Card",
    description: "Professional business card template",
    slug: "business-card",
    previewUrl: "/templates/business-card.pdf",
    category: "Business",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=0in, paperwidth=3.5in, paperheight=2in]{geometry}
\usepackage{xcolor}
\usepackage{graphicx}

\definecolor{cardcolor}{RGB}{41,128,185}
\pagestyle{empty}

\begin{document}

% Front of card
\noindent
\colorbox{cardcolor}{%
\begin{minipage}[c][2in][c]{3.5in}
\centering
\vspace{0.3in}
{\Huge \textcolor{white}{\textbf{YOUR NAME}}}\\[0.1in]
{\Large \textcolor{white}{Professional Title}}\\[0.3in]
\end{minipage}
}

\vfill
\pagebreak

% Back of card
\noindent
\begin{minipage}[c][2in][c]{3.5in}
\centering
\vspace{0.2in}

{\large \textbf{CONTACT INFORMATION}}\\[0.2in]

\begin{tabular}{rl}
\textbf{Phone:} & (555) 123-4567 \\
\textbf{Email:} & your.name@email.com \\
\textbf{Website:} & www.yourwebsite.com \\
\textbf{LinkedIn:} & linkedin.com/in/yourname \\
\end{tabular}

\vspace{0.2in}

\textbf{Company Name}\\
123 Business Street\\
City, State 12345

\vspace{0.1in}
\end{minipage}

\vfill

% Alternative single-sided design
\pagebreak

\noindent
\begin{minipage}[c][2in][c]{3.5in}
\vspace{0.15in}

\begin{minipage}{0.6\textwidth}
{\LARGE \textbf{Your Name}}\\[0.05in]
{\large Professional Title}\\[0.15in]

{\small
\textbf{Company Name}\\[0.05in]
Phone: (555) 123-4567\\
Email: your.name@email.com\\
Website: www.yourwebsite.com\\[0.05in]
123 Business Street\\
City, State 12345
}
\end{minipage}
\hfill
\begin{minipage}{0.35\textwidth}
\raggedleft
\colorbox{cardcolor}{%
\begin{minipage}[c][1.5in][c]{1in}
\centering
\textcolor{white}{\textbf{LOGO}}
\end{minipage}
}
\end{minipage}

\vspace{0.15in}
\end{minipage}

\end{document}`,
  },
  {
    id: 57,
    title: "Calendar",
    description: "Monthly and yearly calendar template",
    slug: "calendar",
    previewUrl: "/templates/calendar.pdf",
    category: "Other",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[margin=0.5in, landscape]{geometry}
\usepackage[table]{xcolor}
\usepackage{tikz}
\usepackage{array}

\definecolor{headercolor}{RGB}{52,73,94}
\definecolor{weekendcolor}{RGB}{236,240,241}

\pagestyle{empty}

\begin{document}

\begin{center}

{\Huge \textbf{March 2025}}

\vspace{0.5cm}

\begin{tabular}{|>{\centering\arraybackslash}p{1.3in}|>{\centering\arraybackslash}p{1.3in}|>{\centering\arraybackslash}p{1.3in}|>{\centering\arraybackslash}p{1.3in}|>{\centering\arraybackslash}p{1.3in}|>{\centering\arraybackslash}p{1.3in}|>{\centering\arraybackslash}p{1.3in}|}
\hline
\rowcolor{headercolor}
\textcolor{white}{\textbf{Sunday}} & \textcolor{white}{\textbf{Monday}} & \textcolor{white}{\textbf{Tuesday}} & \textcolor{white}{\textbf{Wednesday}} & \textcolor{white}{\textbf{Thursday}} & \textcolor{white}{\textbf{Friday}} & \textcolor{white}{\textbf{Saturday}} \\
\hline
\cellcolor{weekendcolor} & & & & & & \cellcolor{weekendcolor} 1 \\[1.8cm]
\hline
\cellcolor{weekendcolor} 2 & 3 & 4 & 5 & 6 & 7 & \cellcolor{weekendcolor} 8 \\[1.8cm]
\hline
\cellcolor{weekendcolor} 9 & 10 & 11 & 12 & 13 & 14 & \cellcolor{weekendcolor} 15 \\[1.8cm]
\hline
\cellcolor{weekendcolor} 16 & 17 & 18 & 19 & 20 & 21 & \cellcolor{weekendcolor} 22 \\[1.8cm]
\hline
\cellcolor{weekendcolor} 23 & 24 & 25 & 26 & 27 & 28 & \cellcolor{weekendcolor} 29 \\[1.8cm]
\hline
\cellcolor{weekendcolor} 30 & 31 & & & & & \cellcolor{weekendcolor} \\[1.8cm]
\hline
\end{tabular}

\end{center}

\vfill

\textbf{Notes:}\\[0.2cm]
\rule{\linewidth}{0.5pt}\\[0.3cm]
\rule{\linewidth}{0.5pt}\\[0.3cm]
\rule{\linewidth}{0.5pt}

\pagebreak

% Yearly calendar
\begin{center}

{\Huge \textbf{2025 Year Calendar}}

\vspace{0.5cm}

\begin{minipage}{0.3\textwidth}
\centering
\textbf{January}\\
\begin{tabular}{|c|c|c|c|c|c|c|}
\hline
S & M & T & W & T & F & S \\
\hline
& & & 1 & 2 & 3 & 4 \\
5 & 6 & 7 & 8 & 9 & 10 & 11 \\
12 & 13 & 14 & 15 & 16 & 17 & 18 \\
19 & 20 & 21 & 22 & 23 & 24 & 25 \\
26 & 27 & 28 & 29 & 30 & 31 & \\
\hline
\end{tabular}
\end{minipage}
\hfill
\begin{minipage}{0.3\textwidth}
\centering
\textbf{February}\\
\begin{tabular}{|c|c|c|c|c|c|c|}
\hline
S & M & T & W & T & F & S \\
\hline
& & & & & & 1 \\
2 & 3 & 4 & 5 & 6 & 7 & 8 \\
9 & 10 & 11 & 12 & 13 & 14 & 15 \\
16 & 17 & 18 & 19 & 20 & 21 & 22 \\
23 & 24 & 25 & 26 & 27 & 28 & \\
\hline
\end{tabular}
\end{minipage}
\hfill
\begin{minipage}{0.3\textwidth}
\centering
\textbf{March}\\
\begin{tabular}{|c|c|c|c|c|c|c|}
\hline
S & M & T & W & T & F & S \\
\hline
& & & & & & 1 \\
2 & 3 & 4 & 5 & 6 & 7 & 8 \\
9 & 10 & 11 & 12 & 13 & 14 & 15 \\
16 & 17 & 18 & 19 & 20 & 21 & 22 \\
23 & 24 & 25 & 26 & 27 & 28 & 29 \\
30 & 31 & & & & & \\
\hline
\end{tabular}
\end{minipage}

\vspace{0.5cm}

\begin{minipage}{0.3\textwidth}
\centering
\textbf{April}\\
\begin{tabular}{|c|c|c|c|c|c|c|}
\hline
S & M & T & W & T & F & S \\
\hline
& & 1 & 2 & 3 & 4 & 5 \\
6 & 7 & 8 & 9 & 10 & 11 & 12 \\
13 & 14 & 15 & 16 & 17 & 18 & 19 \\
20 & 21 & 22 & 23 & 24 & 25 & 26 \\
27 & 28 & 29 & 30 & & & \\
\hline
\end{tabular}
\end{minipage}
\hfill
\begin{minipage}{0.3\textwidth}
\centering
\textbf{May}\\
\begin{tabular}{|c|c|c|c|c|c|c|}
\hline
S & M & T & W & T & F & S \\
\hline
& & & & 1 & 2 & 3 \\
4 & 5 & 6 & 7 & 8 & 9 & 10 \\
11 & 12 & 13 & 14 & 15 & 16 & 17 \\
18 & 19 & 20 & 21 & 22 & 23 & 24 \\
25 & 26 & 27 & 28 & 29 & 30 & 31 \\
\hline
\end{tabular}
\end{minipage}
\hfill
\begin{minipage}{0.3\textwidth}
\centering
\textbf{June}\\
\begin{tabular}{|c|c|c|c|c|c|c|}
\hline
S & M & T & W & T & F & S \\
\hline
1 & 2 & 3 & 4 & 5 & 6 & 7 \\
8 & 9 & 10 & 11 & 12 & 13 & 14 \\
15 & 16 & 17 & 18 & 19 & 20 & 21 \\
22 & 23 & 24 & 25 & 26 & 27 & 28 \\
29 & 30 & & & & & \\
\hline
\end{tabular}
\end{minipage}

\end{center}

\end{document}`,
  },
  {
    id: 58,
    title: "AAAI 2026",
    description: "Official AAAI 2026 submission template with 7-page limit configuration and blind submission toggles.",
    slug: "aaai-2026",
    previewUrl: "/templates/research-paper.pdf",
    category: "Academic",
    code: String.raw`\documentclass[letterpaper]{article}
\usepackage{aaai26}  % DO NOT CHANGE THIS
\usepackage{times}  % DO NOT CHANGE THIS
\usepackage{helvet}  % DO NOT CHANGE THIS
\usepackage{courier}  % DO NOT CHANGE THIS
\usepackage[hyphens]{url}  % DO NOT CHANGE THIS
\usepackage{graphicx} % DO NOT CHANGE THIS
\urlstyle{rm} % DO NOT CHANGE THIS
\def\UrlFont{\rm}  % DO NOT CHANGE THIS
\usepackage{natbib}  % DO NOT CHANGE THIS AND DO NOT ADD ANY OPTIONS TO IT
\usepackage{caption} % DO NOT CHANGE THIS AND DO NOT ADD ANY OPTIONS TO IT
\frenchspacing  % DO NOT CHANGE THIS
\setlength{\pdfpagewidth}{8.5in} % DO NOT CHANGE THIS
\setlength{\pdfpageheight}{11in} % DO NOT CHANGE THIS

%
% PDF Info Is REQUIRED.
% For /Title, write your title in Mixed Case.
% Don't use accents or commands. Retain the parentheses.
% For /Author, add all authors within the parentheses,
% separated by commas. No accents, special characters
% or commands are allowed.
% Keep the /TemplateVersion tag as is
\pdfinfo{
/Title (AAAI Press Formatting Instructions for Authors Using LaTeX -- A Guide)
/Author (AAAI Press Staff, Pater Patel Schneider, Sunil Issar, J. Scott Penberthy, George Ferguson, Hans Guesgen, Francisco Cruz, Marc Pujol-Gonzalez)
/TemplateVersion (2026.1)
}

\setcounter{secnumdepth}{0} %May be changed to 1 or 2 if section numbers are desired.

% The file aaai26.sty is the style file for AAAI Press
% proceedings, working notes, and technical reports.
%

\title{AAAI 2026 Submission Template}
\author{
    %Authors
    % All authors must be in the same font size and format.
    Written by AAAI Press Staff\textsuperscript{\rm 1}\thanks{With help from the AAAI Publications Committee.}\\
    AAAI Style Contributions by Pater Patel Schneider,
    Sunil Issar,\\
    J. Scott Penberthy,
    George Ferguson,
    Hans Guesgen,
    Francisco Cruz\equalcontrib,
    Marc Pujol-Gonzalez\equalcontrib
}
\affiliations{
    %Afiliations
    \textsuperscript{\rm 1}Association for the Advancement of Artificial Intelligence\\
    % If you have multiple authors and multiple affiliations
    % use superscripts in text and roman font to identify them.
    % For example,

    % Sunil Issar\textsuperscript{\rm 2},
    % J. Scott Penberthy\textsuperscript{\rm 3},
    % George Ferguson\textsuperscript{\rm 4},
    % Hans Guesgen\textsuperscript{\rm 5}.
    % Note that the comma should be placed BEFORE the superscript for optimum readability

    1900 Embarcadero Road, Suite 101\\
    Palo Alto, California 94303-3310 USA\\
    % email address must be in roman text type, not monospace or sans serif
    proceedings-questions@aaai.org
%
% See more examples next
}

\begin{document}

\maketitle

\begin{abstract}
AAAI 2026 submissions are restricted to 7 pages of technical content plus unlimited pages for references. This template is configured to help you meet these requirements.
\end{abstract}

\section{Introduction}

Congratulations on considering a submission to AAAI 2026. This template includes the mandatory copyright slug and formatting checks.

\section{Blind Submission}

For blind submissions, ensure that author names and affiliations are not included in the compiled PDF.

\section{Conclusion}

Good luck with your submission!

\bibliography{aaai26}

\end{document}`,
  },
  {
    id: 69,
    title: "Obituary",
    description: "Elegant memorial obituary template with decorative border",
    slug: "obituary",
    previewUrl: "/templates/obituary.pdf",
    category: "Other",
    code: String.raw`\documentclass[11pt]{article}
\usepackage[a5paper,margin=0.75in]{geometry}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{xcolor}
\usepackage{tikz}
\usepackage{parskip}
\usepackage{tgtermes}

% Colors
\definecolor{border}{RGB}{60, 60, 60}
\definecolor{accent}{RGB}{100, 80, 60}

\pagestyle{empty}

\begin{document}

% Decorative border
\begin{tikzpicture}[remember picture, overlay]
  \draw[border, line width=2pt] 
    ([shift={(0.4in,-0.4in)}]current page.north west) 
    rectangle 
    ([shift={(-0.4in,0.4in)}]current page.south east);
  \draw[border, line width=0.5pt] 
    ([shift={(0.5in,-0.5in)}]current page.north west) 
    rectangle 
    ([shift={(-0.5in,.5in)}]current page.south east);
\end{tikzpicture}

\begin{center}

% Cross symbol
{\Large \textcolor{accent}{$\dagger$}}

\vspace{0.3in}

% Title
{\fontsize{24}{28}\selectfont \textsc{In Loving Memory}}

\vspace{0.3in}

% Photo placeholder
\begin{tikzpicture}
  \draw[accent, line width=1pt] (0,0) circle (1.2in);
  \node at (0,0) {\textcolor{gray}{[Photo]}};
\end{tikzpicture}

\vspace{0.3in}

% Name
{\fontsize{20}{24}\selectfont \textbf{John William Smith}}

\vspace{0.1in}

% Dates
{\large March 15, 1945 --- December 20, 2024}

\vspace{0.1in}

{\textcolor{accent}{\rule{2in}{0.5pt}}}

\end{center}

\vspace{0.2in}

% Biography
John William Smith was born on March 15, 1945, in Springfield, Illinois, to William and Mary Smith. He was a beloved husband, father, grandfather, and friend to all who knew him.

John graduated from Springfield High School in 1963 and went on to earn his degree in Engineering from the University of Illinois. He dedicated 35 years of his career to making a difference in his community.

He married his high school sweetheart, Margaret, in 1968, and together they raised three wonderful children: Michael, Sarah, and Elizabeth.

John was known for his warm smile, generous spirit, and unwavering love for his family. He enjoyed fishing, woodworking, and spending time with his grandchildren.

\vspace{0.2in}

\begin{center}
{\textcolor{accent}{\rule{2in}{0.5pt}}}

\vspace{0.15in}

% Survivors
\textbf{Survived by:}\\
Wife Margaret Smith; Children Michael (Lisa), Sarah (David), Elizabeth (James);\\
Grandchildren Emily, Thomas, Anna, Benjamin, and Sophia

\vspace{0.2in}

% Service details
\textbf{Memorial Service}\\
December 28, 2024 at 2:00 PM\\
First United Methodist Church\\
123 Main Street, Springfield, IL

\vspace{0.15in}

{\small In lieu of flowers, donations may be made to\\
the American Heart Association}

\vspace{0.2in}

{\footnotesize \textit{''To live in hearts we leave behind is not to die.''}}

\end{center}


\end{document}`,
  },
  {
    id: 59,

    title: "NeurIPS 2026",
    description: "NeurIPS 2026 submission template including the mandatory paper checklist and smart page counter.",
    slug: "neurips-2026",
    previewUrl: "/templates/research-paper.pdf",
    category: "Academic",
    code: String.raw`\documentclass{article}

% if you need to pass options to natbib, use, e.g.:
%     \PassOptionsToPackage{numbers, compress}{natbib}
% before loading neurips_2026

% ready for submission
\usepackage{neurips_2026}

% to compile a preprint version, e.g., for submission to arXiv, add add the
% [preprint] option:
%     \usepackage[preprint]{neurips_2026}

% to compile a camera-ready version, add the [final] option, e.g.:
%     \usepackage[final]{neurips_2026}

% to avoid loading the natbib package, add option nonatbib:
%    \usepackage[nonatbib]{neurips_2026}

\usepackage[utf8]{inputenc} % allow utf-8 input
\usepackage[T1]{fontenc}    % use 8-bit T1 fonts
\usepackage{hyperref}       % hyperlinks
\usepackage{url}            % simple URL typesetting
\usepackage{booktabs}       % professional-quality tables
\usepackage{amsfonts}       % blackboard math symbols
\usepackage{nicefrac}       % compact symbols for 1/2, etc.
\usepackage{microtype}      % microtypography
\usepackage{xcolor}         % colors

\title{NeurIPS 2026 Submission Template}

% The \author macro works with any number of authors. There are two commands
% used to separate the names and addresses of multiple authors: \And and \AND.
%
% Using \And between authors leaves it to LaTeX to determine where to break the
% lines. Using \AND forces a line break at that point. So, if LaTeX puts 3 of 4
% authors names on the first line, and the last on the second line, try using
% \AND instead of \And before the third author name.

\author{%
  David S.~Hippocampus\thanks{Use footnote for providing further information
    about author (webpage, alternative address)---\emph{not} for acknowledging
    funding agencies.} \\
  Department of Computer Science\\
  Cranberry-Lemon University\\
  Pittsburgh, PA 15213 \\
  \texttt{hippo@cs.cranberry-lemon.edu} \\
  % \And
  % Coauthor \\
  % Affiliation \\
  % Address \\
  % \texttt{email} \\
}

\begin{document}

\maketitle

\begin{abstract}
  The abstract paragraph should be indented. Your submission must include the mandatory NeurIPS Paper Checklist.
\end{abstract}

\section{Submission of papers to NeurIPS 2026}

Please read the instructions carefully.

\section{Smart Page Counter}
This template includes setup to help track the main text length (limit: 9 pages), excluding references and checklist.

\bibliographystyle{plain}
\bibliography{refs}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\section*{Checklist}

\begin{enumerate}

\item For all authors...
\begin{enumerate}
  \item Do the main claims made in the abstract and introduction accurately reflect the paper's contributions and scope?
    \answerYes{}
  \item Did you describe the limitations of your work?
    \answerYes{}
  \item Did you discuss any potential negative societal impacts of your work?
    \answerNA{}
  \item Have you read the ethics review guidelines and ensured that your paper conforms to them?
    \answerYes{}
\end{enumerate}

\item If you are including theoretical results...
\begin{enumerate}
  \item Did you state the full set of assumptions of all theoretical results?
    \answerYes{}
  \item Did you include complete proofs of all theoretical results?
    \answerYes{}
  \item If you ran experiments...
\begin{enumerate}
  \item Did you include the code, data, and instructions needed to reproduce the main experimental results (either in the supplemental material or as a URL)?
    \answerYes{}
  \item Did you specify all the training details (e.g., data splits, hyperparameters, how they were chosen)?
    \answerYes{}
  \item Did you report error bars (e.g., with respect to the random seed after running experiments multiple times)?
    \answerYes{}
  \item Did you include the total amount of compute and the type of resources used (e.g., type of GPUs, internal cluster, or cloud provider)?
    \answerYes{}
\end{enumerate}
\end{enumerate}

\end{enumerate}

\end{document}`,
  },
  {
    id: 60,
    title: "ICML 2026",
    description: "Standard ICML 2026 submission template with 8-page main text limit and accessibility features.",
    slug: "icml-2026",
    previewUrl: "/templates/research-paper.pdf",
    category: "Academic",
    code: String.raw`\documentclass{article}

% Recommended, but optional, packages for figures and better typesetting:
\usepackage{microtype}
\usepackage{graphicx}
\usepackage{subfigure}
\usepackage{booktabs} % for professional tables

% hyperref makes hyperlinks in the resulting PDF.
% If your build breaks (sometimes temporarily if a hyperlink spans a page)
% please comment out the following usepackage line and replace
% \usepackage{icml2026} with \usepackage[nohyperref]{icml2026} above.
\usepackage{hyperref}

% Attempt to make hyperref and algorithmic work together better:
\newcommand{\theHalgorithm}{\arabic{algorithm}}

% Use the following line for the initial blind version submitted for review:
\usepackage{icml2026}

% If accepted, instead use the following line for the camera-ready submission:
% \usepackage[accepted]{icml2026}

% The \icmltitle you define below is probably too long as a header.
% Therefore, a short form for the running title is supplied here:
\icmltitlerunning{ICML 2026 Submission Template}

\begin{document}

\twocolumn[
\icmltitle{ICML 2026 Submission Template}

% It is OKAY to include author information, even for blind
% submissions: the style file will automatically remove it for you
% unless you've provided the [accepted] option to the icml2026
% package.

% List of affiliations: The first argument should be a (short)
% identifier you will use later to specify author affiliations
% Academic affiliations should list Department, University, City, Region, Country
% Industry affiliations should list Company, City, Region, Country

% You can specify symbols, otherwise they are numbered in order.
% Ideally, you should not use this facility. Affiliations will be numbered
% in order of appearance and this is the preferred way.
\icmlsetsymbol{equal}{*}

\begin{icmlauthorlist}
\icmlauthor{Firstname Lastname}{equal,yyy}
\icmlauthor{Firstname Lastname}{equal,yyy,comp}
\icmlauthor{Firstname Lastname}{comp}
\icmlauthor{Firstname Lastname}{sch}
\end{icmlauthorlist}

\icmlaffiliation{yyy}{Department of XXX, University of YYY, Location, Country}
\icmlaffiliation{comp}{Company Name, Location, Country}
\icmlaffiliation{sch}{School of ZZZ, Institute of WWW, Location, Country}

\icmlcorrespondingauthor{Firstname Lastname}{first.last@institution.edu}

% You may provide any keywords that you
% find helpful for describing your paper; these are used to populate
% the "keywords" metadata in the PDF but will not be shown in the document
\icmlkeywords{Machine Learning, ICML}

\vskip 0.3in
]

% this must go after the closing bracket ] following \twocolumn[ ...

% This command actually creates the footnote in the first column
% listing the affiliations and the copyright notice.
% The command takes one argument, which is text to display at the start of the footnote.
% The \icmlEqualContribution command is standard text for equal contribution.
% Remove it (just {}) if you do not need this facility.

%\printAffiliationsAndNotice{}  % leave blank if no need to mention equal contribution
\printAffiliationsAndNotice{\icmlEqualContribution} % otherwise use the standard text

\begin{abstract}
This document provides a basic paper template and submission guidelines.
Abstracts must be a single paragraph, ideally between 4--6 sentences long.
\end{abstract}

\section{Page Limits}

The main text is limited to 8 pages. References and appendix can be unlimited.

\section{Accessibility & Reproducibility}

\subsection{Code Repository}
For reproducibility, we strongly encourage linking to an anonymized code repository (e.g., Anonymous GitHub) in this section during review.

\bibliography{example_paper}
\bibliographystyle{icml2026}

\end{document}`,
  },
  {
    id: 61,
    title: "ICLR 2026",
    description: "OpenReview native template for ICLR 2026 with dynamic headers and reproducibility statement block.",
    slug: "iclr-2026",
    previewUrl: "/templates/research-paper.pdf",
    category: "Academic",
    code: String.raw`\documentclass{article} % For LaTeX2e
\usepackage{iclr2026_conference,times}

% Optional math commands from https://github.com/goodfeli/dlbook_notation.
\input{math_commands.tex}

\usepackage{hyperref}
\usepackage{url}

\title{ICLR 2026 Conference Submission Template}

% Authors must not appear in the submitted version. They should be hidden
% as long as the \iclrfinalcopy macro remains commented out below.
% Non-anonymous submissions will be rejected without review.

\author{Antiquark \thanks{ Use footnote for providing further information
about author (webpage, alternative address)---\emph{not} for acknowledging
funding agencies.  Funding acknowledgements go at the end of the paper.} \\
Department of Computer Science\\
Cranberry-Lemon University\\
Pittsburgh, PA 15213, USA \\
\texttt{antiquark@cs.cranberry-lemon.edu} \\
\And
Ji Q. Ren \& Yevgeny LeNet \\
Department of Computational Neuroscience \\
University of the Witwatersrand \\
Joburg, South Africa \\
\texttt{\{robot,net\}@wits.ac.za} \\
\AND
Coauthor \\
Affiliation \\
Address \\
\texttt{email}
}

% The \author macro works with any number of authors. There are two commands
% used to separate the names and addresses of multiple authors: \And and \AND.
%
% Using \And between authors leaves it to LaTeX to determine where to break the
% lines. Using \AND forces a line break at that point. So, if LaTeX puts 3 of 4
% authors names on the first line, and the last on the second line, try using
% \AND instead of \And before the third author name.

\newcommand{\fix}{\marginpar{FIX}}
\newcommand{\new}{\marginpar{NEW}}

%\iclrfinalcopy % Uncomment for camera-ready version, but NOT for submission.

\begin{document}

\maketitle

\begin{abstract}
The abstract paragraph should be indented.
\end{abstract}

\section{Submission}

ICLR requires electronic submissions, processed by OpenReview.

\section*{Reproducibility Statement}
Authors are encouraged to include a statement of reproducibility here. This section is optional but recommended.

\bibliography{iclr2026_conference}
\bibliographystyle{iclr2026_conference}

\end{document}`,
  },
  {
    id: 62,
    title: "CVPR 2026",
    description: "Official CVPR 2026 template with rebuttal author kit and compute reporting supplement.",
    slug: "cvpr-2026",
    previewUrl: "/templates/research-paper.pdf",
    category: "Academic",
    code: `\\documentclass[10pt,twocolumn,letterpaper]{article}

\\usepackage{cvpr}              % To produce the CAMERA-READY version
% \\usepackage[review]{cvpr}      % To produce the REVIEW version
% \\usepackage[pagenumbers]{cvpr} % To force page numbers, e.g. for an arXiv version

\\usepackage[dvipsnames]{xcolor}
\\newcommand{\\red}[1]{{\\color{red}#1}}
\\newcommand{\\todo}[1]{{\\color{red}#1}}
\\newcommand{\\TODO}[1]{\\textbf{\\color{red}[TODO: #1]}}

\\definecolor{cvprblue}{rgb}{0.21,0.49,0.74}
\\usepackage[pagebackref,breaklinks,colorlinks,citecolor=cvprblue]{hyperref}

\\def\\paperID{****} % *** Enter the Paper ID here
\\def\\confName{CVPR}
\\def\\confYear{2026}

\\title{\\LaTeX\\ Author Guidelines for CVPR 2026 Proceedings}

\\author{First Author\\\\
Institution1\\\\
Institution1 address\\\\
{\\tt\\small firstauthor@i1.org}
% For a paper whose authors are all at the same institution,
% omit the following lines up until the closing \`\`}''.
% Additional authors and addresses can be added with \`\`\\and'',
% just like the second author.
% To save space, use either the email address or home page, not both
\\and
Second Author\\\\
Institution2\\\\
First line of institution2 address\\\\
{\\tt\\small secondauthor@i2.org}
}

\\begin{document}
\\maketitle

\\begin{abstract}
The abstract should summarize the contents of the paper.
\\end{abstract}

\\section{Introduction}
CVPR 2026 papers must not exceed 8 pages in length, excluding references.

\\section{Rebuttal Instructions}
This template includes the standard headers for the 1-page author rebuttal needed after the review stage.

\\section{Compute and Environmental Impact}
All submissions must include a statement on the compute resources used (e.g., GPU hours) and their environmental impact.

\\bibliography{cvpr2026}
\\end{document}`,
  },
  {
    id: 63,
    title: "ECCV 2026",
    description: "Springer LNCS format for ECCV 2026 with migration helpers for CVPR re-submissions.",
    slug: "eccv-2026",
    previewUrl: "/templates/research-paper.pdf",
    category: "Academic",
    code: `\\documentclass[runningheads]{llncs}
\\usepackage{graphicx}
\\usepackage{amsmath,amssymb} % define this before the line numbering.
\\usepackage{color}

% The "axessiblity" package can be found in the license/copyright information section of the author instructions
% \\usepackage[accsupp]{axessibility}  % Improves PDF readability for those with disabilities.

\\begin{document}
\\pagestyle{headings}
\\mainmatter

\\title{ECCV 2026 Submission Template}
%
\\titlerunning{ECCV 2026 Submission Template}

\\author{First Author\\inst{1}\\orcidID{0000-1111-2222-3333} \\and
Second Author\\inst{2,3}\\orcidID{1111-2222-3333-4444} \\and
Third Author\\inst{3}\\orcidID{2222--3333-4444-5555}}
%
\\authorrunning{F. Author et al.}
% First names are abbreviated in the running head.
% If there are more than two authors, 'et al.' is used.
%
\\institute{Princeton University, Princeton NJ 08544, USA \\and
Springer Heidelberg, Tiergartenstr. 17, 69121 Heidelberg, Germany
\\email{lncs@springer.com}\\\\
\\url{http://www.springer.com/gp/computer-science/lncs} \\and
ABC Institute, Rupert-Karls-University Heidelberg, Heidelberg, Germany\\\\
\\email{\\{abc,lncs\\}@uni-heidelberg.de}}
%
\\maketitle

\\begin{abstract}
The abstract should be a summary of the paper and not exceed 150-250 words.
\\keywords{Computer Vision, Machine Learning, ECCV}
\\end{abstract}

\\section{Introduction}
This template follows the Springer Lecture Notes in Computer Science (LNCS) format required for ECCV 2026. The page limit is 14 pages (excluding references).

\\section{CVPR-to-ECCV Migration}
Authors re-submitting from CVPR should note that this is a single-column format. Figures previously designed for 2-column layouts may need rescaling.

\\begin{figure}
\\centering
\\includegraphics[height=6.5cm]{eiffel-tower.eps}
\\caption{A figure caption is always placed below the illustration. Please note that short captions are centered, while long ones are justified by the macro package automatically.}
\\label{fig:example}
\\end{figure}

\\bibliographystyle{splncs04}
\\bibliography{egbib}
\\end{document}`,
  },
  {
    id: 64,
    title: "ICRA 2026",
    description: "IEEE International Conference on Robotics and Automation (ICRA) 2026 template with PaperPlaza compliance checks.",
    slug: "icra-2026",
    previewUrl: "/templates/research-paper.pdf",
    category: "Academic",
    code: `\\documentclass[letterpaper, 10 pt, conference]{ieeeconf}

\\IEEEoverridecommandlockouts                              % This command is only needed if 
                                                          % you want to use the \\thanks command

\\overrideIEEEmargins                                      % Needed to meet printer requirements.

\\title{\\LARGE \\bf
ICRA 2026 Paper Title*
}

\\author{Author 1$^{1}$ and Author 2$^{2}$% <-this % stops a space
\\thanks{*This work was not supported by any organization}% <-this % stops a space
\\thanks{$^{1}$Albert Author is with Faculty of Electrical Engineering, Mathematics and Computer Science,
        University of Twente, 7500 AE Enschede, The Netherlands
        {\\tt\\small albert.author@papercept.net}}%
\\thanks{$^{2}$Bernard D. Researcheris with the Department of Electrical Engineering, Wright State University,
        Dayton, OH 45435, USA
        {\\tt\\small b.d.researcher@ieee.org}}%
}

\\begin{document}

\\maketitle
\\thispagestyle{empty}
\\pagestyle{empty}

\\begin{abstract}
ICRA 2026 submissions are strictly checked by PaperPlaza for margin compliance. This template forces letterpaper size to prevent A4 conversion errors.
\\end{abstract}

\\section{INTRODUCTION}
The page limit for ICRA is typically 6 pages, with an option to pay for up to 2 extra pages.

\\section{IROS-to-ICRA Transfer}
If this work builds upon a rejection from IROS, please ensure you have addressed the previous reviewer comments in your introduction or appendix (if allowed).

\\section{CONCLUSIONS}
A conclusion section is not required. Although a conclusion may review the main points of the paper, do not replicate the abstract as the conclusion. A conclusion might elaborate on the importance of the work or suggest applications and extensions.

\\bibliographystyle{IEEEtran}
\\bibliography{IEEEabrv,mybibfile}

\\end{document}`,
  },
  {
    id: 65,
    title: "ACM CHI 2026",
    description: "Official ACM CHI 2026 submission template configured for single-column review format (TAPS compatible).",
    slug: "acm-chi-2026",
    previewUrl: "/templates/research-paper.pdf",
    category: "Academic",
    code: `\\documentclass[manuscript,review,anonymous]{acmart}

%%
%% \\BibTeX command to typeset BibTeX logo in the docs
\\AtBeginDocument{%
  \\providecommand\\BibTeX{{%
    \\normalfont B\\kern-0.5em{\\scshape i\\kern-0.25em b}\\kern-0.8em\\TeX}}}

%% \\title{The Name of the Title is Hope}
\\title{ACM CHI 2026 Submission Template}

\\author{First Author}
\\email{first.author@institution.edu}
\\affiliation{%
  \\institution{Institution Name}
  \\city{City}
  \\country{Country}
}

\\begin{document}

\\begin{abstract}
The abstract should provide a concise summary of the research.
\\end{abstract}

%%
%% The code below is generated by the tool at http://dl.acm.org/ccs.cfm.
%% Please copy and paste the code instead of the example below.
%%
\\begin{CCSXML}
<ccs2012>
 <concept>
  <concept_id>10010520.10010553.10010562</concept_id>
  <concept_desc>Computer systems organization~Embedded systems</concept_desc>
  <concept_significance>500</concept_significance>
 </concept>
</ccs2012>
\\end{CCSXML}

\\ccsdesc[500]{Computer systems organization~Embedded systems}

\\keywords{datasets, neural networks, gaze detection, text tagging}

\\maketitle

\\section{Introduction}
CHI 2026 uses the single-column ACM template for review. This format is TAPS-ready.

\\section{Accessibility Safe Mode}
Please ensure all figures have descriptions for accessibility.
% Example:
% \\Description{A description of the figure for screen readers.}

\\bibliographystyle{ACM-Reference-Format}
\\bibliography{sample-base}

\\end{document}`,
  },
  {
    id: 66,
    title: "WWW 2026",
    description: "The Web Conference (WWW) 2026 template with mandatory relevance to the web section.",
    slug: "www-2026",
    previewUrl: "/templates/research-paper.pdf",
    category: "Academic",
    code: `\\documentclass[sigconf,anonymous]{acmart}

\\title{The Web Conference 2026 Submission}

\\author{First Author}
\\affiliation{%
  \\institution{Institution Name}
  \\city{City}
  \\country{Country}
}
\\email{first.author@institution.edu}

\\begin{document}

\\begin{abstract}
Abstract goes here.
\\end{abstract}

\\maketitle

\\section{Introduction}
Unlike CHI, The Web Conference uses the double-column format for review.

\\section{Relevance to the Web}
\\textbf{Mandatory Section:} Please explicitly state how your work is relevant to the Web. This is a requirement for the Research Track.

\\bibliographystyle{ACM-Reference-Format}
\\bibliography{software}

\\end{document}`,
  },
  {
    id: 67,
    title: "ACL 2026",
    description: "Standard ACL 2026 / ARR unified template with mandatory limitations section.",
    slug: "acl-2026",
    previewUrl: "/templates/research-paper.pdf",
    category: "Academic",
    code: `\\documentclass{article}
\\usepackage[review]{acl}

\\usepackage{times}
\\usepackage{latexsym}
\\usepackage[T1]{fontenc}
\\usepackage[utf8]{inputenc}
\\usepackage{microtype}

\\title{ACL 2026 Submission Template}

\\author{First Author \\\\
  Affiliation / Address line 1 \\\\
  Affiliation / Address line 2 \\\\
  Affiliation / Address line 3 \\\\
  \\texttt{email@domain} \\\\\\And
  Second Author \\\\
  Affiliation / Address line 1 \\\\
  Affiliation / Address line 2 \\\\
  Affiliation / Address line 3 \\\\
  \\texttt{email@domain} \\\\}

\\begin{document}
\\maketitle

\\begin{abstract}
This document is a supplement to the general instructions for ACL 2026 authors.
\\end{abstract}

\\section{Introduction}
ACL 2026 submissions should follow the ARR unified style.

\\section{Main Content}
The page limit is 8 pages for long papers and 4 pages for short papers (excluding references).

\\section*{Limitations}
\\textbf{Mandatory Section:} You must include a section about the limitations of your work. This section does not count towards the page limit.

\\section*{Ethics Statement}
Scientific work published at ACL 2026 must adhere to the ACL Ethics Policy.

\\bibliography{anthology,custom}
\\bibliographystyle{acl_natbib}

\\end{document}`,
  },
  {
    id: 68,
    title: "Interspeech 2026",
    description: "Official Interspeech 2026 kit with multimedia appendix structure.",
    slug: "interspeech-2026",
    previewUrl: "/templates/research-paper.pdf",
    category: "Academic",
    code: `\\documentclass[a4paper]{article}
\\usepackage{interspeech2026}
\\usepackage{amsmath,graphicx}

\\title{Interspeech 2026 Submission Template}
\\name{Author Name$^1$, Co-author Name$^2$}
\\address{
  $^1$Author Affiliation\\\\
  $^2$Co-author Affiliation}
\\email{author@university.edu}

\\begin{document}

\\maketitle

\\begin{abstract}
The abstract should be 100 to 200 words.
\\end{abstract}

\\noindent\\textbf{Index Terms}: speech recognition, human-computer interaction, computational paralinguistics

\\section{Introduction}
The paper layout should be a maximum of 4 pages for technical content, plus up to 2 pages for references only.

\\section{Multimedia Appendix}
This template includes structure for citing audio samples. Please ensure all URLs linked here are anonymized for review.

\\section{Conclusions}
Summary of the work.

\\bibliographystyle{IEEEtran}
\\bibliography{mybib}

\\end{document}`,
  },

  {
    id: 70,
    title: "Interactive Flashcard / Redacted Quiz",
    description: "Click-to-reveal study guide with hidden answers - perfect for self-testing",
    slug: "interactive-flashcard",
    previewUrl: "/templates/interactive-flashcard.pdf",
    category: "Education",
    code: String.raw`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% INTERACTIVE FLASHCARD TEMPLATE
% Click black boxes to reveal answers. Click again to hide.
% Works in: Evince, Okular, Chrome, Firefox PDF viewers
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\documentclass{article}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{xcolor}
\usepackage{amsmath, amssymb}
\usepackage{hyperref}
\usepackage[tikz]{ocgx2}

\usetikzlibrary{calc, fit}

\hypersetup{colorlinks=true, linkcolor=blue}

% Define accent color
\definecolor{accent}{RGB}{0, 102, 204}

% The reversible reveal command 
\newsavebox{\revspoilerbox}
\newcommand{\reveal}[2]{%
    \sbox{\revspoilerbox}{#2}%
    \begin{tikzpicture}[baseline=(hidden_text.base)]
        \node[inner sep=0pt] (hidden_text) {\usebox{\revspoilerbox}};
        \node[inner sep=0pt] at (hidden_text) {%
            \switchocg{#1}{%
                \begin{tikzpicture}
                    \begin{ocg}{shutter}{#1}{on}
                        \node[fill=black, rounded corners=2pt, fit=(hidden_text), inner sep=2pt] {};
                    \end{ocg}
                    \begin{ocg}{trigger}{#1_trigger}{on}
                         \node[fill=white, opacity=0, fit=(hidden_text), inner sep=2pt] {};
                    \end{ocg}
                \end{tikzpicture}%
            }%
        };
    \end{tikzpicture}%
}

\begin{document}

\begin{center}
{\LARGE \textbf{World History: Quick Review}}\\[0.3cm]
{\large Interactive Study Guide}
\end{center}

\vspace{0.3cm}

\noindent\textit{Instructions: Click any black box to reveal the answer. Click the revealed text again to hide it.}

\vspace{0.5cm}

\section*{Ancient Civilizations}

\noindent \textbf{1. The Great Pyramid of Giza was built for which pharaoh?}\\
Answer: \reveal{q1}{Pharaoh Khufu (also known as Cheops)}

\vspace{0.3cm}

\noindent \textbf{2. What year did the Roman Empire officially fall?}\\
Answer: \reveal{q2}{476 AD}

\vspace{0.3cm}

\noindent \textbf{3. The ancient city of Babylon was located in modern-day:}\\
Answer: \reveal{q3}{Iraq}

\vspace{0.5cm}

\section*{Medieval Period}

\noindent \textbf{4. The Magna Carta was signed in which year?}\\
Answer: \reveal{q4}{1215}

\vspace{0.3cm}

\noindent \textbf{5. Who led the Norman conquest of England?}\\
Answer: \reveal{q5}{William the Conqueror}

\vspace{0.3cm}

\noindent \textbf{6. The Black Death killed approximately what percentage of Europe's population?}\\
Answer: \reveal{q6}{30-60\% (roughly one-third to one-half)}

\vspace{0.5cm}

\section*{Key Formulas}

\noindent \textbf{Population Growth Rate:}
\[ r = \frac{\text{\reveal{f1}{$N_t - N_0$}}}{N_0 \times t} \times 100 \]

\vspace{0.3cm}

\noindent \textbf{GDP per Capita:}
\[ \text{GDP per capita} = \frac{\text{\reveal{f2}{Total GDP}}}{\text{\reveal{f3}{Population}}} \]

\vspace{0.5cm}

\section*{Vocabulary}

\begin{itemize}
    \item \textbf{Feudalism}: \reveal{v1}{A hierarchical system of land ownership and duties}
    \item \textbf{Renaissance}: \reveal{v2}{Period of cultural rebirth in Europe (14th-17th century)}
    \item \textbf{Imperialism}: \reveal{v3}{Policy of extending a nation's power through colonization}
    \item \textbf{Reformation}: \reveal{v4}{16th-century religious movement that led to Protestantism}
\end{itemize}

\vspace{0.5cm}

\begin{center}
\textit{Tip: Use this template to create your own study guides!}
\end{center}

\end{document}`,
  },

];

