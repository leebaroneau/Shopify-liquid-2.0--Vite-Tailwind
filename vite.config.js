import { defineConfig } from 'vite';
import pageReload from 'vite-plugin-page-reload';
import shopify from 'vite-plugin-shopify';

export default {
  plugins: [
    shopify({
      // Root path to your Shopify theme directory (location of snippets, sections, templates, etc.)
      themeRoot: './',
      // Front-end source code directory
      sourceCodeDir: 'frontend',
      // Front-end entry points directory
      entrypointsDir: 'frontend/entrypoints',
      // Additional files to use as entry points (accepts an array of file paths or glob patterns)
      additionalEntrypoints: [],
      // Specifies the file name of the snippet that loads your assets
      snippetFile: 'c-vite.liquid',
      // Specifies whether to append version numbers to your production-ready asset URLs in `snippetFile`
      versionNumbers: true,
    }),
    pageReload('/tmp/theme.update'),
  ],
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: 'c-[name].min.js',
        chunkFileNames: 'c-[name].min.js',
        assetFileNames: 'c-[name].min[extname]',
      },
    },
  },
};
