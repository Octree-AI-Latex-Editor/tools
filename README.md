# Octree Tools

Free online conversion tools for LaTeX, HTML, and Math powered by AI.

## Tools

- **Image to LaTeX** - Convert images of handwritten math and equations to clean LaTeX code using GPT-4o-mini
- **PDF to LaTeX** - Convert PDF documents with mathematical content to clean LaTeX code using GPT-4o-mini
- **Table to LaTeX** - Convert CSV, JSON, and Excel tables to clean LaTeX code using GPT-4o-mini
- **TikZ Generator** - Generate TikZ diagrams and graphics from text descriptions using GPT-4o-mini
- **LaTeX Preview** - Live LaTeX editor with instant PDF preview
- **Markdown to LaTeX** - Convert Markdown documents to clean LaTeX code using GPT-4o-mini

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
# OpenAI API Key for GPT-4o-mini
# Get your API key from: https://platform.openai.com/api-keys
OPENAI_API_KEY=your_openai_api_key_here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the tools.

## AI Features

All converters use **GPT-4o-mini** to process different file types:

### Image to LaTeX
- Drag and drop images (JPEG, PNG) or click to upload
- AI-powered conversion to complete LaTeX documents
- Code/Preview toggle with professional PDF rendering
- Preview caching for instant tab switching
- Export as LaTeX (.tex), PDF, or Image (JPG)
- One-click "Open in Octree" integration

### PDF to LaTeX
- Upload PDF documents with mathematical equations
- Same powerful AI conversion and preview features
- Extract LaTeX code from academic papers, textbooks, or notes

### Table to LaTeX
- Upload CSV, JSON, or Excel files
- AI-powered conversion to beautifully formatted LaTeX tables
- Supports complex table structures with booktabs styling
- Same Code/Preview toggle and export features

### TikZ Generator
- Describe diagrams in plain text
- AI generates complete TikZ/LaTeX code
- Perfect for flowcharts, graphs, and technical diagrams
- Instant PDF preview and export options

### LaTeX Preview
- Live LaTeX editor with Monaco syntax highlighting
- Auto-compile with 1-second debounce
- Instant PDF preview side-by-side
- Perfect for testing and learning LaTeX

### Markdown to LaTeX
- Paste Markdown content directly
- AI-powered conversion to complete LaTeX documents
- Supports all Markdown elements (headers, lists, tables, code blocks)
- Preserves inline and block math equations
- Code/Preview toggle and export features

## Tech Stack

- Next.js 15 with Turbopack
- TypeScript
- Tailwind CSS v4
- OpenAI GPT-4o-mini API
- Monaco Editor for LaTeX syntax highlighting
- React-PDF for professional PDF rendering
- Octree LaTeX Compilation Server
- Lucide React Icons

## License

MIT
