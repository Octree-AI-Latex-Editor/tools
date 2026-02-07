import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Writer - Generate Content with AI | Free Online Tool",
  description:
    "Generate high-quality written content in seconds. Emails, blog intros, social posts, product descriptions, and more. Free, no signup required.",
  keywords: [
    "AI writer",
    "AI content generator",
    "free AI writing tool",
    "generate text with AI",
    "AI email writer",
    "AI blog writer",
    "content generator",
    "AI copywriting",
  ],
};

export default function AiWriterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
