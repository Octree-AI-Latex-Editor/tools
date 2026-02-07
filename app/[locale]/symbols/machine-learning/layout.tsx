import { Metadata } from "next";
import { generateSymbolMetadata } from '@/lib/generate-symbol-metadata';

const defaultMetadata: Metadata = {
  title: "LaTeX Machine Learning & AI Symbols - Loss, Gradient, Argmax | Free Symbol Reference",
  description: "Complete list of LaTeX machine learning and AI symbols. Copy-paste loss function ℒ, expectation 𝔼, KL divergence, argmax, argmin, tensor ⊗, gradient with LaTeX commands.",
  keywords: [
    "machine learning symbols",
    "ml symbols latex",
    "loss function symbols",
    "optimization symbols",
    "argmax symbol",
    "argmin symbol",
    "gradient descent symbols",
    "expectation notation ml",
    "probability symbols ml",
    "neural network notation",
    "information theory symbols",
    "kl divergence latex",
    "cross entropy latex",
    "softmax latex",
    "sigmoid latex",
    "relu latex",
    "latex gradient",
    "latex theta",
    "latex weight matrix",
    "deep learning symbols",
    "ai symbols latex",
    "tensor symbol",
    "hadamard product latex",
    "l1 l2 norm latex",
  ],
  openGraph: {
    title: "LaTeX Machine Learning & AI Symbols - Complete Symbol Reference",
    description: "Copy-paste LaTeX code for loss functions, gradients, argmax, and ML notation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSymbolMetadata(locale, 'machine-learning', defaultMetadata);
}

export default function MLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

