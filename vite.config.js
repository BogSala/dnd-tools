import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vueDevTools from 'vite-plugin-vue-devtools'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vueDevTools(),
    vue()
  ],
  base: '/dnd-tools/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/scss/global.scss";`,
        quietDeps: true,
      }
    }
  },
})
