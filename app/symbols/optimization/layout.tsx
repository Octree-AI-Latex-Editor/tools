import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Optimization Symbols - Argmax, Argmin, Constraints | Free Symbol Reference",
  description: "Complete list of LaTeX optimization and operations research symbols. Copy-paste argmax, argmin, constraints, Lagrangian, KKT with LaTeX commands.",
  keywords: [
    "optimization symbols",
    "argmax argmin latex",
    "latex argmax",
    "latex argmin",
    "constraint notation latex",
    "lagrangian symbols",
    "operations research symbols",
    "minimize maximize latex",
    "subject to latex",
    "kkt conditions latex",
    "optimal value latex",
    "feasible set latex",
    "hessian latex",
    "gradient latex",
    "convex optimization latex",
    "positive definite latex",
    "machine learning symbols",
    "math symbols",
  ],
  openGraph: {
    title: "LaTeX Optimization Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for argmax, argmin, constraints, and optimization notation.",
  },
};

export default function OptimizationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

