class GenerateEmail {
    get generateEmailLink() { return $('#listeliens [href="email-generator"]') }
    get clipboardEmail() { return $('#cprnd') }
    get outerFrame() { return $('#aswift_6') }
    get innerFrame() { return $('#ad_iframe') }
    get advertisement() { return $('div#card') }
    get modal() { return $('#dismiss-button') }


    async closeModal() {
        if (await this.advertisement.waitForDisplayed({ timeout: 60000 })) {
            await browser.switchToFrame(await this.outerFrame)
            await browser.switchToFrame(await this.innerFrame)
            await this.modal.waitForClickable()
            await this.modal.click(); 
        } else {
            await browser.switchToFrame(await this.outerFrame)
            await this.modal.waitForClickable()
            await this.closeModal.click(); 
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

    async switchToFrame() {
        
    }
}

export default new GenerateEmail()