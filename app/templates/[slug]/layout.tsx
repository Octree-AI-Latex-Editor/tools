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
];

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

  return {
    title,
    description,
    keywords: [
      `${template.title.toLowerCase()} latex template`,
      'free latex template',
      'latex document template',
      'latex pdf preview',
      template.title.toLowerCase(),
      'professional latex',
      'academic latex template',
      'latex editor',
      'online latex',
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

