import { defineConfig } from "vite";
import posthtml from '@vituum/vite-plugin-posthtml';

export default defineConfig({
  plugins: [posthtml({
    root: '',
    include: '**/*.html',
    plugins: [],
    options: {},
  })],
});