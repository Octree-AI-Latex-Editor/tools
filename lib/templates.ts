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
];

