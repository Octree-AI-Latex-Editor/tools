import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { functionSymbols } from "@/lib/symbols";

export default function FunctionsSymbolsPage() {
    return <SymbolCategoryPage symbols={functionSymbols} categoryKey="functions" />;
}
