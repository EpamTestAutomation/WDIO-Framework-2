import HomePage from './../po/pages/cloudhome.page.js'

describe('Create an estimate in Google Cloud Calculator', () => {

    beforeEach(async () => {
        await HomePage.open();
    })

    it('Search for "Google Cloud Platform Pricing Calculator"', async () => {
        try {
            await HomePage.searchForCalculator()
        } catch (error) {
            throw new Error('An error occurred while interacting with the element: ' + error.message);
        }

    })
})