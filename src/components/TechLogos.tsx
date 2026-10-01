type LogoName =
  | "html5"
  | "css3"
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "tailwind"
  | "git"
  | "github"
  | "ga4"
  | "gtm"
  | "figma"
  | "vercel"
  | "hostinger"
  | "domain";

const labels: Record<LogoName, string> = {
  html5: "HTML5",
  css3: "CSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  react: "React",
  nextjs: "Next.js",
  tailwind: "Tailwind CSS",
  git: "Git",
  github: "GitHub",
  ga4: "GA4",
  gtm: "GTM",
  figma: "Figma",
  vercel: "Vercel",
  hostinger: "Hostinger VPS",
  domain: "Domain",
};

function Icon({ name, size = 22 }: { name: LogoName; size?: number }) {
  const s = { width: size, height: size };

  switch (name) {
    case "html5":
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <path fill="#E34F26" d="M3.5 2h17l-1.5 17.2L12 22l-7-2.8L3.5 2z" />
          <path fill="#EF652A" d="M12 3.2V20.6l5.6-2.2 1.3-15.2H12z" />
          <path fill="#fff" d="M12 9.2H8.4l.2 2.2H12v-2.2zm0 4.8H8.8l.2 2.3L12 17.2v-3.2zm3.6-4.8H12v2.2h1.8l-.2 1.6H12v2.2l3.2-.9.6-5.1z" />
        </svg>
      );
    case "css3":
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <path fill="#1572B6" d="M3.5 2h17l-1.5 17.2L12 22l-7-2.8L3.5 2z" />
          <path fill="#33A9DC" d="M12 3.2V20.6l5.6-2.2 1.3-15.2H12z" />
          <path fill="#fff" d="M12 9.2H8.3l.2 2.2H12V9.2zm0 8-3.1-.9-.2-2.1h2.2l.1 1 .9.3.9-.3.1-1h2.2l-.3 3-2.8.9zM15.8 11.4H12V9.2h5.5l-.2 1.8-.5 5.5-3.2.9v-2.2l1.6-.4.1-1.4z" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M11 17.7c0 1.7-1 2.8-2.6 2.8-1.4 0-2.3-.8-2.7-1.7l1.5-.9c.2.5.5.9 1.1.9.6 0 1-.4 1-1.2v-5.2H11v5.3zm3.3 2.7c-1.6 0-2.7-.8-3.2-1.9l1.5-.9c.3.6.8 1.1 1.6 1.1.7 0 1.1-.3 1.1-.8 0-.5-.4-.7-1.3-1.1l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.9 0-1.6 1.2-2.7 3.1-2.7 1.4 0 2.3.5 3 1.8l-1.4.9c-.3-.5-.7-.8-1.4-.8-.6 0-1 .4-1 .8 0 .5.4.8 1.3 1.1l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.3 2.8-3.2 2.8z" fill="#111" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path fill="#fff" d="M13.4 11.2h-2.3V19H9.1v-7.8H6.8V9.4h6.6v1.8zm2.3 7.9c-1.8 0-3-.9-3.4-2.1l1.5-.7c.2.7.8 1.2 1.8 1.2.8 0 1.3-.4 1.3-1 0-.6-.4-.9-1.5-1.2l-.6-.2c-1.6-.4-2.6-1.3-2.6-2.8 0-1.6 1.3-2.7 3.2-2.7 1.5 0 2.5.5 3.1 1.8l-1.4.8c-.3-.6-.8-.9-1.6-.9-.7 0-1.2.4-1.2.9 0 .6.4.8 1.5 1.1l.6.2c1.8.5 2.7 1.3 2.7 2.9 0 1.8-1.4 2.9-3.4 2.9z" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
          <g fill="none" stroke="#61DAFB" strokeWidth="1.3">
            <ellipse cx="12" cy="12" rx="10" ry="4.2" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" className="text-ink" {...s}>
          <circle cx="12" cy="12" r="11" fill="currentColor" />
          <path d="M17.4 16.8V8.4h-1.7l-5.2 7.3h-.1V8.4H8.6v8.4h1.7l5.3-7.4h.1v7.4h1.7z" className="fill-card" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <path
            fill="#38BDF8"
            d="M12 6.4c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.4-1.5.7.2 1.3.7 1.8 1.4.9 1.3 1.9 2.5 4.8 2.5 2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.3-.7-1.8-1.4C15.9 7.6 14.9 6.4 12 6.4zM7 12.8c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.4-1.5.7.2 1.3.7 1.8 1.4.9 1.3 1.9 2.5 4.8 2.5 2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.3-.7-1.8-1.4-1-.1-2-2.5-4.8-2.5z"
          />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <path fill="#F05032" d="M21.6 11.1 12.9 2.4a1.4 1.4 0 0 0-2 0l-2 2 2.5 2.5a2 2 0 0 1 2.1.4 2 2 0 0 1 .4 2.1l2.4 2.4a2 2 0 1 1-1.2 1.1L13 11.1v5.2a2 2 0 1 1-1.6.1V10.9a2 2 0 0 1-1.1-2.6L8 5.8 2.4 11.4a1.4 1.4 0 0 0 0 2l8.7 8.7a1.4 1.4 0 0 0 2 0l8.5-8.5a1.4 1.4 0 0 0 0-2z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className="text-ink" {...s}>
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.9.6-3.5-1.4-3.5-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.3-.3-4.7-1.2-4.7-5.2 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.7 1.1 1.7 1.1 2.8 0 4-2.4 4.9-4.7 5.2.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z"
          />
        </svg>
      );
    case "ga4":
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <rect x="3" y="13" width="4" height="8" rx="2" fill="#F9AB00" />
          <rect x="10" y="8" width="4" height="13" rx="2" fill="#E37400" />
          <rect x="17" y="3" width="4" height="18" rx="2" fill="#4285F4" />
        </svg>
      );
    case "gtm":
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <path fill="#4285F4" d="M12.7 2.3 20.4 10a2.3 2.3 0 0 1 0 3.3L12.7 21a2.3 2.3 0 0 1-3.3 0L2 13.6 8.7 7l4 4 4.7-4.7-4.7-4z" />
          <circle cx="8.7" cy="18.4" r="3.2" fill="#8AB4F8" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <circle cx="12" cy="7" r="3.2" fill="#F24E1E" />
          <circle cx="12" cy="12" r="3.2" fill="#A259FF" />
          <circle cx="12" cy="17" r="3.2" fill="#0ACF83" />
          <circle cx="16.8" cy="7" r="3.2" fill="#FF7262" />
          <circle cx="16.8" cy="12" r="3.2" fill="#1ABCFE" />
        </svg>
      );
    case "vercel":
      return (
        <svg viewBox="0 0 24 24" className="text-ink" {...s}>
          <rect width="24" height="24" rx="4" fill="currentColor" />
          <path className="fill-card" d="M12 6.2 19.4 19H4.6L12 6.2z" />
        </svg>
      );
    case "hostinger":
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <rect width="24" height="24" rx="4" fill="#673DE6" />
          <path
            fill="#fff"
            d="M8.1 5.8c0-.7.6-1.3 1.3-1.3h.2c.7 0 1.3.6 1.3 1.3v4.4h2.2V5.8c0-.7.6-1.3 1.3-1.3h.2c.7 0 1.3.6 1.3 1.3v12.4c0 .7-.6 1.3-1.3 1.3h-.2c-.7 0-1.3-.6-1.3-1.3v-4.4h-2.2v4.4c0 .7-.6 1.3-1.3 1.3h-.2c-.7 0-1.3-.6-1.3-1.3V5.8z"
          />
        </svg>
      );
    case "domain":
      return (
        <svg viewBox="0 0 24 24" {...s}>
          <circle cx="12" cy="12" r="11" fill="#2563EB" />
          <ellipse cx="12" cy="12" rx="4.6" ry="10" fill="none" stroke="#fff" strokeWidth="1.4" />
          <path
            d="M2.2 12h19.6M4.2 7.2h15.6M4.2 16.8h15.6"
            fill="none"
            stroke="#fff"
            strokeWidth="1.4"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function TechLogo({
  name,
  size = 22,
  showLabel = true,
  className = "",
}: {
  name: LogoName;
  size?: number;
  showLabel?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Icon name={name} size={size} />
      {showLabel ? (
        <span className="text-sm font-medium text-ink">{labels[name]}</span>
      ) : null}
    </span>
  );
}

export function techLabel(name: LogoName) {
  return labels[name];
}

export type { LogoName };
