// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://apolmig.github.io/energianaccionweb',
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    assets: 'assets'
  }
});