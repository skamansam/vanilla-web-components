import "./style.css";
import lunchMenu from "./assets/lunchMenu.json";
import dinnerMenu from "./assets/dinnerMenu.json";
import { getIcon } from "./assets/icons.ts";

const tailwindIcon = getIcon("logos:tailwindcss-icon")?.svg;
const viteIcon = getIcon("logos:vitejs")?.svg;
const javascriptIcon = getIcon("logos:javascript")?.svg;
const fluxIcon = getIcon("logos:flux")?.svg;
const reduxIcon = getIcon("logos:redux")?.svg;
const vueIcon = getIcon("logos:vue")?.svg;
const reactIcon = getIcon("logos:react")?.svg;
const svelteIcon = getIcon("logos:svelte-icon")?.svg;
const piniaIcon = getIcon("logos:pinia")?.svg;
const playwrightIcon = getIcon("logos:playwright")?.svg;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<h1 class="text-green-800">Vanilla Web Components Demo</h1>
<p>This is a demo on how to use ${viteIcon}Vite + ${tailwindIcon}Tailwind + ${playwrightIcon}Playwright + ${javascriptIcon}Vanilla Web Components to create a super-fast
web site without the need for a heavy framework like ${reactIcon}React and ${vueIcon}Vue, or even a compiler
like ${svelteIcon}Svelte.</p>
<p>Coming Soon: A rudimentary ${fluxIcon}Flux store, to show that you don't even need ${reduxIcon}Redux, ${vueIcon}Vuex, or ${piniaIcon}Pinia.</p>
<p class="w-100">
  <select name="menuSelection">
    <option value="lunch">Lunch Menu<option>
    <option value="dinner">Dinner Menu<option>
  </select>
</p>
<category-search></category-search>
`;

const selectElement = document.querySelector<HTMLSelectElement>("#app select[name='menuSelection']");
const categorySearchElement = document.querySelector<HTMLDivElement>("#app category-search");

categorySearchElement.menu = lunchMenu;
selectElement.addEventListener('change', (event) => {
  const selectedMenu = event.target.value;

  if (selectedMenu === 'lunch') {
    categorySearchElement.menu = lunchMenu;
  } else if (selectedMenu === 'dinner') {
    categorySearchElement.menu = dinnerMenu;
  }
});