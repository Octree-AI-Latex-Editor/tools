"use client";

import Link from "next/link";
import { Sigma, Calculator, ArrowRight, MoveRight, Languages } from "lucide-react";

export default function SymbolsPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
                href="/symbols/math"
                className="group flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 h-full"
            >
                <div className="flex items-start justify-between mb-4">
                    <Calculator className="size-6 text-gray-900" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Math Symbols
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
                    Common mathematical operators, relations, and arrows.
                </p>
                <span className="inline-flex items-center text-blue-600 text-sm font-medium transition-all w-fit">
                    View Symbols
                    <span className="w-0 overflow-hidden transition-all duration-200 group-hover:w-6 group-hover:ml-1">
                        <ArrowRight className="size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </span>
                </span>
            </Link>

            <Link
                href="/symbols/greek"
                className="group flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 h-full"
            >
                <div className="flex items-start justify-between mb-4">
                    <Sigma className="size-6 text-gray-900" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Greek Symbols
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
                    Complete list of Greek letters and their LaTeX commands.
                </p>
                <span className="inline-flex items-center text-blue-600 text-sm font-medium transition-all w-fit">
                    View Symbols
                    <span className="w-0 overflow-hidden transition-all duration-200 group-hover:w-6 group-hover:ml-1">
                        <ArrowRight className="size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </span>
                </span>
            </Link>

            <Link
                href="/symbols/arrows"
                className="group flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 h-full"
            >
                <div className="flex items-start justify-between mb-4">
                    <MoveRight className="size-6 text-gray-900" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Arrow Symbols
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
                    Directional arrows, double arrows, and harpoons for LaTeX documents.
                </p>
                <span className="inline-flex items-center text-blue-600 text-sm font-medium transition-all w-fit">
                    View Symbols
                    <span className="w-0 overflow-hidden transition-all duration-200 group-hover:w-6 group-hover:ml-1">
                        <ArrowRight className="size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </span>
                </span>
            </Link>

            <Link
                href="/symbols/latin"
                className="group flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 h-full"
            >
                <div className="flex items-start justify-between mb-4">
                    <Languages className="size-6 text-gray-900" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Latin Letters
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
                    Accented characters and special Latin letters for various languages.
                </p>
                <span className="inline-flex items-center text-blue-600 text-sm font-medium transition-all w-fit">
                    View Symbols
                    <span className="w-0 overflow-hidden transition-all duration-200 group-hover:w-6 group-hover:ml-1">
                        <ArrowRight className="size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </span>
                </span>
            </Link>
        </div>
    );
}
