import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
    Sitemap({
      hostname: 'https://amphi.site',
      dynamicRoutes: ["/", '/notes', '/music', "/photos", "/cloud", "/server", "/pricing", "/privacy", "/terms", "/archive/privacy", "/archive/terms"]
    }),
  ],
})
