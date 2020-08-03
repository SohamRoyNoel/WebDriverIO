describe('e2e Test- e2e_SearchBox_KeyboardEmulator Flow', () => {

    it('Launch Browser', () => {
        browser.url('http://zero.webappsecurity.com/index.html');
        
        browser.maximizeWindow();
        /*
            Verifying if we landed on expected page
        */
       const onlineBankingBookMark = $('//*[@id="online_banking_features"]/div[1]/h4');
       expect(onlineBankingBookMark).toHaveText('Online Banking');
    })

    it('Handle SearchBox', () => {
        $('#searchTerm').setValue('Online Bankings');
        browser.pause(2000);
        browser.keys('Backspace');
        browser.pause(2000);
        browser.keys('Enter');
        browser.pause(2000);
    })

    it('Validate Redirection', () => {
        const validateRedirection = $('//h2[contains(text(),"Search Results:")]');
        expect(validateRedirection).toHaveText('Search Results:');
    })


})