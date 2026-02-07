import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Inequalities & Order Theory Symbols | Free Symbol Reference",
  description: "Complete list of LaTeX inequality and order symbols. Copy-paste ≺, ≻, ⪯, ⪰, ≤, ≥, ≪, ≫, min, max, inf, sup with LaTeX commands.",
  keywords: [
    "order symbols",
    "inequality notation math",
    "latex inequality",
    "latex order",
    "precedes symbol",
    "succeeds symbol",
    "much less than",
    "much greater than",
    "prec succ latex",
    "preceq succeq latex",
    "ll gg latex",
    "min max latex",
    "inf sup latex",
    "supremum infimum",
    "partial order symbols",
    "order theory latex",
    "math symbols",
    "comparison symbols",
  ],
  openGraph: {
    title: "LaTeX Inequalities & Order Theory Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for inequalities, ordering, and bounds notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'order', defaultMetadata);
}

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
