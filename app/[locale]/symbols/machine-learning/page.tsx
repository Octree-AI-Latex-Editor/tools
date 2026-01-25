import SymbolCategoryPage from "@/components/SymbolCategoryPage";
import { mlSymbols } from "@/lib/symbols";

export default function MachineLearningSymbolsPage() {
    return <SymbolCategoryPage symbols={mlSymbols} categoryKey="machineLearning" />;
}
