import {Given, When, Then} from 'cucumber';

Given(/^I'm on the Login Page$/, () =>{
    browser.url('http://zero.webappsecurity.com/index.html');
    const signInButton = $('#signin_button');
    browser.maximizeWindow();
    signInButton.click();
})

When(/^I login with a default user$/, () =>{

    $('#user_login').setValue('username');
    $('#user_password').setValue('password');
    $('//*[@name="submit"]').click();

})

Then(/^I shall be on the Zero Bank User Page$/, () =>{
    expect(browser).toHaveUrl('http://zero.webappsecurity.com/bank/account-summary.html');
})