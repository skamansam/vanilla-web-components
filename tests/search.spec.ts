import { test, expect } from "@playwright/test";

test.describe("Search", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
});

  test("searches for 'pasta'", async ({ page }) => {
    await page.fill("input", "pasta");
    const categoryElement = await page
    .locator("category-card")
    .filter({
      has: page.getByRole("heading", {
        name: "PASTA",
        level: 2,
        exact: true,
      }),
    });
    await expect(categoryElement).toBeVisible();
  });

  test("searches for 'pizza'", async ({ page }) => {
    await page.fill("input", "pizza");
    const categoryElement = await page
    .locator("category-card")
    .filter({
      has: page.getByRole("heading", {
        name: "PIZZA OR CALZONE",
        level: 2,
        exact: true,
      }),
    });
    await expect(categoryElement).toBeVisible();
    const categoryElement2 = await page
    .locator("category-card")
    .filter({
      has: page.getByRole("heading", {
        name: "INDIVIDUAL PIZZA",
        level: 2,
        exact: true,
      }),
    });
    await expect(categoryElement2).toBeVisible();
  });
});