import Page from './page.js';


class registerPage extends Page {

    get firstName ()        { return $('#firstName');}
    get lastName ()         { return $('#lastName'); }
    get email ()            { return $('#emailAddress'); }
    get password ()         { return $('#password'); }
    get confirmPassword ()  { return $('#confirmPassword'); }
    get address ()          { return $('#address1'); }
    get aptSteUnit ()       { return $('#address2'); }
    get country ()          { return $('#country'); }
    get city ()             { return $('#city'); }
    get stateProvince()     { return $('#state').isDisplayed() ? $('#state') : $('#stateCa'); }
    get zipPostal ()        { return $('#zip'); }
    get phone0 ()           { return $('#phoneNumber'); }
    get phone1 ()           { return $('#phoneNumber2'); }
    get phone2 ()           { return $('#phoneNumber3'); }
    get next ()             { return $('#register1Next'); }
    get errors ()           { return $$('.errorDv'); }

    async setValueAsKeys(element, str) {
        if (typeof element !== 'object') {
            console.log('Element value:', element);
            throw new Error(`Expected an object but received a ${typeof element}`);
        }
        if (typeof str !== 'string') {
            console.log('String value:', str);
            throw new Error(`Expected a string but received a ${typeof str}`);
        }
        const codePoints = Array.from(str, char => char.codePointAt(0));
        await element.click();
        await browser.keys(codePoints);
    }

    async phoneNumber(tenDigits) {
        var digitArray = tenDigits.split("-");
        console.log('digitArray[0] type:', typeof digitArray[0], 'value:', digitArray[0]);
        await this.setValueAsKeys(this.phone0, digitArray[0]);
        await this.setValueAsKeys(this.phone1, digitArray[1]);
        await this.setValueAsKeys(this.phone2, digitArray[2]);
    }

    async testOutcome(specifiedBool) {
        await this.next.click();
        let visErrors = this.errors.filter(ve => ve.isVisible());
        let testSucceed = visErrors.length == 0;
        return testSucceed === specifiedBool;
    }

    async signUp(input) {
        console.log('input[0] type:', typeof input[0], 'value:', input[0]);
        if (typeof input[0] === 'string') {
            await this.setValueAsKeys(this.firstName, input[0]);
        } else {
            console.log(`Expected a string for firstName but received a ${typeof input[0]}`);
        }
        console.log('input[1] type:', typeof input[1], 'value:', input[1]);
        if (typeof input[1] === 'string') {
            await this.setValueAsKeys(this.lastName, input[1]);
        } else {
            console.log(`Expected a string for LastName but received a ${typeof input[1]}`);
        }
        console.log('input[2] type:', typeof input[2], 'value:', input[2]);
        if (typeof input[2] === 'string') {
            await this.setValueAsKeys(this.email, input[2]);
        } else {
            console.log(`Expected a string for email but received a ${typeof input[2]}`);
        }
        console.log('input[3] type:', typeof input[3], 'value:', input[3]);
        if (typeof input[3] === 'string') {
            await this.setValueAsKeys(this.password, input[3]);
        } else {
            console.log(`Expected a string for password but received a ${typeof input[3]}`);
        }
        console.log('input[4] type:', typeof input[4], 'value:', input[4]);
        if (typeof input[4] === 'string') {
            await this.setValueAsKeys(this.confirmPassword, input[4]);
        } else {
            console.log(`Expected a string for confirmPassword but received a ${typeof input[4]}`);
        }
        console.log('input[5] type:', typeof input[5], 'value:', input[5]);
        if (typeof input[5] === 'string') {
            await this.setValueAsKeys(this.address, input[5]);
        } else {
            console.log(`Expected a string for address but received a ${typeof input[5]}`);
        }
        console.log('input[6] type:', typeof input[6], 'value:', input[6]);
        if (typeof input[6] === 'string') {
            await this.setValueAsKeys(this.aptSteUnit, input[6]);
        } else {
            console.log(`Expected a string for aptSteUnit but received a ${typeof input[6]}`);
        }
        console.log('input[7] type:', typeof input[7], 'value:', input[7]);
        if (typeof input[7] === 'string') {
            await selectByVisibleText(this.country, input[7]);
        } else {
            console.log(`Expected a string for country but received a ${typeof input[7]}`);
        }
        console.log('input[8] type:', typeof input[8], 'value:', input[8]);
        if (typeof input[8] === 'string') {
            await this.setValueAsKeys(this.city, input[8]);
        } else {
            console.log(`Expected a string for city but received a ${typeof input[8]}`);
        }
        console.log('input[9] type:', typeof input[9], 'value:', input[9]);
        if (typeof input[9] === 'string') {
            await selectByVisibleText(this.stateProvince, input[9]);
        } else {
            console.log(`Expected a string for stateProvince but received a ${typeof input[9]}`);
        }
        console.log('input[10] type:', typeof input[10], 'value:', input[10]);
        if (typeof input[10] === 'string') {
            await this.setValueAsKeys(this.zipPostal, input[10]);
        } else {
            console.log(`Expected a string for zipPostal but received a ${typeof input[10]}`);
        }
        console.log('input[11] type:', typeof input[11], 'value:', input[11]);
        if (typeof input[11] === 'string') {
            await this.phoneNumber(input[11]);
        } else {
            console.log(`Expected a string for phoneNumber but received a ${typeof input[11]}`);
        }
        const negArray = [["error1", "description1"], ["error2", "description2"]];
        this.negTester(posArray, negTest, negArray, fieldName);
        for (let i = 0; i < negArray.length; i++) {
            console.log('Loop iteration:', i);
        }
    } catch(error) {
        console.error('An error occurred:', error);
    }

    async posTester(posArray, itComment) {
        let tagArray = [];
        let testArray = [];
        for (let row of posArray) {
            testArray.push(row[0])
            tagArray.push(row[1]);

        }

        const tags = tagArray.join(',');

        it(itComment + " , " + tags, async () => {
            await this.open();
            await this.signUp(testArray);
            expect(await this.testOutcome(true)).toBeTruthy();
        });
    }

    async negTester(posArray, negTest, negArray = [[], []], fieldName) {
        let negFiltered = [];
        for (const elem of posArray) {
            negFiltered.push(elem[0]);
        }

        if (negTest !== undefined) {
            negFiltered[negTest] = negArray[0][0];
        }

        describe('Negative Testing the ' + fieldName + "field", async () => {
            for (let i = 0; i < negArray.length; i++) {
                it(negArray[i][0] + " , " + negArray[i][1], async () => {
                    await this.open();
                    this.signUp(negFiltered);
                    expect(await this.testOutcome(false)).toBeTruthy();
                });
            }
        });
    }

    open() {
        return super.open('/Account/Register');
    }
}

export default new registerPage();