import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { numberTheorySymbols } from "@/lib/symbols";

export default function NumberTheorySymbolsPage() {
    return <SymbolCategoryPage symbols={numberTheorySymbols} categoryKey="numberTheory" />;
}
