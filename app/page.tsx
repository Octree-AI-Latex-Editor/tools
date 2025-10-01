import Link from "next/link";

const tools = [
  {
    id: 1,
    title: "Image to LaTeX",
    description: "Convert images to LaTeX format",
    href: "/tools/math-to-latex",
    icon: "🖼️",
  },
  {
    id: 2,
    title: "PDF to LaTeX",
    description: "Convert PDF documents to LaTeX format",
    href: "/tools/pdf-to-latex",
    icon: "📄",
  },
  {
    id: 3,
    title: "Table to LaTeX",
    description: "Convert CSV, JSON, Excel to LaTeX tables",
    href: "/tools/table-to-latex",
    icon: "📊",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Free Online Math to LaTeX Converter Tools</h1>
              <p className="text-sm text-gray-500 mt-1">
                Convert handwritten math equations, formulas, and expressions to LaTeX code instantly
              </p>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {tools.map((tool) => (
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
                        <h3 className="text-base font-medium text-gray-900">
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
      </div>
    </div>
  );
}
