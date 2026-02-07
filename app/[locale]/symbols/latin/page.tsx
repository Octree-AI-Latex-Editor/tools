import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { latinSymbols } from "@/lib/symbols";

export default function LatinSymbolsPage() {
    return <SymbolCategoryPage symbols={latinSymbols} categoryKey="latin" />;
}
