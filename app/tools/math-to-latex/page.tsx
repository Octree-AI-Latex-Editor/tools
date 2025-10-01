import AIToolLayout from '@/components/AIToolLayout';

export default function MathToLatex() {
  return (
    <AIToolLayout
      title="Math to LaTeX Converter"
      description="Convert handwritten mathematical expressions to clean LaTeX code"
      apiEndpoint="/api/convert"
      inputLabel="Your Handwritten Notes"
      outputLabel="Clean LaTeX Code"
      acceptedFormats="JPEG, PNG, PDF"
    />
  );
} 