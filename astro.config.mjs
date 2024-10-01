// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify'; 

/**
 * @type {import('astro/config').AstroUserConfig}
 */
export default defineConfig({
  // Integraciones
  integrations: [tailwind(), react(), netlify()],

  output: "server", // Cambiar a "static" si prefieres salida estática
  adapter: netlify(),
  
  // Configuración de Vite
  vite: {
    build: {
      rollupOptions: {
      }
    }
  }
});
