import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { linearAlgebraSymbols } from "@/lib/symbols";

export default function LinearAlgebraSymbolsPage() {
    return <SymbolCategoryPage symbols={linearAlgebraSymbols} categoryKey="linearAlgebra" />;
}
