import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Greek Letters - Alpha, Beta, Gamma, Delta & More | Free Symbol Reference",
  description: "Complete list of LaTeX Greek letter symbols. Copy-paste α, β, γ, δ, θ, π, σ, ω and all Greek letters (lowercase and uppercase) with LaTeX commands.",
  keywords: [
    // Core keywords
    "latex symbols",
    "math symbols",
    "symbol copy paste",
    "unicode math symbols",
    "copy math symbols",
    // Greek letter keywords
    "latex greek letters",
    "latex alpha",
    "latex beta",
    "latex gamma",
    "latex delta",
    "latex theta",
    "latex pi",
    "latex sigma",
    "latex omega",
    "latex epsilon",
    "latex lambda",
    "latex phi",
    "latex psi",
    "greek symbols latex",
    "latex uppercase greek",
    "latex lowercase greek",
    "varepsilon latex",
    "varphi latex",
    "greek alphabet latex",
    "greek alphabet",
    "greek letter alphabet",
    "mathematical symbols list",
    "academic symbols",
    "scientific symbols",
  ],
  openGraph: {
    title: "LaTeX Greek Letters - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for all Greek letters - alpha, beta, gamma, delta, and more.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'greek', defaultMetadata);
}

export default function GreekLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
