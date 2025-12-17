import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Logic & Proof Symbols - Quantifiers, Connectives | Free Symbol Reference",
  description: "Complete list of LaTeX logic and proof symbols. Copy-paste ∀, ∃, ¬, ∧, ∨, ⇒, ⇔, ⊢, ⊨, ∴, ∵ and all logical notation with LaTeX commands.",
  keywords: [
    "latex logic symbols",
    "latex proof symbols",
    "latex for all",
    "latex exists",
    "latex negation",
    "latex and or",
    "latex implies",
    "latex if and only if",
    "forall latex",
    "exists latex",
    "neg latex",
    "land lor latex",
    "Rightarrow latex",
    "Leftrightarrow latex",
    "latex therefore",
    "latex because",
    "vdash models latex",
    "latex qed",
    "logical connectives latex",
  ],
  openGraph: {
    title: "LaTeX Logic & Proof Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for quantifiers, logical connectives, and proof notation.",
  },
};

export default function LogicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

