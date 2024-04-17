class EmailInbox {
    get totalCostEmail() { return $('h2') }
    get iframeElement() { return $('#ifmail') }
    get emailInbox() { return $('.nw button:nth-of-type(2)') }
    

    async awaitCostEmail() {
        await this.totalCostEmail.waitForDisplayed({ timeout: 60000 })
    }

    async selectEmailInbox() {
        await this.emailInbox.waitForDisplayed({ timeout: 10000 })
        await this.emailInbox.waitForClickable()
        await this.emailInbox.click()
    }

    async switchToFrame() {
        await browser.switchToFrame(await this.iframeElement)
    }

}

export default new EmailInbox()