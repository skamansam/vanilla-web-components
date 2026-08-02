/// <reference types="vite/client" />
// This project defines its web components as single-file `.html` templates
// (a `<template>` + an inline `<script type="module">`) that only work once
// they've been stitched into the host page by the `posthtml-include` Vite
// plugin (see `index.html` / `vite.config.js`). Storybook's preview iframe
// isn't run through that plugin, so this module reproduces the same effect
// at runtime: it appends the `<template>` to `document.body` and evaluates
// the inline module script, without requiring any changes to the component
// files themselves.
import categoryCardHtml from "../src/components/CategoryCard.html?raw";
import categorySearchHtml from "../src/components/CategorySearch.html?raw";
import itemCardHtml from "../src/components/ItemCard.html?raw";

async function registerComponent(raw: string) {
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
		// Component scripts import BaseComponent/helpers via the "@/" alias or
		// paths relative to the project root (as they're inlined into
		// index.html by posthtml-include). Once evaluated from a blob: URL,
		// the module's base is opaque, so root-relative specifiers like
		// "/src/..." can't be resolved against it ("base scheme isn't
		// hierarchical"). Rewrite them to fully-qualified absolute URLs
		// instead, which resolve regardless of the referencing module's base.
		const code = scriptMatch[1].replace(
			/(["'])(?:@\/|\.\/src\/)([^"']+)\1/g,
			(_match, quote: string, subpath: string) =>
				`${quote}${new URL(`/src/${subpath}`, location.href).href}${quote}`,
		);
		const blob = new Blob([code], { type: "text/javascript" });
		const url = URL.createObjectURL(blob);
		try {
			await import(/* @vite-ignore */ url);
		} finally {
			URL.revokeObjectURL(url);
		}
	}
}

let registerPromise: Promise<void> | null = null;

export function registerHtmlComponents(): Promise<void> {
	if (!registerPromise) {
		registerPromise = (async () => {
			await registerComponent(itemCardHtml);
			await registerComponent(categoryCardHtml);
			await registerComponent(categorySearchHtml);
		})();
	}
	return registerPromise;
}
