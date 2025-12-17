import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Math Symbols - Operators, Relations, Equations | Free Symbol Reference",
  description: "Complete list of LaTeX mathematical symbols. Copy-paste operators (+, -, ×, ÷), relations (≤, ≥, ≠, ≈), summation, integrals, limits, and more with LaTeX code.",
  keywords: [
    "latex math symbols",
    "latex operators",
    "latex mathematical symbols",
    "latex plus minus",
    "latex times symbol",
    "latex divide symbol",
    "latex fraction",
    "latex square root",
    "latex summation",
    "latex integral",
    "latex limit",
    "latex infinity",
    "latex approximately equal",
    "latex not equal",
    "latex less than equal",
    "latex greater than equal",
    "math symbols latex",
    "latex equation symbols",
  ],
  openGraph: {
    title: "LaTeX Math Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for mathematical operators, relations, and equation symbols.",
  },
};

export default function MathLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

