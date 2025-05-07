// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        global: resolve(__dirname, 'src/global/index.js'),
        home: resolve(__dirname, 'src/home/index.js'),
        about: resolve(__dirname, 'src/about/index.js'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
    watch: {
      include: ['src/**'], // Watch all files in the 'src' directory
      exclude: 'node_modules/**', // Exclude the 'node_modules' directory
    },
    // Enable minification for production builds
    minify: true,
  },
  server: {
    open: true,
    port: 3000,
    cors: {
      origin: '*', // or restrict to your Webflow domain
      methods: ['GET', 'HEAD'],
    },
  },
})
