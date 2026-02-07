import type { Metadata } from 'next';
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: 'Image to TikZ Converter - Upload Any Diagram, Get Editable LaTeX Code',
  description:
    'Turn screenshots & diagrams into editable TikZ code in seconds. Upload flowcharts, graphs, or hand-drawn sketches — AI converts them to clean LaTeX. Free, no signup.',
  keywords: [
    // Core image-to-tikz keywords
    'image to tikz',
    'diagram to latex',
    'convert image to tikz',
    'tikz generator',
    'image to latex',
    'flowchart to tikz',
    'diagram converter',
    'tikz code generator',
    'latex diagram',
    'vector graphics latex',
    'tikz from image',
    'ai tikz converter',
    'picture to tikz',
    'screenshot to tikz',
    'photo to latex diagram',
    'scan diagram to latex',
    'hand drawn to tikz',
    'whiteboard to tikz',
    'sketch to latex',
    'inkscape to tikz',
    // TikZ diagram types
    'tikz block diagram',
    'tikz neural network',
    'tikz venn diagram',
    'tikz flowchart',
    'tikz automata',
    'tikz tree',
    'tikz graph',
    'tikz commutative diagram',
    // TikZ drawing keywords
    'tikz draw',
    'tikz shapes',
    'tikz arrows',
    'tikz node',
    'tikz coordinates',
    'tikz path',
    'tikz examples',
  ],
  openGraph: {
    title: 'Image to TikZ Converter - Upload Any Diagram, Get Editable LaTeX',
    description:
      'Turn screenshots & diagrams into editable TikZ code in seconds. AI converts flowcharts, graphs & sketches to clean LaTeX.',
    type: 'website',
    siteName: 'Octree Tools',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image to TikZ Converter - Upload Any Diagram, Get Editable LaTeX',
    description:
      'Turn screenshots & diagrams into editable TikZ code in seconds. AI converts flowcharts, graphs & sketches to clean LaTeX.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/tools/image-to-tikz',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'image-to-tikz', defaultMetadata);
}

export default function ImageToTikzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}