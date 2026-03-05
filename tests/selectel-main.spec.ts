import { expect } from '@playwright/test';
import { test } from '../fixtures/index';


test.describe('Главная страница Selectel', () => {

    test.beforeEach(async ({ mainPage }) => {
        await mainPage.open();
    });

    test('Проверка отображения основных разделов меню', async ({ mainPage }) => {
        await expect(mainPage.productsList).toBeVisible();
        await expect(mainPage.solutionsList).toBeVisible();
        await expect(mainPage.pricesList).toBeVisible();
    });

    test('Поиск по сайту', async ({ mainPage }) => {
        await mainPage.searchButton.click();
        
        await mainPage.inputTextInSearch('Облачное хранилище');
        
        await expect(mainPage.page).toHaveURL(/.*search/);
        await expect(mainPage.page.locator('h2')).toContainText('Результаты по запросу «Облачное хранилище»');
    });

    test('Переключение языка на английский', async ({ mainPage }) => {
        await mainPage.openChangeLanguageMenuButton.click();
        await mainPage.changeLanguageButton.click();

        await expect(mainPage.page).toHaveURL(/.*en/);
    });

    test('Переход в документацию', async ({ mainPage, context }) => {
        await mainPage.open();

        const pagePromise = context.waitForEvent('page');
        await mainPage.documentationButton.click();
        const newPage = await pagePromise; // Объект новой вкладки с документацией

        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL(/.*docs\.selectel\.ru/);
        await expect(newPage.locator('h1')).toContainText('Документация');
    });

    test('Переход в кейсы', async ({ mainPage, context }) => {
        await mainPage.open();

        const pagePromise = context.waitForEvent('page');
        await mainPage.casesButton.click();
        const newPage = await pagePromise; // Объект новой вкладки с кейсами

        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL(/.*case/);
        await expect(newPage.locator('h1')).toContainText('Бизнес-кейсы');
    });

});