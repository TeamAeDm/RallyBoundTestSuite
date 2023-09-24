import Page from './page.js';

class registerPage extends Page {

 // get object ()           { return $('#selector);}            this is an example

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
    get phone0 ()           { return $('#phoneNumber'); }   //apparently each number block in the phone number field is seperate. check phoneNumber method for how we deal with this
    get phone1 ()           { return $('#phoneNumber2'); }
    get phone2 ()           { return $('#phoneNumber3'); }
    get okToClick ()        { return $('#registerBtn0'); }  //click this button after each test
    get errors ()           { return $$('.errorDv'); }      //this returns a list containing each element that's an error block. we can find out how many errors we have by check how long this array is

    async stateProvince(country, input) {        //the state and province fields only show up if the united states or canada are picked respectively
        switch (country) {

            case "UNITED STATES":                               //if the country is united states,
                await this.state.waitForExist();                //wait for the state field to show up,
                await this.state.selectByVisibleText(input);    //and pick the input from the dropdown
                break;

            case "CANADA":                                      //if the country is canada,
                await this.province.waitForExist();             //wait for the province field to show up
                await this.province.selectByVisibleText(input); //and pick the input from the dropdown
                break;

            default:                                            //in all other cases, don't do anything
                break;
        }
    }

    async phoneNumber(tenDigits) {      //argument is a string like this -> 111-222-3333

        var digitArray = tenDigits.split("-");              // turns 111-222-3333 into [111, 222, 3333]
        await this.phone0.setValue(digitArray[0]);                      //puts 111 into here  
        await this.phone1.setValue(digitArray[1]);                      //puts 222 into here
        await this.phone2.setValue(digitArray[2]);                      //puts 3333 into here
    }

    async testOutcome(errorSpecified) {              //arg is whether we expect the test to pass or fail (true for pass, false for fail)

        await this.okToClick.click();                               //click the "step one" button
        
        let errorElements = await this.errors;                      //await the promise
        let errorCount = errorElements.length;                      //check the array length

        expect(errorCount).toBe(errorSpecified);                    //simple boolean equality check

    }

    async signUp(input) { //input is an array of strings
        input[0] === undefined          ? null : await this.firstName.setValue(                 input[0]);      //set the field to the corresponding input 
        input[1] === undefined          ? null : await this.lastName.setValue(                  input[1]);      //setValue is for text fields
        input[2] === undefined          ? null : await this.email.setValue(                     input[2]);
        input[3] === undefined          ? null : await this.password.setValue(                  input[3]);
        input[4] === undefined          ? null : await this.confirmPassword.setValue(           input[4]);
        input[5] === undefined          ? null : await this.address.setValue(                   input[5]);
        input[6] === undefined          ? null : await this.aptSteUnit.setValue(                input[6]);
        input[7] === undefined          ? null : await this.country.selectByVisibleText(        input[7]);      //selectByVisibleText is for dropdowns 
        input[8] === undefined          ? null : await this.city.setValue(                      input[8]);
        input[9] === undefined          ? null : await this.stateProvince(input[7],             input[9]);      //for this method to work we have to pass it the country and the state/province 
        input[10] === undefined         ? null : await this.zipPostal.setValue(                 input[10]);
        input[11] === undefined         ? null : await this.phoneNumber(                        input[11]);     //phone numbers have to be parsed first using this method
    }

    async clearAll() { //run after each test is complete
        await this.firstName.clearValue();      
        await this.lastName.clearValue();     
        await this.email.clearValue();
        await this.password.clearValue();
        await this.confirmPassword.clearValue();
        await this.address.clearValue();
        await this.aptSteUnit.clearValue();
        await this.city.clearValue();
        await this.zipPostal.clearValue();
        await this.phone0.clearValue();
        await this.phone1.clearValue();    
        await this.phone2.clearValue();
    }   //dropdowns not clearable   

    async posTester(posArray, itComment) {
        let tagArray = [];
        let testArray = [];
        for (let row of posArray) {         //go through each row
            testArray.push(row[0])          //put the first column into the test array
            tagArray.push(row[1]);          //put the second column into the tag array

        }

        const tags = tagArray.join(', ');    //merge the tags into a single string separated by commas

        describe('Positive Test' + itComment, async () => {
            
        
        it(tags, async () => {                                  //put the tags in the it comment
            await this.open();                                  //open the register page
            await this.signUp(testArray);                       //pass the test array to the form
            await this.testOutcome(0);                          //expect the test to pass
            await this.clearAll();
        });});
    }

    async negTester(posArray, negTest, negArray = [[], []], fieldName) {
        describe('Negatively Testing the ' + fieldName + "field", () => {


            for (let row of negArray) {                 // Loop through each value of negArray
                let testAndTagArray = [...posArray];    // Create a copy of posArray
                testAndTagArray[negTest] = row;         // Replace the index in posArray as indicated by negTest with the negArray value

                let testArray = [];                     //create a array just for the test fields and not the tags
                for (let row of testAndTagArray) {      //go through each row
                    testArray.push(row[0])              //and put the first column into the test array
                }
    
                if (negTest !== 4) {                    // if negTest is not 4
                    testArray[4] = testArray[3];        // then replace index 4 with a duplicate of index 3
                }

                it(testAndTagArray[negTest][0] + " , " + testAndTagArray[negTest][1], async () => {     //put the negative input and tag into the it comment
                    await this.open();                                                                  //open the register page
                    await this.signUp(testArray);                                                       //pass the test array to the form
                    await this.testOutcome(1);                                                          //expect the test to pass
                    await this.clearAll();                                                              //then clear the screen for the next pass
                })
            }
        })   
    }

    open() {
        return super.open('/Account/Register');
    }
}

export default new registerPage();