describe('e2e Test- Login/logout Flow', () => {

    it('Launch Browser', () => {
        browser.url('http://zero.webappsecurity.com/index.html');
        const signInButton = $('#signin_button');
        browser.maximizeWindow();
        signInButton.click();
    })

    it('Should not login with invalid credentials', () => {
        const loginId = $('#user_login');
        const password = $('#user_password');
        const errorValueString = 'Login and/or password are wrong.';
        const errValueClass =$('//*[@id="login_form"]/div[1]');
        const signInButtonXpath = $('//*[@name="submit"]');
        

        loginId.waitForExist();
        password.waitForExist();

        loginId.setValue('usernames');
        password.setValue('passwords');
        browser.pause(2000);

        signInButtonXpath.click();
        browser.pause(2000);

        expect(errValueClass).toHaveText(errorValueString);
        browser.pause(2000);

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
        browser.pause(2000);

        signInButtonXpath.click();
        browser.pause(2000);
    })

    it('Should logout from app', () => {
        
        const getLogoutDropDown = $('//*[@class="icon-user"]');
        

        getLogoutDropDown.waitForExist();
        getLogoutDropDown.click();
        browser.pause(4000);
        const getLogoutButton = $('//*[@id="logout_link"]');
        getLogoutButton.waitForExist();
        getLogoutButton.click();
        browser.pause(4000);
    })

})