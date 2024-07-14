import { defineConfig } from "vite";
import posthtml from '@vituum/vite-plugin-posthtml';
import path from "node:path";

export default defineConfig({
  plugins: [posthtml({
    root: '',
    include: '**/*.html',
    plugins: [],
    options: {
    },
  })],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, "./src") },
    ],
  },
});