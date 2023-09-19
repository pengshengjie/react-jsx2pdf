import { defineConfig } from 'vite'
export default defineConfig({
  root: './example',
  build: {
    outDir: '../dist/example',
  },
  server: {
    open: '/index.html',
  },
  
})