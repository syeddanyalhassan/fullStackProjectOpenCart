// C:\MERNAI\OneCart\frontend\vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Import Tailwind CSS plugin
 
export default defineConfig({
  plugins: [
    react(),tailwindcss()
    // No explicit tailwindcss plugin here. Vite will auto-detect postcss.config.js
  ],
});