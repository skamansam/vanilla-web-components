import includeHtml from "vite-include-html-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [includeHtml()],
});