import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { logicSymbols } from "@/lib/symbols";

export default function LogicSymbolsPage() {
    return <SymbolCategoryPage symbols={logicSymbols} categoryKey="logic" />;
}
