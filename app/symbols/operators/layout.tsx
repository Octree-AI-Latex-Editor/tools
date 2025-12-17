import { Metadata } from "next";

export const metadata: Metadata = {
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

export default function OperatorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

