import "./style.css";
import menu from "./assets/dinnerMenu.json";
import { getIcon } from "./assets/icons.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<h1 class="text-green-800">Vanilla Web Components Demo</h1>
<p>This is a demo on how to use ${getIcon("logos:vitejs")?.svg} Vite + ${
  getIcon("logos:tailwindcss-icon")?.svg
} Tailwind + ${getIcon("logos:vitest")?.svg} Vitest + ${
  getIcon("logos:js")?.svg
} Vanilla Web Components to create a super-fast
web site without the need for a heavy framework like React and Vue, or even a lightwight
framework like Svelte.</p>
<category-search></category-search>
`;

document
  .querySelector<HTMLDivElement>("#app")!
  .querySelector("category-search")!.menu = menu;
