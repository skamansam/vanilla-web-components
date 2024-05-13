import "./style.css";
import menu from "./assets/dinnerMenu.json";
import { getIcon } from "./assets/icons.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<h1 class="text-green-800">Vanilla Web Components Demo</h1>
<p>This is a demo on how to use ${getIcon("logos:vitejs")?.svg}Vite + ${
  getIcon("logos:tailwindcss-icon")?.svg
}Tailwind + ${getIcon("logos:vitest")?.svg}Vitest + ${
  getIcon("logos:javascript")?.svg
}Vanilla Web Components to create a super-fast
web site without the need for a heavy framework like ${getIcon("logos:react")?.svg}React and ${getIcon("logos:vue")?.svg}Vue, or even a lightwight
framework like ${getIcon("logos:svelte-icon")?.svg}Svelte.</p>
<p>Coming Soon: A rudimentary ${getIcon("logos:flux")?.svg}Flux store, to show that you don't even need ${getIcon("logos:redux")?.svg}Redux, ${getIcon("logos:vue")?.svg}Vuex, or ${getIcon("logos:pinia")?.svg}Pinia.</p>
<category-search></category-search>
`;

document
  .querySelector<HTMLDivElement>("#app")!
  .querySelector("category-search")!.menu = menu;
