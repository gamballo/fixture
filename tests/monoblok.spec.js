const { test, expect } = require('@playwright/test');
test('40 min zaderjka', async ({page}) => {
    await page.goto('https://www.wildberries.ru/');
    await page.waitForTimeout(1000);
    await page.locator('#searchInput').pressSequentially('компьютер',{delay:100})
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter')
    await page.getByRole('button', {name: 'Все фильтры'}).click()
    await page.waitForTimeout(1000);
    await page.getByText("Компьютер 9").click()
    await page.waitForTimeout(1000);
    await page.getByText("SSD 6").click()
    await page.waitForTimeout(1000);
    await page.getByText("ГБ 791").click()
    await page.waitForTimeout(1000);
    await page.getByText("Windows").click()
    await page.waitForTimeout(1000);
    await page.getByText("встроенная").click()
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Показать', exact: true }).click()
    await page.waitForTimeout(1000);
    await page.getByRole('button', {name: 'По популярности'}).click()
    await page.waitForTimeout(1000);
    await page.getByText('По убыванию цены').first().click()
    await page.waitForTimeout(1000);
    await page.locator(".product-card__wrapper").nth(17).click()
    await page.waitForTimeout(3000);
});