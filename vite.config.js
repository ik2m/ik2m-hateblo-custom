import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/ikz-hateblo-sustom/",
  build: {
    outDir: './dist/',
    rollupOptions: {
      input: ['src/app.js'],
      output: {
        entryFileNames: 'script.js',
        assetFileNames: 'style.css',
      },
    },
  },
})
