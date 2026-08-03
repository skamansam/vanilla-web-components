/// <reference types="vite/client" />
// This project defines its web components as single-file `.html` templates
// (a `<template>` + an inline `<script type="module">`) that only work once
// they've been stitched into the host page by the `posthtml-include` Vite
// plugin (see `index.html` / `vite.config.js`). Storybook's preview iframe
// isn't run through that plugin, so this module reproduces the same effect
// at runtime: it appends the `<template>` to `document.body` and evaluates
// the inline module script, without requiring any changes to the component
// files themselves.
import BaseComponent from "../src/components/BaseComponent.ts";
import categoryCardHtml from "../src/components/CategoryCard.html?raw";
import categorySearchHtml from "../src/components/CategorySearch.html?raw";
import searchCss from "../src/components/category-search.css?inline";
import itemCardHtml from "../src/components/ItemCard.html?raw";
import highlight from "../src/lib/highlight.ts";

function registerComponent(raw: string) {
	const templateMatch = raw.match(/<template[\s\S]*?<\/template>/);
	if (templateMatch) {
		const wrapper = document.createElement("div");
		wrapper.innerHTML = templateMatch[0];
		const template = wrapper.firstElementChild as HTMLTemplateElement | null;
		if (template && !document.getElementById(template.id)) {
			document.body.appendChild(template);
		}
	}

	const scriptMatch = raw.match(
		/<script[^>]*type="module"[^>]*>([\s\S]*?)<\/script>/,
	);
	if (scriptMatch) {
		// The inline scripts import BaseComponent and helpers as if they were
		// being run through posthtml-include in the app. In the built Storybook
		// those source paths are not served, so we remove the import statements
		// and run the script in a scope where the needed modules are provided
		// by the preview bundle.
		const code = scriptMatch[1]
			.replace(/import\s+.*?\s+from\s+["'][^"']+["'];?/g, "")
			.trim();
		const init = new Function("BaseComponent", "highlight", "searchCss", code);
		init(BaseComponent, highlight, searchCss);
	}
}

let registerPromise: Promise<void> | null = null;

export function registerHtmlComponents(): Promise<void> {
	if (!registerPromise) {
		registerPromise = (async () => {
			registerComponent(itemCardHtml);
			registerComponent(categoryCardHtml);
			registerComponent(categorySearchHtml);
		})();
	}
	return registerPromise;
}
