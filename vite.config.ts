/* eslint-disable @typescript-eslint/no-var-requires */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@page': path.resolve(__dirname, 'src/page'),
      '@libs': path.resolve(__dirname, 'src/libs'),
    },
  },
});
