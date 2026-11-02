import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // ya vue jo bhi aap use kar rahe hain
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'BeatBox',
        short_name: 'BeatBox',
        description: 'BeatBox is a feature-rich music streaming Progressive Web App built with Vite. It offers fast performance, responsive UI, offline capabilities, and a smooth app-like experience on desktop and mobile devices.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})