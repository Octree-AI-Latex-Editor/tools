import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free LaTeX Templates - Research Papers, Presentations & More | Octree Tools",
  description: "Free professional LaTeX templates for research papers, presentations, CVs, mathematical documents, and more. Download ready-to-use LaTeX code with PDF previews. Perfect for academics and students.",
  keywords: [
    "LaTeX templates",
    "free LaTeX templates",
    "research paper template LaTeX",
    "LaTeX presentation template",
    "academic CV template LaTeX",
    "LaTeX document templates",
    "IEEE LaTeX template",
    "Beamer presentation template",
    "mathematical document template",
    "LaTeX resume template",
    "academic templates LaTeX",
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

