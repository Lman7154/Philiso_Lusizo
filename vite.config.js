// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cv: resolve(__dirname, 'src/cv/cv.html'),
        projects: resolve(__dirname, 'src/projects/projects.html'),
      },
    },
  },
});
