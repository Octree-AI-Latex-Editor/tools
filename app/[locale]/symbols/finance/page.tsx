import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { financeSymbols } from "@/lib/symbols";

export default function FinanceSymbolsPage() {
    return <SymbolCategoryPage symbols={financeSymbols} categoryKey="finance" />;
}
