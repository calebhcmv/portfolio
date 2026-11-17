// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  // Gera /about.html etc.: o Cloudflare Pages serve /about sem redirecionar para /about/.
  build: { format: 'file' },

  vite: {
    plugins: [tailwindcss()],
  },
});
