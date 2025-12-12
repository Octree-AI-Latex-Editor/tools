"use client";

import { SymbolCard } from "@/components/SymbolCard";
import { greekSymbols } from "@/lib/symbols";

export default function GreekSymbolsPage() {
    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                    Greek Letters
                </h2>
                <span className="text-sm text-gray-500">
                    {greekSymbols.length} symbols
                </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {greekSymbols.map((symbol) => (
                    <SymbolCard key={symbol.latex} latex={symbol.latex} name={symbol.name} />
                ))}
            </div>
        </>
    );
}
