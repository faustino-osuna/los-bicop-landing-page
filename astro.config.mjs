// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://faustino-osuna.github.io',
  base: '/los-bicop-landing-page/',
  vite: {
    plugins: [tailwindcss()]
  }
});