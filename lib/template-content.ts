export interface TemplateContent {
  usage: string;
  features: string[];
}

export const getTemplateContent = (
  slug: string,
  templateTitle: string
): TemplateContent => {
  const content: Record<string, TemplateContent> = {
    "academic-cv": {
      usage:
        "Perfect for academics, researchers, and professors. This LaTeX CV template includes sections for education, publications, research experience, teaching, awards, and grants.",
      features: [
        "Multiple page support",
        "Publication list formatting",
        "Research experience section",
        "Teaching experience",
        "Awards and honors",
        "Professional formatting",
      ],
    },
    "beamer-presentation": {
      usage:
        "Professional LaTeX Beamer presentation template for academic conferences, lectures, and seminars. Create beautiful slides with consistent formatting and mathematical equations.",
      features: [
        "Title slide with author info",
        "Section slides",
        "Bullet points and lists",
        "Mathematical equation support",
        "Custom themes",
        "Table of contents",
      ],
    },
    "lab-report": {
      usage:
        "LaTeX lab report template for science and engineering students. Document experiments with objectives, procedures, results, and conclusions in a professional format.",
      features: [
        "Abstract section",
        "Introduction and objectives",
        "Materials and methods",
        "Results with tables and figures",
        "Discussion and conclusion",
        "References",
      ],
    },
    resume: {
      usage:
        "Modern LaTeX resume template for job applications. Clean, professional design perfect for tech, engineering, and academic positions.",
      features: [
        "Contact information header",
        "Education section",
        "Work experience",
        "Skills and competencies",
        "Projects and achievements",
        "One-page format",
      ],
    },
    "research-paper": {
      usage:
        "IEEE-style LaTeX research paper template for conference and journal submissions. Includes abstract, introduction, methodology, results, and bibliography.",
      features: [
        "IEEE conference format",
        "Two-column layout",
        "Abstract and keywords",
        "Bibliography support",
        "Figure and table placement",
        "Professional typography",
      ],
    },
    thesis: {
      usage:
        "Comprehensive LaTeX thesis template for PhD and Master's dissertations. Includes chapters, table of contents, bibliography, and appendices.",
      features: [
        "Multi-chapter structure",
        "Automatic table of contents",
        "List of figures and tables",
        "Bibliography with BibTeX",
        "Appendices support",
        "Professional formatting",
      ],
    },
    "cover-letter": {
      usage:
        "Professional LaTeX cover letter template for job applications. Matching design with resume templates for consistent branding.",
      features: [
        "Professional letterhead",
        "Date and recipient info",
        "Formal greeting",
        "Body paragraphs",
        "Closing and signature",
        "Customizable layout",
      ],
    },
  };
  return (
    content[slug] || {
      usage: `Professional ${templateTitle} template with clean formatting and easy customization.`,
      features: [
        "Professional design",
        "Easy to customize",
        "PDF output",
        "Free to use",
      ],
    }
  );
};

