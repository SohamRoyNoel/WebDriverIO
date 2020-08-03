/*
    Pics up one transaction from Show Transactions
    finds it in Find transfer

    Same Validation for Find Transaction

*/
import LoginPage from '../page-objects/pages/LoginPage'
import NavBar from '../page-objects/components/NavBar'
import App from '../page-objects/App'

describe('e2e Test- Login/logout Flow', () => {

    it('Launch Browser', () => {
        App.openHomePage();
        
        browser.maximizeWindow();
        LoginPage.pauseMedium();
        NavBar.doSignInClick();
    })

    it('Should login with valid credentials', () => {
        browser.refresh();
        LoginPage.fillTheForm('username', 'password');
        LoginPage.submitTheForm();

        LoginPage.pauseMedium();
    })

    it('Click On Pay Bills Tab and Check Redirection To Pay Saved Payee', () => {
        $('#account_activity_tab').click();
        
        browser.pause(3000);
    })

    // validating the Happy Path
    it('validating the Happy Path', () => {
        /*
            Reading data Dynamically from a  table
        */
       const numberOfElements = $$('//*[@id="all_transactions_for_account"]/table/tbody/tr');

       /*
        Just For Fun
       */
       // Toy can simply use JSON.stringify(numberOfElements) to see the json structure
       var getTheJson = JSON.stringify(numberOfElements);
       var perseToArray = JSON.parse(getTheJson);
       var getNumberOfCapturedElements = perseToArray.length;
        var i, j;
       for (i = 1; i <= getNumberOfCapturedElements; i++) {
            var createXpath = $$('//*[@id="all_transactions_for_account"]/table/tbody/tr['+i+"]");
            for (j = 1; j <= 4; j++) {
                var createXpath = $('//*[@id="all_transactions_for_account"]/table/tbody/tr['+i+"]/td["+j+"]");
                console.log('All Values : '+createXpath.getText());
            }
        }
       
        /*
            Coming back to the topic
        */
        const locater = $('//*[@id="all_transactions_for_account"]/table/tbody/tr[1]/td[2]');
        var obtainedDescription = locater.getText();

        /*
            Redirect to Find transaction tab
        */
       $('//*[@id="tabs"]/ul/li[2]/a').click();
       // Push value
       $('#aa_description').setValue(obtainedDescription);
       $('//*[@id="find_transactions_form"]/div[2]/button').click();

       const generatedTableIfSuccessfulSearch = $$('#filtered_transactions_for_account');
       
       var getTheNewJson = JSON.stringify(numberOfElements);
       var perseToNewArray = JSON.parse(getTheNewJson);
       var getNumberOfCapturedNewElements = perseToNewArray.length;
       if(getNumberOfCapturedNewElements > 0){
           console.log("Test Passed");
       }else {
        console.log("Test Failed");
       }

    })
})