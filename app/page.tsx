import Link from "next/link";

const tools = [
  {
    id: 1,
    title: "Notes to LaTeX",
    description: "Convert handwritten notes to LaTeX format",
    href: "/tools/math-to-latex",
    icon: "∑",
  },
  {
    id: 2,
    title: "LaTeX to Text",
    description: "Convert LaTeX documents to plain text",
    href: "/tools/latex-to-text",
    icon: "📝",
  },
  {
    id: 3,
    title: "HTML to Text",
    description: "Extract plain text from HTML content",
    href: "/tools/html-to-text",
    icon: "🌐",
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

        {/* SEO Content */}
        <div className="mt-12 prose prose-sm max-w-none text-gray-600">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Convert Handwritten Math to LaTeX Online</h2>
          <p className="mb-4">
            Our free online math equation to LaTeX converter uses AI to instantly transform handwritten mathematical expressions, formulas, and equations into clean LaTeX code. Whether you need to convert math text to LaTeX, convert math formulas to LaTeX, or convert handwritten math equations to LaTeX format, our tool makes it effortless.
          </p>
          <p className="mb-4">
            Perfect for students, researchers, and educators who need to convert math equations to LaTeX online. Simply upload an image of your handwritten math, and our AI-powered LaTeX math converter will generate properly formatted LaTeX code with a real-time PDF preview.
          </p>
          <div className="text-xs text-gray-400 mt-8">
            Keywords: convert handwritten math to LaTeX, math equation to LaTeX converter, convert math to LaTeX, LaTeX math converter, math formula to LaTeX, convert math equation to LaTeX online, handwritten equation to LaTeX, math text to LaTeX converter, free LaTeX converter
          </div>
        </div>
      </div>
    </div>
  );
}
