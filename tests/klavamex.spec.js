// const { test, expect } = require('@playwright/test');
// test('40 min zaderjka', async ({page}) => {
//     await page.goto('https://www.wildberries.ru/');
//     await page.waitForTimeout(1000);
//     await page.locator('#searchInput').pressSequentially('клавиатура механическая',{delay:100})
//     await page.waitForTimeout(1000);
//     await page.keyboard.press('Enter')
//     await page.getByRole('button', {name: 'Все фильтры'}).click()
//     await page.waitForTimeout(1000);
//     await page.getByText("аналоговая оптическая").click()
//     await page.waitForTimeout(1000);
//     await page.getByText("белый").click()
//     await page.waitForTimeout(1000);
//     await page.getByText("Bluetooth").click()
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Показать', exact: true }).click()
//     await page.waitForTimeout(1000);
//     await page.locator(".product-card__wrapper").nth(0).click()
//      await page.waitForTimeout(3000);
// });