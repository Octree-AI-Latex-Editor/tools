import { AlertCircle, X } from 'lucide-react';
import { OctreeLogo } from '@/components/icons/octree-logo';
import { openInOctree } from '@/lib/open-in-octree';
import type { FC } from 'react';

interface CompileErrorModalProps {
  isOpen: boolean;
  errorMessage: string;
  latex: string;
  onClose: () => void;
  source?: string;
  title?: string;
}

export const CompileErrorModal: FC<CompileErrorModalProps> = ({
  isOpen,
  errorMessage,
  latex,
  onClose,
  source = 'tools',
  title = 'Imported from Tools',
}) => {
  if (!isOpen) {
    return null;
  }

  const handleOpenInOctree = () => {
    openInOctree({
      latex,
      title,
      source,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-full bg-red-50 p-2 text-red-500">
            <AlertCircle className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Compilation failed</h2>
            <p className="mt-2 text-sm text-gray-600">
              {errorMessage || 'We could not generate a PDF preview.'}
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Open the document in Octree and use AI-assisted fixes to resolve the issue.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleOpenInOctree}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors shadow-sm"
          >
            <OctreeLogo className="h-5 w-5" />
            Open in Octree
          </button>
        </div>
      </div>
    </div>
  );
};

