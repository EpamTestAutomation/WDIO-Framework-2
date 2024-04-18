describe('Smoke test suite', () => {

    beforeEach(async () => {
        await HomePage.open();
    })

    it('Should verify that email estimate total matches the calculator', async () => {
        await HomePage.performSearch()
        await SearchPage.navigateToCalculatorPage()
        await CalculatorPage.switchToFrame()
        await CalculatorPage.fillOutForm()
        await CalculatorPage.submitEstimate()
        await expect(EstimateEmail.totalEstimateTitle).toHaveText('Total Estimated Cost: USD 1,081.20 per 1 month')
        await EstimateEmail.selectEmailEstimate()
        await EstimateEmail.openNewWindow()
        await GenerateEmail.generateEmail()
        await GenerateEmail.closeModal()
        await GenerateEmail.copyEmail()
        await GenerateEmail.switchToPreviousWindow()
        await CalculatorPage.switchToFrame()
        await EmailModal.awaitEmailDialog()
        await EmailModal.copyEmailIntoField()
        await EmailModal.sendEmailEstimate()
        await EmailModal.switchToPreviousWindow()
        await EmailInbox.selectEmailInbox()
        await EmailInbox.switchToFrame()
        await EmailInbox.awaitCostEmail()
        await expect(EmailInbox.totalCostEmail).toHaveText('Estimated Monthly Cost: USD 1,081.20')
    })
})
