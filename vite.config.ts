import path from "path"
import react from "@vitejs/plugin-react"
import vercel from 'vite-plugin-vercel';
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    port: process.env.PORT as unknown as number
  },
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
  },
  plugins: [react(), vercel()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})