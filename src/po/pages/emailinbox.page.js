
class EmailInbox {
    get emailInbox() { return $('.nw > button:nth-of-type(2)') }
    get iframeElement() { return $('iframe#ifmail') }
    get totalCostEmail() { return $('h2') }

    async awaitCostEmail() {
        await this.totalCostEmail.waitForDisplayed({ timeout: 6000 })
    }

    async selectEmailInbox() {
        await this.emailInbox.waitForDisplayed({ timeout: 10000 })
        await this.emailInbox.waitForClickable()
        await this.emailInbox.click()
    }

    async switchToFrame() {
        const frame = await this.iframeElement
        await browser.switchToFrame(frame)
    }

}

export default new EmailInbox()