import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Summation & Product Notation - Sigma, Pi Symbols | Free Symbol Reference",
  description: "Complete list of LaTeX summation and product symbols. Copy-paste ∑, ∏, ⨁, ⨂ with indexed limits and LaTeX commands.",
  keywords: [
    "summation symbol",
    "product notation latex",
    "sigma notation",
    "pi notation",
    "latex sum",
    "latex prod",
    "latex summation",
    "latex product",
    "sum limits latex",
    "prod limits latex",
    "bigcup bigcap latex",
    "bigoplus latex",
    "bigotimes latex",
    "indexed sum latex",
    "double sum latex",
    "summation notation",
    "product notation symbol",
    "math symbols",
    "latex symbols",
    "symbol copy paste",
  ],
  openGraph: {
    title: "LaTeX Summation & Product Notation - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for summation, product, and indexed notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'summation', defaultMetadata);
}

export default function SummationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

