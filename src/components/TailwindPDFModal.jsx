import React, { useState, useEffect, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function TailwindPDFModal({
  isOpen,
  onClose,
  pdfUrl,
  title = "Document Preview",
}) {
  const [numPages, setNumPages] = useState(null);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  // Handle backdrop clicks (only close if clicking the background wrapper directly)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {/* Floating Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 text-white z-10 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
        <span className="text-sm font-medium truncate max-w-md pointer-events-auto">
          {title}
        </span>

        <div className="flex items-center gap-2 pointer-events-auto">
          <a
            href={pdfUrl}
            download
            className="p-2 text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition"
            aria-label="Download document"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>

          <button
            onClick={onClose}
            className="p-2 text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition"
            aria-label="Close preview"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Continuous-Scroll Area */}
      <div
        className="flex-1 overflow-y-auto flex justify-center p-4 sm:p-8"
        onClick={handleBackdropClick} // Ensures clicks in empty padding areas also trigger close
      >
        <Document
          file={pdfUrl}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={
            <div className="text-white/70 text-sm my-auto pointer-events-none">
              Loading preview...
            </div>
          }
          error={
            <div className="text-red-400 text-sm my-auto pointer-events-none">
              Failed to load document.
            </div>
          }
          className="flex flex-col items-center gap-6"
          onClick={(e) => e.stopPropagation()} // Prevent clicking on the PDF pages from closing
        >
          {Array.from(new Array(numPages || 0), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={Math.min(window.innerWidth * 0.9, 850)}
              className="shadow-2xl rounded"
              renderTextLayer={true}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
