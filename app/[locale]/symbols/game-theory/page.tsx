import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { gameTheorySymbols } from "@/lib/symbols";

export default function GameTheorySymbolsPage() {
    return <SymbolCategoryPage symbols={gameTheorySymbols} categoryKey="gameTheory" />;
}
