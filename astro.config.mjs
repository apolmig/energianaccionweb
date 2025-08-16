// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://energianaccion.org',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
      customPages: [
        'https://energianaccion.org/',
        'https://energianaccion.org/partners',
        'https://energianaccion.org/blog',
        'https://energianaccion.org/cortos', 
        'https://energianaccion.org/marketing',
        'https://energianaccion.org/curso2018-2019',
        'https://energianaccion.org/curso2019-2020',
        'https://energianaccion.org/curso2020-2021',
        'https://energianaccion.org/curso2021-2022'
      ]
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    assets: 'assets'
  }
});