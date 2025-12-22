# Gemini Context & Project Guide

This document provides context for Gemini (or other AI assistants) about the `chillers-dev` repository.

## Project Overview
`chillers-dev` is a personal portfolio and blog website built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. It uses **MDX** for blog content.

## Tech Stack
- **Framework:** Next.js 15
- **Styling:** Tailwind CSS (with `@tailwindcss/typography`)
- **Content:** MDX (via `@next/mdx` and `next-mdx-remote`)
- **Markdown Processing:** `gray-matter`, `remark-gfm`, `rehype-highlight`
- **Icons:** `lucide-react`
- **Language:** TypeScript

## Key Directories & Files
- `app/`: The heart of the application using the Next.js App Router.
  - `page.tsx`: The landing page/home.
  - `layout.tsx`: Global layout and metadata.
  - `components/`: React components, including MDX wrappers.
  - `lib/`: Utility functions (e.g., `posts.ts` for markdown processing).
  - `posts/`: Blog post management.
    - `welcome.mdx`: A sample blog post.
    - `[id]/page.tsx`: Dynamic route for individual blog posts.
- `public/`: Static assets (images, etc.).

## Common Tasks & Workflows

### Adding a New Blog Post
1. Create a `.mdx` file in `app/posts/` (or a dedicated content directory if specified).
2. Ensure it has the necessary frontmatter (title, date, description).
3. The dynamic route `app/posts/[id]/page.tsx` will handle rendering.

### Modifying Styles
- Global styles are in `app/globals.css`.
- Tailwind is used throughout for component-level styling.
- The blog content styling is managed via `@tailwindcss/typography` (the `prose` class) within the `MDXContent` and `MDXWrapper` components.

### Personal Links
- Social media links (LinkedIn, GitHub, Bluesky) are currently hardcoded in `app/page.tsx`.

### MDX Rendering
- Blog posts are rendered using the `MDXContent` component located in `app/components/MDXContent.tsx`.
- This component handles remote MDX processing using `next-mdx-remote`.

### Development Commands
- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run lint`: Run ESLint.

## Coding Standards
- Follow established TypeScript patterns.
- Use Tailwind CSS for all styling where possible.
- Maintain the clean, minimal aesthetic of a personal site.
- Use `lucide-react` for iconography.
