import { ExternalLink, Pi } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface OctreeCTAProps {
  source?: string;
}

export function OctreeCTA({ source = "" }: OctreeCTAProps) {
  const trackingParam = source ? `?ref=${source}` : "";

  return (
    <div className="py-2">
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-3xl p-[2px] overflow-hidden">
          {/* Single traveling line border animation - light blue */}
          <div
            className="absolute inset-[-100%] pointer-events-none animate-[spin_8s_linear_infinite]"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, #93c5fd 300deg, #bfdbfe 330deg, #dbeafe 360deg)",
            }}
          />
          <div className="relative rounded-3xl bg-card px-6 py-8 md:py-10 text-card-foreground">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 border shadow-xs">
                <Pi className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Math powered</span>
                <span>Write LaTeX using AI</span>
              </div>

              <h2
                className={cn(
                  "text-balance text-4xl font-medium",
                  dmSans.className
                )}
              >
                Best AI LaTeX Editor, Overleaf Alternative
              </h2>

              <p className="text-muted-foreground">
                Octree helps researchers from 15+ universities write research papers
                faster using AI
              </p>

              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <ul className="list-disc text-left inline-block">
                  <li>Generate beautiful TikZ diagrams using AI</li>
                  <li>Upload image and convert it to LaTeX seamlessly</li>
                  <li>Get instant assistance with writing and formatting research papers</li>
                </ul>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="gradient">
                  <Link href={`https://app.useoctree.com${trackingParam}`}>
                    <ExternalLink className="h-4 w-4" />
                    <span>Use in Octree</span>
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline">
                  <Link href="https://useoctree.com">
                    <span>Learn More</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
