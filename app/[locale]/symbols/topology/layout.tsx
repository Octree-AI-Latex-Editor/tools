import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Topology & Abstract Math Symbols - Aleph, Boundary, Homology | Free Symbol Reference",
  description: "Complete list of LaTeX topology and abstract math symbols. Copy-paste ∂, ℵ, ℘, ℜ, ℑ, homology, cohomology, category theory with LaTeX commands.",
  keywords: [
    // Core keywords
    "math symbols",
    "latex symbols",
    "academic symbols",
    "research symbols",
    // Topology keywords
    "latex topology symbols",
    "latex abstract math",
    "latex aleph",
    "latex boundary",
    "latex weierstrass p",
    "latex real part",
    "latex imaginary part",
    "partial latex",
    "aleph latex",
    "wp latex",
    "Re Im latex",
    "latex homology",
    "latex cohomology",
    "latex fundamental group",
    "latex category theory",
    "latex functor",
    "latex tensor product",
    "latex wedge product",
    "abstract math symbols",
    "topology notation latex",
    "cardinality symbol",
    "mathematical symbols list",
  ],
  openGraph: {
    title: "LaTeX Topology & Abstract Math Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for aleph, boundary, homology, and abstract math notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'topology', defaultMetadata);
}

export default function TopologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
