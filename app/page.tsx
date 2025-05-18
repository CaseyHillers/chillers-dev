import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import { getAllPosts } from './lib/posts';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 leading-[1.2] tracking-tight">
            Casey Hillers
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Building cool things, one line of code at a time
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://linkedin.com/in/caseyhillers"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/CaseyHillers"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <Github size={32} />
            </a>
            <a
              href="https://bsky.app/profile/chillers.dev"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Twitter size={32} />
            </a>
          </div>
        </header>

        <main>
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 tracking-tight">
            Latest Posts
          </h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link href={`/posts/${post.id}`}>
                  <h3 className="text-2xl font-semibold mb-2 hover:text-blue-400 transition-colors tracking-tight">
                    {post.title}
                  </h3>
                </Link>
                <div className="text-gray-400 mb-4 text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <p className="text-gray-300 leading-relaxed">
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