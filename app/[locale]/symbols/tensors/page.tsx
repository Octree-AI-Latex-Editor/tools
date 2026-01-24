import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { tensorSymbols } from "@/lib/symbols";

export default function TensorsSymbolsPage() {
    return <SymbolCategoryPage symbols={tensorSymbols} categoryKey="tensors" />;
}
