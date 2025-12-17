import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Physics Symbols - Quantum Mechanics, Vectors, Tensors | Free Symbol Reference",
  description: "Complete list of LaTeX physics symbols. Copy-paste ℏ, ⟨ψ|, |ψ⟩, ∇, ∇², □, Lagrangian, Hamiltonian with LaTeX commands.",
  keywords: [
    "latex physics symbols",
    "latex quantum mechanics",
    "latex bra ket",
    "latex planck constant",
    "latex nabla",
    "latex laplacian",
    "latex tensor",
    "hbar latex",
    "langle rangle latex",
    "braket latex",
    "latex wave function",
    "latex lagrangian",
    "latex hamiltonian",
    "latex christoffel symbol",
    "latex vector field",
    "latex divergence curl",
    "nabla cdot times latex",
    "latex d'alembertian",
  ],
  openGraph: {
    title: "LaTeX Physics Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for quantum mechanics, vectors, tensors, and physics notation.",
  },
};

export default function PhysicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

