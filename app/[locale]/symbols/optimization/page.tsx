import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { optimizationSymbols } from "@/lib/symbols";

export default function OptimizationSymbolsPage() {
    return <SymbolCategoryPage symbols={optimizationSymbols} categoryKey="optimization" />;
}
