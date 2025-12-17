import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Chemistry Symbols - Reactions, Bonds, Isotopes | Free Symbol Reference",
  description: "Complete list of LaTeX chemistry symbols. Copy-paste ⇌, →, ↑, ↓, isotope notation, bonds, state symbols with LaTeX commands.",
  keywords: [
    // Chemistry keywords
    "chemistry symbols",
    "reaction arrow symbols",
    "equilibrium symbol",
    "state symbols chemistry",
    "isotope notation symbols",
    "bond symbols",
    "chemical equation symbols",
    "stoichiometry symbols",
    // LaTeX specific
    "latex chemistry symbols",
    "latex reaction arrows",
    "latex equilibrium arrow",
    "latex chemical bonds",
    "latex isotope notation",
    "latex subscript superscript",
    "rightleftharpoons latex",
    "latex yields arrow",
    "latex precipitate",
    "latex gas symbol",
    "latex degree celsius",
    "latex single bond",
    "latex double bond",
    "latex triple bond",
    "latex partial charge",
    "latex electron",
    "latex aqueous solid liquid gas",
    "chemistry notation latex",
    "scientific symbols",
  ],
  openGraph: {
    title: "LaTeX Chemistry Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for reaction arrows, bonds, isotopes, and chemistry notation.",
  },
};

export default function ChemistryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
