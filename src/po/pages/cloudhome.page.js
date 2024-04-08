class HomePage {
    get searchIcon() { return $('div.p1o4Hf') }
    get searchInput() { return $('div.YSM5S input') }
    get searchButton() { return $('div.mb2a7b [role="button"]') }

    async searchForCalculator() {
        await this.searchIcon.click()
        await this.searchInput.setValue('Google Cloud Platform Pricing Calculator')
        await this.searchButton.click()
        await this.searchInput.clearValue()
    }

    async open () {
        await browser.url(`https://cloud.google.com/`)
    }
}

export default new HomePage()