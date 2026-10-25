import React from "react";
import Link from "next/link";
import { getAllPosts, type Post } from "./lib/posts";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import PhotoStrip, { type StripFrame } from "./components/PhotoStrip";

// Photographs from the posts (with their alt text and captions), resized for the strip in public/strip.
const stripFrames: StripFrame[] = [
  { src: "/strip/digitizing_film_japan.jpg", width: 1068, height: 720, alt: "Negative of Japan", caption: "Negative of Japan", postId: "digitization", postTitle: "Digitizing Media" },
  { src: "/strip/niagara.jpg", width: 540, height: 720, alt: "Niagara Falls", caption: "Niagara Falls Presidential Suite", postId: "2025", postTitle: "Reflection on 2025" },
  { src: "/strip/digitizing_vhs.jpg", width: 542, height: 720, alt: "VHS station", caption: "VHS tape digitization station.", postId: "digitization", postTitle: "Digitizing Media" },
  { src: "/strip/digitizing_film.jpg", width: 956, height: 720, alt: "Box of negatives", caption: "A box of negatives", postId: "digitization", postTitle: "Digitizing Media" },
  { src: "/strip/digitizing_garage_boxes.jpg", width: 540, height: 720, alt: "Large amount of collapsed boxes on the side of the garage", caption: "Collapsed boxes after the three-day garage sale.", postId: "digitization", postTitle: "Digitizing Media" },
  { src: "/strip/digitizing_film_disneyland.jpg", width: 1068, height: 720, alt: "Negative of Disneyland", caption: "Negative of Disneyland", postId: "digitization", postTitle: "Digitizing Media" },
];

function groupByYear(posts: Post[]) {
  const years = new Map<string, Post[]>();
  for (const post of posts) {
    const year = post.date.slice(0, 4);
    years.set(year, [...(years.get(year) ?? []), post]);
  }
  return Array.from(years.entries());
}

function formatShortDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="flex flex-col gap-10 pt-4 sm:pt-8">
          <PhotoStrip frames={stripFrames} />

          <div className="px-margin">
            <h1 className="hero-name">Casey Hillers</h1>
            <p className="mt-4 max-w-[38ch] text-lead leading-snug">
              Field notes from building with AI, infrastructure, and the work
              between.
            </p>
          </div>
        </section>

        <section id="posts" className="mt-16 px-margin sm:mt-20">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h2 className="font-display text-lead">
              Latest posts
            </h2>
            <p className="text-muted">
              Engineering notes, experiments, and personal projects.
            </p>
          </div>

          {groupByYear(posts).map(([year, yearPosts]) => (
            <div key={year} className="mt-8 sm:mt-10">
              <h3 className="py-3 text-lead text-accent">{year}</h3>
              <ol>
                {yearPosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      href={`/posts/${post.id}`}
                      className="post-row grid gap-x-10 gap-y-1 py-5 lg:grid-cols-[minmax(0,6fr)_minmax(0,3fr)_minmax(0,2fr)]"
                    >
                      <span>
                        <span className="post-row-title block text-lead leading-snug">
                          {post.title}
                        </span>
                        <span className="mt-1 block max-w-[60ch] text-muted">
                          {post.description}
                        </span>
                      </span>
                      <span className="hidden text-lead leading-snug text-muted lg:block">
                        {post.topics.join(", ")}
                      </span>
                      <span className="text-small text-muted tabular-nums lg:text-right lg:text-lead lg:leading-snug">
                        <span className="text-foreground">{formatShortDate(post.date)}</span>
                        <span className="lg:hidden"> · {post.readingTime}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
