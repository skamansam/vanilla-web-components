import { test, expect } from "@playwright/test";
import dinnerMenu from "../src/assets/dinnerMenu.json" assert { type: "json" };
import lunchMenu from "../src/assets/lunchMenu.json" assert { type: "json" };

const testOptions = [
  [lunchMenu, "Lunch Menu", "lunch"],
  [dinnerMenu, "Dinner Menu", "dinner"],
];

for (const [menu, label, option] of testOptions) {
  test.describe(label, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/");
      await page.selectOption("select", option);
    });

    test("has page title", async ({ page }) => {
      await expect(page).toHaveTitle(/Vanilla Web Components Demo/);
    });

    for (const [category, categoryInfo] of Object.entries(menu)) {
      let categoryElement = null;
      test.beforeEach(async ({ page }) => {
        categoryElement = page
          .locator("category-card")
          .filter({
            has: page.getByRole("heading", {
              name: category,
              level: 2,
              exact: true,
            }),
          });
      });
      test.describe(`Category ${category}`, () => {
        test(`has heading`, async ({ page }) => {
          await expect(
            categoryElement.getByRole("heading", {
              name: category,
              level: 2,
              exact: true,
            })
          ).toBeVisible();
        });

        test(`has description`, async ({ page }) => {
          await expect(
            categoryElement.getByText(categoryInfo.description, { exact: true })
          ).toBeVisible();
        });

        for (const item in categoryInfo.items) {
          test.describe(`Item ${item}`, () => {
            test(`has title ${item}`, async ({ page }) => {
              await expect(
                categoryElement.getByRole("heading", {
                  name: item,
                  level: 4,
                  exact: true,
                })
              ).toBeVisible();
            });
          });
        }
      });
    }
  });
}
