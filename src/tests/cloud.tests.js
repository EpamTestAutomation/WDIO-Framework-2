import HomePage from '../po/pages/home.page.js'
import SearchPage from '../po/pages/search.page.js'
import CalculatorPage from '../po/pages/calculator.page.js'
import EstimateEmail from '../po/pages/estimate.page.js'
import GenerateEmail from '../po/pages/emailgenerator.page.js'
import EmailModal from '../po/pages/emailmodal.page.js'
import EmailInbox from '../po/pages/emailinbox.page.js'

describe('Create an estimate in Google Cloud Calculator', () => {

    beforeEach(async () => {
        await HomePage.open();
    })

    it('Should perform search for "Google Cloud Platform Pricing Calculator"', async () => {
        try {
            await HomePage.performSearch()
            await expect(SearchPage.searchOption).toExist()
        } catch (error) {
            throw new Error('An error occurred while interacting with the element: ' + error.message);
        }

    })

    it('Should click "Google Cloud Platform Pricing Calculator" in the search result', async () => {
        try {
            await HomePage.performSearch()
            await SearchPage.navigateToCalculatorPage()

            //external frames 
            await browser.switchToFrame(0)
            //internal frames 
            const innerFrame = await CalculatorPage.innerIframe
            await browser.switchToFrame(innerFrame)

            await expect(CalculatorPage.computeEngineIcon).toExist()
        } catch (error) {
            throw new Error('An error occurred while interacting with the element: ' + error.message);
        }
    })

    it('Should fill out google cloud pricing calculator form', async () => {
        try {
            await HomePage.performSearch()
            await SearchPage.navigateToCalculatorPage()

            //external frames 
            await browser.switchToFrame(0)
            //internal frames 
            const innerFrame = await CalculatorPage.innerIframe
            await browser.switchToFrame(innerFrame)

            await CalculatorPage.fillOutForm()
            await CalculatorPage.submitEstimate()
            await expect(EmailModal.totalEstimateTitle).toExist()
        } catch (error) {
            throw new Error('An error occurred while interacting with the element: ' + error.message);
        }
    })

    it('Should click send "Email Estimate"', async () => {
        try {
            await HomePage.performSearch()
            await SearchPage.navigateToCalculatorPage()

            //external frames 
            await browser.switchToFrame(0)
            //internal frames 
            const innerFrame = await CalculatorPage.innerIframe
            await browser.switchToFrame(innerFrame)

            await CalculatorPage.fillOutForm()
            await CalculatorPage.submitEstimate()

            await expect(EstimateEmail.totalEstimateTitle).toHaveText('Total Estimated Cost: USD 1,081.20 per 1 month')
            await EstimateEmail.selectEmailEstimate()
            await EstimateEmail.openNewWindow()
            await expect(GenerateEmail.generateEmailLink).toExist()
        } catch (error) {
            throw new Error('An error occurred while interacting with the element: ' + error.message);
        }

    })

    it('Should generate a random email', async () => {
        try {
            await HomePage.performSearch()
            await SearchPage.navigateToCalculatorPage()

            //external frames 
            await browser.switchToFrame(0)
            //internal frames 
            const innerFrame = await CalculatorPage.innerIframe
            await browser.switchToFrame(innerFrame)

            await CalculatorPage.fillOutForm()
            await CalculatorPage.submitEstimate()

            await expect(EstimateEmail.totalEstimateTitle).toHaveText('Total Estimated Cost: USD 1,081.20 per 1 month')
            await EstimateEmail.selectEmailEstimate()
            await EstimateEmail.openNewWindow()

            await GenerateEmail.generateEmail()
            await GenerateEmail.copyEmail()
            await GenerateEmail.switchToPreviousWindow()

            //external frames 
            await browser.switchToFrame(0)
            //internal frames 
            await browser.switchToFrame(innerFrame)
            await expect(EmailModal.emailDialog).toExist()
        } catch (error) {
            throw new Error('An error occurred while interacting with the element: ' + error.message);
        }

    })

    it('Should send email estimate', async () => {
        try {
            await HomePage.performSearch()
            await SearchPage.navigateToCalculatorPage()

            //external frames 
            await browser.switchToFrame(0)
            //internal frames 
            const innerFrame = await CalculatorPage.innerIframe
            await browser.switchToFrame(innerFrame)

            await CalculatorPage.fillOutForm()
            await CalculatorPage.submitEstimate()

            await expect(EstimateEmail.totalEstimateTitle).toHaveText('Total Estimated Cost: USD 1,081.20 per 1 month')
            await EstimateEmail.selectEmailEstimate()
            await EstimateEmail.openNewWindow()

            await GenerateEmail.generateEmail()
            await GenerateEmail.copyEmail()
            await GenerateEmail.switchToPreviousWindow()

            //external frames 
            await browser.switchToFrame(0)
            //internal frames 
            await browser.switchToFrame(innerFrame)

            await EmailModal.awaitEmailDialog()
            await EmailModal.copyEmailIntoField()
            await EmailModal.sendEmailEstimate()
            await EmailModal.switchToPreviousWindow()
            await expect(EmailInbox.emailInbox).toExist()
        } catch (error) {
            throw new Error('An error occurred while interacting with the element: ' + error.message);
        }

    })

    it.only('Should verify that email estimate total matches the calculator', async () => {
        try {
            await HomePage.performSearch()
            await SearchPage.navigateToCalculatorPage()

            //external frames 
            await browser.switchToFrame(0)
            //internal frames 
            const innerFrame = await CalculatorPage.innerIframe
            await browser.switchToFrame(innerFrame)

            await CalculatorPage.fillOutForm()
            await CalculatorPage.submitEstimate()

            await expect(EstimateEmail.totalEstimateTitle).toHaveText('Total Estimated Cost: USD 1,081.20 per 1 month')
            await EstimateEmail.selectEmailEstimate()
            await EstimateEmail.openNewWindow()

            await GenerateEmail.generateEmail()
            await GenerateEmail.copyEmail()
            await GenerateEmail.switchToPreviousWindow()

            //external frames 
            await browser.switchToFrame(0)
            //internal frames 
            await browser.switchToFrame(innerFrame)

            await EmailModal.awaitEmailDialog()
            await EmailModal.copyEmailIntoField()
            await EmailModal.sendEmailEstimate()
            await EmailModal.switchToPreviousWindow()

            await EmailInbox.selectEmailInbox()

            await EmailInbox.switchToFrame()
            await EmailInbox.awaitCostEmail()
            await expect(EmailInbox.totalCostEmail).toHaveText('Estimated Monthly Cost: USD 1,081.20')
        } catch (error) {
            throw new Error('An error occurred while interacting with the element: ' + error.message);
        }

    })


})
