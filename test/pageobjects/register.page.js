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
        await this.setValueAsKeys(  this.phone0,    digitArray[0]);
        await this.setValueAsKeys(  this.phone1,    digitArray[1]);
        await this.setValueAsKeys(  this.phone2,    digitArray[2]);
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
    if (typeof input[1] === 'string') {
        await this.setValueAsKeys(this.lastName, input[1]);
    } else {
        console.log(`Expected a string for LastName but received a ${typeof input[1]}`);
    }
    if (typeof input[2] === 'string') {
        await this.setValueAsKeys(this.email, input[2]);
    } else {
        console.log(`Expected a string for email but received a ${typeof input[2]}`);
    }
    if (typeof input[3] === 'string') {
        await this.setValueAsKeys(this.password, input[3]);
    } else {
        console.log(`Expected a string for password but received a ${typeof input[3]}`);
    }
    if (typeof input[4] === 'string') {
        await this.setValueAsKeys(this.confirmPassword, input[4]);
    } else {
        console.log(`Expected a string for confirmPassword but received a ${typeof input[4]}`);
    }
    if (typeof input[5] === 'string') {
        await this.setValueAsKeys(this.address, input[5]);
    } else {
        console.log(`Expected a string for address but received a ${typeof input[5]}`);
    }
    if (typeof input[6] === 'string') {
        await this.setValueAsKeys(this.aptSteUnit, input[6]);
    } else {
        console.log(`Expected a string for aptSteUnit but received a ${typeof input[6]}`);
    }
    if (typeof input[7] === 'string') {
        await selectByVisibleText(this.country, input[7]);
    } else {
        console.log(`Expected a string for country but received a ${typeof input[7]}`);
    }
    if (typeof input[8] === 'string') {
        await this.setValueAsKeys(this.city, input[8]);
    } else {
        console.log(`Expected a string for city but received a ${typeof input[8]}`);
    }
    if (typeof input[9] === 'string') {
        await selectByVisibleText(this.stateProvince, input[9]);
    } else {
        console.log(`Expected a string for stateProvince but received a ${typeof input[9]}`);
    }
    if (typeof input[10] === 'string') {
        await this.setValueAsKeys(this.zipPostal, input[10]);
    } else {
        console.log(`Expected a string for zipPostal but received a ${typeof input[10]}`);
    }
    if (typeof input[11] === 'string') {
        await this.phoneNumber(input[11]);
    } else {
        console.log(`Expected a string for phoneNumber but received a ${typeof input[11]}`);
    }
    for (let i = 0; i < negArray.length; i++) {
        console.log('Loop iteration:', i);
    }
}

    async posTester(posArray, itComment) {
        const tagArray = [];
        for (let elem of posArray) {
            tagArray.push(elem[1]);
        }
    
        const tags = tagArray.join(',');

        it(itComment +  " , " + tags, async () => {
            await this.open(); 
            await this.signUp(posArray);
            expect(await this.testOutcome(true)).toBeTruthy();
        });
    }
    
        async negTester (posArray, negTest, negArray=[[],[]], fieldName) {
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
        });
        }

    open () {
        return super.open('/Account/Register');
    }
}

export default new registerPage();