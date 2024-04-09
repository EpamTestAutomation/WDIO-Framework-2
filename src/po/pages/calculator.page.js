class CalculatorPage {
    get outerIframe() { return $(0) }
    get innerIframe() { return $('iframe#myFrame')}
    get computeEngineIcon() { return $('#tab-item-1 > .tab-holder')}
    get instanceInput() { return $('.layout-row:nth-child(3) input#input_100')}
    get form() { return $('form[name=ComputeEngineForm]')}
    get softwareSelect() { return $('.layout-row:nth-child(5) #select_value_label_92')}
    get softwareOption() { return $('md-option#select_option_102 > .md-text')}
    get provisioningModelSelect() { return this.form.$('.layout-row:nth-child(6) #select_value_label_93')}
    get provisioningModelOption() { return $('md-option#select_option_115 > .md-text')}
    get machineFamilySelect() { return this.form.$('.layout-row:nth-child(7) #select_value_label_94')}
    get machineFamilyOption() { return $('md-option#select_option_119 > .md-text')}
    get seriesSelect() { return this.form.$('.layout-row:nth-child(8) #select_value_label_95')}
    get seriesOption() { return $('md-option#select_option_224 > .md-text')}
    get machineTypeSelect() { return this.form.$('.layout-row:nth-child(9) #select_value_label_96')}
    get machineTypeOption() { return $('md-option#select_option_474 > .md-text')}
    get gpuCheckbox() { return this.form.$('.layout-row:nth-child(15) md-checkbox > .md-container')}
    get gpuTypeSelect() { return this.form.$('.layout-row #select_510')}
    get gpuTypeOption() { return $('md-option#select_option_517 > .md-text')}
    get gpuNumberSelect() { return this.form.$('.layout-row #select_512')}
    get gpuNumberOption() { return $('md-option#select_option_520 > .md-text')}
    get ssdLocalSelect() { return this.form.$('.layout-row #select_469')}
    get ssdLocalOption() { return $('md-option#select_option_495 > .md-text')}
    get locationSelect() { return $('.layout-row #select_133')}
    get locationOption() { return $('md-option#select_option_268 > .md-text')}
    get usageSelect() { return this.form.$('.layout-row #select_140')}
    get usageOption() { return $('md-option#select_option_138 > .md-text')}
    get submitEstimateButton() { return this.form.$('.cpc-button.md-button.md-ink-ripple.md-primary.md-raised')}

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
        await $(selector).waitForDisplayed();
        await $(selector).waitForClickable();
        await $(selector).click();
    }
}

export default new CalculatorPage()