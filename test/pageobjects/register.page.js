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
        var digitArray = tenDigits.split("-");
        await this.phone0.setValue(digitArray[0]);
        await this.phone1.setValue(digitArray[1]);
        await this.phone2.setValue(digitArray[2]);
    }

    async stateProvince(select) {
        if (this.state.isDisplayed()) {
            console.log("STATE IS SHOWING");
            await this.state.selectByVisibleText(select);
        } else if (this.province.isDisplayed()) {
            console.log("PROVINCE IS SHOWING");
            await this.province.selectByVisibleText(select);
        } else {
          console.log("NEITHER PROVINCE NOR STATE IS SHOWING");
        }
    }

    async testOutcome(specifiedBool) {
        await this.next.click();
        let visErrors = this.errors.filter(ve => ve.isVisible());
        let testSucceed = visErrors.length == 0;
        return testSucceed === specifiedBool;
    }

    async signUp(input) {
        await this.firstName.setValue(input[0]);
        await this.lastName.setValue(input[1]);
        await this.email.setValue(input[2]);
        await this.password.setValue(input[3]);
        await this.confirmPassword.setValue(input[4]);
        await this.address.setValue(input[5]);
        await this.aptSteUnit.setValue(input[6]);
        await this.country.selectByVisibleText(input[7]);
        await this.city.setValue(input[8]);
        await this.stateProvince(input[9]);
        await this.zipPostal.setValue(input[10]);
        await this.phoneNumber(input[11]);
    }

    async posTester(posArray, itComment) {
        const tagArray = [];
        for (let elem of posArray) {
            tagArray.push(elem[1]);
        }
    
        const tags = tagArray.join(', ');

        it(itComment +  " , " + tags, async () => {
            await this.open(); 
            await this.signUp(posArray);
            expect(await this.testOutcome(true)).toBeTruthy();
        });
    }

    async testArrayFilter(inputArray, negTest, negItem) {
        let negFiltered = [];
        for (let elem of inputArray) {
            negFiltered.push(elem[0]);
        }
        if (negTest !== undefined) {
            negFiltered[negTest] = negItem;
        }
        return negFiltered;
    }
    
    async negTester(posArray, negTest, negArray=[[],[]], fieldName) {
        describe('Negative Testing the ' + fieldName + "field",  async () => {
            for (let i = 0; i < negArray.length; i++) {
                it(negArray[i][0] + " , " + negArray[i][1],  async () => {      
                    await this.open();
              this.signUp(await this.testArrayFilter(posArray, negTest, negArray[i][0]));
              expect(await this.testOutcome(false)).toBeTruthy();
                });
            }
        }
    );}


    open () {
        return super.open('/Account/Register');
    }
}

export default new registerPage();