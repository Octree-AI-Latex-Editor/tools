import { siteConfig } from "@/lib/site-config";

export interface ToolJsonLd {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  author: {
    "@type": string;
    name: string;
  };
}

export const getToolJsonLd = (
  title: string,
  description: string,
  slug: string
): ToolJsonLd => {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: title,
    description: description,
    url: `${siteConfig.websiteUrl}/tools/${slug}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
};
