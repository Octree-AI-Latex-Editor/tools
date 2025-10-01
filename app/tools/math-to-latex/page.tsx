import AIToolLayout from '@/components/AIToolLayout';

export default function MathToLatex() {
  return (
    <AIToolLayout
      title="Image to LaTeX Converter"
      description="Convert images of handwritten math and equations to clean LaTeX code"
      apiEndpoint="/api/convert"
      inputLabel="Your Handwritten Notes"
      outputLabel="Clean LaTeX Code"
      acceptedFormats="JPEG, PNG, PDF"
    />
  );
} 