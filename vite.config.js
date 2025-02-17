// filepath: /C:/Users/edwar/Downloads/pontifex-user-profile/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/pontifex-user-profile/',
  plugins: [react()]
});