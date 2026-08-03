import { expect, type Page, test } from "@playwright/test";

async function openStory(page: Page, storyId: string) {
	await page.goto(`storybook/iframe.html?id=${storyId}&viewMode=story`, {
		waitUntil: "networkidle",
	});
}

test.describe("Built Storybook", () => {
	test("renders the introduction page", async ({ page }) => {
		await openStory(page, "introduction--welcome");
		await expect(
			page.getByRole("heading", { name: /What this is/, level: 2 }),
		).toBeVisible({ timeout: 15000 });
	});

	test("renders the CategoryCard story", async ({ page }) => {
		await openStory(page, "components-categorycard--default");
		await expect(page.locator("category-card")).toBeVisible({
			timeout: 15000,
		});
	});

	test("renders the ItemCard story", async ({ page }) => {
		await openStory(page, "components-itemcard--default");
		await expect(page.locator("item-card")).toBeVisible({
			timeout: 15000,
		});
	});

	test("renders the CategorySearch story", async ({ page }) => {
		await openStory(page, "components-categorysearch--default");
		await expect(page.locator("category-search")).toBeVisible({
			timeout: 15000,
		});
	});
});
