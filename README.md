# chillers.dev

My personal blog built with NextJS.

## Getting Started

Use Node.js 22.13 or newer, then install the locked dependencies with `npm ci`.

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Dependency maintenance

Run `npm audit`, `npm run lint`, and `npm run build` after dependency updates.
Dependabot checks npm packages and GitHub Actions weekly once
`.github/dependabot.yml` is on the default branch. Related Next.js, React, and
Tailwind updates are grouped to keep their versions compatible.

ESLint 9, TypeScript 6, and Lucide 0.577 are the newest compatible releases for
the current lint plugins and social icons. Development and production use Webpack
because the MDX configuration contains JavaScript remark plugins.

The dependency overrides address vulnerable upstream dependencies:

- Typography uses the patched PostCSS selector parser.
- Gray-matter uses YAML 4 with an explicit `load` engine in `app/lib/posts.ts`.
- Next's ESLint plugin uses `tools/fast-glob-compat`, a small adapter backed by
  `tinyglobby`, instead of fast-glob's unpatched `braces` dependency. The adapter
  implements the plugin's `globSync` directory lookup and preserves its path format.

Revisit these overrides when upstream packages adopt patched dependencies.
MDX JavaScript expressions stay blocked; use literal props and CSS classes in posts.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
