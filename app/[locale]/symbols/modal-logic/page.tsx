import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { modalSymbols } from "@/lib/symbols";

export default function ModalLogicSymbolsPage() {
    return <SymbolCategoryPage symbols={modalSymbols} categoryKey="modalLogic" />;
}
