import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  base: '/demoReactSW/',
  publicDir: 'workers',
  build: {
    outDir: 'docs',
    manifest: true,
    rollupOptions: {
      output: {
        chunkFileNames: `assets/[name].js`,
        entryFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name][extname]`
      }
    }
  }
})
