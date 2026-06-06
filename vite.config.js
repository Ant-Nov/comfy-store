import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import eslint from 'vite-plugin-eslint';
import { playwright } from '@vitest/browser-playwright';

// https://vite.dev/config/
export default defineConfig({
  base: '/comfy-store/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [
        { browser: 'chromium' },
      ],
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    eslint({
      failOnError: true,
    })
  ],
});
