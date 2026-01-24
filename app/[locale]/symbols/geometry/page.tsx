import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { geometrySymbols } from "@/lib/symbols";

export default function GeometrySymbolsPage() {
    return <SymbolCategoryPage symbols={geometrySymbols} categoryKey="geometry" />;
}
