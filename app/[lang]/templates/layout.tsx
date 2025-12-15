import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "57 Free LaTeX Templates - Resume, CV, Research Paper, Beamer & More | Octree",
  description: "Download 57 free professional LaTeX templates: resume, CV, research paper, thesis, beamer presentation, homework, poster, business report, flyer, calendar & more. Ready-to-use code with live PDF previews. Perfect for academics, students & professionals.",
  keywords: [
    // High-volume keywords (1000+ searches)
    "latex templates",
    "latex resume template",
    "latex cv template",
    "overleaf template",
    "ieee latex template",
    "latex resume templates",
    "latex template",
    "resume template latex",
    
    // Medium-volume keywords (500-1000 searches)
    "elsevier latex template",
    "cv latex template",
    "latex cover letter template",
    "latex homework template",
    "latex poster template",
    "latex thesis template",
    "arxiv latex template",
    "acm latex template",
    "latex book template",
    "latex beamer template",
    "latex presentation template",
    "latex report template",
    "latex letter template",
    
    // Specific high-intent keywords
    "free latex templates",
    "best latex templates",
    "latex document templates",
    "latex algorithm template",
    "latex research paper template",
    "mathematical document template",
    "latex notes template",
    "latex exam template",
    "latex assignment template",
    "latex slide template",
    "modern latex cv template",
    "professional latex templates",
    
    // Long-tail keywords
    "latex resume template reddit",
    "latex template for research paper",
    "best latex resume templates",
    "latex dissertation template",
    "phd thesis latex template",
    "overleaf latex templates",
    "academic templates latex",
    "latex cv template overleaf",
    "latex resume template free",
    "latex resume template github",
    
    // Business & professional templates
    "latex business plan template",
    "latex business report template",
    "latex invoice template",
    "latex newsletter template",
    "latex questionnaire template",
    "latex table template",
    "letter of recommendation latex",
    "motivation letter latex template",
    "internship report latex",
    "latex memo template",
    "latex manuscript template",
    "latex recipe template",
    "latex cookbook template",
    "latex flyer template",
    "latex business card template",
    "latex calendar template",
    
    // Publisher & conference templates
    "latex springer template",
    "latex ieee conference template",
    "latex springer book template",
    "latex apa template",
    "latex two column article template",
    
    // Academic workflows
    "latex template with bibliography",
    "latex template for machine learning paper",
    "latex template for computer science thesis",
    "latex poster template a0",
    "latex thesis template with chapters",
    "best latex cv template",
  ],
  alternates: {
    canonical: '/templates',
  },
  openGraph: {
    title: "57 Free LaTeX Templates - Resume, CV, Research Paper & More",
    description: "Download 57 free LaTeX templates: resume, CV, thesis, beamer, homework, poster, business report, flyer, calendar. Ready-to-use code with live PDF previews.",
    url: 'https://tools.useoctree.com/templates',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "57 Free LaTeX Templates - Resume, CV, Research Paper & More",
    description: "Download 57 free LaTeX templates: resume, CV, thesis, beamer, homework, poster, business report, flyer, calendar. Ready-to-use code with live PDF previews.",
  },
};

