import Feedback from '../page-objects/pages/FeedBack'
import NavBar from '../page-objects/components/NavBar'
import App from '../page-objects/App'

describe('e2e Test- Feedback flow', () => {
    it('Launch Browser', () => {
        App.openHomePage();
        
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
        Feedback.doValidateName();
    })

    it('Feeling the form data', () => {
        
        Feedback.sendFeedback('Soham Roy', 'sohamroy@gmail.com', 'I Dont like Javascript', 'But its always good to try something out of the box');
        /*
            Verifying if we landed on expected page: ByUrl
        */
       expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html');
    })

    it('Checking if there is redirection when there is no Form data', () => {
        browser.back();
        browser.refresh();
        Feedback.sendFeedback('', '', '', '');
        /*
            Verifying if we are still on the same page
        */ 
       const ifLandedOnFeedBackPage = $('#feedback-title');
       ifLandedOnFeedBackPage.waitForExist();
       expect(ifLandedOnFeedBackPage).toHaveText('Feedback');
    })
})