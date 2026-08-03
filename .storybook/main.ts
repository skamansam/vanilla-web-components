import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: ["@storybook/addon-links"],
	framework: {
		name: "@storybook/web-components-vite",
		options: {},
	},
	viteFinal(config, { configType }) {
		if (configType === "PRODUCTION") {
			// Output will be nested under dist/storybook, so use relative
			// asset paths so it can be served from any subpath.
			config.base = "./";
		}
		return config;
	},
};
export default config;
