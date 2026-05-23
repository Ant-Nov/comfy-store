import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import eslint from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  base: '/comfy-store/',
  plugins: [
    react(),
    tailwindcss(),
    eslint({
      failOnError: true,
    })
  ],
});
