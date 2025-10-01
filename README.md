# Octree Tools

Free online conversion tools for LaTeX, HTML, and Math powered by AI.

## Tools

- **Notes to LaTeX** - Convert handwritten notes and mathematical expressions to clean LaTeX code using GPT-4o-mini
- **LaTeX to Text** - Convert LaTeX documents to plain text
- **HTML to Text** - Extract plain text from HTML content

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

The Notes to LaTeX converter uses **GPT-4o-mini** to process handwritten notes and mathematical expressions:

- Drag and drop images or click to upload
- Supports JPEG, PNG, PDF formats
- AI-powered conversion to complete LaTeX documents
- Code/Preview toggle with professional PDF rendering
- Preview caching for instant tab switching
- Export as LaTeX (.tex), PDF, or Image (JPG)
- One-click "Open in Octree" integration

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
