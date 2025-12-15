import { ExternalLink, Zap } from "lucide-react";
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
      <div className="mx-auto max-w-5xl rounded-3xl border bg-card px-6 py-12 md:py-20 text-card-foreground">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-md px-4 py-2 border shadow-xs">
            <Zap className="h-4 w-4 fill-black" />
            <span className="text-sm font-medium">
              Supercharge Your LaTeX Workflow
            </span>
          </div>

          <h2
            className={cn(
              "text-balance text-4xl font-medium",
              dmSans.className
            )}
          >
            Continue Editing in Octree
          </h2>

          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <ul className="list-disc text-left inline-block">
              <li>Real-time preview</li>
              <li>AI-powered assistance</li>
              <li>Version control</li>
              <li>Seamless team collaboration</li>
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
  );
}
