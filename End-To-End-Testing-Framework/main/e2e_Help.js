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

    it('Open Help Section', () => {
        $('.icon-cog').click();
        $('#help_link').click();
       

        /*
            Partial Link Text
        */
       $('*=transfer').click();
       

       // Assertion 
       const validateNote = $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[2]/h3');
       expect(validateNote).toHaveText('How do I transfer funds?');
       browser.pause(5000);
    })
})