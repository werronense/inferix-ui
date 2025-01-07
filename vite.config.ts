import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter()],
  resolve: {
    alias: {
      '@/ui/components': '/src/ui/components',
      '@/ui/widgets': '/src/ui/widgets',
      '@': '/src',
    },
  },
});