import LoginPage from '../page-objects/pages/LoginPage'
import NavBar from '../page-objects/components/NavBar'
import App from '../page-objects/App'

describe('e2e Test- Login/logout Flow', () => {

    it('Launch Browser', () => {
        App.openHomePage();
        
        browser.maximizeWindow();
        NavBar.doSignInClick();
    })

    it('Should not login with invalid credentials', () => {

        LoginPage.fillTheForm('usernames', 'passwords');
        LoginPage.submitTheForm();

        LoginPage.identifyError();
        LoginPage.pauseShort();

    })

    it('Should login with valid credentials', () => {
        browser.refresh();

        LoginPage.fillTheForm('username', 'password');
        LoginPage.submitTheForm();

        LoginPage.pauseMedium();
    })

    it('Should logout from app', () => {
        
        App.Logout();
        browser.pause(4000);
    })

})