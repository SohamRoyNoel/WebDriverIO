import {short, mid, long} from '../lib/timeouts.js';

describe('first Test', () => {

    it('load chrome', () => {
        browser.url('https://devexpress.github.io/testcafe/example/');        
    })


    // ViewPort of Browser
    it('Increase ViewPort', () => {
        // TimeOuts
        browser.pause(long)
        browser.setWindowSize(1650, 1050);
    })

    
    // By Id :: Check if there is an Attribute is present
    it('Take A Screenshot', () => {
        browser.saveScreenshot('screenshot1.png')
    })

});