class Searchbox {
    get searchResult(){
        return $('//h2[contains(text(),"Search Results:")]');
    }

    validateMySearchElement(searchElement){
        const validateRedirection = $('//h2[contains(text(),"Search Results:")]');
        expect(validateRedirection).toHaveText(searchElement);
    }
}

export default new Searchbox();