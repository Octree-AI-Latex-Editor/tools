import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Optimization Symbols - Argmax, Argmin, Constraints | Free Symbol Reference",
  description: "Complete list of LaTeX optimization and operations research symbols. Copy-paste argmax, argmin, constraints, Lagrangian, KKT with LaTeX commands.",
  keywords: [
    "optimization symbols",
    "argmax argmin latex",
    "latex argmax",
    "latex argmin",
    "constraint notation latex",
    "lagrangian symbols",
    "operations research symbols",
    "minimize maximize latex",
    "subject to latex",
    "kkt conditions latex",
    "optimal value latex",
    "feasible set latex",
    "hessian latex",
    "gradient latex",
    "convex optimization latex",
    "positive definite latex",
    "machine learning symbols",
    "math symbols",
  ],
  openGraph: {
    title: "LaTeX Optimization Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for argmax, argmin, constraints, and optimization notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'optimization', defaultMetadata);
}

export default function OptimizationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
