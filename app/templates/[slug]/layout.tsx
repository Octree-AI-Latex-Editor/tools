import { Metadata } from 'next';

const templates = [
  {
    slug: "research-paper",
    title: "Research Paper",
    description: "IEEE/ACM conference paper template with sections",
  },
  {
    slug: "beamer-presentation",
    title: "Presentation (Beamer)",
    description: "Professional slide deck template",
  },
  {
    slug: "academic-cv",
    title: "Academic CV",
    description: "Professional curriculum vitae template",
  },
  {
    slug: "mathematical-document",
    title: "Mathematical Document",
    description: "Document with advanced math equations",
  },
  {
    slug: "lab-report",
    title: "Lab Report",
    description: "Scientific lab report template",
  },
  {
    slug: "book-chapter",
    title: "Book Chapter",
    description: "Book or thesis chapter template",
  },
  {
    slug: "resume",
    title: "Resume",
    description: "Professional resume template (Jake's format)",
  },
  {
    slug: "grading-rubric",
    title: "Grading Rubric",
    description: "Assessment criteria and grading template",
  },
  {
    slug: "assignment",
    title: "Assignment",
    description: "Homework and assignment template",
  },
  {
    slug: "worksheet",
    title: "Worksheet",
    description: "Practice problems and exercises template",
  },
  {
    slug: "homework",
    title: "Homework Template",
    description: "Structured homework assignment",
  },
  {
    slug: "poster",
    title: "Research Poster",
    description: "Academic conference poster template",
  },
  {
    slug: "thesis",
    title: "PhD Thesis",
    description: "Comprehensive thesis template with chapters",
  },
  {
    slug: "letter",
    title: "Formal Letter",
    description: "Professional business letter template",
  },
  {
    slug: "algorithm",
    title: "Algorithm Pseudocode",
    description: "Algorithm documentation with pseudocode",
  },
  {
    slug: "cover-letter",
    title: "Cover Letter",
    description: "Professional academic and job application cover letter",
  },
  {
    slug: "journal-article",
    title: "Journal Article",
    description: "Academic journal article template with sections",
  },
  {
    slug: "syllabus",
    title: "Course Syllabus",
    description: "Comprehensive course syllabus template",
  },
  {
    slug: "research-proposal",
    title: "Research Proposal",
    description: "Grant and research proposal template",
  },
  {
    slug: "essay",
    title: "Academic Essay",
    description: "Structured essay with argument and analysis",
  },
];

