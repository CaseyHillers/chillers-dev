import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "./lib/posts";
import { formatPostDate } from "./lib/formatDate";
import SiteHeader from "./components/SiteHeader";

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.id === "1b_tokens") ?? posts[0];
  const recentPosts = featuredPost
    ? posts.filter((post) => post.id !== featuredPost.id)
    : posts;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-14">
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/profile.png"
                alt="Casey Hillers profile photo"
                width={72}
                height={72}
                className="h-16 w-16 flex-none rounded-full border border-border object-cover shadow-lg shadow-black/20 sm:h-[72px] sm:w-[72px]"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  Casey Hillers
                </p>
                <p className="mt-1 text-sm font-medium text-ice">
                  AI tooling, systems, and practical engineering notes
                </p>
              </div>
            </div>
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-ice-strong sm:text-4xl lg:text-5xl">
              Field notes from building with AI, infrastructure, and the work
              between.
            </h1>
          </div>

          <div className="flex items-center">
            {featuredPost ? (
              <Link
                href={`/posts/${featuredPost.id}`}
                className="group flex w-full lg:translate-y-12"
                aria-label={`Read ${featuredPost.title}`}
              >
                <article className="flex w-full flex-col rounded-lg border border-border bg-surface/80 p-5 transition hover:border-ice/55 hover:bg-surface-2 sm:p-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                      <span className="font-semibold uppercase tracking-[0.18em] text-ice">
                        Featured post
                      </span>
                      <span aria-hidden="true">/</span>
                      <span>{formatPostDate(featuredPost.date)}</span>
                      <span aria-hidden="true">/</span>
                      <span>{featuredPost.readingTime}</span>
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ice-strong transition group-hover:text-ice sm:text-3xl">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-4 leading-7 text-muted">
                      {featuredPost.description}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredPost.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ) : null}
          </div>
        </section>

        <section id="posts" className="mx-auto max-w-6xl border-t border-border/70 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Latest posts
            </h2>
            <p className="hidden text-sm text-muted sm:block">
              Engineering notes, experiments, and personal projects.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/posts/${post.id}`}
                className="group block"
                aria-label={`Read ${post.title}`}
              >
                <article className="flex h-full flex-col rounded-lg border border-border bg-surface/70 p-5 transition hover:-translate-y-0.5 hover:border-ice/50 hover:bg-surface-2">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
                    <span>{formatPostDate(post.date)}</span>
                    <span aria-hidden="true">/</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground transition group-hover:text-ice">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-7 text-muted">
                    {post.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="rounded-md bg-background/70 px-2.5 py-1 text-xs font-medium text-muted"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
