import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//base:"https://thiago0liveira.github.io/Frontendmentor/",
//base:"/Frontendmentor/",
export default defineConfig({
  base:"/Frontendmentor/",
  plugins: [react()],
})
