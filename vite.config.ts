import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        chunkFileNames: `assets/[name].js`,
        entryFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name][extname]`
      }
    }
  }
})
