// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

/**
 * @type {import('astro/config').AstroUserConfig}
 */
export default defineConfig({
  // Integraciones
  integrations: [tailwind(), react()],
  // Salida del proyecto: estático o servidor
  output: "server" // Cambiar a "static" si prefieres salida estática
});
