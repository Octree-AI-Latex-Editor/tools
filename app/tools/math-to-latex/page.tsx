export default function MathToLatex() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Math to LaTeX</h1>
          <p className="text-gray-500 mt-2">
            Convert mathematical expressions to LaTeX format
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input (Math Expression)
            </label>
            <textarea
              className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your mathematical expression..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Output (LaTeX)
            </label>
            <textarea
              className="w-full h-64 p-4 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="LaTeX output will appear here..."
              readOnly
            />
          </div>
        </div>

        <div className="mt-6">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Convert
          </button>
        </div>
      </div>
    </div>
  );
} 