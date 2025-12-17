import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Set Theory Symbols - Union, Intersection, Subset | Free Symbol Reference",
  description: "Complete list of LaTeX set theory symbols. Copy-paste ∅, ∈, ∉, ⊂, ⊆, ∪, ∩, ℕ, ℤ, ℚ, ℝ, ℂ and all set notation with LaTeX commands.",
  keywords: [
    "latex set theory",
    "latex set symbols",
    "latex empty set",
    "latex element of",
    "latex subset",
    "latex union",
    "latex intersection",
    "latex superset",
    "emptyset latex",
    "in notin latex",
    "cup cap latex",
    "subset subseteq latex",
    "latex natural numbers",
    "latex integers",
    "latex real numbers",
    "mathbb latex",
    "latex number sets",
    "set notation latex",
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

