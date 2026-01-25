import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { calculusSymbols } from "@/lib/symbols";

export default function CalculusSymbolsPage() {
    return <SymbolCategoryPage symbols={calculusSymbols} categoryKey="calculus" />;
}
