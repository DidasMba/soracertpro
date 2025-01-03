/** @format */

import { MonteCarlo } from "next/font/google";
import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    daisyui: {
        themes: ["light"],
    },
    prefix: "",
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                // customBlue: "rgb(5, 38, 79)",
                customBlue: "rgb(5, 38, 79)",
                // customHoverBlue: "rgb(83, 223, 252)",
                customHoverBlue: "rgb(15, 221, 204)",

                // customButton: "rgb(83, 223, 252)",
                customButton: "rgb(83, 223, 252)",
                backgroundImage: {
                    "gradient-radial":
                        "radial-gradient(var(--tw-gradient-stops))",
                    "gradient-conic":
                        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },

                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },

            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            fontFamily: {
                monteserrat: ["Montserrat", "sans-serif"],
            },
            fontSize: {
                "2xl": "1.5rem", // 24px
                "3xl": "1.875rem", // 30px
                "4xl": "2.25rem", // 36px
                "8xl": "6rem", // 96px, or adjust to your desired size

                "custom-large": "3rem", // 48px (custom size)
            },
        },
    },
    variants: {
        display: ["group-hover"],
    },
    plugins: [
        require("tailwindcss-animate"),
        require("daisyui"),
        require("@tailwindcss/typography"),
    ],
} satisfies Config;

export default config;
