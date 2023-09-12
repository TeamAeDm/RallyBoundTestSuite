import Page from './page.js';


class registerPage extends Page {
//  get object ()           { return $('#selector);}            this is an example
    get firstName ()        { return $('#firstName');}
    get lastName ()         { return $('#lastName'); }
    get email ()            { return $('#emailAddress'); }
    get password ()         { return $('#password'); }
    get confirmPassword ()  { return $('#confirmPassword'); }
    get address ()          { return $('#address1'); }
    get aptSteUnit ()       { return $('#address2'); }
    get country ()          { return $('#country'); }
    get city ()             { return $('#city'); }
    get state()             { return $('#state'); }
    get province()          { return $('#stateCa'); }
    get zipPostal ()        { return $('#zip'); }
    get phone0 ()           { return $('#phoneNumber'); }//apparently each number block in the phone number field is seperate. check phoneNumber method for how we deal with this
    get phone1 ()           { return $('#phoneNumber2'); }
    get phone2 ()           { return $('#phoneNumber3'); }
    get next ()             { return $('#register1Next'); } //this is the button we click to send the form
    get errors ()           { return $$('.errorDv'); } //this returns a list containing each element that's an error block. we can find out how many errors we have by check how long this array is

    async stateProvince(country, input) {        //the state and province fields only show up if the united states or canada are picked respectively
        switch (country) {
            case "UNITED STATES":                               //if the country is united states,
                await this.state.waitForExist();                //wait for the state field to show up,
                await this.state.selectByVisibleText(input);    //and pick the input from the dropdown
                break;
            case "CANADA"                                       //if the country is canada,
                await this.province.waitForExist();             //wait for the province field to show up
                await this.province.selectByVisibleText(input); //and pick the input from the dropdown
                break;
            default:                                            //in all other cases, don't do anything
                break;
        }
    }

    async phoneNumber(tenDigits) { //argument is a string like this -> 111-222-3333

        var digitArray = tenDigits.split("-"); // turns 111-222-3333 into [111, 222, 3333]
        await this.phone0.setValue(digitArray[0]); //puts 111 into here  
        await this.phone1.setValue(digitArray[1]); //puts 222 into here
        await this.phone2.setValue(digitArray[2]); //puts 3333 into here
    }

    async testOutcome(specifiedBool) { //arg is whether we expect the test to pass or fail (true for pass, false for fail)

        await this.next.click();                                    //click the "next" button
        let visErrors = this.errors.filter(ve => ve.isVisible());   //we define number of errors by how many error boxes show up
        let testSucceed = visErrors.length == 0;                    //define a passing test as having no error boxes

        if (visErrors.length <= 1) { //in a positive test, we should have no errors. in a negative test, we should have exactly one
            
            return testSucceed === specifiedBool; //if expectation matches outcome, we want a return true. else it should be false. simple equality check should do.



        } else {                                                                            //if there are 2 or more errors, 
            console.log("found "+ visErrors.length +" invalid entries, which isn't good");  //log the problem
            return false;                                                                   //and fail the test 
        }

    }

    async signUp(input) { //input is an array of strings
        await this.firstName.setValue(                  input[0]);  //set the field to the corresponding input 
        await this.lastName.setValue(                   input[1]);  //setValue is for text fields
        await this.email.setValue(                      input[2]);
        await this.password.setValue(                   input[3]);
        await this.confirmPassword.setValue(            input[4]);
        await this.address.setValue(                    input[5]);
        await this.aptSteUnit.setValue(                 input[6]);
        await this.country.selectByVisibleText(         input[7]);  //selectByVisibleText is for dropdowns 
        await this.city.setValue(                       input[8]);
        await this.stateProvince(       input[7],       input[9]);  //for this method to work we have to pass it the country and the state/province 
        await this.zipPostal.setValue(                  input[10]);
        await this.phoneNumber(                         input[11]); //phone numbers have to be parsed first using this method
    }


    async posTester(posArray, itComment) {
        let tagArray = [];
        let testArray = [];
        for (let row of posArray) { //go through each row
            testArray.push(row[0])  //put the first column into the test array
            tagArray.push(row[1]);  //put the second column into the tag array

        }

        const tags = tagArray.join(','); //merge the tags into a single string separated by commas

        it(itComment + " , " + tags, async () => { 
            await this.open();                                  //open the register page
            await this.signUp(testArray);                       //pass the test array to the form
            expect(await this.testOutcome(true)).toBeTruthy();  //expect the test to pass
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