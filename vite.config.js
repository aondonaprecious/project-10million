import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // Plugins array: only plugins go here
  build: {
    outDir: 'dist', // Vercel expects this
  },
});
