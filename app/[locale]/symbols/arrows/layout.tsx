import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Arrow Symbols - Left, Right, Double Arrows & More | Free Symbol Reference",
  description: "Complete list of LaTeX arrow symbols. Copy-paste →, ←, ↔, ⇒, ⇐, ⇔, ↑, ↓, ↗, ↘ and all directional arrows with LaTeX commands.",
  keywords: [
    // Core keywords
    "latex symbols",
    "math symbols",
    "symbol copy paste",
    "unicode math symbols",
    // Arrow keywords
    "latex arrows",
    "latex arrow symbols",
    "latex right arrow",
    "latex left arrow",
    "latex double arrow",
    "latex implies arrow",
    "latex mapsto",
    "rightarrow latex",
    "leftarrow latex",
    "leftrightarrow latex",
    "Rightarrow latex",
    "Leftrightarrow latex",
    "latex up arrow",
    "latex down arrow",
    "latex long arrow",
    "latex harpoon",
    "latex hook arrow",
    "directional arrows latex",
    "inference symbols",
    "logical equivalence symbol",
  ],
  openGraph: {
    title: "LaTeX Arrow Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for all arrow symbols - directional, double, and special arrows.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'arrows', defaultMetadata);
}

export default function ArrowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
