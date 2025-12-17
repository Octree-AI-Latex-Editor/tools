import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Probability & Statistics Symbols - Expectation, Variance | Free Symbol Reference",
  description: "Complete list of LaTeX probability and statistics symbols. Copy-paste P(A), E[X], Var, σ, μ, ~, ⊥, binomial coefficients with LaTeX commands.",
  keywords: [
    "latex probability",
    "latex statistics",
    "latex expectation",
    "latex variance",
    "latex standard deviation",
    "latex mean",
    "latex distribution",
    "mathbb P E latex",
    "latex sigma mu",
    "latex sample mean",
    "bar x latex",
    "sim latex",
    "latex normal distribution",
    "latex independent",
    "perp latex",
    "latex conditional probability",
    "binom latex",
    "latex binomial coefficient",
  ],
  openGraph: {
    title: "LaTeX Probability & Statistics Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for probability, expectation, variance, and statistical notation.",
  },
};

export default function ProbabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

