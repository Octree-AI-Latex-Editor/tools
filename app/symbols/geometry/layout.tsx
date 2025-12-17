import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Geometry Symbols - Angles, Triangles, Parallel, Perpendicular | Free Symbol Reference",
  description: "Complete list of LaTeX geometry symbols. Copy-paste ∠, △, ∘, ⟂, ≅, parallel, perpendicular, congruent, similar with LaTeX commands.",
  keywords: [
    // Geometry keywords
    "geometry symbols",
    "angle symbol",
    "congruent symbol",
    "similar symbol",
    "parallel lines symbol",
    "perpendicular lines symbol",
    "triangle symbol",
    "degree symbol math",
    "arc symbol",
    "parallel symbol",
    "perpendicular symbol",
    // LaTeX specific
    "latex geometry symbols",
    "latex angle symbol",
    "latex triangle",
    "latex perpendicular",
    "latex parallel",
    "latex congruent",
    "latex similar",
    "angle latex",
    "triangle latex",
    "perp latex",
    "parallel latex",
    "cong latex",
    "sim latex",
    "latex degree symbol",
    "latex arc",
    "latex line segment",
    "latex ray",
    "geometry notation latex",
    "angle symbols latex",
    "math symbols",
  ],
  openGraph: {
    title: "LaTeX Geometry Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for angles, triangles, parallel, perpendicular, and geometry notation.",
  },
};

export default function GeometryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
