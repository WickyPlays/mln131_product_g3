import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/mln131_product_g3/",
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@utils': '/src/components/utils',
      '@scss': '/src/scss',
      '@commons': '/src/components/commons',
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://simple-gemini-express.onrender.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})

