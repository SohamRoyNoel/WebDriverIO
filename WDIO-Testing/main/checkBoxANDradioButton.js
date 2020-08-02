describe('Browser ', () => {

    it('load chrome', () => {
        browser.url('https://devexpress.github.io/testcafe/example/');   
        
    })

    it('click RadioButton', () => {
        const radioButton = $('#linux');
        radioButton.click();
        //browser.pause(2000);
    })

    it('click CheckBox', () => {
        const CheckBox = $('#traffic-markup-analysis');
        CheckBox.click();
        browser.pause(2000);
    })

    it('click DropDown', () => {
        const dropdown = $('#preferred-interface');
        dropdown.selectByIndex(1);
        browser.pause(2000);
        dropdown.selectByVisibleText('JavaScript API');
        browser.pause(2000);

    })

});