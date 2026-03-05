import { SelectelMainPage } from "../pages/SelectelMainPage";
import { test as base } from "@playwright/test";

type SelectelFixtures = {
    mainPage: SelectelMainPage;
};

export const test = base.extend<SelectelFixtures>({
    mainPage: async ({ page }, use) => {
        const mainPage = new SelectelMainPage(page);

        await use(mainPage);
    },

})