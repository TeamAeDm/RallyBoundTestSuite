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

    /*
    async setValuesAsKeys(element, str) {
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
    */
    async phoneNumber(tenDigits) {
        var digitArray = tenDigits.split("-");
        await this.phone0.setValue(digitArray[0]);
        await this.phone1.setValue(digitArray[1]);
        await this.phone2.setValue(digitArray[2]);
    }

    async testOutcome(specifiedBool) {
        await this.next.click();
        let visErrors = this.errors.filter(ve => ve.isVisible());
        let testSucceed = visErrors.length == 0;
        return testSucceed === specifiedBool;
    }

    async signUp(input) {

        await this.firstName.setValue(                  input[0]);
        await this.lastName.setValue(                   input[1]);
        await this.email.setValue(                      input[2]);
        await this.password.setValue(                   input[3]);
        await this.confirmPassword.setValue(            input[4]);
        await this.address.setValue(                    input[5]);
        await this.aptSteUnit.setValue(                 input[6]);
        await this.country.selectByVisibleText(         input[7]);
        await this.city.setValue(                       input[8]);
        await this.stateProvince.selectByVisibleText(   input[9]);
        await this.zipPostal.setValue(                  input[10]);
        await this.phoneNumber(                         input[11]);
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