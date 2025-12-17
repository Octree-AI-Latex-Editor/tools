import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Complex Numbers - Real, Imaginary, Modulus | Free Symbol Reference",
  description: "Complete list of LaTeX complex number symbols. Copy-paste ℂ, i, j, Re, Im, conjugate, modulus, argument with LaTeX commands.",
  keywords: [
    "complex number symbols",
    "imaginary unit symbol",
    "latex complex numbers",
    "real part imaginary part latex",
    "latex re im",
    "complex conjugate latex",
    "modulus latex",
    "argument latex",
    "polar form latex",
    "euler formula latex",
    "complex exponential latex",
    "complex logarithm latex",
    "upper half plane latex",
    "mathbb c latex",
    "complex analysis symbols",
    "i j imaginary latex",
    "z bar latex",
    "math symbols",
  ],
  openGraph: {
    title: "LaTeX Complex Numbers - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for complex numbers, conjugates, modulus, and polar form.",
  },
};

export default function ComplexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

