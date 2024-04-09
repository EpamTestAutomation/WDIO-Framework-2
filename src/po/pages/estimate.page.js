class EstimateEmail {
    get totalEstimateTitle() { return $('#resultBlock .md-title > .ng-binding') }
    get emailButton() { return $('.cpc-cart-buttons.layout-align-space-between-start button:nth-child(2)') }
    
    async selectEmailEstimate() {
        await this.clickElement(await this.emailButton)
    }

    async clickElement(selector) {
        await $(selector).waitForDisplayed();
        await $(selector).waitForClickable();
        await $(selector).click();
    }

    async openNewWindow() {
        await browser.newWindow('https://yopmail.com/')
    }

}

export default new EstimateEmail()