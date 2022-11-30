/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./assets/**/*.js",
    "./content/**/*.{md,html}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // light colors for prose
            "--tw-prose-body": theme("colors.black"),
            "--tw-prose-headings": theme("colors.black"),
            "--tw-prose-lead": theme("colors.gray.light.600"),
            "--tw-prose-links": theme("colors.blue.light.500"),
            "--tw-prose-bold": theme("colors.black"),
            "--tw-prose-counters": theme("colors.black"),
            "--tw-prose-bullets": theme("colors.black"),
            "--tw-prose-hr": theme("colors.divider.light"),
            "--tw-prose-quotes": theme("colors.black"),
            "--tw-prose-quote-borders": theme("colors.blue.light.500"),
            "--tw-prose-captions": theme("colors.gray.light.600"),
            "--tw-prose-code": theme("colors.black"),
            "--tw-prose-pre-code": theme("colors.gray.light.800"),
            "--tw-prose-pre-bg": theme("colors.white"),
            "--tw-prose-th-borders": theme("colors.gray.light.200"),
            "--tw-prose-td-borders": theme("colors.gray.light.200"),

            // dark colors for prose
            "--tw-prose-invert-body": theme("colors.white"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.gray.dark.600"),
            "--tw-prose-invert-links": theme("colors.blue.dark.500"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.white"),
            "--tw-prose-invert-bullets": theme("colors.white"),
            "--tw-prose-invert-hr": theme("colors.divider.dark"),
            "--tw-prose-invert-quotes": theme("colors.white"),
            "--tw-prose-invert-quote-borders": theme("colors.blue.dark.500"),
            "--tw-prose-invert-captions": theme("colors.gray.dark.600"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.background.light"),
            "--tw-prose-invert-pre-bg": theme("colors.gray.dark.200"),
            "--tw-prose-invert-th-borders": theme("colors.gray.dark.200"),
            "--tw-prose-invert-td-borders": theme("colors.gray.dark.200"),

            // design system typographic overrides
            p: {
              lineHeight: 1.5
            },
            a: {
              fontWeight: 400
            },
            h1: {
              fontWeight: "500",
              fontSize: "2.5rem",
              letterSpacing: "-0.015em",
              lineHeight: 1.167
            },
            h2: {
              fontWeight: "500",
              fontSize: "2rem",
              lineHeight: 1.2
            },
            h3: {
              fontWeight: "500",
              fontSize: "1.5rem",
              letterSpacing: "-0.015em",
              lineHeight: 1.167
            },
            h4: {
              fontWeight: 500,
              fontSize: "1.2857rem",
              letterSpacing: "-0.015em",
              lineHeight: 1.235
            },
            h5: {
              fontWeight: 500,
              fontSize: "1.1429",
              lineHeight: 1.75
            }
          }
        }
      })
    },

    // theme values
    fontSize: {
      xs: ["0.7143rem", { letterSpacing: "0.015em", fontWeight: 500 }],
      sm: "0.851rem",
      base: ["14px", {}],
      lg: ["1.1429rem", { fontWeight: 500 }],
      xl: ["1.2857rem", { letterSpacing: "-0.015em", fontWeight: 500 }],
      "2xl": ["1.5rem", { letterSpacing: "-0.015em", fontWeight: 500 }],
      "3xl": ["2rem", { fontWeight: 500 }],
      "4xl": ["2.5rem", { letterSpacing: "-0.015em", fontWeight: 500 }]
    },

    screens: {
      sm: { max: "640px" },
      md: { max: "1024px" },
      lg: { max: "1280px" },
      xl: { max: "1440px" }
    },

    colors: {
      white: "#fff",
      black: "#000",

      background: {
        light: "#f9f9fa",
        dark: "#1c262d"
      },

      divider: {
        light: "hsla(0, 0%, 0%, 0.1)",
        dark: "hsla(0, 0%, 100%, 0.05)"
      },

      amber: {
        light: {
          DEFAULT: "#b85504",
          100: "#fff4dc",
          200: "#fce1a9",
          300: "#fbb552",
          400: "#dd7805",
          500: "#b85504",
          600: "#a9470f",
          700: "#893607",
          800: "#421a02"
        },
        dark: {
          DEFAULT: "#ed8d25",
          100: "#753715",
          200: "#944307",
          300: "#af560a",
          400: "#cd6a0a",
          500: "#ed8d25",
          600: "#f6a650",
          700: "#f8b974",
          800: "#fac892"
        }
      },

      red: {
        light: {
          DEFAULT: "#d52536",
          100: "#fdeaea",
          200: "#f6cfd0",
          300: "#eea3a5",
          400: "#e25d68",
          500: "#d52536",
          600: "#b72132",
          700: "#8b1924",
          800: "#350a10"
        },
        dark: {
          DEFAULT: "#dd4659",
          100: "#741624",
          200: "#951c2f",
          300: "#bc233c",
          400: "#d1334c",
          500: "#dd4659",
          600: "#e96c7c",
          700: "#ea8e9a",
          800: "#f0aab4"
        }
      },

      violet: {
        light: {
          DEFAULT: "#7d2eff",
          100: "#f7ecff",
          200: "#e9d4ff",
          300: "#c9a6ff",
          400: "#9860ff",
          500: "#7d2eff",
          600: "#6d00eb",
          700: "#5700bb",
          800: "#220041"
        },
        dark: {
          DEFAULT: "#a371fc",
          100: "#491d7b",
          200: "#5f25a0",
          300: "#7835d3",
          400: "#8a53ec",
          500: "#a371fc",
          600: "#b38bfc",
          700: "#c5a6fd",
          800: "#d4bdfe"
        }
      },

      blue: {
        light: {
          DEFAULT: "#086dd7",
          100: "#e5f2fc",
          200: "#c0e0fa",
          300: "#8bc7f5",
          400: "#1c90ed",
          500: "#086dd7",
          600: "#0055bd",
          700: "#1144a6",
          800: "#00084d"
        },
        dark: {
          DEFAULT: "#3391ee",
          100: "#06326d",
          200: "#08489b",
          300: "#1760ca",
          400: "#2673e3",
          500: "#3391ee",
          600: "#55a4f1",
          700: "#7cb9f4",
          800: "#98c8f6"
        }
      },

      green: {
        light: {
          DEFAULT: "#2e7f74",
          100: "#e6f5f3",
          200: "#c6eae1",
          300: "#88d5c0",
          400: "#3ba08d",
          500: "#2e7f74",
          600: "#1e6c5f",
          700: "#185a51",
          800: "#0c2c28"
        },
        dark: {
          DEFAULT: "#2aa391",
          100: "#11423b",
          200: "#155048",
          300: "#176254",
          400: "#228375",
          500: "#2aa391",
          600: "#3cc1ad",
          700: "#7accc3",
          800: "#a5ddd6"
        }
      },

      gray: {
        light: {
          DEFAULT: "#677285",
          100: "#efeff2",
          200: "#e1e2e6",
          300: "#c4c8d1",
          400: "#8993a5",
          500: "#677285",
          600: "#505968",
          700: "#393f49",
          800: "#17191e"
        },
        dark: {
          DEFAULT: "#7794ab",
          100: "#141b1f",
          200: "#27343e",
          300: "#364754",
          400: "#465c6e",
          500: "#7794ab",
          600: "#94abbc",
          700: "#adbecb",
          800: "#c4d0da"
        }
      }
    },

    fontFamily: {
      sans: [
        "Roboto",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif"
      ],
      mono: ["Roboto Mono", "monospace"]
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
