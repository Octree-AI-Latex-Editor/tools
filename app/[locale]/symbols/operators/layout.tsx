import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Operators - Binary, Advanced Math Operators | Free Symbol Reference",
  description: "Complete list of LaTeX operator symbols. Copy-paste ⊕, ⊗, ⊙, ⊖, ⋆, ∗, ∘, ∇, △, ▽ with LaTeX commands.",
  keywords: [
    "math operators symbols",
    "binary operators latex",
    "latex operators",
    "direct sum symbol",
    "tensor product symbol",
    "composition symbol",
    "oplus latex",
    "otimes latex",
    "odot latex",
    "star latex",
    "circ latex",
    "nabla latex",
    "triangle latex",
    "wedge vee latex",
    "cup cap latex",
    "dagger latex",
    "latex binary operators",
    "advanced math operators",
    "math symbols",
    "symbol copy paste",
  ],
  openGraph: {
    title: "LaTeX Operators - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for binary and advanced mathematical operators.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'operators', defaultMetadata);
}

export default function OperatorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

