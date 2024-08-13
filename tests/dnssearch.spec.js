const { test, expect } = require('@playwright/test');
test('has footer', async ({page}) => {
    await page.goto('https://www.wildberries.ru/');
    await page.waitForTimeout(1000);
    const navBurger = page.locator(".nav-element__burger")
    await page.waitForTimeout(1000);
    await navBurger.click()
    await page.waitForTimeout(1000);
     await page.locator(".menu-burger__main-list-link.menu-burger__main-list-link--4830").hover()
     await page.waitForTimeout(1000);
     await page.getByText("Ноутбуки и компьютеры").click()
     await page.waitForTimeout(1000);
     await page.getByText("Комплектующие для ПК").click()
    await page.waitForTimeout(1000);
    await page.getByText("Все фильтры").click()
    await page.locator('.filter__item').filter({hasText: 'Видеокарта'}).click()
    await page.getByText("NVIDIA GeForce RTX 4070").click()
    await page.locator(".filters-desktop__btn-main.btn-main:visible").click()
    //await page.getByRole('button', { name: 'Показать', exact: true }).click()
    await page.waitForTimeout(3000);





//     await locator1.click()
//     await page.waitForTimeout(2000)
//     const locator3 = page.locator(".tabs__list__arrow__next")
//     await locator3.click()
//     await page.waitForTimeout(2000)
//     const locator4 = page.getByRole('link', { name: "КУБ-Бизнес" })
//     await locator4.click()
//     await page.waitForTimeout(2000)
    //await page.locator(".menu-burger__main-list-link menu-burger__main-list-link--4830").click()
    await page.waitForTimeout(1000);
});