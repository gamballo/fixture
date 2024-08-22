// const { test, expect } = require('@playwright/test');
// const {randomInt} = require("crypto");
// test('mouse', async ({page}) => {
//     await page.goto('https://www.wildberries.ru/');
//     await page.waitForTimeout(1000);
//     await page.locator('#searchInput').pressSequentially('мышь', {delay: 100});
//     await page.waitForTimeout(1000);
//     await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('Enter');
//     await page.getByRole('button', {name: 'Все фильтры'}).click()
//     await page.waitForTimeout(1000);
//     const hiddenHeader= await page.getByRole('heading', { name: 'Цвет' })
//     await hiddenHeader.scrollIntoViewIfNeeded()
//     await page.getByText('Белый').click()
//     await page.waitForTimeout(1000);
//     await page.locator(".filters-desktop__btn-main.btn-main:visible").click()
//     await page.waitForTimeout(1000);
//     await page.locator('#searchInput').click()
//     await page.keyboard.press(' ');
//     await page.keyboard.insertText('嗨');
//     // await page.locator('#searchInput').pressSequentially('razer',{delay:100})
//     // await page.keyboard.press("r")
//     // await page.keyboard.press("a")
//     // await page.keyboard.press("z")
//     // await page.keyboard.press("e")
//     // await page.keyboard.press("r")
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', {name: 'Все фильтры'}).click()
//     await page.waitForTimeout(1000);
//     const hiddenHeader1= await page.getByRole('heading', { name: 'Цвет' })
//     await hiddenHeader1.scrollIntoViewIfNeeded()
//     await page.getByText('Белый').click()
//     await page.waitForTimeout(1000);
//     await page.locator(".filters-desktop__btn-main.btn-main:visible").click()
//     await page.locator(".product-card__wrapper").nth(5).click()
//     await page.waitForTimeout(3000);

//});
