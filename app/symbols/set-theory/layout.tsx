import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Set Theory Symbols - Union, Intersection, Subset | Free Symbol Reference",
  description: "Complete list of LaTeX set theory symbols. Copy-paste ∅, ∈, ∉, ⊂, ⊆, ∪, ∩, ℕ, ℤ, ℚ, ℝ, ℂ and all set notation with LaTeX commands.",
  keywords: [
    // Set theory keywords
    "set notation symbols",
    "set theory symbols",
    "empty set symbol",
    "element of symbol",
    "not element of symbol",
    "union symbol",
    "intersection symbol",
    "power set symbol",
    "cardinality symbol",
    "set builder notation",
    "subset symbol",
    "superset symbol",
    "set membership symbol",
    "belongs to symbol",
    // LaTeX specific
    "latex set theory",
    "emptyset latex",
    "in notin latex",
    "cup cap latex",
    "subset subseteq latex",
    "latex natural numbers",
    "latex integers",
    "latex real numbers",
    "mathbb latex",
    "latex number sets",
    "varnothing latex",
    "latex element symbol",
    "unicode math symbols",
    "copy math symbols",
  ],
  openGraph: {
    title: "LaTeX Set Theory Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for set theory - unions, intersections, subsets, and number sets.",
  },
};

export default function SetTheoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
