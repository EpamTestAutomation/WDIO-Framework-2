class SearchPage {

    get searchOption() { return $('.x9K9hf.sJb7xe .x9K9hf.wVBoU:nth-child(2) .x9K9hf.QKrqHf a') }

    async navigateToCalculatorPage() {
        await this.searchOption.waitForDisplayed({ timeout: 10000 })
        await this.searchOption.waitForClickable()
        await this.searchOption.click()
    }
}

export default new SearchPage()