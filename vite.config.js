import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages serves this repository from /kontur041-fps-full/.
  base: '/kontur041-fps-full/',
  server: { host: '0.0.0.0' },
  build: {
    target: 'es2022',
    sourcemap: true,
    // GitHub Pages can publish this directory directly from the default branch.
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true
  }
});
