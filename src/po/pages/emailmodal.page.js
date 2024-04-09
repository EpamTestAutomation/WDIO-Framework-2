import { Key } from 'webdriverio'

class EmailModal {
    get emailDialog() { return $('.md-dialog-container.ng-scope') }
    get emailInput() { return $('div:nth-of-type(3) > .flex > input[name="description"]') }
    get sendEmailButton() { return $('md-dialog form .layout-row:nth-child(3) button:nth-child(2)') }

    async awaitEmailDialog() {
        await this.emailDialog.waitForDisplayed({ timeout: 6000 })
    }

    async copyEmailIntoField() {
        await this.emailInput.waitForDisplayed({ timeout: 6000 })
        await this.emailInput.waitForClickable()
        await this.emailInput.click()
        await browser.keys([Key.Ctrl, 'v'])
    }

    async sendEmailEstimate() {
        await this.sendEmailButton.waitForDisplayed({ timeout: 6000 })
        await this.sendEmailButton.scrollIntoView({ block: 'center', inline: 'center' });
        await this.sendEmailButton.waitForClickable()
        await this.sendEmailButton.click()
    }

    async switchToPreviousWindow() {
        await browser.switchWindow('mail')
        await browser.pause(10000)
    }

}

export default new EmailModal()