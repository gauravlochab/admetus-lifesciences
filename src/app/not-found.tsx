import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-6 font-display text-[var(--gold)]">
        404
      </h2>
      <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 font-display text-[var(--foreground)]">
        Page Not Found
      </h3>
      <p className="text-[var(--foreground-muted)] max-w-md mx-auto mb-8 text-lg font-body">
        The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-8 py-4 bg-[var(--gold)] text-black font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,169,81,0.3)] hover:-translate-y-1"
      >
        Return to Home
      </Link>
    </div>
  );
}
