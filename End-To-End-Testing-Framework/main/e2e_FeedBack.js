describe('e2e Test- Feedback flow', () => {
    it('Launch Browser', () => {
        browser.url('http://zero.webappsecurity.com/index.html');
        
        browser.maximizeWindow();
        /*
            Verifying if we landed on expected page
        */
       const onlineBankingBookMark = $('//*[@id="online_banking_features"]/div[1]/h4');
       expect(onlineBankingBookMark).toHaveText('Online Banking');
    })


    it('Redirect To FeedBack', () => {
        const feedbackButton = $('#feedback');
        /*
            Redirect to the page
       */
       feedbackButton.click();
       /*
            Verifying if we landed on expected page
        */ 
       const ifLandedOnFeedBackPage = $('#feedback-title');
       ifLandedOnFeedBackPage.waitForExist();
       expect(ifLandedOnFeedBackPage).toHaveText('Feedback');
    })

    it('Feeling the form data', () => {
        $('#name').setValue('Soham Roy');
        $('#email').setValue('sohamroy@gmail.com');
        $('#subject').setValue('I Dont like Javascript');
        $('#comment').setValue('But its always good to try something out of the box');
        $('//*[@name="submit"]').click();
        /*
            Verifying if we landed on expected page: ByUrl
        */
       expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html');
    })

    it('Checking if there is redirection when there is no Form data', () => {
        browser.back();
        browser.refresh();
        browser.pause(2000);
        $('#name').setValue('');
        $('#email').setValue('');
        $('#subject').setValue('');
        $('#comment').setValue('');
        $('//*[@name="submit"]').click();
        /*
            Verifying if we are still on the same page
        */ 
       const ifLandedOnFeedBackPage = $('#feedback-title');
       ifLandedOnFeedBackPage.waitForExist();
       expect(ifLandedOnFeedBackPage).toHaveText('Feedback');
    })
})