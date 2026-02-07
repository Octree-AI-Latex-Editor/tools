import {
  Calculator,
  Sparkles,
  ArrowRightLeft,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";

export interface Tool {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  type: "calculator" | "generator" | "converter" | "checker";
  badge?: string;
}

/**
 * Get the default icon for a tool type.
 * Used by the generator when adding tools dynamically.
 */
export function getToolIcon(type: Tool["type"]): LucideIcon {
  switch (type) {
    case "calculator":
      return Calculator;
    case "generator":
      return Sparkles;
    case "converter":
      return ArrowRightLeft;
    case "checker":
      return CheckCircle;
    default:
      return Calculator;
  }
}

/**
 * Tools registry — populated by the generator.
 * Each generated tool gets an entry here automatically.
 */
export const tools: Tool[] = [
  {
    id: "ai-writer",
    title: "AI Writer",
    description: "Generate high-quality content in seconds — emails, blog intros, social posts, and more",
    href: "/tools/ai-writer",
    icon: Sparkles,
    type: "generator",
  },
];
