import { Github, Linkedin, Rss, Send } from "lucide-react";

const socialLinks = [
  {
    href: "https://linkedin.com/in/caseyhillers",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/CaseyHillers",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://bsky.app/profile/chillers.dev",
    label: "Bluesky",
    icon: Send,
  },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-muted">
          <span className="h-2 w-2 rounded-full bg-ice shadow-[0_0_18px_rgba(125,211,252,0.7)]" />
          CASEY HILLERS
        </div>

        <nav aria-label="Primary navigation" className="flex items-center gap-2">
          <a
            href="/posts/feed.xml"
            aria-label="RSS feed"
            title="RSS feed"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted transition hover:bg-surface hover:text-ice"
          >
            <Rss size={18} aria-hidden="true" />
          </a>
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted transition hover:bg-surface hover:text-ice"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
