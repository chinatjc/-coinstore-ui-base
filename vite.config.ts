import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { getDirname } from './utils';

const __dirname = getDirname(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: /^@coinstore-ui\/(.*)/, replacement: path.resolve(__dirname, './packages/$1/src') }],
  },
  plugins: [react()],
});
