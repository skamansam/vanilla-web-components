import { expect, test } from "@playwright/test";

test.describe("App", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("has the correct title", async ({ page }) => {
		await expect(page).toHaveTitle(/Vanilla Web Components Demo/);
	});

	test("shows the info links", async ({ page }) => {
		await expect(
			page.getByRole("link", { name: /Storybook integration/ }),
		).toBeVisible();
		await expect(
			page.getByRole("link", { name: /View Playwright test results/ }),
		).toBeVisible();
	});

	test("renders all lunch categories by default", async ({ page }) => {
		await expect(page.locator("category-card")).toHaveCount(8);
	});

	test("can switch to the dinner menu", async ({ page }) => {
		const select = page.locator("select[name='menuSelection']");
		await select.selectOption("dinner");
		await expect(page.locator("category-card")).toHaveCount(5);
	});

	test("search filters the menu", async ({ page }) => {
		await page.fill("input", "pizza");
		await expect(page.locator("category-card")).toHaveCount(2);
	});

	test("search with no matches hides categories", async ({ page }) => {
		await page.fill("input", "zzz");
		await expect(page.locator("category-card")).toHaveCount(0);
	});
});
