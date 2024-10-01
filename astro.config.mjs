// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node'; // Importa el adaptador de Node.js

/**
 * @type {import('astro/config').AstroUserConfig}
 */
export default defineConfig({
  // Integraciones
  integrations: [tailwind(), react()],
  // Salida del proyecto: estático o servidor
  output: "server", // Modo servidor
  adapter: node(),  // Configura el adaptador de Node.js para el modo servidor
});
