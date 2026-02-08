import React from "react";
import { Linkedin, Github, Twitter, Rss } from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "./lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-ice tracking-tight">
            Casey Hillers
          </h1>
          <p className="text-lg sm:text-xl text-muted mb-8 leading-relaxed">
            Building cool things
          </p>

          <div className="flex justify-center space-x-6 mb-8 text-muted">
            <a
              href="https://linkedin.com/in/caseyhillers"
              rel="noopener noreferrer"
              className="hover:text-ice transition-colors"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/CaseyHillers"
              rel="noopener noreferrer"
              className="hover:text-ice transition-colors"
            >
              <Github size={32} />
            </a>
            <a
              href="https://bsky.app/profile/chillers.dev"
              rel="noopener noreferrer"
              className="hover:text-ice transition-colors"
            >
              <Twitter size={32} />
            </a>
            <a
              href="/posts/feed.xml"
              rel="noopener noreferrer"
              className="hover:text-ice transition-colors"
            >
              <Rss size={32} />
            </a>
          </div>
        </header>

        <main>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-ice tracking-tight">
            Latest Posts
          </h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-surface border border-border rounded-lg p-6 hover:border-ice hover:bg-surface-2 transition-colors"
              >
                <Link href={`/posts/${post.id}`}>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 hover:text-ice transition-colors tracking-tight">
                    {post.title}
                  </h3>
                </Link>
                <div className="text-muted mb-4 text-sm">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </div>
                <p className="text-muted leading-relaxed">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
