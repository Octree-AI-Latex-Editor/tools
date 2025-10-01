'use client';

import ToolLayout from '@/components/ToolLayout';

export default function HtmlToText() {
  const handleConvert = (input: string): string => {
    // Basic HTML to text conversion - strip HTML tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = input;
    const text = tempDiv.textContent || tempDiv.innerText || '';
    return text.trim() || 'Converted text will appear here...';
  };

  return (
    <ToolLayout
      title="HTML to Text"
      description="Extract plain text from HTML content"
      onConvert={handleConvert}
      inputPlaceholder="Enter your HTML code..."
      acceptImage={false}
    />
  );
} 