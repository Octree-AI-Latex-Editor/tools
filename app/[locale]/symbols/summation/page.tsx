import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { summationSymbols } from "@/lib/symbols";

export default function SummationSymbolsPage() {
    return <SymbolCategoryPage symbols={summationSymbols} categoryKey="summation" />;
}
