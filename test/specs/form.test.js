import registerPage from "../pageobjects/register.page.js"
import { testVals } from "../testVals.js"

describe('Positive Testing the', async  () => {
        await registerPage.posTester(testVals.posEPus,                                          'Equivalent Partition USA');
        await registerPage.posTester(testVals.posEPca,                                          'Equivalent Partition Canada');
        await registerPage.posTester(testVals.posEPuk,                                          'Equivalent Partition UK');
        await registerPage.posTester(testVals.posBVALus,                                        'Boundary Value Low US');
        await registerPage.posTester(testVals.posBVALca,                                        'Boundary Value Low Canada');
        await registerPage.posTester(testVals.posBVALuk,                                        'Boundary Value Low UK');
        await registerPage.posTester(testVals.posBVAHus,                                        'Boundary Value High US');
        await registerPage.posTester(testVals.posBVAHca,                                        'Boundary Value High Canada');
        await registerPage.posTester(testVals.posBVAHuk,                                        'Boundary Value High UK');
});
        await registerPage.negTester(testVals.posEPus,      0,  testVals.negFirstName,          'First Name');
        await registerPage.negTester(testVals.posEPus,      1,  testVals.negFirstName,          'Last Name');
        await registerPage.negTester(testVals.posEPus,      2,  testVals.negEmail,              'Email Address');
        await registerPage.negTester(testVals.posEPus,      3,  testVals.negPassword,           'Password');
        await registerPage.negTester(testVals.posEPus,      4,  testVals.negConfirmPassword,    'Confirm Password');
        await registerPage.negTester(testVals.posEPus,      5,  testVals.negPhysAddress,        'Physical Address');
        await registerPage.negTester(testVals.posEPus,      6,  testVals.negAptSuiteUnit,       'Apt/Suite/Unit');
        await registerPage.negTester(testVals.posEPus,      7,  testVals.negCountry,            'Country'); 
        await registerPage.negTester(testVals.posEPus,      8,  testVals.negCity,               'City');
        await registerPage.negTester(testVals.posEPus,      9,  testVals.negStateUS,            'US State');
        await registerPage.negTester(testVals.posEPca,      9,  testVals.negProvinceCA,         'Canada Province');
        await registerPage.negTester(testVals.posEPus,      10, testVals.negZipUS,              'ZIP US');
        await registerPage.negTester(testVals.posEPca,      10, testVals.negPostalCA,           'Postal Canada');
        await registerPage.negTester(testVals.posEPuk,      10, testVals.negPostalUK,           'Postal UK');
        await registerPage.negTester(testVals.posEPus,      11, testVals.negPhone,              'Phone Number');