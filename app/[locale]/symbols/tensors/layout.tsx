import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Tensor Notation - Einstein Summation, Indices | Free Symbol Reference",
  description: "Complete list of LaTeX tensor notation symbols. Copy-paste Einstein summation, covariant/contravariant indices, Kronecker delta, Levi-Civita with LaTeX commands.",
  keywords: [
    "tensor notation symbols",
    "index notation",
    "einstein summation latex",
    "covariant contravariant latex",
    "kronecker delta latex",
    "levi civita latex",
    "tensor product latex",
    "tensor contraction latex",
    "metric raising lowering latex",
    "symmetrization antisymmetrization latex",
    "tensor rank latex",
    "basis vector dual basis latex",
    "component transformation latex",
    "physics tensor latex",
    "general relativity symbols",
    "machine learning tensors",
    "math symbols",
  ],
  openGraph: {
    title: "LaTeX Tensor Notation - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for Einstein summation, indices, and tensor operations.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'tensors', defaultMetadata);
}

export default function TensorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

