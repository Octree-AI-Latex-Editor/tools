import AIToolLayout from '@/components/AIToolLayout';

export default function MathToLatex() {
  return (
    <AIToolLayout
      title="Notes to LaTeX Converter"
      description="Convert handwritten notes and mathematical expressions to clean LaTeX code"
      apiEndpoint="/api/convert"
      inputLabel="Your Handwritten Notes"
      outputLabel="Clean LaTeX Code"
      acceptedFormats="JPEG, PNG, PDF"
    />
  );
} 