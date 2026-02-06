import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Logic & Proof Symbols - Quantifiers, Connectives | Free Symbol Reference",
  description: "Complete list of LaTeX logic and proof symbols. Copy-paste ∀, ∃, ¬, ∧, ∨, ⇒, ⇔, ⊢, ⊨, ∴, ∵ and all logical notation with LaTeX commands.",
  keywords: [
    // Logic & proof keywords
    "logic symbols",
    "proof symbols",
    "logical operators symbols",
    "inference symbols",
    "turnstile symbol",
    "entails symbol",
    "negation symbol",
    "xor symbol",
    "nand symbol",
    "nor symbol",
    "logical equivalence symbol",
    // LaTeX specific
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
    "logical symbols cs",
  ],
  openGraph: {
    title: "LaTeX Logic & Proof Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for quantifiers, logical connectives, and proof notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'logic', defaultMetadata);
}

export default function LogicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
