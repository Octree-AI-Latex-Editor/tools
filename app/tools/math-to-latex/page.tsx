'use client';

import ToolLayout from '@/components/ToolLayout';

export default function MathToLatex() {
  const handleConvert = (input: string): string => {
    if (input.startsWith('data:image')) {
      return '% Image uploaded - LaTeX conversion would happen here\n% This requires an OCR/Math recognition API\n\\[ \\int_{0}^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2} \\]';
    }
    
    // Simple text to LaTeX conversion placeholder
    return `% Converted from text:\n${input}`;
  };

  return (
    <ToolLayout
      title="Math to LaTeX"
      description="Convert mathematical expressions to LaTeX format"
      onConvert={handleConvert}
      inputPlaceholder="Enter your mathematical expression or upload an image..."
      acceptImage={true}
    />
  );
} 