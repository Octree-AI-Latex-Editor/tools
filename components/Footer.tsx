import Link from "next/link";
import { OctreeLogo } from "@/components/icons/octree-logo";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { RedditIcon } from "@/components/icons/reddit";
import { DiscordIcon } from "@/components/icons/discord";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const navigation = {
  menu: [
    { name: "Tools", href: "/" },
    { name: "Templates", href: "/templates" },
    { name: "Symbols", href: "/symbols" },
  ],
  tools: [
    { name: "Image to LaTeX", href: "/tools/math-to-latex" },
    { name: "Excel to LaTeX", href: "/tools/table-to-latex" },
    { name: "TikZ Generator", href: "/tools/tikz-generator" },
    { name: "Image to TikZ", href: "/tools/image-to-tikz" },
    { name: "LaTeX Preview", href: "/tools/latex-preview" },
    { name: "Markdown to LaTeX", href: "/tools/markdown-to-latex" },
    { name: "Citation Generator", href: "/tools/citation-generator" },
    { name: "AI LaTeX Generator", href: "/tools/ai-latex-generator" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/octree-app",
      icon: LinkedInIcon,
    },
    {
      name: "Reddit",
      href: "https://www.reddit.com/r/octree",
      icon: RedditIcon,
    },
    {
      name: "Discord",
      href: "https://discord.gg/octree",
      icon: DiscordIcon,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <OctreeLogo className="h-8 w-8" />
              <span
                className={cn(
                  "text-xl font-medium tracking-tight text-neutral-900",
                  dmSans.className
                )}
              >
                Octree
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Free LaTeX tools and templates for everyone.
            </p>
            <div className="mt-6 flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Menu</h3>
            <ul className="mt-4 space-y-3">
              {navigation.menu.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2">
            <h3 className="text-sm font-semibold text-gray-900">Tools</h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {navigation.tools.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Octree. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
