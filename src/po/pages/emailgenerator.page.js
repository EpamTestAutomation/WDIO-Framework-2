class GenerateEmail {
    get generateEmailLink() { return $('.ycol3 #listeliens a:nth-child(1)') }
    get clipboardEmail() { return $('button#cprnd') }

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
s
    async switchToPreviousWindow() {
        await browser.switchWindow('https://cloud.google.com/products/calculator-legacy')
    }

}

export default new GenerateEmail()