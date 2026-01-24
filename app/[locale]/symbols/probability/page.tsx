import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { probabilitySymbols } from "@/lib/symbols";

export default function ProbabilitySymbolsPage() {
    return <SymbolCategoryPage symbols={probabilitySymbols} categoryKey="probability" />;
}
