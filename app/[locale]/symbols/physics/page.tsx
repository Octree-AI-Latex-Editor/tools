import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { physicsSymbols } from "@/lib/symbols";

export default function PhysicsSymbolsPage() {
    return <SymbolCategoryPage symbols={physicsSymbols} categoryKey="physics" />;
}
