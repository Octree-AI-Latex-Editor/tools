import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Combinatorics Symbols - Factorial, Binomial, Permutations | Free Symbol Reference",
  description: "Complete list of LaTeX combinatorics symbols. Copy-paste factorial n!, binomial coefficient, nCr, nPr, Stirling numbers with LaTeX commands.",
  keywords: [
    "combinatorics symbols",
    "permutation notation",
    "combination symbols",
    "factorial latex",
    "binomial coefficient latex",
    "ncr npr latex",
    "latex binom",
    "stirling numbers latex",
    "catalan number latex",
    "bell number latex",
    "fibonacci latex",
    "partition function latex",
    "derangement latex",
    "double factorial latex",
    "multinomial latex",
    "falling factorial latex",
    "rising factorial latex",
    "pochhammer symbol",
    "counting symbols",
    "discrete math symbols",
    "math symbols",
  ],
  openGraph: {
    title: "LaTeX Combinatorics Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for factorials, binomials, permutations, and combinatorial notation.",
  },
};

export default function CombinatoricsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

