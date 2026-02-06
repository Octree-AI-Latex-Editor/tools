import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Units & Measurements - Degree, Angstrom, SI Units | Free Symbol Reference",
  description: "Complete list of LaTeX unit and measurement symbols. Copy-paste °, ′, ″, Å, μ, Ω, ℏ, SI units with LaTeX commands.",
  keywords: [
    "measurement symbols",
    "units symbols latex",
    "latex degree symbol",
    "latex angstrom",
    "latex micro",
    "latex ohm",
    "latex hbar",
    "si units latex",
    "celsius fahrenheit latex",
    "latex meter kilogram",
    "latex volt watt",
    "latex joule newton",
    "prime double prime latex",
    "scientific units latex",
    "physics units latex",
    "engineering symbols",
    "math symbols",
    "symbol copy paste",
  ],
  openGraph: {
    title: "LaTeX Units & Measurements - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for degrees, SI units, and measurement symbols.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'units', defaultMetadata);
}

export default function UnitsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
