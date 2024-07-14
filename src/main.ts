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
<section class="mb-8 border p-8">
  <h1 class="text-green-800 text-center w-100 mb-3">Vanilla Web Components Demo</h1>
  <p>This is a demo on how to use ${viteIcon}Vite + ${tailwindIcon}Tailwind + ${playwrightIcon}Playwright + ${javascriptIcon}Vanilla Web Components to create a super-fast
  web site without the need for a heavy framework like ${reactIcon}React and ${vueIcon}Vue, or even a compiler
  like ${svelteIcon}Svelte.</p>
  <p><em>Coming Soon</em>: A rudimentary ${fluxIcon}Flux store, to show that you don't even need ${reduxIcon}Redux, ${vueIcon}Vuex, or ${piniaIcon}Pinia.</p>
</section>
<category-search class="category-search">
  <h1 class="logo text-5xl font-thin text-center h-32 p-6"><span class="font-cursive text-7xl font-bold">Rude</span>staurant</h1>
  <h1 class="text-center">This is our
    <select name="menuSelection" class="border-b border-primary inline-block font-cursive bg-transparent px-3">
      <option value="lunch" class="bg-transparent bg-black">Lunch Menu</option>
      <option value="dinner" class="bg-transparent bg-black">Dinner Menu</option>
    </select>
  </h1>
  <p class="text-xl">Please Make a Selection and add it to your cart.</p>
  <p class="">You can filter by category or search by name.</p>
</category-search>
`;

const selectElement = document.querySelector<HTMLSelectElement>(
  "#app select[name='menuSelection']"
);
const categorySearchElement = document.querySelector<HTMLDivElement>(
  "#app category-search"
);

if (categorySearchElement) categorySearchElement.menu = lunchMenu;

if (selectElement && categorySearchElement) {
  selectElement.addEventListener("change", (event) => {
    const selectedMenu = event?.target?.value;

    if (selectedMenu === "lunch") {
      categorySearchElement.menu = lunchMenu;
    } else if (selectedMenu === "dinner") {
      categorySearchElement.menu = dinnerMenu;
    }
  });
}
