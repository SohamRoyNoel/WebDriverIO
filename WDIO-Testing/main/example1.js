describe('first Test', () => {

    it('load chrome', () => {
        browser.url('https://devexpress.github.io/testcafe/example/');        
    })

    // By Id :: Check if there is an Attribute is present
   it('Check if there is a Test box', () => {
        const id = $('#submit-button');
        id.waitForExist();
        expect(id).toHaveAttrContaining('type', 'submit');
    })

    // Assert value from element
    it('Assert value from element', () => {
        const id = $('#populate');
        id.waitForExist();
        expect(id).toHaveValue('Populate');
    })

});