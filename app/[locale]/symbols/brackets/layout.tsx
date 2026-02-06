import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Brackets & Delimiters - Angle Brackets, Floor, Ceiling, Norms | Free Symbol Reference",
  description: "Complete list of LaTeX bracket and delimiter symbols. Copy-paste angle brackets ⟨⟩, floor ⌊⌋, ceiling ⌈⌉, norms ‖‖, double brackets ⟦⟧, and all delimiter pairs with LaTeX code.",
  keywords: [
    // Brackets & delimiters keywords
    "bracket symbols",
    "parentheses symbols",
    "delimiter symbols",
    "angle bracket symbol",
    "floor symbol",
    "ceiling symbol",
    "absolute value symbol",
    "norm symbol",
    "double bracket symbol",
    // LaTeX specific
    "latex brackets",
    "latex delimiters",
    "latex angle brackets",
    "latex floor symbol",
    "latex ceiling symbol",
    "latex norm symbol",
    "langle rangle latex",
    "lfloor rfloor latex",
    "lceil rceil latex",
    "latex double brackets",
    "llbracket latex",
    "latex left right",
    "latex big brackets",
    "math delimiters latex",
    "latex parentheses",
    "latex curly braces",
    "latex vertical bar",
    "math symbols copy paste",
    "unicode math symbols",
  ],
  openGraph: {
    title: "LaTeX Brackets & Delimiters - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for angle brackets, floor, ceiling, norms, and all delimiter pairs.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'brackets', defaultMetadata);
}

export default function BracketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
