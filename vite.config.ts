import react from '@vitejs/plugin-react';
import 'dotenv/config';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: true
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    commonjsOptions: {
      include: []
    }
  },
  optimizeDeps: {
    disabled: false
  },
  define: {
    'process.env': process.env
  }
});