const templatesList = [
  { name: "Research Paper", slug: "research-paper", description: "IEEE/ACM conference paper template with sections" },
  { name: "Presentation (Beamer)", slug: "beamer-presentation", description: "Professional slide deck template" },
  { name: "Academic CV", slug: "academic-cv", description: "Professional curriculum vitae template" },
  { name: "Mathematical Document", slug: "mathematical-document", description: "Document with advanced math equations" },
  { name: "Lab Report", slug: "lab-report", description: "Scientific lab report template" },
  { name: "Book Chapter", slug: "book-chapter", description: "Book or thesis chapter template" },
  { name: "Resume", slug: "resume", description: "Professional resume template" },
  { name: "Grading Rubric", slug: "grading-rubric", description: "Assessment criteria and grading template" },
  { name: "Assignment", slug: "assignment", description: "Homework and assignment template" },
  { name: "Worksheet", slug: "worksheet", description: "Practice problems and exercises template" },
  { name: "Homework Template", slug: "homework", description: "Structured homework assignment" },
  { name: "Research Poster", slug: "poster", description: "Academic conference poster template" },
  { name: "PhD Thesis", slug: "thesis", description: "Comprehensive thesis template with chapters" },
  { name: "Formal Letter", slug: "letter", description: "Professional business letter template" },
  { name: "Algorithm Pseudocode", slug: "algorithm", description: "Algorithm documentation with pseudocode" },
  { name: "Cover Letter", slug: "cover-letter", description: "Professional academic and job application cover letter" },
  { name: "Journal Article", slug: "journal-article", description: "Academic journal article template with sections" },
  { name: "Course Syllabus", slug: "syllabus", description: "Comprehensive course syllabus template" },
  { name: "Research Proposal", slug: "research-proposal", description: "Grant and research proposal template" },
  { name: "Academic Essay", slug: "essay", description: "Structured essay with argument and analysis" },
  { name: "Research Statement", slug: "research-statement", description: "Academic research statement for job applications" },
  { name: "Dissertation", slug: "dissertation", description: "Complete PhD dissertation template" },
  { name: "White Paper", slug: "white-paper", description: "Professional white paper template" },
  { name: "Leaflet/Brochure", slug: "leaflet", description: "Professional marketing leaflet template" },
  { name: "Technical Report", slug: "technical-report", description: "Technical research report template" },
  { name: "Math Exercises", slug: "math-exercises", description: "Mathematics exercise and practice problems template" },
  { name: "Math Notes", slug: "math-notes", description: "Mathematical notes and lecture template" },
  { name: "Math Exam", slug: "math-exam", description: "Mathematics examination template" },
  { name: "Math Problem Set", slug: "math-problem-set", description: "Mathematics problem set template" },
  { name: "Math Cheat Sheet", slug: "math-cheat-sheet", description: "Compact mathematics reference sheet" },
  { name: "Lecture Notes", slug: "lecture-notes", description: "Academic lecture notes template" },
  { name: "Quiz Template", slug: "quiz-template", description: "Educational quiz and test template" },
  { name: "Formula Sheet", slug: "formula-sheet", description: "Compact formula reference sheet" },
  { name: "Project Report", slug: "project-report", description: "Comprehensive project documentation template" },
  { name: "Article Template", slug: "article-template", description: "General article writing template" },
  { name: "Statement of Purpose", slug: "statement-of-purpose", description: "Graduate school application statement" },
  { name: "Literature Review", slug: "literature-review", description: "Academic literature review template" },
  { name: "Meeting Minutes", slug: "meeting-minutes", description: "Professional meeting minutes template" },
  { name: "Certificate", slug: "certificate", description: "Award and achievement certificate template" },
  { name: "Invoice", slug: "invoice", description: "Professional business invoice template" },
  { name: "Grant Proposal", slug: "grant-proposal", description: "Research grant proposal template" },
  { name: "Letter of Recommendation", slug: "letter-of-recommendation", description: "Professional recommendation letter template" },
  { name: "Motivation Letter", slug: "motivation-letter", description: "Academic or professional motivation letter template" },
  { name: "Business Plan", slug: "business-plan", description: "Professional business plan template" },
  { name: "Business Report", slug: "business-report", description: "Corporate business report template" },
  { name: "Scientific Report", slug: "scientific-report", description: "Scientific research report template" },
  { name: "Internship Report", slug: "internship-report", description: "Student internship report template" },
  { name: "Newsletter", slug: "newsletter", description: "Professional newsletter template" },
  { name: "Questionnaire", slug: "questionnaire", description: "Research survey and questionnaire template" },
  { name: "Table Template", slug: "table-template", description: "Professional table layouts and formatting" },
  { name: "Bibliography", slug: "bibliography", description: "Standalone bibliography and references template" },
  { name: "Memo", slug: "memo", description: "Professional business memo template" },
  { name: "Manuscript", slug: "manuscript", description: "Book manuscript template for novels and non-fiction" },
  { name: "Recipe Book", slug: "recipe-book", description: "Cookbook and recipe collection template" },
  { name: "Flyer", slug: "flyer", description: "Marketing flyer and promotional one-page template" },
  { name: "Business Card", slug: "business-card", description: "Professional business card template" },
  { name: "Calendar", slug: "calendar", description: "Monthly and yearly calendar template" },
];

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '57 Free LaTeX Templates - Resume, CV, Research Paper & More',
    description: '57 professional LaTeX templates including resume, CV, research paper, thesis, beamer presentation, homework, poster, business report, flyer, calendar, and more. Free download with PDF previews.',
    url: 'https://tools.useoctree.com/templates',
    numberOfItems: 57,
    hasPart: templatesList.map((template) => ({
      '@type': 'SoftwareSourceCode',
      name: `${template.name} LaTeX Template`,
      description: template.description,
      programmingLanguage: 'LaTeX',
      url: `https://tools.useoctree.com/templates/${template.slug}`,
      author: {
        '@type': 'Organization',
        name: 'Octree',
        url: 'https://useoctree.com',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

