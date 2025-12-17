import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Quantifiers - For All, Exists, Element Of | Free Symbol Reference",
  description: "Complete list of LaTeX quantifier symbols. Copy-paste ∀, ∃, ∄, ∃!, ∈, ∉ with set builder notation and LaTeX commands.",
  keywords: [
    "quantifier symbols",
    "forall exists latex",
    "latex for all",
    "latex exists",
    "latex not exists",
    "unique exists latex",
    "element of symbol",
    "not element of symbol",
    "set membership symbol",
    "forall latex",
    "exists latex",
    "nexists latex",
    "in notin latex",
    "set builder notation",
    "such that latex",
    "quantified statement latex",
    "logic symbols",
    "math symbols",
    "latex symbols",
  ],
  openGraph: {
    title: "LaTeX Quantifiers - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for for all, exists, element of, and set builder notation.",
  },
};

export default function QuantifiersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

