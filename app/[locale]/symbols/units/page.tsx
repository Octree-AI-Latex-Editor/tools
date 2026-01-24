import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { unitSymbols } from "@/lib/symbols";

export default function UnitsSymbolsPage() {
    return <SymbolCategoryPage symbols={unitSymbols} categoryKey="units" />;
}
