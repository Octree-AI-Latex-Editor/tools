import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Special Functions - Gamma, Zeta, Bessel | Free Symbol Reference",
  description: "Complete list of LaTeX special function symbols. Copy-paste Gamma Γ, Riemann zeta ζ, Bessel, Legendre, error function with LaTeX commands.",
  keywords: [
    "special functions symbols",
    "gamma function notation",
    "latex gamma function",
    "riemann zeta latex",
    "bessel function latex",
    "error function latex",
    "erf erfc latex",
    "legendre polynomial latex",
    "hermite polynomial latex",
    "laguerre polynomial latex",
    "chebyshev polynomial latex",
    "hypergeometric function latex",
    "digamma function latex",
    "elliptic integral latex",
    "dirac delta latex",
    "heaviside function latex",
    "beta function latex",
    "mathematical analysis symbols",
    "advanced math symbols",
    "math symbols",
  ],
  openGraph: {
    title: "LaTeX Special Functions - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for Gamma, zeta, Bessel, and special mathematical functions.",
  },
};

export default function SpecialFunctionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

