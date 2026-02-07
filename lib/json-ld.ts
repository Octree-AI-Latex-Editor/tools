export interface TemplateJsonLd {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  programmingLanguage: string;
  codeRepository: string;
  author: {
    "@type": string;
    name: string;
  };
}

export const getTemplateJsonLd = (
  title: string,
  description: string
): TemplateJsonLd => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: `${title} LaTeX Template`,
    description: description,
    programmingLanguage: "LaTeX",
    codeRepository: "https://tools.useoctree.com/templates",
    author: {
      "@type": "Organization",
      name: "Octree",
    },
  };
};

