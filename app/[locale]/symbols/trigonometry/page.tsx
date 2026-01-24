import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { trigSymbols } from "@/lib/symbols";

export default function TrigonometrySymbolsPage() {
    return <SymbolCategoryPage symbols={trigSymbols} categoryKey="trigonometry" />;
}
