import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Linear Algebra Symbols - Vectors, Matrices, Norms | Free Symbol Reference",
  description: "Complete list of LaTeX linear algebra symbols. Copy-paste vectors, matrices, transpose, inverse, determinant, norm, inner product with LaTeX commands.",
  keywords: [
    // Linear algebra keywords
    "matrix symbols",
    "vector notation symbols",
    "dot product symbol",
    "cross product symbol",
    "tensor symbol",
    "transpose symbol",
    "determinant symbol",
    "norm symbol",
    "eigenvalue symbol",
    "identity matrix symbol",
    // LaTeX specific
    "latex linear algebra",
    "latex vector",
    "latex matrix",
    "latex transpose",
    "latex inverse",
    "latex determinant",
    "latex norm",
    "latex inner product",
    "vec latex",
    "mathbf latex",
    "bmatrix pmatrix latex",
    "latex tensor product",
    "latex direct sum",
    "otimes oplus latex",
    "langle rangle latex",
    "lVert rVert latex",
    "latex eigenvalue",
    "latex identity matrix",
    "math symbols",
    "academic symbols",
  ],
  openGraph: {
    title: "LaTeX Linear Algebra Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for vectors, matrices, norms, and linear algebra notation.",
  },
};

export default function LinearAlgebraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
