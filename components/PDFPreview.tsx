"use client";

import { Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { cn } from "@/lib/utils";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFPreviewProps {
  pdfUrl: string;
  width?: number;
  compact?: boolean;
  firstPageOnly?: boolean;
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

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error("PDF load error:", error);
    setError("Failed to load PDF");
    setIsLoading(false);
  }

  const pagesToRender = firstPageOnly ? 1 : numPages;

  return (
    <div
      className={cn(
        "w-full h-full bg-gray-50 flex justify-center",
        compact
          ? "py-2 overflow-hidden items-start"
          : "py-6 overflow-auto items-center"
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

      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        className={cn(!compact && "shadow-lg", isLoading && "hidden")}
        loading=""
      >
        {Array.from(new Array(pagesToRender), (el, index) => (
          <Page
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
      </Document>
    </div>
  );
}
