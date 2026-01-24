import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { orderSymbols } from "@/lib/symbols";

export default function OrderSymbolsPage() {
    return <SymbolCategoryPage symbols={orderSymbols} categoryKey="order" />;
}
