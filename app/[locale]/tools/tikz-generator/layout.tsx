import type { Metadata } from "next";
import { generateToolMetadata } from '@/lib/generate-tool-metadata';

const defaultMetadata: Metadata = {
  title: "Free TikZ Generator Online - Create Diagrams in Seconds with AI",
  description: "Create TikZ diagrams instantly — just describe what you need. AI generates flowcharts, graphs, neural networks & more. Free online TikZ maker with live PDF preview. No signup required.",
  keywords: [
    // High-volume TikZ keywords
    "tikz",
    "tikz latex",
    "tikz online",
    "tikz examples",
    "tikz tutorial",
    "tikz maker",
    "tikz overleaf",
    "tikz documentation",
    // TikZ drawing & shapes
    "tikz draw",
    "tikz draw line",
    "tikz draw circle",
    "tikz draw rectangle",
    "tikz circle",
    "tikz rectangle",
    "tikz rounded rectangle",
    "tikz ellipse",
    "tikz triangle",
    "tikz shapes",
    "tikz box",
    "tikz arc",
    "tikz path",
    "tikz fill",
    "tikz clip",
    // TikZ nodes & positioning
    "tikz node",
    "tikz node position",
    "tikz node size",
    "tikz anchors",
    "tikz positioning",
    "tikz coordinates",
    "tikz rotate node text",
    // TikZ lines & styles
    "tikz line thickness",
    "tikz line styles",
    "tikz dashed line",
    "tikz arrows",
    "tikz brace",
    "tikz colors",
    // TikZ diagrams & structures
    "tikz flowchart",
    "tikz tree",
    "tikz graph",
    "tikz graph generator",
    "tikz matrix",
    "tikz grid",
    "tikz axis",
    "tikz plot",
    "tikz 3d",
    // TikZ specialized diagrams
    "tikz block diagram",
    "tikz neural network",
    "tikz venn diagram",
    "tikz automata",
    "tikz commutative diagram",
    "tikzcd",
    "tikz patterns",
    "tikz qtree",
    // TikZ tools
    "tikzit",
    "tikz gui",
    "TikZ generator",
    "AI TikZ generator",
    "TikZ code generator",
    "generate TikZ diagrams",
    "free TikZ tool",
    "PGF/TikZ generator",
    "pgf tikz examples",
  ],
  alternates: {
    canonical: '/tools/tikz-generator',
  },
  openGraph: {
    title: "Free TikZ Generator Online - Create Diagrams in Seconds",
    description: "Create TikZ diagrams instantly with AI. Flowcharts, graphs, neural networks & more. Free online with live PDF preview.",
    url: 'https://tools.useoctree.com/tools/tikz-generator',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free TikZ Generator Online - Create Diagrams in Seconds",
    description: "Create TikZ diagrams instantly with AI. Flowcharts, graphs, neural networks & more. Free online with live PDF preview.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateToolMetadata(locale, 'tikz-generator', defaultMetadata);
}

export default function TikzGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 