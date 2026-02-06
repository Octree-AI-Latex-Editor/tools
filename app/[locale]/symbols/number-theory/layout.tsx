import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Number Theory Symbols - Divisibility, Modular Arithmetic | Free Symbol Reference",
  description: "Complete list of LaTeX number theory symbols. Copy-paste |, ∤, gcd, lcm, ≡, φ(n), Legendre symbol with LaTeX commands.",
  keywords: [
    // Core keywords
    "math symbols",
    "latex symbols",
    "academic symbols",
    // Number theory keywords
    "latex number theory",
    "latex divisibility",
    "latex modular arithmetic",
    "latex gcd lcm",
    "latex congruent",
    "latex euler phi",
    "latex legendre symbol",
    "mid nmid latex",
    "pmod latex",
    "equiv latex",
    "varphi phi latex",
    "latex floor ceiling",
    "latex prime",
    "latex coprime",
    "latex mobius function",
    "latex divisor function",
    "latex fractional part",
    "mathematical symbols list",
    "complete list of latex symbols",
  ],
  openGraph: {
    title: "LaTeX Number Theory Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for divisibility, modular arithmetic, and number-theoretic functions.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'number-theory', defaultMetadata);
}

export default function NumberTheoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
