import Link from "next/link";
import { OctreeLogo } from '@/components/icons/octree-logo';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link href="https://tools.useoctree.com" className="flex items-center space-x-2">
              <OctreeLogo className="h-7 w-7" />
              <span
                className="text-lg font-medium tracking-tight text-neutral-900"
              >
                Octree
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 