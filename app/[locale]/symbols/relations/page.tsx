import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { relationSymbols } from "@/lib/symbols";

export default function RelationsSymbolsPage() {
    return <SymbolCategoryPage symbols={relationSymbols} categoryKey="relations" />;
}