// Generate static params for all template pages at build time
export function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);

  if (!template) {
    return {
      title: 'Template Not Found | Octree LaTeX Tools',
      description: 'The requested LaTeX template could not be found.',
    };
  }

  const title = `${template.title} LaTeX Template | Free Download & Preview`;
  const description = `Free ${template.title} LaTeX template with live PDF preview. ${template.description}. Edit and download professional LaTeX documents instantly.`;

  // SEO-optimized keywords based on search volume data
  const keywordMap: Record<string, string[]> = {
    'homework': [
      'latex homework template',
      'homework template latex',
      'math homework latex template',
      'latex math homework template',
      'homework assignment template latex',
      'free latex homework template',
      'latex template for homework',
    ],
    'poster': [
      'latex poster template',
      'research poster latex template',
      'academic poster template latex',
      'conference poster latex',
      'tikzposter template',
      'latex poster template a0',
      'scientific poster latex template',
    ],
    'thesis': [
      'latex thesis template',
      'phd thesis latex template',
      'thesis template latex',
      'latex dissertation template',
      'latex phd template',
      'best latex templates for thesis',
      'thesis latex templates',
      'latex template thesis',
      'master thesis latex template',
      'doctoral thesis latex template',
    ],
    'letter': [
      'latex letter template',
      'formal letter latex template',
      'business letter latex template',
      'latex cover letter template',
      'cover letter template latex',
      'recommendation letter latex template',
      'motivation letter latex template',
      'professional letter template latex',
      'latex formal letter',
    ],
    'algorithm': [
      'latex algorithm template',
      'algorithm template latex',
      'pseudocode latex template',
      'latex pseudocode template',
      'algorithm documentation latex',
      'latex algorithmicx template',
      'algorithm2e latex template',
    ],
    'research-paper': [
      'latex research paper template',
      'ieee latex template',
      'research paper template latex',
      'academic paper latex template',
      'conference paper latex template',
      'latex paper template',
      'ieee conference template latex',
      'latex template for research paper',
    ],
    'beamer-presentation': [
      'latex beamer template',
      'beamer presentation template',
      'latex presentation template',
      'beamer latex templates',
      'latex slides template',
      'latex ppt template',
      'academic presentation latex',
    ],
    'academic-cv': [
      'latex cv template academic',
      'academic cv latex template',
      'academic cv template latex',
      'latex academic cv',
      'curriculum vitae latex template',
      'latex cv template phd',
      'professor cv latex template',
    ],
    'resume': [
      'latex resume template',
      'resume template latex',
      'latex resume',
      'resume latex template',
      'latex cv template',
      'best latex resume templates',
      "jake's resume latex",
      'latex resume template github',
      'professional resume latex',
    ],
    'mathematical-document': [
      'latex math document template',
      'mathematical document latex',
      'latex template for math',
      'math paper latex template',
      'latex mathematical notation',
      'theorem proof latex template',
    ],
    'lab-report': [
      'latex lab report template',
      'lab report template latex',
      'scientific lab report latex',
      'latex template lab report',
      'laboratory report latex',
    ],
    'book-chapter': [
      'latex book template',
      'book chapter latex template',
      'latex template book',
      'latex book chapter',
      'thesis chapter latex template',
    ],
    'grading-rubric': [
      'latex grading rubric template',
      'rubric template latex',
      'assessment rubric latex',
      'grading template latex',
    ],
    'assignment': [
      'latex assignment template',
      'assignment template latex',
      'homework assignment latex',
      'latex template assignment',
    ],
    'worksheet': [
      'latex worksheet template',
      'math worksheet latex',
      'worksheet template latex',
      'practice problems latex template',
    ],
    'cover-letter': [
      'latex cover letter template',
      'cover letter latex template',
      'cover letter template latex',
      'academic cover letter latex',
      'job application cover letter latex',
      'latex cover letter',
      'professional cover letter latex template',
    ],
    'journal-article': [
      'latex journal article template',
      'journal article template latex',
      'latex article template',
      'academic article latex template',
      'latex template article',
      'latex article template two column',
      'latex journal template',
    ],
    'syllabus': [
      'latex syllabus template',
      'course syllabus latex template',
      'syllabus template latex',
      'latex template for syllabus',
      'university syllabus latex',
    ],
    'research-proposal': [
      'research proposal latex template',
      'latex research proposal template',
      'latex proposal template',
      'grant proposal latex template',
      'research proposal template latex',
      'proposal template latex',
    ],
    'essay': [
      'latex essay template',
      'essay template latex',
      'academic essay latex template',
      'latex template for essay',
      'mla essay latex template',
      'argumentative essay latex template',
    ],
    'research-statement': [
      'latex research statement template',
      'research statement latex template',
      'research statement template latex',
      'latex template research statement',
      'academic research statement latex',
      'faculty research statement template',
    ],
    'dissertation': [
      'latex dissertation template',
      'dissertation template latex',
      'latex phd dissertation template',
      'phd dissertation latex template',
      'latex template for dissertation',
      'dissertation latex template overleaf',
    ],
    'white-paper': [
      'latex white paper template',
      'white paper latex template',
      'latex whitepaper template',
      'whitepaper template latex',
      'technical white paper latex',
    ],
    'leaflet': [
      'latex leaflet template',
      'latex brochure template',
      'brochure template latex',
      'leaflet template latex',
      'marketing brochure latex',
    ],
    'technical-report': [
      'latex technical report template',
      'technical report latex template',
      'latex report template',
      'report template latex',
      'latex research report template',
    ],
  };

  const specificKeywords = keywordMap[slug] || [
    `${template.title.toLowerCase()} latex template`,
    `latex ${template.title.toLowerCase()} template`,
  ];

  return {
    title,
    description,
    keywords: [
      ...specificKeywords,
      'free latex template',
      'latex document template',
      'latex pdf preview',
      'professional latex',
      'online latex editor',
      'latex template download',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://tools.useoctree.com/templates/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function TemplateLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);

  if (!template) {
    return children;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: `${template.title} LaTeX Template`,
    description: template.description,
    programmingLanguage: 'LaTeX',
    codeRepository: `https://tools.useoctree.com/templates/${slug}`,
    author: {
      '@type': 'Organization',
      name: 'Octree',
      url: 'https://useoctree.com',
    },
    license: 'https://creativecommons.org/publicdomain/zero/1.0/',
    keywords: [
      template.title.toLowerCase(),
      'latex template',
      'free template',
      'academic writing',
    ],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
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

