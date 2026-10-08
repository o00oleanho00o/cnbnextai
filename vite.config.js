import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['cnbnextai.com', 'www.cnbnextai.com'],
  },
  preview: {
    allowedHosts: ['cnbnextai.com', 'www.cnbnextai.com'],
  },
})
