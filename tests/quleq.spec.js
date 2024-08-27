// const { test, expect } = require('@playwright/test');
// const {randomInt} = require("crypto");
// test('mouse', async ({page}) => {
//     await page.goto('https://www.wildberries.ru/');
//     await page.waitForTimeout(1000);
//     await page.locator('#searchInput').fill("кулер для компьютера")
//     await page.waitForTimeout(1000);
//     await page.keyboard.press("Enter")
//     await page.waitForTimeout(1000);
//     await page.locator('.btn-switch__btn.j-list-item').click();
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', {name: 'Все фильтры'}).click()
//     await page.waitForTimeout(1000);
//     await page.getByRole('heading', { name: 'Категория' })
//     await page.getByText('Охлаждение корпуса').click()
//     await page.waitForTimeout(1000);
//     const hiddenHeader2 =await page.getByRole('heading', { name: 'Бренд' })
//     await hiddenHeader2.scrollIntoViewIfNeeded()
//     await page.getByText('Asus').click()
//     const hiddenHeader1 = await page.getByRole('heading', { name: 'Регулировка оборотов вентилятора' })
//     await hiddenHeader1.scrollIntoViewIfNeeded()
//     await page.getByText('автоматическая').click()
//     await page.waitForTimeout(1000);
//     await page.locator(".filters-desktop__btn-main.btn-main:visible").click()
//     await page.waitForTimeout(1000);
//     await page.locator(".product-card__wrapper").nth(2).click()
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', {name: 'Все характеристики и описание'}).click()
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', {name: 'В корзину'}).first().click()
//     await page.waitForTimeout(1000);
//     await page.locator(".navbar-pc__icon.navbar-pc__icon--basket").click()
//     await page.waitForTimeout(1000);
//     await page.locator(".count__plus.plus").click()
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', {name: 'Удалить'}).click()
//     await page.waitForTimeout(3000);
//     //спросить как сравнить шаблон текста с текстом на экране
//
// })