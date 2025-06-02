// src/components/SeminarPagination.tsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SeminarPaginationProps {
  currentPage: number;
  totalSeminars: number;
  seminarsPerPage?: number;
  basePath?: string;
}

const SeminarPagination: React.FC<SeminarPaginationProps> = ({
  currentPage,
  totalSeminars,
  seminarsPerPage = 1,
  basePath = "/seminars"
}) => {
  const totalPages = Math.ceil(totalSeminars / seminarsPerPage);
  const windowSize = 3; // Always show exactly 3 consecutive pages

  // Calculate the start page of the current window
  const getWindowStart = () => {
    if (currentPage <= 2) return 1;
    if (currentPage >= totalPages - 1) return Math.max(1, totalPages - 2);
    return currentPage - 1;
  };

  const windowStart = getWindowStart();
  const pageNumbers = Array.from(
    { length: Math.min(windowSize, totalPages) },
    (_, i) => windowStart + i
  );

  return (
    <div className="flex items-center justify-between mt-12 border-gray-200 pt-6">
      {/* Previous Button */}
      <Link
        to={`${basePath}/${currentPage - 1}`}
        className={`flex items-center gap-1 px-4 py-2 rounded-md ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-100"
        }`}
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : undefined}
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Previous</span>
      </Link>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {/* Show first page with ellipsis if needed */}
        {windowStart > 7 && (
          <>
            <Link
              to={`${basePath}/1`}
              className={`px-3 py-1 rounded-md ${
                1 === currentPage
                  ? "bg-gray-900 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
            </Link>
          </>
        )}

        {/* Current window of pages */}
        {pageNumbers.map((number) => (
          <Link
            key={number}
            to={`${basePath}/${number}`}
            className={`px-3 py-1 rounded-md ${
              number === currentPage
                ? "bg-gray-900 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {number}
          </Link>
        ))}
      </div>

      {/* Next Button */}
      <Link
        to={`${basePath}/${currentPage + 1}`}
        className={`flex items-center gap-1 px-4 py-2 rounded-md ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-100"
        }`}
        aria-disabled={currentPage === totalPages}
        tabIndex={currentPage === totalPages ? -1 : undefined}
      >
        <span>Next</span>
        <ChevronRight className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default SeminarPagination;