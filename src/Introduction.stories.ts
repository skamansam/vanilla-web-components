import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

const meta = {
	title: "Introduction",
	render: () => html`
		<div class="max-w-3xl mx-auto p-8">
			<h1 class="text-4xl font-thin mb-4 text-center">
				<span class="font-cursive font-bold">Vanilla</span> Web Components Demo
			</h1>
			<p class="text-lg mb-6 text-center">
				A fast, framework-free demo built with Vite, Tailwind CSS, and plain
				JavaScript Web Components.
			</p>

			<section class="mb-8">
				<h2 class="text-2xl font-bold mb-2">What this is</h2>
				<p class="mb-2">
					This project shows how far you can get without React, Vue, Svelte, or a
					heavy build step. A shared
					<a class="text-blue-600 underline" href="https://github.com/WindSvelte/vanilla-web-components/blob/main/src/components/BaseComponent.ts" target="_blank" rel="noreferrer">
						BaseComponent
					</a>
					handles shadow DOM, lifecycle hooks, and re-rendering so subclasses can
					focus on <code>setup()</code> and <code>render()</code>.
				</p>
				<p>
					The menu is rendered through a small set of autonomous custom elements:
					<code>&lt;category-search&gt;</code>, <code>&lt;category-card&gt;</code>,
					and <code>&lt;item-card&gt;</code>.
				</p>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold mb-2">Tech stack</h2>
				<ul class="list-disc list-inside space-y-1">
					<li>Vite for dev and production builds</li>
					<li>Tailwind CSS v4 for utility-first styling</li>
					<li>Plain TypeScript Web Components with shadow DOM</li>
					<li>Playwright for end-to-end testing</li>
					<li>Storybook for component documentation and manual testing</li>
				</ul>
			</section>

			<section class="mb-8">
				<h2 class="text-2xl font-bold mb-2">Component stories</h2>
				<p class="mb-4">
					Use the sidebar to browse the individual components and see how they
					behave with different props and controls.
				</p>
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
					<a
						href="/?path=/story/components-itemcard--default"
						class="block p-4 border rounded hover:bg-gray-50"
					>
						<h3 class="font-bold">ItemCard</h3>
						<p class="text-sm text-gray-600">Single menu item display.</p>
					</a>
					<a
						href="/?path=/story/components-categorycard--default"
						class="block p-4 border rounded hover:bg-gray-50"
					>
						<h3 class="font-bold">CategoryCard</h3>
						<p class="text-sm text-gray-600">A category with its items.</p>
					</a>
					<a
						href="/?path=/story/components-categorysearch--default"
						class="block p-4 border rounded hover:bg-gray-50"
					>
						<h3 class="font-bold">CategorySearch</h3>
						<p class="text-sm text-gray-600">Search and filter the menu.</p>
					</a>
				</div>
			</section>

			<section>
				<h2 class="text-2xl font-bold mb-2">Running locally</h2>
				<pre class="bg-gray-100 p-4 rounded text-sm"><code>pnpm dev     # start the app
pnpm storybook  # start Storybook in dev mode
pnpm build   # build app and Storybook</code></pre>
			</section>
		</div>
	`,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Welcome: Story = {};
