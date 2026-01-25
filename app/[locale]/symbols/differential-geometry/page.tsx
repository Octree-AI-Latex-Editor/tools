import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { diffGeoSymbols } from "@/lib/symbols";

export default function DifferentialGeometrySymbolsPage() {
    return <SymbolCategoryPage symbols={diffGeoSymbols} categoryKey="differentialGeometry" />;
}
