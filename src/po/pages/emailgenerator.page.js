class GenerateEmail {
    get generateEmailLink() { return $('#listeliens [href="email-generator"]') }
    get clipboardEmail() { return $('#cprnd') }
    get iframeElement() { return $('iframe#aswift_6') }
    get modal() { return $('#dismiss-button') }
    
    
    async closeModal() {
        const popup = await $('tu_selector_del_popup').waitForExist({ timeout: 5000 });
        if (popup) {
            // Si se encuentra el popup, haz clic en el botón de cierre (reemplaza 'tu_selector_del_boton_de_cierre' con uno válido)
            await $('tu_selector_del_boton_de_cierre').click();
        }
        await this.modal.click()
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
        await browser.switchToFrame(await this.iframeElement)
    }
}

export default new GenerateEmail()