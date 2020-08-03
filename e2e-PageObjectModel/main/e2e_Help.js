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

    it('Open Help Section', () => {

        NavBar.callToCallAll_3_ActionsAbove();
       
       // Assertion 
       const validateNote = $('/html/body/div[1]/div[2]/div/div/div/div[2]/div[2]/h3');
       expect(validateNote).toHaveText('How do I transfer funds?');
       browser.pause(5000);
    })
})