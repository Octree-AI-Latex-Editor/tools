import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Relations & Comparisons - Inequality, Equivalence Symbols | Free Symbol Reference",
  description: "Complete list of LaTeX relation and comparison symbols. Copy-paste ≤, ≥, ≠, ≈, ≡, ∝, ⊂, ⊆, ⟂, ∥ with LaTeX commands.",
  keywords: [
    "comparison symbols",
    "relation symbols latex",
    "inequality symbols",
    "equivalence symbols",
    "proportional symbol",
    "approximation symbol",
    "parallel symbol",
    "perpendicular symbol",
    "subset symbol",
    "superset symbol",
    "latex less than equal",
    "latex greater than equal",
    "latex not equal",
    "latex approximately",
    "latex equivalent",
    "latex proportional",
    "leq geq latex",
    "neq approx latex",
    "equiv propto latex",
    "math symbols",
    "latex symbols",
    "symbol copy paste",
  ],
  openGraph: {
    title: "LaTeX Relations & Comparisons - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for inequality, equivalence, and comparison symbols.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'relations', defaultMetadata);
}

export default function RelationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

