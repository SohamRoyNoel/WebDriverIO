import {Given, When, Then} from 'cucumber';
import App from '../../page-models/App'
import navBar from '../../page-models/components/navBarComponent'
import loginPage from '../../page-models/page/loginPage'

Given(/^I'm on the Login Page$/, () =>{
    App.openHomePage();
    browser.maximizeWindow();
    navBar.doSignInClick();
})

When(/^I login with a default user$/, () =>{

    loginPage.fillTheForm('username','password');
    loginPage.submitTheForm();

})

Then(/^I shall be on the Zero Bank User Page$/, () =>{
    expect(browser).toHaveUrl('http://zero.webappsecurity.com/bank/account-summary.html');
})