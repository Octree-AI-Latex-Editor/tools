import Link from "next/link";
import { OctreeLogo } from '@/components/icons/octree-logo';
import { DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Header() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <OctreeLogo className="h-7 w-7" />
              <span
                className={cn(
                  'text-lg font-medium tracking-tight text-neutral-900',
                  dmSans.className
                )}
              >
                Octree
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            {/* Empty div to maintain same structure as ai-latex-editor navbar */}
          </div>
        </div>
      </div>
    </nav>
  );
} 