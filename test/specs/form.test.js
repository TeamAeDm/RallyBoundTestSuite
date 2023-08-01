import registerPage from "../pageobjects/register.page.js"
import testVals from "./testVals.js";

describe('Testing the', () => {
    it('Equivalent Partition USA', async () => {
        await registerPage.open();
        await registerPage.posTester(testVals.posEPus);
        await expect(registerPage.step2).toBeDisplayed();
    });
});
