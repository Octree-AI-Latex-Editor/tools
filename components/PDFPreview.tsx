'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFPreviewProps {
  pdfUrl: string;
  width?: number;
  compact?: boolean;
}

export default function PDFPreview({ pdfUrl, width = 500, compact = false }: PDFPreviewProps) {
  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className={`w-full h-full overflow-auto bg-gray-50 flex justify-center ${compact ? 'py-2' : 'py-6'}`}>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        className={compact ? '' : 'shadow-lg'}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className={`${compact ? 'mb-2' : 'mb-4'} bg-white ${compact ? '' : 'shadow-md'}`}
            width={width}
          />
        ))}
      </Document>
    </div>
  );
} 