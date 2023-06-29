

import Page from './page.js';


class registerPage extends Page {
    /*
    define selectors using getter methods
    */
    get firstName ()        { return $('#firstName');}
    get lastName ()         { return $('#lastName'); }
    get email ()            { return $('#emailAddress'); }
    get password ()         { return $('#password'); }
    get confirmPassword ()  { return $('#confirmPassword'); }
    get address ()          { return $('#address1'); }
    get aptSteUnit ()       { return $('#address2'); }
    get country ()          { return $('#country'); }
    get city ()             { return $('#city'); }
    get stateProvince ()    { return $('#state'); }
    get zipPostal ()        { return $('#zip'); }
    get phone1 ()           { return $('#phoneNumber'); }
    get phone2 ()           { return $('#phoneNumber2'); }
    get phone3 ()           { return $('#phoneNumber3'); }
    get next ()             { return $('#register1Next'); }

    async signUp (posArray, negTest, negEntry) {
 
        negTest == 0 ? await this.firstName.setValue(negEntry)                 : await this.firstName.setValue(posArray[0]);
        negTest == 1 ? await this.lastName.setValue(negEntry)                  : await this.lastName.setValue(posArray[1]);
        negTest == 2 ? await this.email.setValue(negEntry)                     : await this.email.setValue(posArray[2]);
        negTest == 3 ? await this.password.setValue(negEntry)                  : await this.password.setValue(posArray[3]);
        negTest == 4 ? await this.confirmPassword.setValue(negEntry)           : await this.confirmPassword.setValue(posArray[4]);
        negTest == 5 ? await this.address.setValue(negEntry)                   : await this.address.setValue(posArray[5]);
        negTest == 6 ? await this.aptSteUnit.setValue(negEntry)                : await this.aptSteUnit.setValue(posArray[6]);
        negTest == 7 ? await this.country.selectByVisibleText(negEntry)        : await this.country.selectByVisibleText(posArray[7]);
        negTest == 8 ? await this.city.setValue(negEntry)                      : await this.city.setValue(posArray[8]);
        negTest == 9 ? await this.stateProvince.selectByVisibleText(negEntry)  : await this.stateProvince.selectByVisibleText(posArray[9]);
        negTest ==10 ? await this.zipPostal.setValue(negEntry)                 : await this.zipPostal.setValue(posArray[10]);
        negTest ==11 ? await this.phone1.setValue(negEntry)                    : await this.phone1.setValue(posArray[11]);
        negTest ==12 ? await this.phone2.setValue(negEntry)                    : await this.phone2.setValue(posArray[12]);
        negTest ==13 ? await this.phone3.setValue(negEntry)                    : await this.phone3.setValue(posArray[13]);
        await this.next.click;
    }

    posTester = (posArray) => this.signUp(posArray, null, null);

    async negTester(posArray, negTest, negArray) {
        for (let i = 0; i <= negArray.length; i++) {
            await this.signUp(posArray, negTest, negArray[i]);
        }
    }
    open () {
        return super.open('Account/Register');
    }
}


export default new registerPage();
