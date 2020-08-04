import {Given, When, Then} from 'cucumber';
import App from '../../page-models/App'
import navBar from '../../page-models/components/navBarComponent'
import loginPage from '../../page-models/page/loginPage'
import accountSummery from '../../page-models/page/accountSummery'

var textFromTableArray = [];
Given(/^I'm on the Home Page$/, () =>{
    App.openHomePage();
    browser.maximizeWindow();
    navBar.doSignInClick();
    loginPage.fillTheForm('username','password');
    loginPage.submitTheForm();    
})

When(/^On the ZeroBank HomePage$/, () =>{
    expect(browser).toHaveUrl('http://zero.webappsecurity.com/bank/account-summary.html');
})

Then(/^Go to Account Activity Tab on the very same page$/, () =>{
    $('#account_activity_tab').click();
    browser.pause(3000);
})

Then(/^I extract the text from a table row$/, () =>{
    textFromTableArray = accountSummery.accounts();
})

Then(/^I shall able to print column texts$/, () =>{
    console.log("text From Table Column : " + textFromTableArray);
})