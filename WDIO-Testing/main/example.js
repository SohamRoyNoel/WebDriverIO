describe('first Test', () => {
    /*
        Multiple Test Case Runner Demo
        Title & URL Assertion Demo

    */
    it('load chrome', () => {
        browser.url('http://www.example.com/');
        browser.pause(3000); // implicit wait
        // Assert URL
        expect(browser).toHaveUrl('https://www.wikipedia.org/'); // Eroor
        // Assert Title
        expect(browser).toHaveTitle('Wikipedia');
        
    })

    /* 
        Assert Any element is visible
    */
   // By one element
   it('Check if there is a H1 tag', () => {
        const element = $('h1');
        element.waitForExist(); // Explicit Wait
        expect(element).toBeVisible(); 
    })

   // By Id :: ERROR belongs to https://www.wikipedia.org/
   it('Check if there is a Test box', () => {
       const id = $('#searchInput');
       id.waitForExist();
       expect(id).toBeVisible();
   })

   // By Link
    it('Check if there is a Link', () => {
        const link = $('a');
        expect(link).toHaveLink('https://www.iana.org/domains/example');
    })

    /*it('load A new Website', () => {
        browser.url('https://www.amazon.in/');
        browser.pause(3000);
    })*/

    // Assert Text from a Paragraph
    it('Check if there is text on a H1', () => {
        const elementText = $('h1').getText();
        const element = $('h1');
        element.waitForExist();
        expect(element).toHaveText('Example Domain');
    })

    // Get Element Test
    it('Check if there is a Link', () => {
        const link = $('a');
        expect(link).toHaveLink('https://www.iana.org/domains/example');
    })

    

})

