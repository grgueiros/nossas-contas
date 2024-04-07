/** @type {import('tailwindcss').Config} */

import defaultConfig from '@repo/tailwind-config';

module.exports = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  ...defaultConfig
}

