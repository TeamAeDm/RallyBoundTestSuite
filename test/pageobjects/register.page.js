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
    get errors ()           { return $$('.errorDv'); }

    async phoneNumber(tenDigits) {
        var digitArray = await tenDigits.split("-");
        await this.phone0.setValue(digitArray[0])
        await this.phone1.setValue(digitArray[1])
        await this.phone2.setValue(digitArray[2])
    }

    async stateProvince(select) {
        if (this.state.isDisplayed()) {
            console.log("STATE IS SHOWING")
            await this.state.selectByVisibleText(select);
        } else if (this.province.isDisplayed()) {
            console.log("PROVINCE IS SHOWING")
            await this.province.selectByVisibleText(select);
        } else {
            console.log("NEITHER PROVINCE NOR STATE IS SHOWING")
        }
    }

    async testOutcome(specifiedBool) {
        await this.next.click;
        let visErrors = this.errors.filter(ve => ve.isVisible());
        let testSucceed = (this.visErrors.length == 0)
        return testSucceed === specifiedBool;
    }


    async signUp(posArray, negTest, negEntry) {

        negTest == 0 ? await this.firstName.setValue(negEntry)                  : await this.firstName.setValue(posArray[0][0]);
        negTest == 1 ? await this.lastName.setValue(negEntry)                   : await this.lastName.setValue(posArray[1][0]);
        negTest == 2 ? await this.email.setValue(negEntry)                      : await this.email.setValue(posArray[2][0]);
        negTest == 3 ? await this.password.setValue(negEntry)                   : await this.password.setValue(posArray[3][0]);
        negTest == 4 ? await this.confirmPassword.setValue(negEntry)            : await this.confirmPassword.setValue(posArray[4][0]);
        negTest == 5 ? await this.address.setValue(negEntry)                    : await this.address.setValue(posArray[5][0]);
        negTest == 6 ? await this.aptSteUnit.setValue(negEntry)                 : await this.aptSteUnit.setValue(posArray[6][0]);
        negTest == 7 ? await this.country.selectByVisibleText(negEntry)         : await this.country.selectByVisibleText(posArray[7][0]);
        negTest == 8 ? await this.city.setValue(negEntry)                       : await this.city.setValue(posArray[8][0]);
        negTest == 9 ? await this.stateProvince(negEntry)                       : await this.stateProvince(posArray[9][0]);
        negTest ==10 ? await this.zipPostal.setValue(negEntry)                  : await this.zipPostal.setValue(posArray[10][0]);
        negTest ==11 ? await this.phoneNumber(negEntry)                         : await this.phoneNumber(posArray[11][0]);
        await this.next.click;
    }

    async posTester(posArray, itComment) {
        it(itComment, async  () => {
            await this.open(); 
            await this.signUp(posArray, 12, 0);
            await expect(this.testOutcome(true)).toBeTruthy(); 
        });
    }

    async negTester(posArray, negTest, negArray=[[],[]], fieldName) {
        describe('Negative Testing the ' + fieldName + "field",  async () => {
            for (let i = 0; i < negArray.length; i++) {
                it(`$negArray[i][0]} , ${negArray[i][1]}`,  async () => {      
                    await this.open();
                    await this.signUp(posArray, negTest, negArray[i][0]);
                    await expect(this.testOutcome(false)).toBeTruthy();
                });
            }
        }
)};


    open () {
        return super.open('/Account/Register');
    }
}

export default new registerPage();