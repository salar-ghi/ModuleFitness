/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
				transparent: 'transparent',
				current: 'currentColor',
				light: '#F6F6F6',
				dark: '#0e7490',
				'light-green': '#c9e4db',
				'tint-green': '#6eb79e',
				'primary-green': '#4AA586',
				'hover-green': '#047857'
			},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
    require("flowbite/plugin")
  ],
};
export default config;
