import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/landing-page-task/',
  server: { port: 5173, open: true },
  build: { outDir: 'dist', emptyOutDir: true },
});
