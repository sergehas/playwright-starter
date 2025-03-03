import { expect, test } from "@playwright/test";
import { describe } from "node:test";

describe("Group and values", () => {
  test("it should add a brand", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Toggle demo" }).click();
    await page.getByRole("button", { name: "Toggle list-of-values" }).click();
    await page.getByRole("link", { name: "groups" }).click();
    await page.getByRole("button", { name: "brands list of brands" }).click();
    await page.getByRole("button", { name: "add" }).click();
    await page.getByRole("button", { name: "Select a icon" }).click();
    await page.getByRole("group").filter({ hasText: "Azure" }).locator("svg").nth(2).click();
    await page.getByRole("textbox", { name: "Value code" }).click();
    await page.getByRole("textbox", { name: "Value code" }).fill("GCPB");
    await page.getByRole("textbox", { name: "Value code" }).press("Tab");
    await page.getByRole("textbox", { name: "Value label" }).fill("Gcp brand");
    await page.getByRole("button", { name: "SAVE" }).click();
    await expect(page.getByRole("button", { name: "GCPB Gcp brand" })).toBeVisible();
  });

  test("it should populate list of countries", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Toggle list-of-values" }).click();
    await page.getByRole("link", { name: "list-of-values" }).click();
    await page.getByText("4", { exact: true }).click();
    await page.getByRole("button", { name: "countries list of contries" }).click();
    await expect(
      page.getByLabel("countries list of contries").getByLabel("Select page")
    ).toContainText("1 – 10 of 18");
  });
});
