// const { test, expect } = require('@playwright/test');
// const {randomInt} = require("crypto");
// test('mouse', async ({page}) => {
//     await page.goto('https://www.wildberries.ru/');
//     await page.waitForTimeout(1000);
//     await page.locator('.simple-menu__link.simple-menu__link--employment.j-wba-header-item').click();
//     await page.waitForTimeout(1000);
//     await page.getByText('Наши проекты').scrollIntoViewIfNeeded()
//     await page.waitForTimeout(1000);
//     // await page.locator('.fixed-block__chat.btn-chat.j-btn-chat-open').click();
//     // await page.waitForTimeout(1000); /// спросить за инкогнито версию почему нету чата
//     await page.getByRole('link', {name: 'Вопросы и ответы'}).click()
//     await page.waitForTimeout(1000);
//     await page.getByPlaceholder('Ваш вопрос').nth(1).pressSequentially('компьютер',{delay:100})// не заполняется плейсхолдер
//     await page.waitForTimeout(1000);
//
// })
