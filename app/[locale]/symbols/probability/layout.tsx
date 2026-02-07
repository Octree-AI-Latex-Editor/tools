import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Probability & Statistics Symbols - Expectation, Variance | Free Symbol Reference",
  description: "Complete list of LaTeX probability and statistics symbols. Copy-paste P(A), E[X], Var, σ, μ, ~, ⊥, binomial coefficients with LaTeX commands.",
  keywords: [
    // Probability & statistics keywords
    "probability symbols",
    "statistics symbols",
    "expectation symbol",
    "variance symbol",
    "standard deviation symbol",
    "conditional probability symbol",
    "distribution symbols",
    "random variable notation",
    "covariance symbol",
    "correlation symbol",
    // LaTeX specific
    "latex probability",
    "latex statistics",
    "latex expectation",
    "latex variance",
    "latex standard deviation",
    "latex mean",
    "latex distribution",
    "mathbb P E latex",
    "latex sigma mu",
    "latex sample mean",
    "bar x latex",
    "sim latex",
    "latex normal distribution",
    "latex independent",
    "perp latex",
    "latex conditional probability",
    "binom latex",
    "latex binomial coefficient",
    "math symbols",
    "scientific symbols",
  ],
  openGraph: {
    title: "LaTeX Probability & Statistics Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for probability, expectation, variance, and statistical notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'probability', defaultMetadata);
}

export default function ProbabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
