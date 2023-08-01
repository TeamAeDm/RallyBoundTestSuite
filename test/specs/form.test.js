import registerPage from "../pageobjects/register.page.js"
import testVals from "./testVals.js";

describe('Testing the', () => {
    it('Equivalent Partition USA', async () => {
        await registerPage.open();
        await registerPage.posTester(testVals.posEPus);
        await expect(registerPage.step2).toBeDisplayed();
    });

    it('Equivalent Partition Canada', async () => {
        await registerPage.open();
        await registerPage.posTester(testVals.posEPca);
        await expect(registerPage.step2).toBeDisplayed();
    });

    it('Equivalent Partition UK', async () => {
        await registerPage.open();
        await registerPage.posTester(testVals.posEPuk);
        await expect(registerPage.step2).toBeDisplayed();
    });

    it('Boundary Value Low US', async () => {
        await registerPage.open();
        await registerPage.posTester(testVals.posBVALus);
        await expect(registerPage.step2).toBeDisplayed();
    });

    it('Boundary Value Low Canada', async () => {
        await registerPage.open();
        await registerPage.posTester(testVals.posBVALca);
        await expect(registerPage.step2).toBeDisplayed();
    });

    it('Boundary Value Low UK', async () => {
        await registerPage.open();
        await registerPage.posTester(testVals.posBVALuk);
        await expect(registerPage.step2).toBeDisplayed();
    });

    it('Boundary Value High US', async () => {
        await registerPage.open();
        await registerPage.posTester(testVals.posBVAHus);
        await expect(registerPage.step2).toBeDisplayed();
    });

    it('Boundary Value High Canada', async () => {
        await registerPage.open();
        await registerPage.posTester(testVals.posBVAHca);
        await expect(registerPage.step2).toBeDisplayed();
    });

    it('Boundary Value High UK', async () => {
        await registerPage.open();
        await registerPage.posTester(testVals.posBVAHuk);
        await expect(registerPage.step2).toBeDisplayed();
    });
});
