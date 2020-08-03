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

    it('Click On Pay Bills Tab and Check Redirection', () => {
        $('#pay_bills_tab').click();
        /*
            validate if we landed on payBills Page
        */
       expect(browser).toHaveUrl('http://zero.webappsecurity.com/bank/pay-bills.html');
       const purcheseForeignCurrency = $('(//*[@class="ui-state-default ui-corner-top"])[2]');
       purcheseForeignCurrency.waitForExist();
       purcheseForeignCurrency.click();
       

    })

    it('Click On Pay Bills Tab and Check Redirection', () => {
        /*
            Choose Currency From DropDown
       */
        
        const currencyDropdownId = $('#pc_currency');
        currencyDropdownId.waitForExist();
        currencyDropdownId.selectByVisibleText('Japan (yen)');

        // Set Currency
        $('#pc_amount').setValue('1000');

        // Choose Radio Button
        $('#pc_inDollars_true').click();

        // Click on calculate
        $('#pc_calculate_costs').click();
        /*
            Verify Calculation
        */
        const calculatorData = $('#pc_conversion_amount');
        expect(calculatorData).toHaveText('80385.85 yen (JPY) = 1000.00 U.S. dollar (USD)');

        // Click on Purchase
        $('#purchase_cash').click();

        // Verify if the purchase is completed
        const alertPurchaseVerification = $('#alert_content');
        alertPurchaseVerification.waitForExist();
        expect(alertPurchaseVerification).toHaveText('Foreign currency cash was successfully purchased.');
        
    })

})