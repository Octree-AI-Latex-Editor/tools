import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Functions & Mapping Symbols - Arrows, Composition | Free Symbol Reference",
  description: "Complete list of LaTeX function and mapping symbols. Copy-paste f(x), →, ↦, ∘, injective, surjective notation with LaTeX commands.",
  keywords: [
    "function notation symbols",
    "mapping symbols latex",
    "latex function",
    "latex mapsto",
    "latex arrow",
    "composition symbol",
    "injective symbol",
    "surjective symbol",
    "bijective symbol",
    "latex to arrow",
    "mapsto latex",
    "circ latex",
    "function definition latex",
    "domain codomain latex",
    "image kernel latex",
    "piecewise function latex",
    "function inverse latex",
    "math symbols",
    "latex symbols",
  ],
  openGraph: {
    title: "LaTeX Functions & Mapping Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for function notation, mappings, and composition.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'functions', defaultMetadata);
}

export default function FunctionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

