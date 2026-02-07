import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { graphSymbols } from "@/lib/symbols";

export default function GraphTheorySymbolsPage() {
    return <SymbolCategoryPage symbols={graphSymbols} categoryKey="graphTheory" />;
}
