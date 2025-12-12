"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GitHubIcon } from "@/components/icons/github";
import { RedditIcon } from "@/components/icons/reddit";
import { DiscordIcon } from "@/components/icons/discord";

export default function SymbolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const currentTab = pathname?.includes("greek") ? "greek" : "math";

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-b from-gray-100 to-gray-50 pt-16 pb-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Link
                            href="https://github.com/Octree-AI-Latex-Editor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
                            title="Star on GitHub"
                        >
                            <GitHubIcon className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://www.reddit.com/r/Octree/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
                            title="Join us on Reddit"
                        >
                            <RedditIcon className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://discord.gg/hGB7jnxB3m"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
                            title="Join our Discord"
                        >
                            <DiscordIcon className="h-5 w-5" />
                        </Link>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        LaTeX Symbols
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        A comprehensive list of common mathematical symbols and Greek letters
                        for LaTeX. Click on any card to copy the code.
                    </p>

                    <div className="flex items-center justify-center mb-8">
                        <Tabs value={currentTab} className="w-auto">
                            <TabsList>
                                <TabsTrigger value="math" asChild>
                                    <Link href="/symbols/math">Math Symbols</Link>
                                </TabsTrigger>
                                <TabsTrigger value="greek" asChild>
                                    <Link href="/symbols/greek">Greek Letters</Link>
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {children}
            </div>
        </div>
    );
}
