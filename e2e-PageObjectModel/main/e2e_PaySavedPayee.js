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