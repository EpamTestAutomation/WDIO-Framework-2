class GenerateEmail {
    get generateEmailLink() { return $('#listeliens [href="email-generator"]') }
    get clipboardEmail() { return $('#cprnd') }
    get outerFrame() { return $('#aswift_6') }
    get innerFrame() { return $('#ad_iframe') }
    get modal() { return $('#dismiss-button') }

    async closeModal() {
        await browser.switchToFrame(await this.outerFrame)
        if (await this.modal.isExisting()) {
            await this.modal.waitForClickable()
            await this.modal.click();
        } else {
            await browser.switchToFrame(await this.innerFrame)
            await this.modal.waitForClickable()
            await this.modal.click();
        }
    } 

    async generateEmail() {
        await this.generateEmailLink.waitForDisplayed()
        await this.generateEmailLink.waitForClickable()
        await this.generateEmailLink.click()
    }

    async copyEmail() {
        await this.clipboardEmail.waitForDisplayed()
        await this.clipboardEmail.waitForClickable()
        await this.clipboardEmail.click()
    }

    async switchToPreviousWindow() {
        await browser.switchWindow('https://cloud.google.com/products/calculator-legacy')
    }
}

export default new GenerateEmail()