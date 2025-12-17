import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Computer Science Symbols - Big O, Logic, Algorithms | Free Symbol Reference",
  description: "Complete list of LaTeX computer science symbols. Copy-paste O(n), Ω(n), Θ(n), :=, ≡, ⊕, ∧, ∨, ⌊x⌋, ⌈x⌉ with LaTeX commands.",
  keywords: [
    "latex computer science",
    "latex big o notation",
    "latex algorithm symbols",
    "latex complexity",
    "latex assignment",
    "latex xor",
    "latex floor ceiling",
    "big O Omega Theta latex",
    "latex mapsto",
    "latex definition",
    "triangleq latex",
    "latex modulo",
    "latex divides",
    "lfloor lceil latex",
    "oplus latex",
    "land lor latex",
    "latex logarithm",
    "latex natural log",
  ],
  openGraph: {
    title: "LaTeX Computer Science Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for Big O notation, logical operators, and algorithm symbols.",
  },
};

export default function ComputerScienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

