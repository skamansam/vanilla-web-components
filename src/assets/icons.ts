/**
 * This file is used to get all the icons used in the project. It is taken from the icones<icones.js.org> project.
 * If you want to add more, you can add the icons to a bag, export the bag as as json, and add it as ./icons.json.
 */
export type Icon = {
  name: string;
  svg: string;
};

import allIcons from "./icons.json";

export const getIcon = (name: string): Icon | undefined => allIcons.find(icon => icon.name === name);

/*
 * You can alternatively export each icon individually
 **/
// export const viteIcon = allIcons.find(icon => icon.name === "logos:vitejs").svg;
// export const tailwindIcon = allIcons.find(icon => icon.name === "logos:tailwindcss-icon").svg;
// export const vitestIcon = allIcons.find(icon => icon.name === "logos:vitest").svg;
// export const jsIcon = allIcons.find(icon => icon.name === "logos:javascript").svg;
// [...]