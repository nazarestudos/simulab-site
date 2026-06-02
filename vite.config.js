import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set base to './' for relative paths (GitHub Pages / Antigravity compatible)
  base: '/simulab-site/',
})
