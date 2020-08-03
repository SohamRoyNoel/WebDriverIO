import SearchBox from '../page-objects/pages/SearchBox_keyBoardEmulator'
import NavBar from '../page-objects/components/NavBar'
import App from '../page-objects/App'

describe('e2e Test- e2e_SearchBox_KeyboardEmulator Flow', () => {

    it('Launch Browser', () => {
        App.openHomePage();
        
        browser.maximizeWindow();
        /*
            Verifying if we landed on expected page
        */
       const onlineBankingBookMark = $('//*[@id="online_banking_features"]/div[1]/h4');
       expect(onlineBankingBookMark).toHaveText('Online Banking');
    })

    it('Handle SearchBox', () => {
        
        NavBar.RedirectToLink('Online Bankings');
        browser.pause(2000);
        browser.keys('Backspace');
        browser.pause(2000);
        browser.keys('Enter');
        browser.pause(2000);
    })

    it('Validate Redirection', () => {
        SearchBox.validateMySearchElement('Search Results:');
    })


})