import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Trigonometry Symbols - Sin, Cos, Tan, Inverse Trig | Free Symbol Reference",
  description: "Complete list of LaTeX trigonometry symbols. Copy-paste sin, cos, tan, arcsin, arccos, arctan, hyperbolic functions with LaTeX commands.",
  keywords: [
    "trigonometry symbols",
    "trig notation latex",
    "latex sin cos tan",
    "latex arcsin arccos",
    "inverse trig latex",
    "latex sinh cosh tanh",
    "hyperbolic functions latex",
    "latex secant cosecant",
    "latex cotangent",
    "radians degrees latex",
    "angle theta phi latex",
    "latex trig functions",
    "sin inverse latex",
    "cos inverse latex",
    "tan inverse latex",
    "trigonometric identities latex",
    "math symbols",
    "calculus symbols",
  ],
  openGraph: {
    title: "LaTeX Trigonometry Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for sine, cosine, tangent, and trigonometric functions.",
  },
};

export default function TrigonometryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

