/// <reference types="vite/client" />
import type { Preview } from "@storybook/web-components";
import "../src/style.css";
import { registerHtmlComponents } from "./registerHtmlComponents";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	loaders: [
		async () => {
			await registerHtmlComponents();
			return {};
		},
	],
};

export default preview;
