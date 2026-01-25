import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { bracketSymbols } from "@/lib/symbols";

export default function BracketsSymbolsPage() {
    return <SymbolCategoryPage symbols={bracketSymbols} categoryKey="brackets" />;
}
