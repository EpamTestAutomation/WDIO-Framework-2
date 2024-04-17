class CalculatorPage {
    get outerIframe() { return $('#cloud-site devsite-iframe iframe') }
    get innerIframe() { return $('iframe#myFrame') }
    get computeEngineIcon() { return $('#tab-item-1 .tab-holder') }
    get form() { return $('form[name=ComputeEngineForm]') }
    get instanceInput() { return $('#input_100') }
    get softwareSelect() { return this.form.$('#select_value_label_92') }
    get softwareOption() { return $('#select_option_102 .md-text') }
    get provisioningModelSelect() { return this.form.$('#select_value_label_93') }
    get provisioningModelOption() { return $('#select_option_115 .md-text') }
    get machineFamilySelect() { return this.form.$('#select_value_label_94') }
    get machineFamilyOption() { return $('#select_option_119 .md-text') }
    get seriesSelect() { return this.form.$('#select_value_label_95') }
    get seriesOption() { return $('#select_option_224 .md-text') }
    get machineTypeSelect() { return this.form.$('#select_value_label_96') }
    get machineTypeOption() { return $('#select_option_474 .md-text') }
    get gpuCheckbox() { return this.form.$('[aria-label="Add GPUs"]') }
    get gpuTypeSelect() { return this.form.$('#select_510') }
    get gpuTypeOption() { return $('#select_option_517 .md-text') }
    get gpuNumberSelect() { return this.form.$('#select_512') }
    get gpuNumberOption() { return $('#select_option_520 .md-text') }
    get ssdLocalSelect() { return this.form.$('#select_469') }
    get ssdLocalOption() { return $('#select_option_495 .md-text') }
    get locationSelect() { return $('#select_133') }
    get locationOption() { return $('#select_option_268 .md-text') }
    get usageSelect() { return this.form.$('#select_140') }
    get usageOption() { return $('#select_option_138 .md-text') }
    get submitEstimateButton() { return this.form.$('.cpc-button.md-button.md-ink-ripple.md-primary.md-raised') }

    async fillOutForm() {

        await this.clickElement(await this.computeEngineIcon)
        await this.instanceInput.setValue('4')

        await this.clickElement(await this.softwareSelect)
        await this.clickElement(await this.softwareOption)

        await this.clickElement(await this.provisioningModelSelect)
        await this.clickElement(await this.provisioningModelOption)

        await this.clickElement(await this.machineFamilySelect)
        await this.clickElement(await this.machineFamilyOption)

        await this.clickElement(await this.seriesSelect)
        await this.clickElement(await this.seriesOption)

        await this.clickElement(await this.machineTypeSelect)
        await this.clickElement(await this.machineTypeOption)

        await this.clickElement(await this.gpuCheckbox)

        await this.clickElement(await this.gpuTypeSelect)
        await this.clickElement(await this.gpuTypeOption)

        await this.clickElement(await this.gpuNumberSelect)
        await this.clickElement(await this.gpuNumberOption)

        await this.clickElement(await this.ssdLocalSelect)
        await this.clickElement(await this.ssdLocalOption)

        await this.clickElement(await this.locationSelect)
        await this.clickElement(await this.locationOption)

        await this.clickElement(await this.usageSelect)
        await this.clickElement(await this.usageOption)
    }

    async submitEstimate() {
        await this.clickElement(await this.submitEstimateButton)
    }

    async clickElement(selector) {
        await $(selector).waitForDisplayed({timeout: 90000});
        await $(selector).waitForClickable();
        await $(selector).click();
    }

    async switchToFrame() {
        await browser.switchToFrame(await this.outerIframe)
        await browser.switchToFrame(await this.innerIframe)
    }
}

export default new CalculatorPage()