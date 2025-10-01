import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaTeX Preview - Live Online LaTeX Editor with PDF Preview | Free Tool",
  description: "Free online LaTeX editor with instant PDF preview. Write LaTeX code and see the compiled output in real-time. Perfect for testing LaTeX documents and learning LaTeX.",
  keywords: [
    "LaTeX preview",
    "online LaTeX editor",
    "LaTeX live preview",
    "LaTeX compiler online",
    "free LaTeX editor",
    "LaTeX PDF preview",
    "LaTeX online",
  ],
  openGraph: {
    title: "LaTeX Preview - Live Online LaTeX Editor",
    description: "Free LaTeX editor with instant PDF preview - write and compile LaTeX in real-time",
    type: "website",
  },
};

export default function LatexPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 