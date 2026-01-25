import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { operatorSymbols } from "@/lib/symbols";

export default function OperatorsSymbolsPage() {
    return <SymbolCategoryPage symbols={operatorSymbols} categoryKey="operators" />;
}
