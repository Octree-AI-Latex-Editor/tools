import { ArrowRight, Zap } from 'lucide-react';
import { OctreeLogo } from '@/components/icons/octree-logo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

interface OctreeCTAProps {
  source?: string;
}

export function OctreeCTA({ source = '' }: OctreeCTAProps) {
  const trackingParam = source ? `?ref=${source}` : '';

  return (
    <div className="py-2">
      <div className="mx-auto max-w-7xl rounded-3xl border bg-card px-6 py-8 md:py-20 lg:py-32 text-card-foreground">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">Supercharge Your LaTeX Workflow</span>
          </div>

          <h2 className={cn("text-balance text-4xl font-semibold lg:text-5xl mb-4", dmSans.className)}>
            Continue Editing in Octree
          </h2>

          <div className="mt-4 flex flex-col items-center gap-2 text-muted-foreground">
            <ul className="list-disc text-left inline-block">
              <li>Real-time preview</li>
              <li>AI-powered assistance</li>
              <li>Version control</li>
              <li>Seamless team collaboration</li>
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white border-transparent">
              <Link href={`https://app.useoctree.com${trackingParam}`}>
                <span>Use in Octree</span>
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline">
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
