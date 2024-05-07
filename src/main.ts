import './style.css';
import menu from '../public/dinnerMenu.json';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1 class="text-green-800">JSON Loading Test</h1>
<category-search></category-search>
`;

document.querySelector<HTMLDivElement>('#app')!.querySelector('category-search')!.menu = menu;
