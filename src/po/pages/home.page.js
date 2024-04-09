
class HomePage {
    get searchIcon() { return $('div.p1o4Hf') }
    get searchInput() { return $('div.YSM5S input') }
    get searchButton() { return $('div.mb2a7b [role="button"]') }

    async performSearch() {
        await this.clickElement(await this.searchIcon)
        await this.searchInput.setValue('Google Cloud Platform Pricing Calculator')
        await this.clickElement(await this.searchButton)
        await this.searchInput.clearValue()
    }

    async open() {
        await browser.url('https://cloud.google.com/')
    }

    async clickElement(selector) {
        await $(selector).waitForDisplayed();
        await $(selector).waitForClickable();
        await $(selector).click();
    }
}

export default new HomePage()