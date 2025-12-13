"use client";

import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wrench, FileText, Sigma, Search } from "lucide-react";
import { GitHubIcon } from "@/components/icons/github";
import { RedditIcon } from "@/components/icons/reddit";
import { DiscordIcon } from "@/components/icons/discord";

const SearchInput = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentQuery = searchParams?.get("q") ?? "";

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams?.toString());
        if (term) {
            params.set("q", term);
        } else {
            params.delete("q");
        }
        router.replace(`?${params.toString()}`, { scroll: false });
    };

    return (
        <input
            type="text"
            defaultValue={currentQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            placeholder="Search symbols..."
        />
    );
};

export default function SymbolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
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
                        Browse common mathematical operators and Greek letters for your LaTeX documents.
                    </p>

                    <div className="flex items-center justify-center mb-8">
                        <Tabs defaultValue="symbols" className="w-auto">
                            <TabsList>
                                <TabsTrigger value="tools" asChild>
                                    <Link href="/" className="inline-flex items-center gap-2">
                                        Tools
                                    </Link>
                                </TabsTrigger>
                                <TabsTrigger value="templates" asChild>
                                    <Link href="/templates" className="inline-flex items-center gap-2">
                                        Templates
                                    </Link>
                                </TabsTrigger>
                                <TabsTrigger value="symbols" asChild>
                                    <Link href="/symbols" className="inline-flex items-center gap-2">
                                        Symbols
                                    </Link>
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>

                    <div className="max-w-xl mx-auto">
                        {pathname !== "/symbols" && (
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <SearchInput key={pathname} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </div>
    );
}
