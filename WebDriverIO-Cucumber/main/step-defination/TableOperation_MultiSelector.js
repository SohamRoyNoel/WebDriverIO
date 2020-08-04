import {Given, When, Then} from 'cucumber';

var textFromTableArray = [];
Given(/^I'm on the Home Page$/, () =>{
    browser.url('http://zero.webappsecurity.com/index.html');
    const signInButton = $('#signin_button');
    browser.maximizeWindow();
    signInButton.click();
    $('#user_login').setValue('username');
    $('#user_password').setValue('password');
    $('//*[@name="submit"]').click();
})

When(/^On the ZeroBank HomePage$/, () =>{
    expect(browser).toHaveUrl('http://zero.webappsecurity.com/bank/account-summary.html');
})

Then(/^Go to Account Activity Tab on the very same page$/, () =>{
    $('#account_activity_tab').click();
    browser.pause(3000);
})

Then(/^I extract the text from a table row$/, () =>{
    var elementsArray = $('//*[@id="all_transactions_for_account"]/table/tbody');

    elementsArray.$$('//tr/td[2]').map(function(element){
        // console.log('Text is here : ' + elementsArray.getText());
        textFromTableArray.push(elementsArray.getText());
    })
})

Then(/^I shall able to print column texts$/, () =>{
    console.log("text From Table Column : " + textFromTableArray);
})