// @ts-check
const { test, expect } = require('@playwright/test');
test('has pack predl', async ({page}) => {
    await page.goto('https://creditural.ru/');

    const locator = page.getByRole('link', { name: 'Пакетные предложения' })

    await expect(locator).toBeVisible()
    await locator.hover()
    const locator1 = page.getByRole('link', { name: "Территория Бизнес-класс" })
    await expect(locator1).toBeVisible()
    await locator1.click()
    await page.waitForTimeout(2000)
    const locator3 = page.locator(".tabs__list__arrow__next")
    await locator3.click()
    await page.waitForTimeout(2000)
    const locator4 = page.getByRole('link', { name: "КУБ-Бизнес" })
    await locator4.click()
    await page.waitForTimeout(2000)







});
