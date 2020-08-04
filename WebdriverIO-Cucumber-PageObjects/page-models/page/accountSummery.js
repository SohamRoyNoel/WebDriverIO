class accountSummery{
    
    get tablePath(){
        return $('//*[@id="all_transactions_for_account"]/table/tbody');
    }
    accounts() {
        var textFromTableArray = [];
        var elementsArray = this.tablePath;

        elementsArray.$$('//tr/td[2]').map(function(element){
            // console.log('Text is here : ' + elementsArray.getText());
            textFromTableArray.push(elementsArray.getText());
        })

        return textFromTableArray;
    }
}

export default new accountSummery();