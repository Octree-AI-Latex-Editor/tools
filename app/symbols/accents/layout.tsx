import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Accents & Modifiers - Hat, Tilde, Vector, Bar Symbols | Free Symbol Reference",
  description: "Complete list of LaTeX accent and modifier symbols. Copy-paste hat ˆ, tilde ˜, dot ˙, bar ¯, vector arrows →, overbrace, underbrace with LaTeX code for mathematical notation.",
  keywords: [
    // Accents & modifiers keywords
    "math accents",
    "latex accents",
    "vector arrow symbol",
    "hat symbol math",
    "tilde symbol math",
    "dot notation symbol",
    "bar notation symbol",
    "overline symbol",
    "underline symbol",
    // LaTeX specific
    "latex modifiers",
    "latex hat symbol",
    "latex tilde",
    "latex dot accent",
    "latex bar symbol",
    "latex vector arrow",
    "vec latex",
    "hat latex",
    "tilde latex",
    "overline latex",
    "underline latex",
    "overbrace latex",
    "underbrace latex",
    "latex accent marks",
    "vector notation latex",
    "widehat latex",
    "widetilde latex",
    "overrightarrow latex",
    "ddot latex",
    "boxed latex",
    "cancel latex",
    "math symbols",
    "symbol copy paste",
  ],
  openGraph: {
    title: "LaTeX Accents & Modifiers - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for hats, tildes, dots, bars, vectors, and text decorations.",
  },
};

export default function AccentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
