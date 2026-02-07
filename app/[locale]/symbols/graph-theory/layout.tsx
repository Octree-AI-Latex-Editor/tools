import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Graph Theory Symbols - Vertices, Edges, Adjacency | Free Symbol Reference",
  description: "Complete list of LaTeX graph theory symbols. Copy-paste vertex, edge, adjacency, path, cycle, chromatic number with LaTeX commands.",
  keywords: [
    "graph theory symbols",
    "adjacency notation",
    "graph symbols latex",
    "vertex edge symbols",
    "latex graph notation",
    "path cycle latex",
    "degree notation graph",
    "complete graph latex",
    "bipartite graph latex",
    "adjacency matrix latex",
    "chromatic number latex",
    "clique notation",
    "independent set latex",
    "tree forest latex",
    "planar graph latex",
    "matching graph latex",
    "graph coloring latex",
    "computer science symbols",
    "discrete math symbols",
    "math symbols",
  ],
  openGraph: {
    title: "LaTeX Graph Theory Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for vertices, edges, paths, cycles, and graph notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'graph-theory', defaultMetadata);
}

export default function GraphTheoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

