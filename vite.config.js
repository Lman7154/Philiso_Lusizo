// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cv: [resolve(__dirname, 'src/cv/cv.html'), resolve(__dirname, 'src/cv/cv.js')],
        projects: [resolve(__dirname, 'src/projects/projects.html'), resolve(__dirname, 'src/projects/projects.js')],
      },
    },
  },
});

//For each entry point, we use resolve(__dirname, 'path/to/file.html') to specify the path to the respective HTML file relative to the project root.

//With this configuration, Vite will include all three HTML files (index.html, cv.html, and projects.html) in the build process, resulting in separate bundles for each entry point.

//will also include the scripts of the files