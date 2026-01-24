import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { specialFunctionSymbols } from "@/lib/symbols";

export default function SpecialFunctionsSymbolsPage() {
    return <SymbolCategoryPage symbols={specialFunctionSymbols} categoryKey="specialFunctions" />;
}
