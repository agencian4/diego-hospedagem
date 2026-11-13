import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Troque SITE_URL pelo domínio definitivo antes de publicar (usado em canonical, OG e sitemap).
const site = process.env.SITE_URL ?? 'https://airbnb-diego.vercel.app';

export default defineConfig({
  site,
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  image: { responsiveStyles: false },
});
