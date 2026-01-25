import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { csSymbols } from "@/lib/symbols";

export default function ComputerScienceSymbolsPage() {
    return <SymbolCategoryPage symbols={csSymbols} categoryKey="computerScience" />;
}
