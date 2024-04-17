import { Key } from 'webdriverio'

class EmailModal {
    get form() { return $('form[name="emailForm"]') }
    get emailDialog() { return $('.md-dialog-container.ng-scope') }
    get emailInput() { return this.form.$('.md-dialog-container.ng-scope #input_620') }
    get sendEmailButton() { return this.form.$('.md-raised.md-primary.cpc-button.md-button.md-ink-ripple') }

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