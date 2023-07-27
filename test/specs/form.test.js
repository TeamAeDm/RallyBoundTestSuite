import registerPage from "../pageobjects/register.page.js"
import testVals from "./testVals.js";

describe('Testing the', () => {
    it('Equivalent Partition USA', async () => {
        console.log("Starting the test...");
        await registerPage.open();
        console.log("Page opened successfully.");
        await registerPage.posTester(testVals.posEPus);
        await expect(registerPage.step2).toBeDisplayed();
        console.log("Test completed.");
    });
});
