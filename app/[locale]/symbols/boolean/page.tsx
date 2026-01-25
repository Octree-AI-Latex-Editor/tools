import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { booleanSymbols } from "@/lib/symbols";

export default function BooleanSymbolsPage() {
    return <SymbolCategoryPage symbols={booleanSymbols} categoryKey="boolean" />;
}
