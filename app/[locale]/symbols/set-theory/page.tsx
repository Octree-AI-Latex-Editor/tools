import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { setTheorySymbols } from "@/lib/symbols";

export default function SetTheorySymbolsPage() {
    return <SymbolCategoryPage symbols={setTheorySymbols} categoryKey="setTheory" />;
}
