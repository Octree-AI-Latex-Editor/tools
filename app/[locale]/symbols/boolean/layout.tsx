import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Logic Gates & Boolean Algebra Symbols | Free Symbol Reference",
  description: "Complete list of LaTeX boolean algebra and logic gate symbols. Copy-paste AND ∧, OR ∨, NOT ¬, XOR ⊕, NAND ⊼, NOR with LaTeX commands.",
  keywords: [
    "boolean algebra symbols",
    "logic gate symbols latex",
    "and or not symbols",
    "xor symbol",
    "nand symbol",
    "nor symbol",
    "latex and or",
    "latex not",
    "latex xor",
    "land lor latex",
    "neg latex",
    "oplus latex",
    "boolean and latex",
    "boolean or latex",
    "de morgan latex",
    "complement symbol",
    "logic symbols cs",
    "digital logic symbols",
    "math symbols",
    "computer science symbols",
  ],
  openGraph: {
    title: "LaTeX Logic Gates & Boolean Algebra - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for AND, OR, NOT, XOR, NAND, and boolean algebra.",
  },
};

export default function BooleanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

