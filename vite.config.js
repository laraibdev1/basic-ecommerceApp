import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Additional server settings if needed
    hmr: {
      overlay: false,
    },
  },
});
