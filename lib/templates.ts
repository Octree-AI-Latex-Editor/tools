// Single source of truth for all LaTeX templates
// Used by both frontend and compilation script

export interface Template {
  id: number;
  title: string;
  description: string;
  slug: string;
  previewUrl: string;
  code: string;
}

export const templates: Template[] = [
  {
    id: 1,
    title: "Research Paper",
    description: "IEEE-style research paper template",
    slug: "research-paper",
    previewUrl: "/templates/research-paper.pdf",
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
];

