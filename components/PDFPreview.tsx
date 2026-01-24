"use client";

import { Loader2, AlertCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface PDFPreviewProps {
  pdfUrl: string;
  width?: number;
  compact?: boolean;
  firstPageOnly?: boolean;
}

// Lazy load react-pdf components
let Document: any = null;
let Page: any = null;
let pdfjsConfigured = false;

async function loadPdfJs() {
  if (Document && Page) return { Document, Page };
  
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf');
  
  if (!pdfjsConfigured) {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    pdfjsConfigured = true;
  }
  
  const reactPdf = await import('react-pdf');
  Document = reactPdf.Document;
  Page = reactPdf.Page;
  
  // Import styles
  await import('react-pdf/dist/Page/AnnotationLayer.css');
  await import('react-pdf/dist/Page/TextLayer.css');
  
  return { Document, Page };
}

export default function PDFPreview({
  pdfUrl,
  width = 500,
  compact = false,
  firstPageOnly = false,
}: PDFPreviewProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pdfReady, setPdfReady] = useState(false);
  const [Components, setComponents] = useState<{ Document: any; Page: any } | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    
    loadPdfJs()
      .then((comps) => {
        if (mountedRef.current) {
          setComponents(comps);
          setPdfReady(true);
        }
      })
      .catch((err) => {
        console.error('Failed to load PDF library:', err);
        if (mountedRef.current) {
          setError('Failed to load PDF viewer');
          setIsLoading(false);
        }
      });

    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Validate pdfUrl
  if (!pdfUrl || typeof pdfUrl !== 'string' || pdfUrl.trim() === '') {
    return (
      <div className="flex flex-col items-center justify-center gap-2 p-4 w-full h-full min-h-[200px]">
        <AlertCircle className="w-10 h-10 text-red-400" />
        <p className="text-sm text-red-600 font-medium">Invalid PDF URL</p>
      </div>
    );
  }

  // Show loading while PDF library is being loaded
  if (!pdfReady || !Components) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 w-full h-full min-h-[200px] bg-gray-50">
        <Loader2 className="size-6 animate-spin text-gray-400" />
        {!compact && (
          <p className="text-sm text-gray-500 font-medium">Loading...</p>
        )}
      </div>
    );
  }

  const { Document: DocComponent, Page: PageComponent } = Components;

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  }

  function onDocumentLoadError(err: Error) {
    console.error("PDF load error:", err);
    setError("Failed to load PDF");
    setIsLoading(false);
  }

  const pagesToRender = firstPageOnly ? 1 : Math.max(numPages, 0);

  return (
    <div
      className={cn(
        "w-full h-full bg-gray-50 flex justify-center",
        compact
          ? "py-2 overflow-hidden items-start"
          : "py-4 overflow-auto items-start"
      )}
    >
      {isLoading && (
        <div className="flex flex-col items-center justify-center gap-3 w-full h-full min-h-[200px]">
          <div className="relative">
            <Loader2 className="size-6 animate-spin text-gray-400" />
          </div>
          {!compact && (
            <p className="text-sm text-gray-500 font-medium">Loading PDF...</p>
          )}
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center gap-2 p-4 w-full h-full min-h-[200px]">
          <AlertCircle className="w-10 h-10 text-red-400" />
          <p className="text-sm text-red-600 font-medium">{error}</p>
        </div>
      )}

      <DocComponent
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        className={cn(!compact && "shadow-lg", isLoading && "hidden")}
        loading=""
        error={
          <div className="flex flex-col items-center justify-center gap-2 p-4 w-full h-full min-h-[200px]">
            <AlertCircle className="w-10 h-10 text-red-400" />
            <p className="text-sm text-red-600 font-medium">Error loading PDF</p>
          </div>
        }
      >
        {pagesToRender > 0 && Array.from({ length: pagesToRender }, (_, index) => (
          <PageComponent
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className={cn("bg-white", compact ? "mb-2" : "mb-4 shadow-md")}
            width={width}
            loading={
              <div
                className="flex items-center justify-center bg-gray-100"
                style={{ width, height: width * 1.4 }}
              >
                <Loader2 className="size-8 animate-spin text-gray-400" />
              </div>
            }
          />
        ))}
      </DocComponent>
    </div>
  );
}
