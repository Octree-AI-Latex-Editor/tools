"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { Search, ArrowRight, ExternalLink } from "lucide-react";
import { tools } from "@/lib/tools";
import { templates, templateCategories, type TemplateCategory } from "@/lib/templates";
import { openInOctree } from "@/lib/open-in-octree";
import { RedditIcon } from "@/components/icons/reddit";
import { DiscordIcon } from "@/components/icons/discord";
import { GitHubIcon } from "@/components/icons/github";
import { OctreeLogo } from "@/components/icons/octree-logo";

const PDFPreview = dynamic(() => import("@/components/PDFPreview"), {
  ssr: false,
});

type Tab = "tools" | "templates";
type CategoryFilter = TemplateCategory | "All Templates";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("tools");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All Templates");

  const filteredTools = tools.filter(
    (tool) =>
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesSearch =
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All Templates" || template.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All Templates": templates.length };
    templates.forEach((template) => {
      counts[template.category] = (counts[template.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-100 to-gray-50 pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Social Links */}
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
            Free LaTeX Tools & Templates
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Convert handwritten math equations and tables to LaTeX, generate
            citations, and explore professional templates.
          </p>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-1 mb-8">
            <button
              onClick={() => {
                setActiveTab("tools");
                setSearchQuery("");
              }}
              className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                activeTab === "tools"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              Tools
            </button>
            <button
              onClick={() => {
                setActiveTab("templates");
                setSearchQuery("");
              }}
              className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                activeTab === "templates"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              Templates
            </button>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                placeholder={
                  activeTab === "tools"
                    ? "Search tools..."
                    : "Search templates..."
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 py-12 ${
          activeTab === "tools" ? "max-w-6xl" : "max-w-7xl"
        }`}
      >
        {activeTab === "tools" ? (
          <>
            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-2xl">{tool.icon}</div>
                    {tool.badge && (
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded ${
                          tool.badge === "POPULAR"
                            ? "bg-blue-100 text-blue-700 border border-blue-200"
                            : "bg-blue-100 text-blue-700 border border-blue-200"
                        }`}
                      >
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {tool.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                    Try Now
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No tools found matching your search.
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Templates Layout with Sidebar */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar - Categories */}
              <div className="lg:w-56 flex-shrink-0">
                <div className="sticky top-8">
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Categories
                  </h3>
                  <nav className="space-y-1">
                    {templateCategories.map((cat) => {
                      const count = categoryCounts[cat.name] || 0;
                      const isActive = selectedCategory === cat.name;
                      return (
                        <button
                          key={cat.name}
                          onClick={() => setSelectedCategory(cat.name)}
                          className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                            isActive
                              ? "bg-gray-100 text-gray-900 font-medium"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          <span>{cat.name}</span>
                          <span
                            className={`text-xs ${
                              isActive ? "text-gray-700" : "text-gray-400"
                            }`}
                          >
                            ({count})
                          </span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {selectedCategory === "All Templates"
                      ? "All Templates"
                      : selectedCategory}
                  </h2>
                  <span className="text-sm text-gray-500">
                    {filteredTemplates.length} template
                    {filteredTemplates.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredTemplates.map((template) => (
                    <div
                      key={template.id}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-200 flex flex-col"
                    >
                      {/* PDF Preview */}
                      <div className="relative h-44 bg-gray-50 overflow-hidden">
                        <PDFPreview
                          pdfUrl={template.previewUrl}
                          width={280}
                          compact
                          firstPageOnly
                        />
                      </div>

                      {/* Template info */}
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-1">
                          {template.title}
                        </h3>
                        <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                          {template.description}
                        </p>

                        {/* Action buttons */}
                        <div className="flex gap-2 mt-auto">
                          <Link
                            href={`/templates/${template.slug}`}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            View
                          </Link>
                          <button
                            onClick={() => {
                              openInOctree({
                                latex: template.code,
                                title: template.title,
                                source: "tools:templates",
                              });
                            }}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                          >
                            <OctreeLogo className="h-3.5 w-3.5" />
                            Open
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredTemplates.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">
                      No templates found matching your search.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
