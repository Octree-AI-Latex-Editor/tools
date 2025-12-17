import { Metadata } from "next";

export const metadata: Metadata = {
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

export default function RelationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

