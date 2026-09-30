import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/entry.js',
      output: { entryFileNames: 'assets/app.js', assetFileNames: 'assets/[name][extname]' }
    },
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false
  }
});
