'use client';

import ToolLayout from '@/components/ToolLayout';

export default function LatexToText() {
  const handleConvert = (input: string): string => {
    // Basic LaTeX to text conversion - strip common LaTeX commands
    let text = input
      // Remove document structure
      .replace(/\\documentclass\{[^}]*\}/g, '')
      .replace(/\\usepackage\{[^}]*\}/g, '')
      .replace(/\\begin\{document\}/g, '')
      .replace(/\\end\{document\}/g, '')
      // Remove sections
      .replace(/\\section\{([^}]*)\}/g, '$1\n')
      .replace(/\\subsection\{([^}]*)\}/g, '$1\n')
      // Remove formatting
      .replace(/\\textbf\{([^}]*)\}/g, '$1')
      .replace(/\\textit\{([^}]*)\}/g, '$1')
      .replace(/\\emph\{([^}]*)\}/g, '$1')
      // Remove math environments
      .replace(/\$\$([^$]*)\$\$/g, '$1')
      .replace(/\$([^$]*)\$/g, '$1')
      .replace(/\\begin\{equation\}/g, '')
      .replace(/\\end\{equation\}/g, '')
      // Clean up
      .replace(/\\[a-zA-Z]+/g, '')
      .replace(/[{}]/g, '')
      .trim();
    
    return text || 'Converted text will appear here...';
  };

  return (
    <ToolLayout
      title="LaTeX to Text"
      description="Convert LaTeX documents to plain text"
      onConvert={handleConvert}
      inputPlaceholder="Enter your LaTeX code..."
      acceptImage={false}
    />
  );
} 