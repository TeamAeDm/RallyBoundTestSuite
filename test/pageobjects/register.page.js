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
    get state ()            { return $('#state'); }
    get province ()         { return $('#stateCa'); }
    get zipPostal ()        { return $('#zip'); }
    get phone0 ()           { return $('#phoneNumber'); }
    get phone1 ()           { return $('#phoneNumber2'); }
    get phone2 ()           { return $('#phoneNumber3'); }
    get next ()             { return $('#register1Next'); }
    get step ()             { return $('.stepofFour'); }

    async phoneNumber(tenDigits) {
        var digitArray = await tenDigits.split("-");
        await this.phone0.setValue(digitArray[0])
        await this.phone1.setValue(digitArray[1])
        await this.phone2.setValue(digitArray[2])
    }

    async stateProvince() {
        if (this.state.isDisplayed()) {
            return this.state;
        } else if (this.province.isDisplayed()) {
            return this.province;
        } else {
            return null;
        }
    }

    async expectTestOutcome(specifiedBool) {
        const elementHasText = await browser.waitUntil(async () => {
            return (await browser.getText(this.step)) === 'Step 2 of 4';
        }, {
            timeout: 5000,
            timeoutMsg: 'Form contains invalid Entries'
        });

        return elementHasText === specifiedBool;
        
    }


    async signUp(posArray, negTest, negEntry) {

        negTest == 0 ? await this.firstName.setValue(negEntry)                  : await this.firstName.setValue(posArray[0]);
        negTest == 1 ? await this.lastName.setValue(negEntry)                   : await this.lastName.setValue(posArray[1]);
        negTest == 2 ? await this.email.setValue(negEntry)                      : await this.email.setValue(posArray[2]);
        negTest == 3 ? await this.password.setValue(negEntry)                   : await this.password.setValue(posArray[3]);
        negTest == 4 ? await this.confirmPassword.setValue(negEntry)            : await this.confirmPassword.setValue(posArray[4]);
        negTest == 5 ? await this.address.setValue(negEntry)                    : await this.address.setValue(posArray[5]);
        negTest == 6 ? await this.aptSteUnit.setValue(negEntry)                 : await this.aptSteUnit.setValue(posArray[6]);
        negTest == 7 ? await this.country.selectByVisibleText(negEntry)         : await this.country.selectByVisibleText(posArray[7]);
        negTest == 8 ? await this.city.setValue(negEntry)                       : await this.city.setValue(posArray[8]);
        negTest == 9 ? await this.stateProvince.selectByVisibleText(negEntry)   : await this.stateProvince.selectByVisibleText(posArray[9]);
        negTest ==10 ? await this.zipPostal.setValue(negEntry)                  : await this.zipPostal.setValue(posArray[10]);
        negTest ==11 ? await this.phoneNumber(negEntry)                         : await this.phoneNumber(posArray[11]);
        await this.next.click;
    }

    async posTester(posArray) {
        await this.open(); 
        this.signUp(posArray, 12, 0);
        await expect(this.expectTestOutcome(true)).toBeTruthy(); 
    }

    async negTester(posArray, negTest, negArray) {
            for (let i = 0; i < negArray.length; i++) {
                await this.open();
                await this.signUp(posArray, negTest, negArray[i]);
                await expect(this.expectTestOutcome(false)).toBeTruthy();
            }
    }


    open () {
        return super.open('/Account/Register');
    }
}

export default new registerPage();