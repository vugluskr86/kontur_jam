import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  server: { host: '0.0.0.0' },
  build: {
    target: 'es2022',
    sourcemap: true,
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        game: resolve(process.cwd(), 'index.html'),
        audioSandbox: resolve(process.cwd(), 'audio-sandbox.html')
      }
    }
  }
});
