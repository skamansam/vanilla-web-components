import path from "node:path";
import { fileURLToPath } from "node:url";
import posthtml from "@vituum/vite-plugin-posthtml";
import posthtmlInclude from "posthtml-include";
import { defineConfig } from "vite";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
	base: "/vanilla-web-components/",
	plugins: [
		posthtml({
			root: "",
			include: "**/*.html",
			plugins: [posthtmlInclude()],
			options: {},
		}),
	],
	resolve: {
		alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
	},
});
