import { defineConfig } from 'vite';
import path from 'path';
import vueDevTools from 'vite-plugin-vue-devtools';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vueDevTools(),
    vue()
  ],
  base: '/dnd-tools/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
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
