import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Latin Letters & Accents - Special Characters | Free Symbol Reference",
  description: "Complete list of LaTeX Latin letters and accented characters. Copy-paste ö, é, ñ, ç, å, ø, æ, œ and special Latin characters with LaTeX commands.",
  keywords: [
    // Core keywords
    "latex symbols",
    "symbol copy paste",
    "unicode math symbols",
    "academic symbols",
    // Latin letter keywords
    "latex accented letters",
    "latex special characters",
    "latex umlaut",
    "latex acute accent",
    "latex grave accent",
    "latex tilde accent",
    "latex cedilla",
    "latex scandinavian letters",
    "latex french accents",
    "latex german umlaut",
    "ddot latex",
    "acute latex",
    "grave latex",
    "latex ae ligature",
    "latex oe ligature",
    "latex o slash",
    "imath jmath latex",
    "dotless i latex",
    "how to type math symbols",
    "how to write symbols in latex",
  ],
  openGraph: {
    title: "LaTeX Latin Letters & Accents - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for accented Latin letters and special characters.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'latin', defaultMetadata);
}

export default function LatinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
