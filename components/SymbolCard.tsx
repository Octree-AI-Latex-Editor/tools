"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import KatexPreview from "./KatexPreview";

interface SymbolCardProps {
    latex: string;
    name?: string;
}

export function SymbolCard({ latex, name }: SymbolCardProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(latex);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div
            className="group relative flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer"
            onClick={copyToClipboard}
        >
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Copy LaTeX"
                >
                    {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                </button>
            </div>

            <div className="flex-1 flex items-center justify-center min-h-[60px] mb-4">
                <div className="text-2xl">
                    <KatexPreview latex={latex} displayMode={true} />
                </div>
            </div>

            <div className="text-center">
                {name && (
                    <p className="text-sm font-medium text-gray-900 mb-1">{name}</p>
                )}
                <code className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100 font-mono">
                    {latex}
                </code>
            </div>
        </div>
    );
}
