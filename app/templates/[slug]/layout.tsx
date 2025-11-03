import { Metadata } from 'next';
import { templates } from '@/lib/templates';

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
    'math-exercises': [
      'latex template math exercises',
      'latex math exercises template',
      'math exercises template latex',
      'latex template for math exercises',
      'latex exercise template',
    ],
    'math-notes': [
      'latex math notes template',
      'latex template math notes',
      'math notes latex template',
      'latex template for math notes',
      'latex math lecture notes template',
      'latex lecture notes template',
    ],
    'math-exam': [
      'latex math exam template',
      'latex template math exam',
      'math exam template latex',
      'latex exam template',
      'exam template latex',
    ],
    'math-problem-set': [
      'latex math problem set template',
      'math problem set latex template',
      'latex problem set template',
      'problem set template latex',
    ],
    'math-cheat-sheet': [
      'latex math cheat sheet template',
      'latex cheat sheet template',
      'cheat sheet template latex',
      'latex template cheat sheet',
      'math cheat sheet latex',
    ],
    'lecture-notes': [
      'latex lecture notes template',
      'lecture notes template latex',
      'latex template lecture notes',
      'latex template for notes',
      'latex template notes',
      'course notes latex template',
    ],
    'quiz-template': [
      'latex quiz template',
      'quiz template latex',
      'latex template quiz',
      'math quiz template latex',
    ],
    'formula-sheet': [
      'latex formula sheet template',
      'formula sheet template latex',
      'latex equation sheet template',
      'equation sheet latex template',
    ],
    'project-report': [
      'latex project report template',
      'project report latex template',
      'latex template project report',
      'latex report template',
      'report template latex',
      'latex template report',
    ],
    'article-template': [
      'latex article template',
      'latex template article',
      'article template latex',
      'scientific article latex template',
      'latex academic article template',
      'latex template article journal',
    ],
    'statement-of-purpose': [
      'latex statement of purpose template',
      'statement of purpose latex template',
      'latex template statement of purpose',
      'sop latex template',
      'grad school statement latex',
    ],
    'literature-review': [
      'latex literature review template',
      'literature review latex template',
      'latex template literature review',
    ],
    'meeting-minutes': [
      'latex meeting minutes template',
      'meeting minutes latex template',
      'minutes template latex',
    ],
    'certificate': [
      'latex certificate template',
      'certificate template latex',
      'latex template certificate',
      'award certificate latex',
    ],
    'invoice': [
      'latex invoice template',
      'invoice template latex',
      'latex template invoice',
      'business invoice latex',
    ],
    'grant-proposal': [
      'latex grant proposal template',
      'grant proposal latex template',
      'latex template grant proposal',
      'latex proposal template',
      'latex template project proposal',
      'project proposal latex template',
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

