import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import type { MenuCategoryItem } from "../stores/mainStore";

interface CategoryCardArgs {
	title: string;
	description: string;
	items: Record<string, MenuCategoryItem>;
	searchTerm?: string;
}

const meta = {
	title: "Components/CategoryCard",
	render: (args) => html`
    <category-card
      data-title="${args.title}"
      data-description="${args.description}"
      data-items="${JSON.stringify(args.items)}"
      data-search-term="${args.searchTerm ?? ""}"
    ></category-card>
  `,
	argTypes: {
		title: { control: "text" },
		description: { control: "text" },
		items: { control: "object" },
		searchTerm: { control: "text" },
	},
} satisfies Meta<CategoryCardArgs>;

export default meta;
type Story = StoryObj<CategoryCardArgs>;

export const Default: Story = {
	args: {
		title: "PIZZA OR CALZONE",
		description:
			"Pizza and Calzone are served with choice of soup or green salad and soft drink.",
		items: {
			Deluxe: {
				ingredients:
					"Pepperoni, Italian sausage, mushrooms, onions, bell peppers, olives, tomato sauce, and mozzarella.",
				price: "$7.95",
			},
			Vegetarian: {
				ingredients:
					"Mushrooms, onions, black olives, bell peppers, fresh tomato, tomato sauce, and mozzarella.",
				price: "$7.95",
			},
			"BBQ Chicken": {
				ingredients:
					"Grilled chicken breast, red onions, cilantro, mozzarella, and tomato sauce.",
				price: "$8.20",
			},
		},
	},
};

export const WithSearchHighlight: Story = {
	args: {
		...Default.args,
		searchTerm: "chicken",
	},
};
