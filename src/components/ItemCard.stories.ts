import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

interface ItemCardArgs {
	title: string;
	ingredients: string;
	price: string;
	searchTerm?: string;
}

const meta = {
	title: "Components/ItemCard",
	render: (args) => html`
    <item-card
      data-title="${args.title}"
      data-ingredients="${args.ingredients}"
      data-price="${args.price}"
      data-search-term="${args.searchTerm ?? ""}"
    ></item-card>
  `,
	argTypes: {
		title: { control: "text" },
		ingredients: { control: "text" },
		price: { control: "text" },
		searchTerm: { control: "text" },
	},
} satisfies Meta<ItemCardArgs>;

export default meta;
type Story = StoryObj<ItemCardArgs>;

export const Default: Story = {
	args: {
		title: "Caesar Salad",
		ingredients: "Romaine, parmesan, croutons, caesar dressing",
		price: "$8.50",
	},
};

export const WithSearchHighlight: Story = {
	args: {
		...Default.args,
		searchTerm: "caesar",
	},
};
