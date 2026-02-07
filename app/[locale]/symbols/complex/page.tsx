import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { complexSymbols } from "@/lib/symbols";

export default function ComplexSymbolsPage() {
    return <SymbolCategoryPage symbols={complexSymbols} categoryKey="complex" />;
}
