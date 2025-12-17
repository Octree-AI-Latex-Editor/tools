"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
    Sigma,
    Calculator,
    ArrowRight,
    MoveRight,
    Languages,
    Circle,
    BrainCircuit,
    Grid3X3,
    TrendingUp,
    Percent,
    Binary,
    Hash,
    Atom,
    FlaskConical,
    DollarSign
} from "lucide-react";
import { SymbolCard } from "@/components/SymbolCard";
import {
    mathSymbols,
    greekSymbols,
    arrowSymbols,
    latinSymbols,
    setTheorySymbols,
    logicSymbols,
    linearAlgebraSymbols,
    calculusSymbols,
    probabilitySymbols,
    csSymbols,
    numberTheorySymbols,
    physicsSymbols,
    chemistrySymbols,
    financeSymbols,
} from "@/lib/symbols";

const categories = [
    {
        href: "/symbols/math",
        icon: Calculator,
        title: "Math Symbols",
        description: "Common mathematical operators, relations, and arrows.",
    },
    {
        href: "/symbols/greek",
        icon: Sigma,
        title: "Greek Symbols",
        description: "Complete list of Greek letters and their LaTeX commands.",
    },
    {
        href: "/symbols/arrows",
        icon: MoveRight,
        title: "Arrow Symbols",
        description: "Directional arrows, double arrows, and harpoons for LaTeX documents.",
    },
    {
        href: "/symbols/latin",
        icon: Languages,
        title: "Latin Letters",
        description: "Accented characters and special Latin letters for various languages.",
    },
    {
        href: "/symbols/set-theory",
        icon: Circle,
        title: "Set Theory",
        description: "Sets, subsets, unions, intersections, and number sets.",
    },
    {
        href: "/symbols/logic",
        icon: BrainCircuit,
        title: "Logic & Proofs",
        description: "Quantifiers, logical connectives, and proof notation.",
    },
    {
        href: "/symbols/linear-algebra",
        icon: Grid3X3,
        title: "Linear Algebra",
        description: "Vectors, matrices, transposes, and inner products.",
    },
    {
        href: "/symbols/calculus",
        icon: TrendingUp,
        title: "Calculus & Analysis",
        description: "Derivatives, integrals, limits, and differential operators.",
    },
    {
        href: "/symbols/probability",
        icon: Percent,
        title: "Probability & Statistics",
        description: "Probability, expectation, variance, and distributions.",
    },
    {
        href: "/symbols/computer-science",
        icon: Binary,
        title: "Computer Science",
        description: "Big-O notation, logical operators, and algorithm symbols.",
    },
    {
        href: "/symbols/number-theory",
        icon: Hash,
        title: "Number Theory",
        description: "Divisibility, modular arithmetic, and number-theoretic functions.",
    },
    {
        href: "/symbols/physics",
        icon: Atom,
        title: "Physics",
        description: "Quantum mechanics, vector fields, and physical constants.",
    },
    {
        href: "/symbols/chemistry",
        icon: FlaskConical,
        title: "Chemistry",
        description: "Reaction arrows, isotopes, bonds, and state symbols.",
    },
    {
        href: "/symbols/finance",
        icon: DollarSign,
        title: "Currency & Finance",
        description: "Currency symbols, financial formulas, and notation.",
    },
];

// Combine all symbols for global search
const allSymbols = [
    ...mathSymbols,
    ...greekSymbols,
    ...arrowSymbols,
    ...latinSymbols,
    ...setTheorySymbols,
    ...logicSymbols,
    ...linearAlgebraSymbols,
    ...calculusSymbols,
    ...probabilitySymbols,
    ...csSymbols,
    ...numberTheorySymbols,
    ...physicsSymbols,
    ...chemistrySymbols,
    ...financeSymbols,
];

// Remove duplicates based on latex command
const uniqueSymbols = allSymbols.filter(
    (symbol, index, self) =>
        index === self.findIndex((s) => s.latex === symbol.latex)
);

function SymbolsContent() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("q") || "";

    // If there's a search query, show filtered symbols
    if (searchQuery) {
        const filteredSymbols = uniqueSymbols.filter((symbol) =>
            symbol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            symbol.latex.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
            <>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Search Results
                    </h2>
                    <span className="text-sm text-gray-500">
                        {filteredSymbols.length} symbol{filteredSymbols.length !== 1 ? 's' : ''} found
                    </span>
                </div>

                {filteredSymbols.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-12">
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

    // Otherwise show category cards
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pb-12">
            {categories.map((category) => {
                const Icon = category.icon;
                return (
                    <Link
                        key={category.href}
                        href={category.href}
                        className="group flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 h-full"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <Icon className="size-6 text-gray-900" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-2">
                            {category.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
                            {category.description}
                        </p>
                        <span className="inline-flex items-center text-blue-600 text-sm font-medium transition-all w-fit">
                            View Symbols
                            <span className="w-0 overflow-hidden transition-all duration-200 group-hover:w-6 group-hover:ml-1">
                                <ArrowRight className="size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                            </span>
                        </span>
                    </Link>
                );
            })}
        </div>
    );
}

export default function SymbolsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SymbolsContent />
        </Suspense>
    );
}
