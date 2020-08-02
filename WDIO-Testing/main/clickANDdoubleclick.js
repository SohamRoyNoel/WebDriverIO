describe('Browser ', () => {

    it('load chrome', () => {
        browser.url('https://devexpress.github.io/testcafe/example/');   
        const inputId = $('#developer-name');
        // Removes the existing value and adds given value 
        inputId.setValue('Hello Darkness');
        browser.pause(4000);
        inputId.addValue('_New value Added')
        browser.pause(4000);
        //inputId.clearValue();
        browser.pause(4000);

        // click 
        const clickable = $('#populate');
        clickable.click();
        browser.pause(4000);
        /*
            Accepting alert
            Methods:-
            acceptAlert()
            dismissAlert()
            getAlertText()
            sendAlertText(text)   
        */
        browser.acceptAlert()
        browser.pause(4000);

        /*
            Double Click
        */
        clickable.doubleClick();
    })

});