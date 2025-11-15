"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, FileText, Wrench } from "lucide-react";
import { tools } from "@/lib/tools";
import { RedditIcon } from "@/components/icons/reddit";
import { DiscordIcon } from "@/components/icons/discord";
import { GitHubIcon } from "@/components/icons/github";

type TabType = "tools" | "templates";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<TabType>("tools");

  const filteredTools = tools.filter(
    (tool) =>
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-light text-gray-900">
                Free LaTeX Tools
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Convert handwritten math equations, formulas, and expressions to
                LaTeX code instantly
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/Octree-AI-Latex-Editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-1.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                title="Star on GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
              </Link>

              <Link
                href="https://www.reddit.com/r/Octree/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-1.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                title="Join us on Reddit"
              >
                <RedditIcon className="h-4 w-4" />
              </Link>

              <Link
                href="https://discord.gg/hGB7jnxB3m"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-1.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                title="Join our Discord"
              >
                <DiscordIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab("tools")}
                className={`py-2 px-4 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                  activeTab === "tools"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Wrench className="h-4 w-4" />
                Tools
              </button>
              <Link
                href="/templates"
                className="py-2 px-4 border-b-2 border-transparent font-medium text-sm transition-colors flex items-center gap-2 text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                <FileText className="h-4 w-4" />
                Templates
              </Link>
            </nav>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={
                activeTab === "tools"
                  ? "Search tools..."
                  : "Search templates..."
              }
            />
          </div>
        </div>

        {activeTab === "tools" && (
          /* Tools Grid */
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {filteredTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="block hover:bg-gray-50 transition-colors"
                >
                  <div className="px-6 py-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{tool.icon}</div>
                        <div>
                          <h3 className="text-base font-normal text-gray-900">
                            {tool.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
