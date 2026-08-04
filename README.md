# Vanilla Web Components Demo

[![wakatime](https://wakatime.com/badge/user/1884b991-b3c5-4cbe-8310-3ae959f019a8/project/151c420c-c16e-4bef-8fb2-0bb9d625fba4.svg)](https://wakatime.com/badge/user/1884b991-b3c5-4cbe-8310-3ae959f019a8/project/151c420c-c16e-4bef-8fb2-0bb9d625fba4)

This is a demo on how to use <img src="https://api.iconify.design/logos:vitejs.svg"/> Vite + <img src="https://api.iconify.design/logos:tailwindcss-icon.svg"/> Tailwind + <img src="https://api.iconify.design/logos:javascript.svg"/> Vanilla Web Components to create a super-fast web site without the need for a heavy framework like <img src="https://api.iconify.design/logos:react.svg"/> React or <img src="https://api.iconify.design/logos:vue.svg"/> Vue, or even a compiler like <img src="https://api.iconify.design/logos:svelte-icon.svg"/> Svelte.

We will be using <img src="https://api.iconify.design/logos:playwright.svg"/> Playwright + <img src="https://api.iconify.design/logos:storybook-icon.svg"/>Storybook to aid us in our task.

Coming Soon: A rudimentary <img src="https://api.iconify.design/logos:flux.svg"/> Flux store, to show that you don't even need <img src="https://api.iconify.design/logos:redux.svg"/> Redux, <img src="https://api.iconify.design/logos:vue.svg"/> Vuex, or <img src="https://api.iconify.design/logos:pinia.svg"/> Pinia.

This is an example of a crazy simple menu "app." It consists of several components, as well as a generated content header. For me, this just might be the beginning of my own JS Framework like Vue, but just a web component that you subclass. In fact, that is the way this demo works! There is a [base class](src/components/BaseComponent.ts) that contains the logic for linking the js code to the html element, handles shadowroot rendering, and intiating the component's lifecycle. It adds a few functions that make the child classes easier to work with, mainly separating the init step and the render step. 


## Roadmap

This project is intentionally evolving toward a tiny, dependency-free framework layer built only on modern web standards. The roadmap borrows the most useful concepts from React, Vue, and Svelte and re-implements them as native Web Components features.

### 1.0 — Custom Elements Foundation *(current)*
- Custom element base class with shadow DOM
- HTML `<template>` loading and `[part]`-based rendering
- Basic event handling in `setup()`
- Vite + Tailwind + Storybook + Playwright tooling

### 2.0 — Full Reactivity & Flux Store
- Proxy-based reactive component `state`
- Automatic `render()` scheduling on state changes
- `computed` / derived values
- `effect` primitives (`connected`, `disconnected`, `beforeRender`, `afterRender`)
- A basic Flux store:
  - central `state`
  - `dispatch(action)`
  - reducer functions
  - `subscribe` / `unsubscribe` for components
- One-way data flow from store → components

### 3.0 — Directives, Bindings & Cross-Component Communication
- Attribute / property reflection helpers
- Two-way binding (`v-model` style) for form controls
- Conditional rendering (`v-if` / `v-else`)
- List rendering (`v-for` / `each`)
- `provide` / `inject` context for parent/child data
- Scoped style helpers (`::part`, `::slotted`, CSS custom properties)
- Component-level transitions / animation hooks

### 4.0 — Declarative Templating & Routing
- Declarative templates without JSX (a tiny HTML DSL or DOM Parts)
- `ref` / element references
- Error boundaries / safe rendering
- Client-side router and dynamic views
- DevTools / Storybook integration for inspecting reactive state

### Concepts borrowed from other frameworks
- **React**: one-way props, hooks/effects, context, refs, composition over inheritance, one-way data flow.
- **Vue**: reactive state, computed properties, watchers, directives (`v-if`, `v-for`, `v-model`), scoped slots, provide/inject, transitions.
- **Svelte**: stores (`writable` / `derived` / `readable`), reactive declarations, compile-free templates, scoped styles, actions (`use:action`).

## NOTES:

# Tailwind
* tailwind doesn't work in the shadow dom
  * workaround: use an include in the shadow-dom `style` element (as shown)
    * BUT: Hot reload doesn't work and I doubt tailwind or vite is going to fix it
* Tailwind supports css variables so you can (and should) use them when you feel necessary
  * HOWEVER, you should stick to using the tailwind theme to manage most of it.
