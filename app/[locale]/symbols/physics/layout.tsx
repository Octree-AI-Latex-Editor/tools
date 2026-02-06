import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Physics Symbols - Quantum Mechanics, Vectors, Tensors | Free Symbol Reference",
  description: "Complete list of LaTeX physics symbols. Copy-paste ℏ, ⟨ψ|, |ψ⟩, ∇, ∇², □, Lagrangian, Hamiltonian with LaTeX commands.",
  keywords: [
    // Physics keywords
    "physics symbols",
    "quantum mechanics symbols",
    "vector field symbols",
    "physical constants symbols",
    "planck constant symbol",
    "h bar symbol",
    "electric field symbol",
    "magnetic field symbol",
    "wave function symbol",
    // LaTeX specific
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
    "scientific symbols",
    "research symbols",
  ],
  openGraph: {
    title: "LaTeX Physics Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for quantum mechanics, vectors, tensors, and physics notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'physics', defaultMetadata);
}

export default function PhysicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
