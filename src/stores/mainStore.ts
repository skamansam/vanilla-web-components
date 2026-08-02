import dinnerMenu from "../assets/dinnerMenu.json";
import lunchMenu from "../assets/lunchMenu.json";

export type MenuCategoryItem = {
	id?: number;
	name?: string;
	ingredients?: string;
	price?: string;
	additional?: string;
};

export type MenuCategory = {
	description: string;
	items: Record<string, MenuCategoryItem>;
};

export type Menu = Record<string, MenuCategory>;

const mainStore = {
	menu: lunchMenu as Menu,
	setMenu(menuName: string) {
		this.menu = menuName === "lunch" ? lunchMenu : dinnerMenu;
	},
};

export default mainStore;
