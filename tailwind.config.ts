import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        muted: "var(--muted)",
        ice: "var(--ice)",
        "ice-strong": "var(--ice-strong)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'var(--ice)',
              '&:hover': {
                color: 'var(--ice-strong)',
              },
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
            },
            pre: {
              backgroundColor: 'var(--surface-2)',
              border: '1px solid var(--border)',
              color: 'inherit',
            },
            blockquote: {
              color: 'var(--muted)',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
