import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://thiago0liveira.github.io/Frontendmentor/",
  plugins: [react()],
})
