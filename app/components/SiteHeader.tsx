import Link from "next/link";
import { socialLinks } from "../lib/links";

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-6 px-margin py-5">
      <Link href="/" className="font-medium transition-colors hover:text-accent">
        chillers.dev
      </Link>

      <nav aria-label="Primary navigation">
        <ul className="flex items-center gap-5 text-small sm:gap-8">
          <li>
            <a href="/posts/feed.xml" className="link py-2 text-muted">
              RSS
            </a>
          </li>
          {socialLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="link py-2 text-muted"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
