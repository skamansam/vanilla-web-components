import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Menu } from "../stores/mainStore";

interface CategorySearchArgs {
	menu: Menu;
	heading: string;
}

const sampleMenu: Menu = {
	"PIZZA OR CALZONE": {
		description:
			"Pizza and Calzone are served with choice of soup or green salad and soft drink.",
		items: {
			Deluxe: {
				ingredients:
					"Pepperoni, Italian sausage, mushrooms, onions, bell peppers, olives, tomato sauce, and mozzarella.",
				price: "$7.95",
			},
			"BBQ Chicken": {
				ingredients:
					"Grilled chicken breast, red onions, cilantro, mozzarella, and tomato sauce.",
				price: "$8.20",
			},
		},
	},
	PASTA: {
		description:
			"All pastas are served with garlic bread, choice of salad or soup, and a soft drink.",
		items: {
			Alfredo: {
				ingredients: "Fettuccine, cream sauce, parmesan.",
				price: "$8.50",
			},
		},
	},
};

const meta = {
	title: "Components/CategorySearch",
	// `menu` is a JS property (not an attribute), so the element must be
	// created and assigned rather than rendered from an HTML string.
	render: (args) => {
		const el = document.createElement("category-search") as HTMLElement & {
			menu?: Menu;
		};
		el.innerHTML = `<h1>${args.heading}</h1>`;
		el.menu = args.menu;
		return el;
	},
	argTypes: {
		menu: { control: "object" },
		heading: { control: "text" },
	},
} satisfies Meta<CategorySearchArgs>;

export default meta;
type Story = StoryObj<CategorySearchArgs>;

export const Default: Story = {
	args: {
		heading: "Lunch Menu",
		menu: sampleMenu,
	},
};
