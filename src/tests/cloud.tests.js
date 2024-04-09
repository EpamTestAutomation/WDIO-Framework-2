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

    it('Should verify that email estimate total matches the calculator', async () => {
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

/**
 * Automate the following script: 


1. Open https://cloud.google.com/.
2. Click on the icon at the top of the portal page and enter "Google Cloud Platform Pricing Calculator" into the search field.
3. Perform the search.
4. Click "Google Cloud Platform Pricing Calculator" in the search results and go to the calculator page.
5. Click COMPUTE ENGINE at the top of the page.
6. Fill out the form with the following data:
   * Number of instances: 4
   * What are these instances for?: leave blank
   * Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or another User-Provided OS
   * Provisioning model: Regular
   * Machine Family: General purpose 
   * Series: N1 
   * Machine type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
   * Select “Add GPUs“
           * GPU type: NVIDIA Tesla V100
           * Number of GPUs: 1
   * Local SSD: 2x375 Gb
   * Datacenter location: Frankfurt (europe-west3)
   * Committed usage: 1 Year
Other options leave in the default state.
7. Click 'Add to Estimate'.
8. Check the price is calculated in the right section of the calculator. There is a line “Total Estimated Cost: USD ${amount} per 1 month” 
9. Select 'EMAIL ESTIMATE'.
10. In a new tab, open https://yopmail.com/ or a similar temporary email–generating service.
11. Generate a random email.
12. Copy the email generated in yopmail.com (or any other service). 
13. Return to the calculator and enter the above email into the email field.
14. Press 'SEND EMAIL'.
15. Wait for the cost estimate email and check that the emailed 'Total Estimated Monthly Cost' matches the result in the calculator.


Criteria for successful completion
1. Page object concept is used for page abstractions. Page objects are well-designed and reflect the logical structure of the application.
2. Component classes for business objects of the required elements.
3. Property files are used to store test data for at least two different environments. There is a convenient way in the framework to choose a particular environment.
4. Suites are configured to run smoke tests and other tests separately.
5. If the test fails, a screenshot with the date and time should be taken.
6. Scripts are stabilized. No intermittent failures during the run. It passes during 5 subsequent runs.
 */