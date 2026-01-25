import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { greekSymbols } from "@/lib/symbols";

export default function GreekSymbolsPage() {
    return <SymbolCategoryPage symbols={greekSymbols} categoryKey="greek" />;
}
