import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { topologySymbols } from "@/lib/symbols";

export default function TopologySymbolsPage() {
    return <SymbolCategoryPage symbols={topologySymbols} categoryKey="topology" />;
}
