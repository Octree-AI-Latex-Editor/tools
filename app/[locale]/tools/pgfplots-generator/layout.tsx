import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free PGFPlots Generator Online - Create LaTeX Charts with AI",
  description: "Create stunning LaTeX plots in seconds. Describe your chart → AI generates pgfplots code. Bar charts, scatter plots, line graphs & 3D plots. Free with live PDF preview.",
  keywords: [
    // Core pgfplots keywords
    "pgfplots generator",
    "AI pgfplots generator",
    "LaTeX plot generator",
    "pgfplots code generator",
    "generate pgfplots graphs",
    "LaTeX chart generator",
    "free pgfplots tool",
    "pgfplots online",
    "LaTeX graph tool",
    "scientific plot generator",
    "pgfplots examples",
    "pgfplots tutorial",
    // Chart types
    "latex bar chart",
    "latex scatter plot",
    "latex line graph",
    "latex histogram",
    "latex data visualization",
    // Conversion keywords
    "matlab to pgfplots",
    "python to pgfplots",
    "csv to pgfplots",
    // TikZ/PGF related
    "tikz plot",
    "tikz axis",
    "tikz graph",
    "tikz 3d",
    "pgf tikz",
    "tikz data visualization",
    "tikz chart",
  ],
  alternates: {
    canonical: '/tools/pgfplots-generator',
  },
  openGraph: {
    title: "Free PGFPlots Generator Online - Create LaTeX Charts with AI",
    description: "Create stunning LaTeX plots in seconds. Describe your chart → AI generates pgfplots code. Free with live preview.",
    url: 'https://tools.useoctree.com/tools/pgfplots-generator',
    siteName: 'Octree LaTeX Tools',
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free PGFPlots Generator Online - Create LaTeX Charts with AI",
    description: "Create stunning LaTeX plots in seconds. Describe your chart → AI generates pgfplots code. Free with live preview.",
  },
};

export default function PgfplotsGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
