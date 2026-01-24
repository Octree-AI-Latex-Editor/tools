import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { arrowSymbols } from "@/lib/symbols";

export default function ArrowSymbolsPage() {
    return <SymbolCategoryPage symbols={arrowSymbols} categoryKey="arrows" />;
}
