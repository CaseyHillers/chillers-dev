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
        background: "var(--bg)",
        foreground: "var(--ink)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        border: "var(--line)",
      },
      fontFamily: {
        display: "var(--font-display)",
        sans: "var(--font-text)",
      },
      fontSize: {
        small: "var(--step-small)",
        body: "var(--step-body)",
        lead: "var(--step-lead)",
        head: "var(--step-head)",
      },
      spacing: {
        margin: "var(--margin)",
        section: "var(--section)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            fontSize: 'inherit',
            lineHeight: '1.65',
            a: {
              color: 'inherit',
              fontWeight: '500',
              textDecorationColor: 'var(--accent)',
              textUnderlineOffset: '0.25em',
              '&:hover': {
                color: 'var(--accent)',
              },
            },
            'h1, h2, h3, h4': {
              color: 'inherit',
            },
            h2: {
              fontFamily: 'var(--font-display)',
              fontWeight: '400',
              fontSize: 'var(--step-lead)',
              letterSpacing: '-0.01em',
              marginTop: '2.5em',
            },
            h3: {
              fontSize: '1em',
              fontWeight: '600',
            },
            strong: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
            },
            pre: {
              backgroundColor: 'var(--surface)',
              borderRadius: '0',
              color: 'inherit',
            },
            blockquote: {
              borderLeft: '0',
              backgroundColor: 'var(--surface)',
              padding: '0.25em 1.25em',
              color: 'inherit',
              fontStyle: 'normal',
            },
            hr: {
              border: '0',
              margin: '3em 0',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
