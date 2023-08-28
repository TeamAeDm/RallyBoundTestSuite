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

    async setValueAsKeys(elem, str) {
        const codePoints = [];
      
        for (const character of str) {
          const codePoint = character.codePointAt(0);
          const unicodeCharacter = String.fromCodePoint(codePoint);
          codePoints.push(unicodeCharacter);
        }
        await elem.click()
        await elem.keys(codePoints)
      }

    async phoneNumber(tenDigits) {
        var digitArray = tenDigits.split("-");
        await this.setValueAsKeys(  this.phone0,    digitArray[0]);
        await this.setValueAsKeys(  this.phone1,    digitArray[1]);
        await this.setValueAsKeys(  this.phone2,    digitArray[2]);
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
        await this.setValueAsKeys(              this.firstName,             input[0]);
        await this.setValueAsKeys(              this.lastName,              input[1]);
        await this.setValueAsKeys(              this.email,                 input[2]);
        await this.setValueAsKeys(              this.password,              input[3]);
        await this.setValueAsKeys(              this.confirmPassword,       input[4]);
        await this.setValueAsKeys(              this.address,               input[5]);
        await this.setValueAsKeys(              this.aptSteUnit,            input[6]);
        await this.country.selectByVisibleText(                             input[7]);
        await this.setValueAsKeys(              this.city,                  input[8]);
        await this.stateProvince(                                           input[9]);
        await this.setValueAsKeys(              this.zipPostal,             input[10]);
        await this.phoneNumber(                                             input[11]);
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
        let negFiltered = [];
        for (const elem of posArray) {
            negFiltered.push(elem[0]);
        }
    
        if (negTest !== undefined) {
            negFiltered[negTest] = negArray[0][0];
        }
    
        describe('Negative Testing the ' + fieldName + "field",  async () => {
            for (let i = 0; i < negArray.length; i++) {
                it(negArray[i][0] + " , " + negArray[i][1],  async () => {      
                    await this.open();
              this.signUp(negFiltered);
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