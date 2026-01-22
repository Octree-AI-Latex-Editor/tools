import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Image to TikZ Converter - Convert Diagrams to LaTeX TikZ Code',
  description:
    'Convert images, diagrams, flowcharts, and shapes into clean, editable TikZ/LaTeX code. Upload any image and get compilable LaTeX with accurate geometry and structured nodes.',
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
    title: 'Image to TikZ Converter - Convert Diagrams to LaTeX TikZ Code',
    description:
      'Convert images, diagrams, flowcharts, and shapes into clean, editable TikZ/LaTeX code. Upload any image and get compilable LaTeX with accurate geometry.',
    type: 'website',
    siteName: 'Octree Tools',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image to TikZ Converter - Convert Diagrams to LaTeX TikZ Code',
    description:
      'Convert images, diagrams, flowcharts, and shapes into clean, editable TikZ/LaTeX code. Upload any image and get compilable LaTeX with accurate geometry.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/tools/image-to-tikz',
  },
};

export default function ImageToTikzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}