export default function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute dot-grid opacity-70 ${className}`}
    />
  );
}
