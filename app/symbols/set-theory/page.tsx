"use client";

import { Suspense } from "react";
import { SymbolCard } from "@/components/SymbolCard";
import { setTheorySymbols } from "@/lib/symbols";
import { useSearchParams } from "next/navigation";

function SetTheoryContent() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("q") || "";

    const filteredSymbols = setTheorySymbols.filter((symbol) =>
        symbol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        symbol.latex.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                    Set Theory Symbols
                </h2>
                <span className="text-sm text-gray-500">
                    {filteredSymbols.length} symbol{filteredSymbols.length !== 1 ? 's' : ''}
                </span>
            </div>

            {filteredSymbols.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredSymbols.map((symbol) => (
                        <SymbolCard key={symbol.latex} latex={symbol.latex} name={symbol.name} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-gray-500">
                        No symbols found matching &quot;{searchQuery}&quot;
                    </p>
                </div>
            )}
        </>
    );
}

export default function SetTheoryPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SetTheoryContent />
        </Suspense>
    );
}

