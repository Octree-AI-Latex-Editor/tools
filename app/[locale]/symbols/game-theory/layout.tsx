import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Game Theory Symbols - Nash Equilibrium, Strategies | Free Symbol Reference",
  description: "Complete list of LaTeX game theory symbols. Copy-paste Nash equilibrium, payoff functions, strategies, Shapley value with LaTeX commands.",
  keywords: [
    "game theory symbols",
    "nash equilibrium notation",
    "latex game theory",
    "strategy notation latex",
    "payoff function latex",
    "best response latex",
    "mixed strategy latex",
    "dominant strategy latex",
    "pareto optimal latex",
    "minimax latex",
    "zero sum game latex",
    "shapley value latex",
    "subgame perfect latex",
    "cooperative game latex",
    "economics symbols",
    "decision theory latex",
    "math symbols",
  ],
  openGraph: {
    title: "LaTeX Game Theory Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for Nash equilibrium, strategies, and game theory notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'game-theory', defaultMetadata);
}

export default function GameTheoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
