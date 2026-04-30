export const Blob = ({ className = "", color = "primary", animated = true }: { className?: string; color?: "primary" | "success" | "info" | "warning" | "danger"; animated?: boolean }) => {
  const colorMap = {
    primary: "bg-primary/40",
    success: "bg-success/40",
    info: "bg-info/40",
    warning: "bg-warning/50",
    danger: "bg-danger/40",
  };
  return <div aria-hidden className={`blob ${colorMap[color]} blur-3xl ${animated ? "animate-blob" : ""} ${className}`} />;
};

export const GridBg = ({ className = "" }: { className?: string }) => (
  <div aria-hidden className={`absolute inset-0 grid-pattern pointer-events-none ${className}`} />
);

export const DotBg = ({ className = "" }: { className?: string }) => (
  <div aria-hidden className={`absolute inset-0 dot-pattern opacity-40 pointer-events-none ${className}`} />
);

export const Sparkle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 6 6 1.5-6 1.5L12 18l-1.5-6-6-1.5 6-1.5z" />
  </svg>
);
