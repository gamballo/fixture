// const { test, expect } = require('@playwright/test');
// test('40 min zaderjka', async ({page}) => {
//     await page.goto('https://www.wildberries.ru/');
//     await page.waitForTimeout(1000);
//     //await page.locator('#searchInput').fill("Монитор")
//     await page.locator('#searchInput').pressSequentially('Монитор',{delay:100})
//     await page.waitForTimeout(1000);
//     await page.keyboard.press('Enter')
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', {name: 'Все фильтры'}).click()
//     await page.waitForTimeout(1000);
//     await page.getByText('2 дня').first().click()
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Показать', exact: true }).click()
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', {name: 'По популярности'}).click()
//     await page.waitForTimeout(1000);
//     await page.getByText('По возрастанию цены').first().click()
//     await page.waitForTimeout(1000);
//     await page.locator(".product-card__wrapper").nth(4).click()
//     await page.waitForTimeout(1000);
//
// });