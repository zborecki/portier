import image from '@astrojs/image';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';

export default defineConfig({
  integrations: [
    astroI18next(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    react(),
    tailwind(),
  ],
});
