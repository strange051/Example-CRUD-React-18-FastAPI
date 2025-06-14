import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Example-CRUD-React-18-FastAPI/',    // ← make sure this matches your repo
  plugins: [react()],
})
