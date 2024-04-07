import type { Config } from "tailwindcss";

import sharedConfig from 'tailwind-config/tailwind.config';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}",
  ],
  ...sharedConfig
};
export default config;
