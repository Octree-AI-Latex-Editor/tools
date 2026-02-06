import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Differential Geometry Symbols - Manifolds, Curvature | Free Symbol Reference",
  description: "Complete list of LaTeX differential geometry symbols. Copy-paste manifold, tangent space, Christoffel, Riemann curvature, metric tensor with LaTeX commands.",
  keywords: [
    "differential geometry symbols",
    "manifold notation",
    "latex manifold",
    "tangent space latex",
    "cotangent bundle latex",
    "covariant derivative latex",
    "christoffel symbols latex",
    "riemann curvature latex",
    "ricci tensor latex",
    "metric tensor latex",
    "exterior derivative latex",
    "wedge product latex",
    "lie derivative latex",
    "lie bracket latex",
    "hodge star latex",
    "geodesic latex",
    "parallel transport latex",
    "connection form latex",
    "curvature form latex",
    "advanced math symbols",
    "physics symbols",
  ],
  openGraph: {
    title: "LaTeX Differential Geometry Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for manifolds, curvature, connections, and differential geometry notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'differential-geometry', defaultMetadata);
}

export default function DifferentialGeometryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
