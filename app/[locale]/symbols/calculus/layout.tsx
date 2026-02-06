import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Calculus Symbols - Derivatives, Integrals, Limits | Free Symbol Reference",
  description: "Complete list of LaTeX calculus and analysis symbols. Copy-paste ∂, ∇, ∫, ∬, ∮, limits, derivatives, summations with LaTeX commands.",
  keywords: [
    // Calculus & analysis keywords
    "calculus symbols",
    "derivative symbols",
    "integral symbols",
    "partial derivative symbol",
    "gradient symbol",
    "divergence symbol",
    "laplacian symbol",
    "limit notation symbols",
    "summation symbol",
    "product notation symbol",
    // LaTeX specific
    "latex calculus",
    "latex derivative",
    "latex integral",
    "latex partial derivative",
    "latex limit",
    "latex summation",
    "latex nabla",
    "latex gradient",
    "int latex",
    "iint iiint latex",
    "oint latex",
    "partial latex",
    "nabla latex",
    "lim latex",
    "sum prod latex",
    "frac d dx latex",
    "latex infinity",
    "latex contour integral",
    "math symbols",
    "scientific symbols",
  ],
  openGraph: {
    title: "LaTeX Calculus Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for derivatives, integrals, limits, and analysis notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'calculus', defaultMetadata);
}

export default function CalculusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
