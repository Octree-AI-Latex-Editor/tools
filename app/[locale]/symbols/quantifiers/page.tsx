import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { quantifierSymbols } from "@/lib/symbols";

export default function QuantifiersSymbolsPage() {
    return <SymbolCategoryPage symbols={quantifierSymbols} categoryKey="quantifiers" />;
}
