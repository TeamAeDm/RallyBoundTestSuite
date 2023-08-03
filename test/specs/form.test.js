import registerPage from "../pageobjects/register.page.js"
import testVals from "../testVals.js"

describe('Positive Testing the', () => {
    it('Equivalent Partition USA', async () => {
        await registerPage.posTester(testVals.posEPus);
    });

    it('Equivalent Partition Canada', async () => {
        await registerPage.posTester(testVals.posEPca);
    });

    it('Equivalent Partition UK', async () => {
        await registerPage.posTester(testVals.posEPuk);
    });

    it('Boundary Value Low US', async () => {
        await registerPage.posTester(testVals.posBVALus);
    });

    it('Boundary Value Low Canada', async () => {
        await registerPage.posTester(testVals.posBVALca);
    });

    it('Boundary Value Low UK', async () => {
        await registerPage.posTester(testVals.posBVALuk);
    });

    it('Boundary Value High US', async () => {
        await registerPage.posTester(testVals.posBVAHus);
    });

    it('Boundary Value High Canada', async () => {
        await registerPage.posTester(testVals.posBVAHca);
    });

    it('Boundary Value High UK', async () => {
        await registerPage.posTester(testVals.posBVAHuk);
    });


    it('Equivalent Partition Canada', async () => {
        await registerPage.posTester(testVals.posEPca);
    });

    it('Equivalent Partition UK', async () => {
        await registerPage.posTester(testVals.posEPuk);
    });

    it('Boundary Value Low US', async () => {
        await registerPage.posTester(testVals.posBVALus);
    });

    it('Boundary Value Low Canada', async () => {
        await registerPage.posTester(testVals.posBVALca);
    });

    it('Boundary Value Low UK', async () => {
        await registerPage.posTester(testVals.posBVALuk);
    });

    it('Boundary Value High US', async () => {
        await registerPage.posTester(testVals.posBVAHus);
    });

    it('Boundary Value High Canada', async () => {
        await registerPage.posTester(testVals.posBVAHca);
    });

});

describe('Negative Testing the ', () => {
    it('First Name Field', async () => {
        await registerPage.negTester(testVals.posEPus, 0, testVals.negFirstName);
    });

    it('Last Name Field', async () => {
        await registerPage.negTester(testVals.posEPus, 1, testVals.negFirstName);
    });

    it('Email Address Field', async () => {
        await registerPage.negTester(testVals.posEPus, 2, testVals.negEmail);
    });

    it('Password Field', async () => {
        await registerPage.negTester(testVals.posEPus, 3, testVals.negPassword);
    });

    it('Confirm Password Field', async () => {
        await registerPage.negTester(testVals.posEPus, 4, testVals.negConfirmPassword);
    });

    it('Physical Address Field', async () => {
        await registerPage.negTester(testVals.posEPus, 5, testVals.negPhysAddress);
    });

    it('Apt/Suite/Unit Field', async () => {
        await registerPage.negTester(testVals.posEPus, 6, testVals.negAptSuiteUnit);
    });

    it('Country Field', async () => {
        await registerPage.negTester(testVals.posEPus, 7, testVals.negCountry); 
    });

    it('City Field', async () => {
        await registerPage.negTester(testVals.posEPus, 8, testVals.negCity);
    });

    it('US State Field', async () => {
        await registerPage.negTester(testVals.posEPus, 9, testVals.negStateUS);
    });
    
    it('Canada Province Field', async () => {
        await registerPage.negTester(testVals.posEPca, 9, testVals.negProvinceCA);
    });

    it('ZIP US Field', async () => {
        await registerPage.negTester(testVals.posEPus, 10, testVals.negZipUS);
    });

    it('Postal Canada Field', async () => {
        await registerPage.negTester(testVals.posEPca, 10, testVals.negPostalCA);
    });

    it('Postal UK Field', async () => {
        await registerPage.negTester(testVals.posEPuk, 10, testVals.negPostalUK);
    });

    it('Phone Number Field', async () => {
        await registerPage.negTester(testVals.posEPus, 11, testVals.negPhone);
    });
});
