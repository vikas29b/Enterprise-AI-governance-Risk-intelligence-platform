import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname || '.', '.'),
      },
    },
    build: {
      chunkSizeWarningLimit: 1200,
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      strictPort: false,
      // Allow the hosted development environment to proxy HMR.
      hmr: {
        protocol: 'wss',
        clientPort: 443,
      },
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
