import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.albi-international.org',

  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Personnalisation par page
      serialize(item) {
        // Page d'accueil : priorité max
        if (item.url === 'https://www.albi-international.org/') {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        // Pages principales
        if ([
          'https://www.albi-international.org/actions/',
          'https://www.albi-international.org/sensibilisation/',
          'https://www.albi-international.org/soutenir/',
          'https://www.albi-international.org/histoire/',
        ].includes(item.url)) {
          return { ...item, priority: 0.8, changefreq: 'weekly' };
        }
        // Articles de blog
        if (item.url.includes('/blog/')) {
          return { ...item, priority: 0.6, changefreq: 'monthly' };
        }
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
