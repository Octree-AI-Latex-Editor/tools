import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { chemistrySymbols } from "@/lib/symbols";

export default function ChemistrySymbolsPage() {
    return <SymbolCategoryPage symbols={chemistrySymbols} categoryKey="chemistry" />;
}
