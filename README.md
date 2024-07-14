# Vanilla Web Components Demo

This is a demo on how to use <img src="https://api.iconify.design/logos:vitejs.svg"/> Vite + <img src="https://api.iconify.design/logos:tailwindcss-icon.svg"/> Tailwind + <img src="https://api.iconify.design/logos:javascript.svg"/> Vanilla Web Components to create a super-fast web site without the need for a heavy framework like <img src="https://api.iconify.design/logos:react.svg"/> React or <img src="https://api.iconify.design/logos:vue.svg"/> Vue, or even a compiler like <img src="https://api.iconify.design/logos:svelte-icon.svg"/> Svelte.

We will be using <img src="https://api.iconify.design/logos:playwright.svg"/> Playwright + <img src="https://api.iconify.design/logos:storybook-icon.svg"/>Storybook to aid us in our task.

Coming Soon: A rudimentary <img src="https://api.iconify.design/logos:flux.svg"/> Flux store, to show that you don't even need <img src="https://api.iconify.design/logos:redux.svg"/> Redux, <img src="https://api.iconify.design/logos:vue.svg"/> Vuex, or <img src="https://api.iconify.design/logos:pinia.svg"/> Pinia.

This is an example of a crazy simple menu "app." It consists of several components, as well as a generated content header. For me, this just might be the beginning of my own JS Framework like Vue, but just a web component that you subclass. In fact, that is the way this demo works! There is a [base class](src/components/BaseComponent.ts) that contains the logic for linking the js code to the html element, handles shadowroot rendering, and intiating the component's lifecycle. It adds a few functions that make the child classes easier to work with, mainly separating the init step and the render step. 


## NOTES:

# Tailwind
* tailwind doesn't work in the shadow dom
  * workaround: use an include in the shadow-dom `style` element (as shown)
    * BUT: Hot reload doesn't work and I doubt tailwind or vite is going to fix it
* Tailwind supports css variables so you can (and should) use them when you feel necessary
  * HOWEVER, you should stick to using the tailwind theme to manage most of it.