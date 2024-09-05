import {test as base,Page} from "@playwright/test";

type TesTFixture = {
    baseTest: Basetest
}
abstract class Basetest {
    readonly page:Page;
    constructor(page) {
        this.page = page
    }
    // метод для ппрехода на курл
    async goto (url:string) {
        await this.page.goto(url);
         await this.page.waitForTimeout(1000);
    }
    //метод ожидания клика по элементу
    async clickAndWait (selector:string){
        const element = this.page.locator(selector)
        await element.click()
        await this.page.waitForTimeout(1000)
    }
    async fillandenter (selector:string, text:string){
        await this.page.locator(selector).fill(text)
        await this.page.keyboard.press("Enter")
        await this.page.waitForTimeout(1000)
    }

    async pressSequentially (keys:string[]){
        for (const key of keys){
            await this.page.keyboard.press(key)
            await this.page.waitForTimeout(100)
        }
    }
}
//определить фикстуру для текста

const test = base.extend<TesTFixture>({
    baseTest: async ({page}, use) => {
        const basetestinsance
            = new (class extends Basetest{
            constructor (page){
                super(page);
            }
        })(page)
        await use(basetestinsance)
    }
})
export {test}