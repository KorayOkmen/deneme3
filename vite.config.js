import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Artık "@/components/..." şeklinde import edebilirsin
    },
  },
  server: {
    port: 5173, // Gerekirse değiştirebilirsin
    open: true, // Tarayıcıyı otomatik açar
    proxy: {
      '/users': 'http://localhost:8000',
    },
  },
})
