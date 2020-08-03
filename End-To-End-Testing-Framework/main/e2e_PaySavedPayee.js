describe('e2e Test- Login/logout Flow', () => {

    it('Launch Browser', () => {
        browser.url('http://zero.webappsecurity.com/index.html');
        const signInButton = $('#signin_button');
        browser.maximizeWindow();
        signInButton.click();
    })

    it('Should login with valid credentials', () => {
        browser.refresh();

        const loginId = $('#user_login');
        const password = $('#user_password');
        const signInButtonXpath = $('//*[@name="submit"]');
        

        loginId.waitForExist();
        password.waitForExist();

        loginId.setValue('username');
        password.setValue('password');

        signInButtonXpath.click();
    })

    it('Click On Pay Bills Tab and Check Redirection To Pay Saved Payee', () => {
        $('#pay_bills_tab').click();
        
        browser.pause(3000);
    })

    it('Click On Pay Bills Tab and Check Redirection', () => {
        $('#sp_payee').selectByVisibleText('Apple');
        $('#sp_account').selectByVisibleText('Credit Card');
        $('#sp_amount').setValue('10000');
        /*
            DatePicker
        */
       $('#sp_date').setValue('2020-08-20');
       $('#sp_description').setValue('There is no description');
       browser.pause(3000);
       $('#pay_saved_payees').click();
       const alertVerification = $('#alert_content');
       expect(alertVerification).toHaveText('The payment was successfully submitted.');
    })
})