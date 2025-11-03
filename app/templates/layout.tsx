import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free LaTeX Templates - Research Papers, Presentations & More | Octree Tools",
  description: "Free professional LaTeX templates for research papers, presentations, CVs, mathematical documents, and more. Download ready-to-use LaTeX code with PDF previews. Perfect for academics and students.",
  keywords: [
    // High-volume keywords (1000+ searches)
    "latex templates",
    "latex resume template",
    "latex cv template",
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
    
    // Specific high-intent keywords
    "free latex templates",
    "best latex templates",
    "latex beamer template",
    "latex presentation template",
    "academic cv latex template",
    "latex document templates",
    "latex algorithm template",
    "latex letter template",
    "latex research paper template",
    "mathematical document template",
    
    // Long-tail keywords
    "latex resume template reddit",
    "latex template for research paper",
    "best latex resume templates",
    "latex dissertation template",
    "phd thesis latex template",
    "overleaf latex templates",
    "academic templates latex",
  ],
  alternates: {
    canonical: '/templates',
  },
  openGraph: {
    title: "Free LaTeX Templates - Research Papers, Presentations & More",
    description: "Professional LaTeX templates for research papers, presentations, CVs, and mathematical documents. Free download with PDF previews.",
    url: 'https://tools.useoctree.com/templates',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free LaTeX Templates - Research Papers, Presentations & More",
    description: "Professional LaTeX templates for research papers, presentations, CVs, and mathematical documents. Free download with PDF previews.",
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
  { name: "Homework Template", slug: "homework", description: "Structured homework assignment with problems and solutions" },
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
];

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free LaTeX Templates',
    description: 'Professional LaTeX templates for research papers, presentations, CVs, and more',
    url: 'https://tools.useoctree.com/templates',
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

