import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Greek Letters - Alpha, Beta, Gamma, Delta & More | Free Symbol Reference",
  description: "Complete list of LaTeX Greek letter symbols. Copy-paste α, β, γ, δ, θ, π, σ, ω and all Greek letters (lowercase and uppercase) with LaTeX commands.",
  keywords: [
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
  ],
  openGraph: {
    title: "LaTeX Greek Letters - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for all Greek letters - alpha, beta, gamma, delta, and more.",
  },
};

export default function GreekLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

