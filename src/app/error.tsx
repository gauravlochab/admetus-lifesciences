"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 font-display text-[var(--foreground)]">
        Something went wrong!
      </h2>
      <p className="text-[var(--foreground-muted)] max-w-md mx-auto mb-8 text-lg font-body">
        We apologize for the inconvenience. An unexpected error has occurred while trying to load this page.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center px-8 py-4 bg-[var(--gold)] text-black font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,169,81,0.3)] hover:-translate-y-1"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 border border-[var(--border-subtle)] text-[var(--foreground)] font-medium tracking-wide transition-all duration-300 hover:border-[var(--gold)]/30 hover:bg-[var(--gold)]/5 hover:-translate-y-1"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
