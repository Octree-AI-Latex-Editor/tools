import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { accentSymbols } from "@/lib/symbols";

export default function AccentsSymbolsPage() {
    return <SymbolCategoryPage symbols={accentSymbols} categoryKey="accents" />;
}
