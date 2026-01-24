import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { mathSymbols } from "@/lib/symbols";

export default function MathSymbolsPage() {
    return <SymbolCategoryPage symbols={mathSymbols} categoryKey="math" />;
}
