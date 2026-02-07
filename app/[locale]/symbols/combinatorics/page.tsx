import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { combinatoricsSymbols } from "@/lib/symbols";

export default function CombinatoricsSymbolsPage() {
    return <SymbolCategoryPage symbols={combinatoricsSymbols} categoryKey="combinatorics" />;
}
