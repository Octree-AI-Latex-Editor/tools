import { ArrowRight, Zap } from 'lucide-react';
import { OctreeLogo } from '@/components/icons/octree-logo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface OctreeCTAProps {
  source?: string;
}

export function OctreeCTA({ source = '' }: OctreeCTAProps) {
  const trackingParam = source ? `?ref=${source}` : '';

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
          <Zap className="h-4 w-4" />
          <span className="text-sm font-medium">Supercharge Your LaTeX Workflow</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Continue Editing in Octree
        </h2>
        
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Experience the full power of collaborative LaTeX editing with real-time preview, 
          AI-powered assistance, version control, and seamless team collaboration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
            <Link href={`https://app.useoctree.com${trackingParam}`}>
              <OctreeLogo className="h-5 w-5" />
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/30 hover:text-white">
            <Link href="https://useoctree.com">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}
