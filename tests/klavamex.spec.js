import {test} from './fixture/base-class.ts'
test('40 min zaderjka', async ({baseTest}) => {
    await baseTest.goto('https://www.wildberries.ru/')
    await baseTest.fillandenter('#searchInput','клавиатура механическая')
    await baseTest.clickAndWait( "text=Все фильтры")
    await baseTest.clickAndWait( "text=аналоговая оптическая ")
    await baseTest.clickAndWait( "text=Черный")
    await baseTest.clickAndWait( "text=Bluetooth 6")
    await baseTest.clickAndWait( "text=Показать")
    await baseTest.clickAndWait('.product-card__wrapper >> nth = 0')
    await baseTest.page.waitForTimeout(1000)

});