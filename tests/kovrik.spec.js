// const { test, expect } = require('@playwright/test');
// const {randomInt} = require("crypto");
// test('mouse', async ({page}) => {
//     await page.goto('https://www.wildberries.ru/');
//     await page.waitForTimeout(1000);
//     await page.locator('#searchInput').fill("коврик компьютерный большой")
//     await page.waitForTimeout(1000);
//     await page.keyboard.press("Enter")
//     await page.waitForTimeout(1000);
//     await page.locator(".search-tags__list").getByText("коврик компьютерный большой 80х40").first().click()
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', {name: 'Все фильтры'}).click()
//     await page.waitForTimeout(1000);
//     const hiddenHeader= await page.getByRole('heading', { name: 'Основа коврика' })
//     await hiddenHeader.scrollIntoViewIfNeeded()
//     await page.getByText('дерево').click()
//     await page.waitForTimeout(1000);
//     await page.locator(".filters-desktop__btn-main.btn-main:visible").click()
//     await page.locator(".product-card__wrapper").nth(3).hover()
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Быстрый просмотр' }).first().click()
//     await page.waitForTimeout(1000);
//     await page.locator(".custom-slider__arrow.custom-slider__arrow--next").click()
//     await page.getByLabel("синий").click()
//     await page.waitForTimeout(3000);
//
// })